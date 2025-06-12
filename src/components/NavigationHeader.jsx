const NavigationHeader = () => {
  
  return   <header className="bg-white text-gray-900 shadow-md p-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900 ">Rishav Kumar</h1>
       
        <nav className={`space-x-4 md:flex } md:block`}>
          <a href="#about" className="hover:text-blue-600 text-gray-900 d">About</a>
          <a href="#projects" className="hover:text-blue-600 text-gray-900 ">Projects</a>
          <a href="#skills" className="hover:text-blue-600 text-gray-900 ">Skills</a>
          <a href="#contact" className="hover:text-blue-600 text-gray-900 ">Contact</a>
        </nav>
      </div>
    </header>
}

export default NavigationHeader
