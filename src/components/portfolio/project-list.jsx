function ProjectList() {
  const projectTitles = [
    "Kingdom of Dwarves",
    "Pokemon Pokedex",
    "Hangman",
    "Coming Soon",
  ];

  return (
    <ul className="space-y-4">
      {projectTitles.map((title, index) => (
        <li key={index}>
          <a href={`#${index}`} className="block">
            <div className="font-montserrat text-center p-6 rounded-md cursor-pointer bg-gray-50 hover:bg-gray-100 dark:bg-white/5 dark:hover:bg-white/10">
              {title}
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default ProjectList;
