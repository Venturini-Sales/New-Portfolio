import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Header } from "./components/Header/Header"
import { Home } from './components/Home/Home'
import { Container } from './components/Container/Container'
import { AboutMe } from './components/AboutMe/AboutMe'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'
import { Footer } from './components/Footer/Footer'

function App() {

  return (
  <> 
    <Header/> 
    <Home/>
    <Container>
      <AboutMe/>
      <Projects/>
      <Contact/>
      <Footer/>
    </Container>
    <ToastContainer/>
  </>
  
  )
}

export default App
