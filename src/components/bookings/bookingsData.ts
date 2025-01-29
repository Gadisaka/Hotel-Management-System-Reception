// bookingsdata.ts
export interface BookingData {
  id: string;
  customerId: string;
  roomId: string;
  startDate: string;
  endDate: string;
  payment: number;
  status: "COMPLETED" | "PENDING" | "CANCELLED" | "CONFIRMED";
  createdAt: string;
  updatedAt: string;
  roomNumber: number;
  customerName: string;
}
