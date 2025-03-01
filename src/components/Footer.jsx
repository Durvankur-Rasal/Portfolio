import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t py-12 md:py-16 relative dark:bg-gray-900 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand Section */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold group transition-all">
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Durvankur
              </span>
              <span className="text-gray-700 dark:text-gray-300 group-hover:text-primary transition-all">
                {" "}
                Rasal
              </span>
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mt-1">
              Full Stack Developer
            </p>
          </div>

          {/* Footer Bottom Section */}
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <div className="text-sm text-gray-500 dark:text-gray-400 text-center sm:text-right">
              &copy; {currentYear} Durvankur Rasal. All rights reserved.
            </div>

            {/* Scroll to Top Button */}
            <Button
              variant="outline"
              size="icon"
              className="rounded-full shadow-md bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </Button>
          </div>
        </div>

        {/* Footer Decorative Line & Tech Stack */}
        <div className="mt-10 pt-6 border-t border-gray-300 dark:border-gray-700 text-center">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Built with{" "}
            {/* <span className="text-red-500 animate-pulse">❤</span> using{" "} */}
            <span className="font-semibold text-blue-500">React</span>,{" "}
            <span className="font-semibold text-green-500">Node.js</span>,{" "}
            <span className="font-semibold text-yellow-500">Express</span>,{" "}
            <span className="font-semibold text-indigo-500">MongoDB</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
