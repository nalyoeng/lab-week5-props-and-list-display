import { useState } from 'react'
import './App.css'

const PostActions = ({onLike, onShare}) =>{
  return (
    <div>
      <button onClick={onLike}>Like</button>
      <button onClick={onShare}>Share</button>
    </div>
  )
}

function App() {
  const [message, setMessage] = useState("")
  const BtnLike =()=>{ setMessage("You likes this post")}
  const BtnShare =()=>{ setMessage("You shares this post")}
  return (
    <>
      <PostActions onLike={BtnLike} onShare={BtnShare}/>
      <h1>{message}</h1>
    </>
  )
}

export default App
