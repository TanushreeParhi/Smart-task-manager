import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import TodoInput, { todoData } from "./TodoInput";
import { removeTodo, editTodo, toggleTodo } from "../redux/TodoSlice";
import "../styles/TodoItem.css";
import deleteIcon from "../images/delete-icon.png";
import editIcon from "../images/edit-icon.svg"
import { Link, useLocation } from "react-router-dom";



const TodoItem = ({inputRef}) => {
  const location = useLocation();
  const todoInput = useSelector(
    state =>{
      // state.todo.filtered &&
   let data = state.todo.filtered.length
    ? state.todo.filtered
    : state.todo.list

    if(location.pathname.includes("completed")){
      return data.filter(t=>t.completed);
    }
    if(location.pathname.includes("pending")){
      return data.filter(t=>!t.completed);
    }
    return data;
});
  const dispatch = useDispatch();
  // for hide input item when pending or completed list is open
  
  const showItem = location.pathname.includes("/tasks") || location.pathname === "/all";

  // for edit text use twop state variables one for id and one for text
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  //  take 2 function for handle edit btn and save btn
  const handleEdit = (t) => {
    // t means inside of map takes t as a pamameter for data fetch
    setEditId(t.id);
    setEditText(t.task);
    setDisable(!disable);
  };
  const handleSave = (id) => {
    dispatch(editTodo({ id, newText: editText }));
    setEditId(null);
  };
  const handleCancel = () => {
    setEditId(null);
  };

  return (
    <>
     
    {showItem && (
    <div className="todo-item">
        {todoInput.length === 0 && (
      <div className="no-task-lavel">
        <p id="no-task-text" onClick={()=>inputRef.current?.focus()}> No Tasks Available. Please Add Some Tasks!👆</p>
      </div>
     )}


      {todoInput.map((t) => (
        <>
          {editId === t.id ? (
            <div key={t.id} id="todo-edit-item-inner-div">
              <span>
                <input
                  id="edit-input-design"
                  value={editText}
                  name={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
              </span>
              <span>
                <button onClick={handleCancel} id="cancel-task-btn">
                  cancel
                </button>
                <button onClick={() => handleSave(t.id)} id="save-task-btn">
                  Save
                </button>
              </span>
            </div>
          ) : (
            <div key={t.id} id="todo-item-inner-div" >
              <span id="item-design">
                <input type="checkbox" checked={t.completed} onChange={()=>dispatch(toggleTodo(t.id))}></input> {t.task}
              </span>
              <span>
                <button onClick={() => handleEdit(t)} id="edit-btn"> <img src={editIcon} id="edit-img"/></button>
                <button
                  id="delete-btn"
                  onClick={() => dispatch(removeTodo(t.id))}
                >
                  <img src={deleteIcon} alt="Delete" id="delete-img" />
                </button>
              </span>
            </div>
          )}
        </>
      ))}
    </div>
   )}</>
  );
};

export default TodoItem;
