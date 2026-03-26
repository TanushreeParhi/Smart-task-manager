import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../../styles/TodoItem.css';

const TodoCompletedList = ({filter}) => {
  const dispatch = useDispatch();
  const todoInput = useSelector((state) => state.todo.list);

  const  filteredTodosComplete = todoInput.filter((todo) => {
    if(filter ==='completed'){
      return todo.completed === true;
    }
    return true;
  });
  return (
    <>
       {(todoInput.length === 0 || filteredTodosComplete.length === 0) && (
      <div className="no-task-lavel">
        <p id="no-task-text" style={{textDecoration:"none", cursor:"text"}}> No Completed Tasks Available!</p>
      </div>
     )}


      {filteredTodosComplete.map((t)=>(
        <div key={t.id} id='todo-item-inner-div' style={{backgroundColor:'green'}}>
          <span id='item-design'>{t.task}</span>
        </div>
      ))}
    </>
  )
}

export default TodoCompletedList