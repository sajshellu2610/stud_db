
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dash() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  const submit = async () => {
    try {
      await axios.post("http://localhost:3002/students", {
        name,
        course,
      });

      navigate("/profile");
    } catch (error) {
      console.error("Error saving student:", error);
      alert("Failed to save student. Check JSON Server.");
    }
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
