import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import {
  SearchBar,
  Works,
} from './components'

function App() {
  const handleSearch = (query) => {
    console.log('Search query:', query);  
  };
  return (
    <BrowserRouter>
      <div className="relative z-0">

      <h1>Home Page</h1>
      <div style={{width: '100%'}}>
      <SearchBar />

      </div>
      <div style={{ marginTop: "20px"}}>
      <Works />

      </div>
      
      </div>
    </BrowserRouter>
  )
}

export default App