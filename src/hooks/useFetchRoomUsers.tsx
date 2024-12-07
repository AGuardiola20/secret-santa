import { useState, useEffect } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { Room, User } from "../types/types";
import { db } from "../firebaseConfig";

export const useFetchRoomUsers = (code: string) => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const roomsRef = collection(db, "rooms");
      const q = query(roomsRef, where("code", "==", code));

      try {
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const roomData = querySnapshot.docs[0].data() as Room;
          setUsers(roomData.users);
        } else {
          setUsers([]);
          console.log("No room found for the code:", code);
        }
      } catch (err) {
        setError("Error fetching users");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (code) {
      fetchUsers();
    }
  }, [code]);

  return { users, loading, error };
};
