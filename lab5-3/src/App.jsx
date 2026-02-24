import './App.css'

const PostImage = ({url}) =>{
  if(url == null){
    return <div className='w-50 h-50 bg-gray-400'></div>
  }
  
  return(
    <div className='img-wrapper'>{ <img src={url}></img>}</div>
    
  )
}

function App() {

  return (
    <>
    <PostImage url={"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRJyt8LFlMjaW8mr7q7RXqcqcM_QZjEriA11TzGYAp1vsgJcbw3"}/>
    </>
  )
}

export default App
