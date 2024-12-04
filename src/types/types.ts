import { Timestamp } from "firebase/firestore";

export interface User {
  name: string;
  gifts: string[];
  hasBeenAssigned: boolean;
  assignedTo: string;
}

export interface Room {
  users: User[];
  code: string;
  createdAt: Timestamp;
}
