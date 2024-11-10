import './App.css'
import About from './components/About/About'
import Header from './components/Header/Header'
import Competences from './components/Competences/Competences'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton'

function App() {
   return (
    <>
      <Header />
      <About />
      <Competences />
      <Portfolio />
      <Contact />
      <ScrollToTopButton />
    </>
  )
}

export default App
