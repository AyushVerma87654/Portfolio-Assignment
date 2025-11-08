import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const contacts = [
  { icon: <Github />, link: "https://github.com/AyushVerma87654" },
  { icon: <Linkedin />, link: "https://linkedin.com/in/ayush-verma-developer" },
  { icon: <Mail />, link: "mailto:ayushverma030299@gmail.com" },
  { icon: <Phone />, link: "tel:+917017560413" },
  {
    icon: <MapPin />,
    link: "https://www.google.com/maps/place/Dehradun,+India",
  },
];

export default function Contact() {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-r from-teal-700 via-blue-800 to-indigo-900 
                 dark:from-gray-900 dark:via-gray-800 dark:to-black
                 text-white py-12 px-6 flex flex-col items-center gap-6 transition-colors duration-500"
    >
      {/* Heading */}
      <h2 className="text-3xl font-bold mb-4 text-center">Get in Touch</h2>

      {/* Icons with bounce + underline effect */}
      <div className="flex flex-wrap justify-center gap-6">
        {contacts.map((contact, idx) => (
          <a
            key={idx}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="relative text-2xl group transform transition-transform duration-300 hover:-translate-y-1 hover:scale-110"
          >
            <span
              className="text-gray-200 dark:text-gray-300 
                         group-hover:text-teal-300 dark:group-hover:text-purple-400
                         transition-colors"
            >
              {contact.icon}
            </span>
            {/* Underline effect */}
            <span
              className="absolute left-1/2 -bottom-1 w-0 h-[2px] 
                         bg-teal-300 dark:bg-purple-400
                         group-hover:w-full group-hover:left-0
                         transition-all duration-300"
            />
          </a>
        ))}
      </div>

      {/* Footer text */}
      <p className="mt-6 text-gray-300 dark:text-gray-400 text-sm text-center">
        &copy; {new Date().getFullYear()} Ayush Verma — All Rights Reserved
      </p>
    </footer>
  );
}
