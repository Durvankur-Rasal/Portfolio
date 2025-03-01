import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-6 sm:py-12 relative overflow-hidden bg-secondary/50 dark-gray-900/30 text-white text-center">
      <div className="section-container flex flex-col items-center text-center">
        <h2 className="text-3xl sm:text-4xl font-bold gradient-text">Contact Me</h2>
        <p className="text-muted-foreground max-w-2xl mt-2">
          Feel free to reach out via email or LinkedIn.
        </p>

        <div className="mt-6 space-y-4 flex flex-col items-center">
          <a
            href="mailto:durvankur.rasal48@gmail.com"
            className="flex items-center gap-2 bg-gray-800 px-6 py-3 rounded-lg hover:bg-gray-700 transition"
          >
            <Mail size={20} /> durvankur.rasal48@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/durvankur-rasal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-500 transition"
          >
            <Linkedin size={20} /> LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
}
