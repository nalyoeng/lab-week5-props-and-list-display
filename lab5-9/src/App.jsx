import { useState } from 'react'
import './App.css'

function App() {
  const [list, setList] = useState([{id: 1}, {id: 2}, {id: 3}]);

  const removeItem = (id) =>{
    setList(list.filter(item => item.id != id))
    // no need [...list, ] becuase this is delete
  };

  return (
    <>
      {list.map(item=>(
        // item.id :get object by key
        <li>{item.id}<button onClick={() => removeItem(item.id)}>Delete</button></li>
      ))}
    </>
  )
}

export default App
