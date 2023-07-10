import { useEffect, useState } from "react";

const useAdmin = (id) => {
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8080//api/v1/admins/${id}}`)
        .then((res) => res.json())
        .then((data) => {
          setIsAdmin(data.isAdmin);
        });
    }
  }, [id]);
  return [isAdmin];
};
export default useAdmin;
