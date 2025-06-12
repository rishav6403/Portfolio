
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import NavigationHeader from './components/NavigationHeader'
import Projects from './components/Projects'
import Skills from './components/Skills'

function App() {
  

  return (
    <div className=" text-gray-900 ">
      <NavigationHeader  />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      <Footer/>
      </main>
    </div>
  )
}

export default App
