import { useState } from "react";

const NavigationHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return   <header className="bg-white text-gray-900 shadow-md p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Rishav Kumar</h1>
       <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "❌" : "☰"}
        </button>
        <nav
          className={`${
            menuOpen ? "flex flex-row justify-around space-y-1" : "hidden"
          } absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent shadow-md md:shadow-none md:flex md:flex-row md:items-center md:space-y-0 md:space-x-6 p-4 md:p-0`}
        >
          <a href="#about" className="hover:text-blue-600 text-gray-900 d">About</a>
          <a href="#projects" className="hover:text-blue-600 text-gray-900 ">Projects</a>
          <a href="#skills" className="hover:text-blue-600 text-gray-900 ">Skills</a>
          <a href="#contact" className="hover:text-blue-600 text-gray-900 ">Contact</a>
        </nav>
      </div>
    </header>
}

export default NavigationHeader
