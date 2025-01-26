// bookingsdata.ts
export interface BookingData {
  id: number;
  customerName: string;
  roomNumber: string;
  startDate: string;
  endDate: string;
  payment: string;
  status: string;
}

export const bookings: BookingData[] = [
  {
    id: 1,
    customerName: "John Doe",
    roomNumber: "R101",
    startDate: "2025-01-10",
    endDate: "2025-01-15",
    payment: "$500.00",
    status: "Confirmed",
  },
  {
    id: 2,
    customerName: "Jane Smith",
    roomNumber: "R102",
    startDate: "2025-01-11",
    endDate: "2025-01-14",
    payment: "$300.00",
    status: "Pending",
  },
  {
    id: 3,
    customerName: "Michael Johnson",
    roomNumber: "R103",
    startDate: "2025-01-09",
    endDate: "2025-01-12",
    payment: "$400.00",
    status: "Confirmed",
  },
  {
    id: 4,
    customerName: "Nick robert",
    roomNumber: "R103",
    startDate: "2025-01-09",
    endDate: "2025-01-12",
    payment: "$400.00",
    status: "Completed",
  },
  {
    id: 5,
    customerName: "brian smith",
    roomNumber: "R103",
    startDate: "2025-01-09",
    endDate: "2025-01-12",
    payment: "$400.00",
    status: "Cancelled",
  },

  // Add more data as needed

  {
    id: 6,
    customerName: "John Doe",
    roomNumber: "R101",
    startDate: "2025-01-10",
    endDate: "2025-01-15",
    payment: "$500.00",
    status: "Confirmed",
  },
  {
    id: 7,
    customerName: "Jane Smith",
    roomNumber: "R102",
    startDate: "2025-01-11",
    endDate: "2025-01-14",
    payment: "$300.00",
    status: "Pending",
  },
  {
    id: 8,
    customerName: "Michael Johnson",
    roomNumber: "R103",
    startDate: "2025-01-09",
    endDate: "2025-01-12",
    payment: "$400.00",
    status: "Confirmed",
  },
];
