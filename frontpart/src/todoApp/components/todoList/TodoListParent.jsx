import React from 'react'
import '../../styles/TodoListParent.css'
import TodoAllList from './TodoAllList'
import TodoCompletedList from './TodoCompletedList'
import TodoPendingList from './TodoPendingList'
import { Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import TodoListParent2 from './TodoListParent2'

const TodoListParent = ({inputRef}) => {
  return (
    <div id='todo-list-parent'>
        
           <TodoListParent2/>

          <Routes>
             <Route index element={<TodoAllList filter="all" inputRef={inputRef}/>}/>
             <Route path='all' element={<TodoAllList filter="all" inputRef={inputRef}/>}/>
             <Route path='completed' element={<TodoCompletedList filter="completed"/>}/>
             <Route path='pending' element={<TodoPendingList filter="pending"/>}/>
          </Routes>
            
        
    </div>
  )
}

export default TodoListParent