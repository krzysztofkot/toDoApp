import React, { useState } from "react";

import Button from "../../UI/Button";
import styled from "styled-components";

const FormControl = styled.div`
   {
    // padding: 16px;
    width: 100%;
    background-color: var(--color-primary);
    // border: 2px solid #7d8597;
    color: var(--input-font-color);
  }

  & div {
    position: relative;
    padding-bottom: 26px;
  }

  & label {
    display: block;
    // text-transform: uppercase;
    font-size: 20px;
    padding-bottom: 12px;
  }

  & input,
  & textarea {
    border: none;
    width: 100%;
    display: block;
    padding: 6px;
    font: inherit;
    background-color: var(--color-secondary);
    border-top: 1px solid var(--color-tertiary);
    border-bottom: 1px solid var(--color-tertiary);
    color: var(--input-font-color);
    outline: none;
    transition: all 0.2s;
  }

  & textarea {
    resize: none;
    height: 75px;
  }

  & textarea:focus,
  & input:focus {
    border-top: 1px solid #74788d;
    border-bottom: 1px solid #74788d;
  }

  & p {
    position: absolute;
    bottom: 4px;
    color: red;
    font-size: 12px;
    padding: 4px 0;
  }
`;

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
            placeholder="Enter short description (max 350 chars)..."
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
