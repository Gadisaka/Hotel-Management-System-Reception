export interface customersData {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  sex: "Male" | "Female";
  status: string;
  bookingHistory?: { date: string; roomNumber: number; status: string }[];
}

export const customers: customersData[] = [
  {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    phone: "123-456-7890",
    sex: "Male",
    status: "Active",
    bookingHistory: [
      { date: "2023-01-15", roomNumber: 101, status: "Confirmed" },
      { date: "2023-02-20", roomNumber: 102, status: "Pending" },
      { date: "2023-01-15", roomNumber: 101, status: "Confirmed" },
      { date: "2023-02-20", roomNumber: 102, status: "Pending" },
      { date: "2023-01-15", roomNumber: 101, status: "Confirmed" },
      { date: "2023-02-20", roomNumber: 102, status: "Pending" },
      { date: "2023-01-15", roomNumber: 101, status: "Confirmed" },
      { date: "2023-02-20", roomNumber: 102, status: "Pending" },
      { date: "2023-01-15", roomNumber: 101, status: "Confirmed" },
      { date: "2023-02-20", roomNumber: 102, status: "Pending" },
    ],
  },
  {
    id: "2",
    firstName: "Jane",
    lastName: "Smith",
    phone: "234-567-8901",
    sex: "Female",
    status: "Inactive",
  },
  {
    id: "3",
    firstName: "Michael",
    lastName: "Johnson",
    phone: "345-678-9012",
    sex: "Male",
    status: "Active",
    bookingHistory: [
      { date: "2023-03-10", roomNumber: 103, status: "Confirmed" },
    ],
  },
  {
    id: "4",
    firstName: "Emily",
    lastName: "Davis",
    phone: "456-789-0123",
    sex: "Female",
    status: "Active",
  },
  {
    id: "5",
    firstName: "David",
    lastName: "Brown",
    phone: "567-890-1234",
    sex: "Male",
    status: "Inactive",
  },
  {
    id: "6",
    firstName: "Sarah",
    lastName: "Wilson",
    phone: "678-901-2345",
    sex: "Female",
    status: "Active",
    bookingHistory: [
      { date: "2023-04-05", roomNumber: 104, status: "Confirmed" },
      { date: "2023-05-15", roomNumber: 105, status: "Pending" },
    ],
  },
  {
    id: "7",
    firstName: "Chris",
    lastName: "Taylor",
    phone: "789-012-3456",
    sex: "Male",
    status: "Inactive",
  },
  {
    id: "8",
    firstName: "Jessica",
    lastName: "Anderson",
    phone: "890-123-4567",
    sex: "Female",
    status: "Active",
  },
  {
    id: "9",
    firstName: "Daniel",
    lastName: "Thomas",
    phone: "901-234-5678",
    sex: "Male",
    status: "Active",
  },
  {
    id: "10",
    firstName: "Laura",
    lastName: "Jackson",
    phone: "012-345-6789",
    sex: "Female",
    status: "Inactive",
  },
];
