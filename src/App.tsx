import About from './components/About/About'
import Header from './components/Header/Header'
import Competences from './components/Competences/Competences'
import Portofolio from './components/Portofolio/Portofolio'
import Contact from './components/Contact/Contact'
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton'
import RippleEffect from './components/Ripples/RippleEffect'

function App() {
 

  return (
    <>
    <div>
      <RippleEffect />
    </div>
    <Header />
    <About />
    <Competences />
    <Portofolio />
    <Contact />
    <ScrollToTopButton />

    </>
  )
}

export default App
