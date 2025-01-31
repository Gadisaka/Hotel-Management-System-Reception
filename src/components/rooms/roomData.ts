export interface RoomData {
  id: string;
  number: number;
  floor: number;
  type: "SINGLE" | "DOUBLE" | "TRIPLE" | "VIP";
  price: number;
  status: "AVAILABLE" | "OCCUPIED" | "MAINTENANCE";
  createdAt: string;
  updatedAt: string;
}
