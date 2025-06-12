// src/components/Contact.jsx
export default function Contact() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf"; // Make sure resume.pdf is in the public/ folder
    link.download = "Rishav_Kumar_Resume.pdf";
    link.click();
  };

  return (
    <section id="contact" className="bg-white py-10">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Let's Connect</h2>
        <p className="text-gray-600 mb-8">
          I'm open to frontend/backend/full-stack opportunities. Feel free to reach out!
        </p>

        {/* Download Resume Button */}
        <button
          onClick={handleDownload}
          className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-6 py-3 rounded-md font-medium transition"
        >
          Download Resume
        </button>

        {/* Contact Info */}
        <div className="mt-10 space-y-2 text-gray-700">
          <p>Email: <a href="mailto:rishav@example.com" className="text-blue-600">rishavkumar6403@gmail.com</a></p>
          <p>Phone: +91-8219493735</p>
          <p>Location: Himachal Pradesh, India</p>
        </div>

        {/* Optional Socials */}
        <div className="flex justify-center mt-6 space-x-6 text-2xl">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-black"
          >
            <i className="fab fa-github"></i> {/* or use react-icons */}
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-800"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
