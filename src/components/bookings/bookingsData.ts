// bookingsdata.ts
export interface BookingData {
  id?: string;
  customer: string;
  room: string;
  startDate: string;
  endDate: string;
  payment?: number;
  status?: "COMPLETED" | "PENDING" | "CANCELLED" | "CONFIRMED";
  createdAt?: string;
  updatedAt?: string;
  roomNumber?: number;
  customerName?: string;
  customerStatus?: string;
}
