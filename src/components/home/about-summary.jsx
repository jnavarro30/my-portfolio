import { Title, Paper, Text } from "@mantine/core";

function AboutSummary() {
  return (
    <div className="flex flex-col items-center">
      <Title
        className="font-montserrat"
        order={1}
      >
        About Me
      </Title>
      <Paper className="m-10" p="md">
        <Text className="w-3/4 m-auto font-roboto">
          Hello, I'm Jesse. I have been a dental technician for the past decade
          and currently I digitally design orthadontics remotely. I began coding
          in late 2018 focusing on the fundamentals of Javascript. In 2021 I
          graduated from the Thinkful full-stack boot-camp which covered
          industry standards, and conventions. I am ready to apply my new
          skills.
        </Text>
      </Paper>
    </div>
  );
}

export default AboutSummary;
