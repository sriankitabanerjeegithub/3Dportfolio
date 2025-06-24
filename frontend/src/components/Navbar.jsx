// // src/components/Navbar.jsx
// import { Link } from "react-scroll";

// export default function Navbar() {
//   return (
//     <nav className="fixed top-0 w-full bg-black shadow-md z-50 flex justify-between items-center p-4 ">
//       {/* Logo */}
//       <div className="text-xl font-bold text-blue-500">MyPortfolio</div>
//       {/* Links */}
//       <div className="space-x-6 hidden md:block">
//         {["Home","About","passion","Skills","Projects","Contact"].map((sec) => (
//           <Link
//             key={sec}
//             to={sec.toLowerCase()}
//             smooth={true}
//             offset={-70}
//             duration={500}
//             className="cursor-pointer hover:text-white"
//           >
//             {sec}
//           </Link>
//         ))}
//       </div>
//     </nav>
//   );
// }
import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react"; // lucide-react icons for burger

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // state to track menu open/close

  return (
    <nav className="fixed top-0 w-full bg-black shadow-md z-50 flex items-center justify-between p-4">
      {/* Logo */}
      <div className="text-xl font-bold text-blue-500">MyPortfolio</div>

      {/* Hamburger Icon (mobile) */}
      <button
        className="md:hidden text-pink-400"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Links */}
      <div
        className={`flex-col md:flex-row md:flex gap-6 md:static absolute top-full left-0 w-full bg-black md:w-auto transition-all duration-300 ease-in-out ${
          isOpen ? "flex" : "hidden"
        } md:flex`}
      >
        {["Home", "About", "passion", "Skills", "Projects", "Contact"].map((sec) => (
          <Link
            key={sec}
            to={sec.toLowerCase()}
            smooth={true}
            offset={-70}
            duration={500}
            className="cursor-pointer hover:text-pink-400 p-4 md:p-0 text-center"
            onClick={() => setIsOpen(false)} // close menu on click
          >
            {sec}
          </Link>
        ))}
      </div>
    </nav>
  );
}
