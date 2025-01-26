export interface RoomData {
  id: number;
  roomNumber: number;
  type: string;
  price: number;
  floor: number;
  status: string;
  startNumber?: number;
  count?: number;
}

export const rooms: RoomData[] = [
  {
    id: 1,
    roomNumber: 1,
    type: "Single",
    price: 100,
    floor: 1,
    status: "Maintenance",
  },
  {
    id: 2,
    roomNumber: 2,
    type: "Double",
    price: 100,
    floor: 1,
    status: "Occupied",
  },
  {
    id: 3,
    roomNumber: 3,
    type: "Triple",
    price: 100,
    floor: 1,
    status: "Available",
  },
  {
    id: 4,
    roomNumber: 4,
    type: "Single",
    price: 100,
    floor: 1,
    status: "Available",
  },
  {
    id: 5,
    roomNumber: 5,
    type: "VIP",
    price: 100,
    floor: 1,
    status: "Available",
  },
  {
    id: 6,
    roomNumber: 6,
    type: "double",
    price: 100,
    floor: 1,
    status: "Available",
  },
  {
    id: 7,
    roomNumber: 7,
    type: "double",
    price: 100,
    floor: 1,
    status: "Occupied",
  },
  {
    id: 8,
    roomNumber: 8,
    type: "Single",
    price: 100,
    floor: 1,
    status: "Reserved",
  },
  {
    id: 9,
    roomNumber: 9,
    type: "Single",
    price: 100,
    floor: 1,
    status: "Reserved",
  },
  {
    id: 10,
    roomNumber: 10,
    type: "Single",
    price: 100,
    floor: 1,
    status: "Available",
  },
  {
    id: 11,
    roomNumber: 11,
    type: "Double",
    price: 200,
    floor: 2,
    status: "Reserved",
  },
  {
    id: 12,
    roomNumber: 12,
    type: "Double",
    price: 200,
    floor: 2,
    status: "Available",
  },
  {
    id: 13,
    roomNumber: 13,
    type: "Double",
    price: 200,
    floor: 2,
    status: "Occupied",
  },
  {
    id: 14,
    roomNumber: 14,
    type: "Double",
    price: 200,
    floor: 2,
    status: "Cleaning",
  },
  {
    id: 15,
    roomNumber: 15,
    type: "Double",
    price: 200,
    floor: 2,
    status: "Maintenance",
  },
  {
    id: 16,
    roomNumber: 16,
    type: "Double",
    price: 200,
    floor: 2,
    status: "Unavailable",
  },
];
