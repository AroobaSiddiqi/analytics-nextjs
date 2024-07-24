"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authFirebase } from "./Firebase";
import { User, onAuthStateChanged } from "firebase/auth";

export default function isAuth(Component: any) {
  return function IsAuth(props: any) {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter();

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(authFirebase, (user) => {
        if (user) {
          // User is signed in.
          setUser(user);
        } else {
          // User is signed out.
          setUser(null);
          router.push("/login");
        }
      });

      return () => unsubscribe();
    }, []);

    if (!user) {
      return null;
    }

    return <Component {...props} />;
  };
}
