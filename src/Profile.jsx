import { useEffect, useState } from "react";
import axios from "axios";

function Profile() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/students")
      .then((response) => {
        setStudents(response.data);
      });
  }, []);

  return (
    <div>
      <h1>Students</h1>

      {students.map((student) => (
        <div key={student.id}>
          <h2>{student.name}</h2>
          <p>{student.course}</p>
        </div>
      ))}
    </div>
  );
}

export default Profile;