import { Children } from 'react'
import './App.css'

const Layout = ({children}) =>{
  return (
    <div>
      <nav>Navbar</nav>
      {children}
      <footer>Footer</footer>
    </div>
  )
}
function App() {

  return (
    <div>
      <Layout>
        <h2>Heloo</h2>
      </Layout>
    </div>
  )
}

export default App
