import { useEffect, useState } from "react";

const useTeacher = (id) => {
  const [isTeacher, setIsTeacher] = useState(false);

  useEffect(() => {
    if (id) {
      fetch(`https://amader-school-server-v1.vercel.app/api/v1/teachers/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setIsTeacher(data.isSeller);
        });
    }
  }, [id]);
  return [isTeacher];
};
export default useTeacher;
