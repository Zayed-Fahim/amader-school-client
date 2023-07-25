import { useEffect, useState } from "react";

const useStudent = (id) => {
  const [isStudent, setIsStudent] = useState(false);

  useEffect(() => {
    if (id) {
      fetch(`https://amader-school-server-v1.vercel.app/api/v1/students/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setIsStudent(data.isStudent);
        });
    }
  }, [id]);
  return [isStudent];
};
export default useStudent;
