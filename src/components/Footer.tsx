import {Download, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/pdf/resume.pdf'; // For files in the public folder
    link.download = 'resume.pdf'; // The name for the downloaded file
    link.click();
  };
  return (
    <footer className="bg-purple-900 text-white py-8 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Vandana</h3>
            <p className="text-white">Full Stack Developer</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://www.linkedin.com/in/vandana-bhagat-842515149" target="_blank" rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:vandana.bhagat2591@gmail.com"
              className="hover:text-blue-400 transition-colors">
              <Mail size={20} />
            </a>
            <button type="button" onClick={handleDownload}
                className="flex space-x-6"
              >
                <Download size={24} />
              </button>
          </div>
        </div>
        <div className="text-center mt-8 text-white">
          <p>&copy; {new Date().getFullYear()}Vandana, All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;