// // src/components/HeroSection.jsx
// import { motion } from "framer-motion";
// import Hero3D from "./Hero3D";

// export default function HeroSection() {
//   return (
//     <section className="relative w-screen h-screen bg-black overflow-hidden flex items-center justify-center p-4">
//       {/* 3D background */}
//       <div className="absolute top-0 left-0 w-full h-full z-0 opacity-40">
//         <Hero3D />
//       </div>

//       {/* Content container */}
//       <motion.div
//         className="relative z-10 flex flex-col items-center justify-center p-6 rounded-2xl backdrop-blur-md bg-black/50 border border-white/10 max-w-md"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <motion.img
//           src="/image.jpg"
//           alt="My Photo"
//           className="rounded-full w-32 h-32 mb-4 border-2 border-cyan-400 shadow-xl"
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
//         />

//         <motion.h1
//           className="text-3xl md:text-4xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//         >
//           Hi, I'm Ankita
//         </motion.h1>

//         <motion.p
//           className="text-center text-white/80 mb-4 max-w-xs"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6 }}
//         >
//           Passionate full-stack developer & 3D enthusiast. Let's build something amazing together! ✨
//         </motion.p>

//         <motion.div
//           className="text-white/60 animate-bounce mt-2"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8 }}
//         >
//           ⬇️ Scroll down
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }
// src/components/HeroSection.jsx


//updated1

// import { motion } from "framer-motion";
// import Hero3D from "./Hero3D";
// import myImage from "./images/image.jpg"; // Import image from images folder

// export default function HeroSection() {
//   return (
//     <section className="relative w-full min-h-screen bg-black flex items-center justify-center p-4">
//       {/* 3D background */}
//       <div className="absolute top-0 left-0 w-full h-full z-0 opacity-40 overflow-hidden">
//         <Hero3D />
//       </div>

//       {/* Main content */}
//       <motion.div
//         className="relative z-10 flex flex-col items-center justify-center p-8 rounded-2xl backdrop-blur-md bg-black/50 border border-white/10 max-w-lg"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         {/* Profile image */}
//         <motion.img
//           src={myImage}
//           alt="My Photo"
//           className="rounded-full w-32 h-32 mb-4 border-2 border-cyan-400 shadow-xl"
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
//         />

//         {/* Heading */}
//         <motion.h1
//           className="text-3xl md:text-4xl font-bold mb-2 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.4 }}
//         >
//           Hi, I'm Ankita
//         </motion.h1>

//         {/* Subheading */}
//         <motion.p
//           className="text-center text-white/80 mb-4 max-w-xs"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.6 }}
//         >
//           Passionate full-stack developer &amp; 3D enthusiast. Let's build something amazing together! ✨
//         </motion.p>

//         {/* Scroll indicator */}
//         <motion.div
//           className="text-white/60 mt-2 animate-bounce"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.8 }}
//         >
//           ⬇️ Scroll down
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }


//updated 3
// src/components/HeroSection.jsx
import { motion } from "framer-motion";
import Hero3D from "./Hero3D";
import myImage from "./images/image.jpg";
import myImage1 from "./images/about.jpeg";
import myImage2 from "./images/breat.avif";
import myImage3 from "./images/bank.webp";
import myImage4 from "./images/emotion.webp";
import myImage5 from "./images/chat.webp";
import myImage6 from "./images/portfolio.png";
import { Mail, Phone, Linkedin, Twitter, Instagram } from "lucide-react";






import { Code, Palette, Brain, Gamepad} from "lucide-react";


