import { useState, useEffect } from "react";
import { auth } from "../firebase.config";
import { onAuthStateChanged } from "firebase/auth";

export default function useAuth() {
  const [currentUser, setCurrentUser] = useState<object | null>(null);

  useEffect(() => {
    const localToken =
      localStorage.getItem("token") || sessionStorage.getItem("token");

    if (!localToken) {
      setCurrentUser(null);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return currentUser;
}
