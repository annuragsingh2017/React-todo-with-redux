import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, deleteTodos, updateTodo } from "../Action/actions";

const Todo = () => {
  const [task, setTask] = useState("");
  const [isEdit, setIsEdit] = useState(false);
  const [editedData, setEditedData] = useState();
  const dispatch = useDispatch();
  const todos = useSelector((data) => data.todos);

  const handleSubmit = () => {
    const allTodosData = [
      ...todos?.todo,
      { text: task, id: Date.now(), status: "initiate" },
    ];

    dispatch(addTodos(allTodosData));
  };
  const handleDelete = (id) => {
    dispatch(deleteTodos(id));
  };
  const handleEdit = (todo) => {
    setTask(todo?.text);
    setIsEdit(true);
    setEditedData(todo);
  };
  const handleUpdate = () => {
    dispatch(updateTodo(editedData?.id, task));
    setIsEdit(false);
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
        <button onClick={isEdit ? handleUpdate : handleSubmit}>
          {isEdit ? "update" : "Add"}
        </button>
        {todos?.todo?.map((data) => (
          <div key={data.id}>
            <li>{data.text}</li>
            <button onClick={() => handleDelete(data.id)}>delete</button>
            <button onClick={() => handleEdit(data)}>Edit</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Todo;