export default function HeroSection() {
  const projects = [
    {
      title: "Breast Cancer Prediction",
      desc: "ML-powered web app that predicts cancer probability.",
      imageUrl: myImage2 ,
      githubUrl: "https://github.com/sriankitabanerjeegithub/herselfcare1",
    },

    {
      title: "Aclivity(Banking managment system)",
      desc: "Full-stack banking web app built with MERN.",
      imageUrl: myImage3,
      githubUrl: "https://github.com/sriankitabanerjeegithub/acclivity89",
      // no liveDemoUrl for this one
    },

 
    {
      title: "Face emotion recognization",
      desc: "Full-stack banking web app built with MERN.",
      imageUrl:myImage4 ,
      githubUrl:"//github.com/sriankitabanerjeegithub/Face-emotion-recognizer",
      // no liveDemoUrl for this one
    },

    {
      title: "chat application",
      desc: "Full-stack banking web app built with MERN.",
      imageUrl: myImage5,
      githubUrl: "https://github.com/sriankitabanerjeegithub?tab=repositories",
      // no liveDemoUrl for this one
    },

    {
      title: "3D-portfolio",
      desc: "Full-stack banking web app built with MERN.",
      imageUrl: myImage6,
      githubUrl: "https://github.com/sriankitabanerjeegithub/3Dportfolio",
      // no liveDemoUrl for this one
    },




    // ... add more projects as needed
  ];
    const passions = [
    {
      icon: <Code className="w-12 h-12 text-cyan-400" />,
      title: "Coding",
      desc: "Writing clean and efficient full-stack code with MERN and other modern tools.",
    },
    {
      icon: <Palette className="w-12 h-12 text-pink-400" />,
      title: "UI/UX Design",
      desc: "Crafting pixel-perfect designs with user-centric, modern UI/UX principles.",
    },
    {
      icon: <Brain className="w-12 h-12 text-purple-400" />,
      title: "Machine Learning",
      desc: "Exploring AI and training predictive models to solve real-world problems.",
    },
    {
      icon: <Gamepad className="w-8 h-8 text-cyan-400" />,
      title: "Chess",
      desc: "Playing chess sharpens my strategy and focus — a passion outside coding!",
    },
  ];
  return (
    <>
    <section  className="relative w-full min-h-screen bg-black flex items-center justify-center overflow-hidden p-4">
      {/* 3D background */}
      <div className="absolute top-0 left-0 w-full h-full z-0 opacity-40 overflow-hidden">
        <Hero3D />
      </div>

      {/* Animated profile card */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center bg-black/40 p-8 rounded-2xl border border-white/10 backdrop-blur-md shadow-xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.img
          src={myImage}
          alt="My Photo"
          className="rounded-full w-32 h-32 mb-4 border-2 border-cyan-400 shadow-xl"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 120 }}
        />

        <motion.h1
          className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Hi, I&apos;m Ankita
        </motion.h1>

        <motion.p
          className="text-white/80 mb-4 max-w-xs leading-relaxed"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Passionate full-stack developer & 3D enthusiast. Let&apos;s build something amazing together! ✨
        </motion.p>

        <motion.div
          className="text-white/60 mt-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          MORE ABOUT ME
        </motion.div>

        {/* Optional glowing border effect */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full rounded-2xl border border-cyan-500 opacity-50 blur-xl pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
      </motion.div>
    </section>
    {/* ==================== ABOUT SECTION ==================== */}
<section
  id="about"
  className="relative w-full min-h-screen bg-black flex items-center justify-center overflow-hidden p-8"
>
  {/* 3D background */}
  <div className="absolute top-0 left-0 w-full h-full z-0 opacity-40 overflow-hidden">
    <Hero3D />
  </div>

  {/* About content container */}
  <motion.div
    className="relative z-10 flex flex-col md:flex-row items-center bg-black/40 p-8 border border-white/10 rounded-2xl backdrop-blur-md max-w-5xl w-full gap-8"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    {/* Left-side image */}
    <motion.img
      src={myImage1} // put your image file path here
      alt="About me"
      className="w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-cyan-400 shadow-xl object-cover"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
    />

    {/* Right-side text */}
    <motion.div
      className="flex-1 text-center md:text-left"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4, duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
        About Me
      </h2>
      <h3 className="text-2xl text-white mb-2">B.Tech final-year student</h3>
      <p className="text-white/80 leading-relaxed mb-2">
        Hi there! I&apos;m Ankita, a B.Tech final-year student passionate about full-stack web
        development and machine learning with a deep love for creating stunning 3D websites and immersive web apps.
      </p>
      <p className="text-white/80 leading-relaxed mb-2">
        My skill set includes C, C++, Java, DSA, MongoDB, Express, React, Node.js, SQL, Oracle, Git,
        GitHub, NumPy, Pandas, and Scikit-learn — and I also work with Three.js and WebGL for 3D magic!
      </p>
      <p className="text-white/80 leading-relaxed">
        Reach out anytime and let’s build something incredible together. 💜
      </p>
    </motion.div>
  </motion.div>
</section>

  

 {/* ==================== PASSIONS SECTION ==================== */}
      <section id="passion" className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center p-8 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-40 z-0 overflow-hidden">
          <Hero3D />
        </div>

        <motion.h2
          className="relative z-10 text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          My Passions
        </motion.h2>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
          {passions.map((p, i) => (
            <motion.div
              key={i}
              className="bg-black/50 p-6 rounded-2xl border border-white/10 backdrop-blur-md text-center shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.7 }}
            >
              {p.icon}
              <h3 className="text-xl font-semibold mt-4 mb-2 text-white">{p.title}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      {/* ==================== SKILLS SECTION ==================== */}
<section
  id="skills"
  className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center overflow-hidden p-8"
>
  {/* 3D background */}
  <div className="absolute top-0 left-0 w-full h-full z-0 opacity-40 overflow-hidden">
    <Hero3D />
  </div>

  {/* Content */}
  <motion.div
    className="relative z-10 w-full max-w-5xl p-8 bg-black/40 border border-white/10 rounded-2xl backdrop-blur-md"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
      My Skills
    </h2>

    <div className="grid md:grid-cols-2 gap-8">
      {/* Tech Skills */}
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-white/90">Tech Skills</h3>
        {[
          { name: "C", level: 90 },
          { name: "Java", level: 85 },
          { name: "C++", level: 75 },
          { name: "JavaScript", level: 65 },
          { name: "React.js", level: 70 },
          // { name: "PL/SQL", level: 50 },
          // { name: "MongoDB", level: 50 },
        ].map((skill, i) => (
          <motion.div
            key={i}
            className="mb-4"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
          >
            <div className="flex justify-between mb-1 text-white/80">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-2 bg-cyan-400"
                initial={{ width: "0%" }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Professional Skills */}
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-white/90">Professional Skills</h3>
        {[
          { name: "Creativity", level: 90 },
          { name: "Communication", level: 85 },
          { name: "Problem Solving", level: 78 },
          { name: "Team Work", level: 85 },
        ].map((skill, i) => (
          <motion.div
            key={i}
            className="mb-4"
            initial={{ width: "0%" }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
          >
            <div className="flex justify-between mb-1 text-white/80">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-2 bg-purple-500"
                initial={{ width: "0%" }}
                whileInView={{ width: `${skill.level}%` }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
</section>
<section id="projects" className="relative w-full min-h-screen bg-black flex flex-col items-center justify-center p-8 overflow-hidden">
  {/* Same 3D background */}
  <div className="absolute top-0 left-0 w-full h-full opacity-40 z-0 overflow-hidden">
    <Hero3D /> {/* or any background animation you already have */}
  </div>

  {/* Section Title */}
  <motion.h2
    className="relative z-10 text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500"
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
  >
    My Projects
  </motion.h2>

  {/* Projects grid */}
  <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
    {projects.map((proj, i) => (
      <motion.div
        key={i}
        className="bg-black/50 p-6 rounded-2xl border border-white/10 backdrop-blur-md shadow-xl text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.2, duration: 0.7 }}
      >
        {/* image */}
        {proj.imageUrl && (
          <img
            src={proj.imageUrl}
            alt={proj.title}
            className="w-full h-40 object-cover mb-4 rounded-xl border border-white/10"
          />
        )}

        <h3 className="text-xl font-semibold mt-2 mb-2 text-white">{proj.title}</h3>
        <p className="text-white/80 text-sm mb-4 leading-relaxed">{proj.desc}</p>

        <div className="flex justify-center space-x-4 mt-2">
          {proj.liveDemoUrl && (
            <a href={proj.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
              Live Demo
            </a>
          )}
          {proj.githubUrl && (
            <a href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">
              GitHub
            </a>
          )}
        </div>
      </motion.div>
    ))}
  </div>
</section>

   
    <section
      id="contact"
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden p-8"
    >
      {/* 3D Animated Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-40 z-0">
        <Hero3D />
      </div>

      {/* Heading */}
      <motion.h2
        className="relative z-10 text-4xl md:text-5xl font-extrabold mb-8 text-blue-500 drop-shadow-[0_0_10px_#3b82f6]"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Let's Connect ⚡
      </motion.h2>

      {/* Contact Bubbles */}
      <div className="relative z-10 flex flex-wrap gap-6 justify-center">
        {[
          {
            Icon: Mail,
            color: "bg-blue-500",
            label: "banerjeeankita403@gmail.com",
            link: "mailto:banerjeeankita403@gmail.com",
          },
          {
            Icon: Phone,
            color: "bg-green-500",
            label: "9749928657",
            link: "tel:9749928657",
          },
          {
            Icon: Linkedin,
            color: "bg-blue-700",
            label: "LinkedIn",
            link: "https://www.linkedin.com/in/ankita-banerjee-a3512a253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
          },
          {
            Icon: Twitter,
            color: "bg-blue-400",
            label: "Twitter",
            link: "https://x.com/ANKITABANE91880?t=CpA2UbGgMVjmYQs88Lt78g&s=08",
          },
          
        ].map(({ Icon, color, label, link }) => (
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            key={label}
            className={`px-4 py-2 flex items-center space-x-3 ${color} rounded-full shadow-xl cursor-pointer hover:scale-110 transition-transform`}
            whileHover={{ scale: 1.1, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon className="text-white w-6 h-6" />
            <span className="text-white text-sm">{label}</span>
          </motion.a>
        ))}
      </div>
    </section>

    </>
  );
}
