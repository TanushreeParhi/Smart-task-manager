import React, { useState } from 'react'
import "../styles/SearchTodo.css"
import searchIcon from "../images/search-icon.png"
import blueSearchIcon from "../images/blue-search-icon.png"
import { useDispatch, useSelector } from 'react-redux'
import { searchTodo } from '../redux/TodoSlice'


const SearchTodo = () => {

    const [searchTerm, setSearchTerm] = useState("")
    const dispatch = useDispatch();

    const handleSearch = () => {
        dispatch(searchTodo(searchTerm))
        setSearchTerm("");
    }
  return (
    <div className="search-outer-box">
           <div className="search-inner-box">
           <img src={blueSearchIcon} alt="search-icon" id='search-img'/>
           <input type="search" value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} id="search-input"  placeholder='search Task here '/>
           <button className="search-btn" onClick={handleSearch}><img src={searchIcon} alt="search-icon" id='search-img'/> </button>
           </div>
    </div>
  )
}

export default SearchTodo