import './App.css'
import { Header } from "./components/Header/Header"
import { Home } from './components/Home/Home'
import { Container } from './components/Container/Container'
import { AboutMe } from './components/AboutMe/AboutMe'

function App() {

  return (
  <> 
    <Header/> 
    <Home/>
    <Container>
      <AboutMe/>
    </Container>
  </>
  
  )
}

export default App
