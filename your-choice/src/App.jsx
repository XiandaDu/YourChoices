import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import SearchBar from './components/seachBar';

function App() {
  const handleSearch = (query) => {
    console.log('Search query:', query);  
  };
  return (
    <BrowserRouter>
      <div className="relative z-0 w-full">

      <h1>Home Page</h1>
      <SearchBar onSearch={handleSearch} />
      </div>
    </BrowserRouter>
  )
}

export default App