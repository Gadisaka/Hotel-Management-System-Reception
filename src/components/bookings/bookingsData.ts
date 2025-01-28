// bookingsdata.ts
export interface BookingData {
  id: number;
  customerName: string;
  roomNumber: number;
  startDate: string;
  endDate: string;
  payment: number;
  status: string;
}

export const bookings: BookingData[] = [
  {
    id: 1,
    customerName: "John Doe",
    roomNumber: 101,
    startDate: "2025-01-28",
    endDate: "2021-01-15",
    payment: 500.0,
    status: "Confirmed",
  },
  {
    id: 2,
    customerName: "Jane Smith",
    roomNumber: 102,
    startDate: "2025-01-28",
    endDate: "2025-01-14",
    payment: 300.0,
    status: "Pending",
  },
  {
    id: 3,
    customerName: "Michael Johnson",
    roomNumber: 103,
    startDate: "2025-01-28",
    endDate: "2025-01-12",
    payment: 400.0,
    status: "Confirmed",
  },
  {
    id: 4,
    customerName: "Nick Robert",
    roomNumber: 103,
    startDate: "2025-01-09",
    endDate: "2025-01-12",
    payment: 400.0,
    status: "Completed",
  },
  {
    id: 5,
    customerName: "Brian Smith",
    roomNumber: 103,
    startDate: "2025-01-09",
    endDate: "2025-01-12",
    payment: 400.0,
    status: "Cancelled",
  },
  {
    id: 6,
    customerName: "John Doe",
    roomNumber: 101,
    startDate: "2025-01-10",
    endDate: "2025-01-15",
    payment: 500.0,
    status: "Confirmed",
  },
  {
    id: 7,
    customerName: "Jane Smith",
    roomNumber: 102,
    startDate: "2025-01-11",
    endDate: "2025-01-14",
    payment: 300.0,
    status: "Pending",
  },
  {
    id: 8,
    customerName: "Michael Johnson",
    roomNumber: 103,
    startDate: "2025-01-09",
    endDate: "2025-01-12",
    payment: 400.0,
    status: "Confirmed",
  },
];
