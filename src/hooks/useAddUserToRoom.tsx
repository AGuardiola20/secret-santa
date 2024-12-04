import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebaseConfig";
import { User } from "../types/types";

const useAddUserToRoom = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const addUserToRoom = async (
    roomId: string,
    user: Omit<User, "hasBeenAssigned" | "assignedTo">
  ): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      const roomRef = doc(db, "rooms", roomId);
      const newUser: User = {
        ...user,
        hasBeenAssigned: false,
        assignedTo: "",
      };

      await updateDoc(roomRef, {
        users: arrayUnion(newUser),
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error desconocido");
    } finally {
      setLoading(false);
    }
  };

  return { addUserToRoom, loading, error };
};

export default useAddUserToRoom;
