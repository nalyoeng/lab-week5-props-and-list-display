import { useState } from 'react'
import './App.css'

function App() {
  const [posts, setPosts] = useState([{id: 1, text: "Hello", isEdited: false}]);

  const markAsEdited = (id) =>{
    setPosts(posts.map(post =>
      post.id === id? {...post, isEdited: true} : post
    ));
  }

  return (
    <>
     <button onClick={()=> markAsEdited(1)}>Mark edit</button>
     {posts.map(post=>(
      <div>{post.text} - {post.isEdited ? "Edited": "Not edited"}</div>
     ))}
    </>
  )
}

export default App
