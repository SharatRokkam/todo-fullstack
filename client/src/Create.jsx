import React, { useState } from "react";
import axios from "axios";

const Create = () => {
  const [task, setTask] = useState([]);

  const handleAddTask = () => {
    axios
      .post("http://localhost:3001/add", { task: task })
      .then((result) => {
        location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="create_form">
      <input
        type="text"
        onChange={(e) => setTask(e.target.value)}
        placeholder="Please Enter Task..."
      />
      <button type="button" onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  );
};

export default Create;
