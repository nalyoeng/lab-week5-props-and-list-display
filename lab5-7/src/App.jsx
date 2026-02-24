import { useState } from 'react'
import './App.css'
 
function App() {
  const [search, setSearch] = useState("");
  const items = ["React", "JavaScript", "Tailwind"];

  const filteredItems = items.filter(item => item.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <input onChange={(e)=> setSearch(e.target.value)} type="text" />
      {filteredItems.map((item, index)=>(
        <p key={index}>{item}</p>
      ))}
    </>
  )
}

export default App
