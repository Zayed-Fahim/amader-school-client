import { useEffect, useState } from "react";

const useStudent = (id) => {
  const [isStudent, setIsStudent] = useState(false);

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8080/api/v1/students/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setIsStudent(data.isStudent);
        });
    }
  }, [id]);
  return [isStudent];
};
export default useStudent;
