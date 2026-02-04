import { List, Box } from "@mantine/core";

function ProjectList() {
  const projectTitles = [
    "Kingdom of Dwarves",
    "Pokemon Pokedex",
    "Hangman",
    "Coming Soon",
  ];

  return (
    <List spacing="lg" size="lg">
      {projectTitles.map((title, index) => {
        return (
          <List.Item className="" key={index}>
            <a href={`#${index}`}>
              <Box
                className="font-montserrat"
                sx={(theme) => ({
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[6]
                      : theme.colors.gray[0],
                  textAlign: "center",
                  padding: theme.spacing.xl,
                  borderRadius: theme.radius.md,
                  cursor: "pointer",

                  "&:hover": {
                    backgroundColor:
                      theme.colorScheme === "dark"
                        ? theme.colors.dark[5]
                        : theme.colors.gray[1],
                  },
                })}
              >
                {title}
              </Box>
            </a>
          </List.Item>
        );
      })}
    </List>
  );
}

export default ProjectList;
