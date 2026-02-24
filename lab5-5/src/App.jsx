import './App.css'

const DeleteBtn = ({id, onConfirm}) =>{
  return <button onClick={()=>{onConfirm(id)}}>Delete</button>
}
function App() {
  const handleDelete = (id) =>{
    alert(`Delete this id: ${id}`)
  }
  return (
    <>
      <DeleteBtn id={2} onConfirm={handleDelete}/>
    </>
  )
}

export default App
