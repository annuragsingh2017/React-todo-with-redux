import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, deleteTodos } from "../Action/actions";

const Todo = () => {
  const [task, setTask] = useState("");
  const [allTodos, setAllTodos] = useState([]);
  const dispatch = useDispatch();
  const todos = useSelector((data) => data.todos);

  const handleSubmit = () => {
    const allTodosData = [
      ...allTodos,
      { text: task, id: Date.now(), status: "initiate" },
    ];
    setAllTodos([
      ...allTodos,
      { text: task, id: Date.now(), status: "initiate" },
    ]);
    dispatch(addTodos(allTodosData));
  };
  const handleDelete = (id) => {
    dispatch(deleteTodos(id));
  };
  return (
    <>
      <h1>TODO</h1>
      <div>
        <input
          placeholder="Add Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleSubmit}>Add</button>
        {todos?.todo?.map((data) => (
          <div key={data.id}>
            <li>{data.text}</li>
            <button onClick={() => handleDelete(data.id)}>delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Todo;
