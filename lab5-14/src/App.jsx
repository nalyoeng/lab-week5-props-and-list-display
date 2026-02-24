import Artists from './components/Artists.jsx';
import {artists} from './data.js';
import './App.css'

function App() {

  return (
    <>
     <h1>Popular Artists</h1>
     <div class="box">
      {artists.map((artist) => (
        <Artists key = {artist.id} person = {artist}/>
      ))}
     </div>
    </>
  )
}

export default App
