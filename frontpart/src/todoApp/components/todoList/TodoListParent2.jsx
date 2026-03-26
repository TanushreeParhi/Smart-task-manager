import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/TodoListParent2.css';
import allCategoryIcon from '../../images/all-category-icon.png';
import { useDispatch, useSelector } from 'react-redux';
import { searchTodo } from '../../redux/TodoSlice';


const TodoListParent2 = () => {
  const count = useSelector(state=>state.todo.list.length)
  
  const dispatch = useDispatch();
  return (
    <div id='parent2-todo-outer-div'>
        <Link to="/tasks/all"  className='link' onClick={() => dispatch(searchTodo(''))} ><img src={allCategoryIcon} alt="All Category Icon" id='all-category'/>All({count})</Link>
        <Link to="/tasks/completed" className='link' >Completed</Link>
        <Link to="/tasks/pending" className='link' >Pending</Link>
    </div>
  )
}

export default TodoListParent2