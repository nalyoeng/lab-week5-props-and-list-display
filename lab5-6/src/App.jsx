import { useState } from 'react'
import './App.css'

function App() {
  const [posts, setPosts] = useState([]);
  const [newContent, setNewContent] = useState("");

  const handleAdd = () =>{
    const newPost = {
      id : Date.now(),
      text : newContent
    }
    setPosts(prev => [...prev, newPost]);
    setNewContent("")
  }

  return (
    <>
      <input value={newContent} onChange={(e)=> setNewContent(e.target.value)} placeholder='Write something...' type="text" />
      <button onClick={handleAdd}>Add Post</button>
      {posts.map(post =>(
        <p key={post.id}>{post.text}</p>
      ))}
    </>
  )
}

export default App
