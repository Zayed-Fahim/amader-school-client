import { useEffect, useState } from "react";

const useAdmin = (id) => {
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    if (id) {
      fetch(`https://amader-school-server-v1.vercel.app//api/v1/admins/${id}}`)
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin(data.isAdmin);
        });
    }
  }, [id]);
  return [isAdmin];
};
export default useAdmin;
