import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch from your backend
    fetch("http://localhost:5000/api/projects")
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-white p-4 rounded-lg shadow hover:shadow-xl transition"
        >
          <h2 className="text-xl font-bold">{project.title}</h2>
          <p className="mt-2 text-gray-600">{project.description}</p>
          {project.imageurl && (
            <img src={project.imageurl} alt={project.title} className="mt-2 w-full h-40 object-cover rounded" />
          )}
          {project.liveurl && (
            <a href={project.liveurl} target="_blank" rel="noopener noreferrer" className="mt-4 text-blue-500 underline block">
              Live Project
            </a>
          )}
        </div>
      ))}
    </section>
  );
}
