import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  CircularProgress,
} from "@mui/material";
import {
  createCustomerThunk,
  fetchCustomersThunk,
} from "@/Features/Customers/customerSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store";

interface CreateCustomerDialogProps {
  open: boolean;
  onClose: () => void;
  onCustomerCreated: (fullName: string, id: string) => void;
}

const CreateCustomerDialog: React.FC<CreateCustomerDialogProps> = ({
  open,
  onClose,
  onCustomerCreated,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [sex, setSex] = useState<"MALE" | "FEMALE">("MALE");
  const dispatch = useDispatch<AppDispatch>();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (firstName && lastName && phone && sex) {
      setIsLoading(true);
      try {
        const resultAction = await dispatch(
          createCustomerThunk({
            firstName,
            lastName,
            sex,
            phone,
          })
        );

        dispatch(fetchCustomersThunk());
        if (createCustomerThunk.fulfilled.match(resultAction)) {
          const { id } = resultAction.payload.customer;
          const fullName = `${firstName} ${lastName}`;

          onCustomerCreated(fullName, id);
          onClose();
        } else {
          alert("Failed to create customer.");
        }
      } catch (error) {
        console.error("Failed to create customer:", error);
        alert("An error occurred while creating the customer.");
      } finally {
        setIsLoading(false);
      }
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle>Create Customer</DialogTitle>
      <DialogContent>
        <Box display="flex" flexDirection="column" gap={2}>
          {/* Image Upload */}

          {/* First Name */}
          <TextField
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            fullWidth
          />

          {/* Last Name */}
          <TextField
            label="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            fullWidth
          />

          {/* Sex */}
          <Box>
            <Typography>Sex</Typography>
            <RadioGroup
              row
              value={sex}
              onChange={(e) => setSex(e.target.value as "MALE" | "FEMALE")}
            >
              <FormControlLabel value="MALE" control={<Radio />} label="Male" />
              <FormControlLabel
                value="FEMALE"
                control={<Radio />}
                label="Female"
              />
            </RadioGroup>
          </Box>
          {/* Phone */}
          <TextField
            label="Phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            fullWidth
          />

          {/* Actions */}
          <Box display="flex" justifyContent="flex-end" gap={2}>
            <Button onClick={onClose} color="secondary" disabled={isLoading}>
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? (
                <CircularProgress size={24} style={{ marginLeft: 8 }} />
              ) : (
                "Create"
              )}
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default CreateCustomerDialog;
