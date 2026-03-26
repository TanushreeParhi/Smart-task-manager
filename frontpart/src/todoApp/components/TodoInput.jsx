import React, { useState } from "react";
import "../styles/TodoInput.css";
import { useDispatch} from "react-redux";
import { store } from "../redux/Store";
import { addTodo} from "../redux/TodoSlice";

const TodoInput = ({inputRef, onCreateTask}) => {
  const [todoData, setTodoData]= useState("")
  // for empty input 
  const [empty, setEmpty] = useState(false)
 

  const dispatch = useDispatch()
  const handleData = async () => {
      if(todoData.trim() === ''){
        setEmpty(true)
        return;
      }
      setEmpty(false);

      // add local redux item as existing behavior
      dispatch(
        addTodo({
          id: Date.now(),
          task: todoData,
          completed: false,
        }))

      // send to backend when TaskApp passes onCreateTask
      if (onCreateTask) {
        await onCreateTask(todoData);
        // window.location.reload(); // quick fix
      }

      setTodoData("")
  }

  return (
    <>
    <div className="input-lavel">
      <input
        ref={inputRef}
        type="text"
        value={todoData}
        name="inputTask"
        id="input-task"
        placeholder="Add a new Task"
        onChange={(e)=>setTodoData(e.target.value)}
      />
      <button id="add-task-btn" onClick={handleData}>Add</button>
    </div>
     <div className="error-lavel"> {empty === true? <h4 id="error-text">Oops! Something went wrong, Require Input So Please Enter Todo task </h4>:null}</div>
     
    </>
  );
};
export const input = TodoInput;
export const {todoData, setTodoData} = TodoInput;
export default TodoInput;
