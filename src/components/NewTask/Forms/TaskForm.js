import React, { useState } from "react";
import FormControl from "./FormControl";

import Button from "../../../UI/Button";

const TaskForm = props => {
  const [title, setTitle] = useState("");
  const [isValidTitle, setIsValidTitle] = useState(true);
  const [isValidDesc, setIsValidDesc] = useState(true);
  const [desc, setDesc] = useState("");

  const error = <p> Field cannot be empty!</p>;

  const titleInputHandler = e => {
    if (e.target.value.trim().length > 0) {
      setIsValidTitle(true);
    }
    setTitle(e.target.value);
  };

  const descInputHandler = e => {
    if (e.target.value.trim().length > 0) {
      setIsValidDesc(true);
    }
    setDesc(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    if (title.trim().length === 0) {
      setIsValidTitle(false);
    }
    if (desc.trim().length === 0) {
      setIsValidDesc(false);
    }

    if (title.trim().length === 0 || desc.trim().length === 0) {
      return;
    }
    const newTask = {
      title,
      desc,
    };
    props.onAddTask(newTask);
    setTitle("");
    setDesc("");
  };

  return (
    <form onSubmit={submitHandler}>
      <FormControl>
        <div>
          <label>Title</label>
          <input
            type="text"
            placeholder="Add title here (max 100 chars)"
            value={title}
            onChange={titleInputHandler}
            maxLength={120}
          />
          {!isValidTitle ? error : ""}
        </div>
        <div>
          <label>Description</label>
          <textarea
            placeholder="Enter short description (max 350 chars)"
            value={desc}
            onChange={descInputHandler}
            maxLength={350}
          />
          {!isValidDesc ? error : ""}
        </div>
        <Button type="submit">add task</Button>
      </FormControl>
    </form>
  );
};

export default TaskForm;
