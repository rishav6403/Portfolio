// src/components/About.jsx

import { FaCode, FaRocket, FaBriefcase } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="py-10 px-4 max-w-5xl mx-auto ">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 ">About Me</h2>
      <p className="text-lg text-gray-700 leading-relaxed mb-6 text-center">
        👋 Hi! I'm <span className="font-semibold text-blue-600">Rishav Kumar</span>, a passionate Full Stack Developer with a focus on the <strong>MERN stack</strong>. I build fast, secure, and beautiful web applications that deliver real-world value.
      </p>

      <div className="grid md:grid-cols-3 gap-6 text-gray-700 mt-8">
        <div className="flex items-start space-x-4">
          <FaCode className="text-blue-500 text-2xl mt-1" />
          <div>
            <h3 className="font-bold text-lg">Full Stack Developer</h3>
            <p>Experienced with React, Node.js, Express & MongoDB. I build scalable and maintainable web apps.</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <FaBriefcase className="text-green-500 text-2xl mt-1" />
          <div>
            <h3 className="font-bold text-lg">Projects-Driven</h3>
            <p>Built real-time chat apps, e-commerce, job boards and more. I love solving real problems with code.</p>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <FaRocket className="text-purple-500 text-2xl mt-1" />
          <div>
            <h3 className="font-bold text-lg">Job-Ready & Eager</h3>
            <p>Actively seeking a full-time role to contribute to meaningful projects and grow as a developer.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
