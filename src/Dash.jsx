
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dash() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const submit = async () => {
    await axios.post("http://localhost:3002/students", {
      name,
      course
    });

    navigate("/profile");
  };

  return (
    <div>
      <h1>Student Details</h1>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />

      <button onClick={submit}>Submit</button>
    </div>
  );
}

export default Dash;