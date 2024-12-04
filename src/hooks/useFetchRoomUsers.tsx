import { useState, useEffect } from "react";

import { doc, getDoc } from "firebase/firestore";
import { Room, User } from "../types/types";
import { db } from "../firebaseConfig";

const useFetchRoomUsers = (roomId: string) => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRoomUsers = async () => {
      setLoading(true);
      setError(null);

      try {
        const roomRef = doc(db, "rooms", roomId);
        const roomDoc = await getDoc(roomRef);

        if (roomDoc.exists()) {
          const roomData = roomDoc.data() as Room;
          setUsers(roomData.users);
        } else {
          setError("Room not found");
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Error fetching room data"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchRoomUsers();
  }, [roomId]);

  return { users, loading, error };
};

export default useFetchRoomUsers;
