import { BookingData } from "../bookings/bookingsData";

export interface customersData {
  id?: string;
  firstName: string;
  lastName: string;
  phone: string;
  sex: "MALE" | "FEMALE";
  status?: string;
  idCardImage?: string | null;
  createdAt?: string;
  updatedAt?: string;
  disabilities?: string;
  bookingHistory?: BookingData[] | [];
}
