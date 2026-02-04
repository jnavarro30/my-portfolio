import { useState } from "react";
import { Drawer, Group, ActionIcon, Anchor } from "@mantine/core";
import { At, BrandGithub, BrandLinkedin } from "tabler-icons-react";
// components
import GmailModal from "./contact-gmail-modal";

function ContactDrawer() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="CONTACT"
        padding="xl"
        size="xs"
        position="top"
      >
        <div className="flex justify-around p-4">
          <GmailModal />
          <Anchor href="https://github.com/jnavarro30" target="_blank">
            <ActionIcon size={40}>
              <BrandGithub onClick={() => console.log("gmail")} size={40} />
            </ActionIcon>
          </Anchor>
          <Anchor
            href="https://www.linkedin.com/in/jessenavarro42/"
            target="_blank"
          >
            <ActionIcon size={40}>
              <BrandLinkedin style={{color: "#4682b4"}} onClick={() => console.log("gmail")} size={40} />
            </ActionIcon>
          </Anchor>
        </div>
      </Drawer>

      <Group position="center">
        <ActionIcon size={40}>
          <At style={{color: "#4169e1"}} onClick={() => setOpened(true)} size={40} />
        </ActionIcon>
      </Group>
    </>
  );
}

export default ContactDrawer;
