import Navbar from './components/navbar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/pages"
import About from './components/pages/about'
import Projects from './components/pages/projects'
import Contact from './components/pages/contact'

//TODO:Perhaps put the Router into a header component and then input here
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
