
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
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
      </main>
    </div>
  )
}

export default App
