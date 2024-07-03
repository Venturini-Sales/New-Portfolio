import './App.css'
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
  </>
  
  )
}

export default App
