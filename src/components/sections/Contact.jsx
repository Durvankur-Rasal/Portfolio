import { Github, Linkedin, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-6 sm:py-8 relative overflow-hidden bg-secondary/50 dark:bg-gray-900/30 text-white text-center transition-colors duration-500">
      <div className="section-container flex flex-col items-center text-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text dark:from-purple-400 dark:to-blue-400">
          Let's Connect
        </h2>

        {/* Contact Icons */}
        <div className="mt-4 flex items-center space-x-6 sm:space-x-8">
          {/* GitHub */}
          <a
            href="https://github.com/Durvankur-Rasal"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
          >
            <Github size={28} className="text-gray-800 dark:text-white" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/durvankur-rasal"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-blue-600 rounded-full shadow-md hover:bg-blue-500 transition-all"
          >
            <Linkedin size={28} className="text-white" />
          </a>

          {/* Gmail */}
          <a
            href="mailto:durvankur.rasal48@gmail.com"
            className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full shadow-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
          >
            <Mail size={28} className="text-gray-800 dark:text-white" />
          </a>
        </div>
      </div>
    </section>
  );
}
