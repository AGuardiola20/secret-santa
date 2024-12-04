import { useState } from "react";
import {
  collection,
  addDoc,
  serverTimestamp,
  FieldValue,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import { Room } from "../types/types";

const useCreateRoom = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createRoom = async (): Promise<string | null> => {
    setLoading(true);
    setError(null);

    try {
      const roomCode = Math.random().toString(36).substring(2, 8).toUpperCase();

      const newRoom: Omit<Room, "createdAt"> & { createdAt: FieldValue } = {
        code: roomCode,
        users: [],
        createdAt: serverTimestamp(),
      };

      await addDoc(collection(db, "rooms"), newRoom);

      setLoading(false);
      return roomCode;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Error desconocido";
      setError(errorMessage);
      setLoading(false);
      return null;
    }
  };

  return { createRoom, loading, error };
};

export default useCreateRoom;
