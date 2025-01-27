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
  Input,
} from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";

interface CreateCustomerDialogProps {
  open: boolean;
  onClose: () => void;
  onCustomerCreated: (fullName: string) => void;
}

const CreateCustomerDialog: React.FC<CreateCustomerDialogProps> = ({
  open,
  onClose,
  onCustomerCreated,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [sex, setSex] = useState("male");
  const [image, setImage] = React.useState<string>("");

  const handleSubmit = () => {
    if (firstName && lastName && phone) {
      const fullName = `${firstName} ${lastName}`;
      onCustomerCreated(fullName);
      onClose();
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
          <Input
            inputProps={{ accept: "image/*" }}
            style={{ display: "none" }}
            id="raised-button-file"
            type="file"
            onChange={(e) => {
              const target = e.target as HTMLInputElement;
              if (target.files && target.files[0]) {
                const reader = new FileReader();
                reader.onload = (event) => {
                  if (event.target && event.target.result) {
                    setImage(event.target.result as string);
                  }
                };
                reader.readAsDataURL(target.files[0]);
              }
            }}
          />
          <label htmlFor="raised-button-file">
            <Button
              component="span"
              variant="outlined"
              color="primary"
              startIcon={<UploadIcon />}
              sx={{ marginBottom: 2 }}
            >
              Upload Image
            </Button>
          </label>
          {image && (
            <Box pb={2}>
              <img
                src={image}
                alt="Uploaded"
                style={{ width: "100px", height: "100px", marginBottom: 2 }}
              />
            </Box>
          )}
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
              onChange={(e) => setSex(e.target.value)}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
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
            <Button onClick={onClose} color="secondary">
              Cancel
            </Button>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Create
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default CreateCustomerDialog;
