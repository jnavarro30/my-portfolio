import {
  Card,
  Image,
  Text,
  Badge,
  Group,
  useMantineTheme,
} from "@mantine/core";

function ProjectCard({
  projectTitle,
  projectDescription,
  projectTechnologies,
  projectImage,
  projectId,
  projectLink,
}) {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  const colors = ["violet", "indigo", "", "cyan"];

  return (
    <div id={projectId} className="w-5/6 m-auto hover:shadow-2xl">
      <Card shadow="sm" p="lg" component="a" href={projectLink} target="_blank">
        <Card.Section>
          <Image
            className="mt-2"
            src={projectImage}
            height={160}
            alt="Norway"
          />
        </Card.Section>

        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
        >
          <Text className="font-montserrat" weight={500}>
            {projectTitle}
          </Text>
          {projectTechnologies.map((tech, index) => (
            <Badge color={colors[index]} variant="light" key={index}>
              {tech}
            </Badge>
          ))}
        </Group>

        <Text
          className="p-1 m-2 font-roboto"
          size="sm"
          style={{ color: secondaryColor, lineHeight: 1.5 }}
        >
          {projectDescription}
        </Text>
      </Card>
    </div>
  );
}

export default ProjectCard;
