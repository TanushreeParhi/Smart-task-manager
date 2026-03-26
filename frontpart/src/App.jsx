import React from 'react'

import HeroBox from './heroForm_box/HeroBox'
import axios from 'axios'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './heroForm_box/navbar/Signup'
import Login from './heroForm_box/navbar/Login'
import TaskApp from './todoApp/TaskApp'
import Dashboard from './Dashboard/Dashboard'
import About from './heroForm_box/navbar/About'



const App = () => {
  async function getData() {
   const data =  await axios.get("http://localhost:4000/")
   console.log(data.data);
   
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <>
   
     <Routes>
      <Route path="/" element={<HeroBox/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path = "/dashboard" element = {<Dashboard/>}/>
      <Route path='/tasks/*' element= {<TaskApp />} />
      </Routes>
    </>
  )
}

export default App