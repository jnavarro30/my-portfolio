function ProjectCard({
  projectTitle,
  projectDescription,
  projectTechnologies,
  projectImage,
  projectId,
  projectLink,
}) {
  const badgeColors = [
    "bg-violet-100 text-violet-800 dark:bg-violet-500/20 dark:text-violet-200",
    "bg-indigo-100 text-indigo-800 dark:bg-indigo-500/20 dark:text-indigo-200",
    "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-200",
    "bg-cyan-100 text-cyan-800 dark:bg-cyan-500/20 dark:text-cyan-200",
  ];

  return (
    <div id={projectId} className="w-5/6 m-auto hover:shadow-2xl">
      <a
        href={projectLink}
        target="_blank"
        rel="noreferrer"
        className="block rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
      >
        <div className="w-full">
          <img
            className="mt-2 w-full h-40 object-cover"
            src={projectImage}
            alt={projectTitle}
            height={160}
          />
        </div>

        <div className="flex items-start justify-between gap-3 px-4 pt-4">
          <div className="font-montserrat font-semibold">{projectTitle}</div>

          <div className="flex flex-wrap justify-end gap-2">
            {projectTechnologies.map((tech, index) => (
              <span
                key={index}
                className={`text-xs px-2 py-1 rounded-full ${
                  badgeColors[index] ??
                  "bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white/80"
                }`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <p className="p-1 m-2 font-roboto text-sm text-black/70 dark:text-white/70 leading-relaxed">
          {projectDescription}
        </p>
      </a>
    </div>
  );
}

export default ProjectCard;
