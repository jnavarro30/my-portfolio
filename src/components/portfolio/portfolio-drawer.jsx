import { useState } from "react";
import { Drawer, Group, ActionIcon } from "@mantine/core";
import { Briefcase } from "tabler-icons-react";
import useScrollPosition from "../../utils/custom-hooks";
// components
import ProjectList from "./project-list";

function PortfolioDrawer() {
  const [opened, setOpened] = useState(false);
  const scrollPosition = useScrollPosition();

  const handleOnClose = () => {
    setOpened(false);
    setTimeout(() => window.scrollTo(0, scrollPosition), 21);
  };

  return (
    <>
      <Drawer
        className="font-montserrat"
        opened={opened}
        onClose={handleOnClose}
        title="PROJECTS"
        padding="xl"
        size="lg"
        lockScroll={false}
      >
        <ProjectList />
      </Drawer>

      <Group position="center">
        <ActionIcon size={40}>
          <Briefcase style={{color: "#a0522d"}} onClick={() => setOpened(true)} size={40} />
        </ActionIcon>
      </Group>
    </>
  );
}

export default PortfolioDrawer;
