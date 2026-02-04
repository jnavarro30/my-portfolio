import { useState } from "react";
import { At, BrandGithub, BrandLinkedin } from "tabler-icons-react";
// components
import GmailModal from "./contact-gmail-modal";
import Drawer from "../ui/Drawer";
import IconButton from "../ui/IconButton";

function ContactDrawer() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Drawer
        open={opened}
        onClose={() => setOpened(false)}
        title="CONTACT"
        size="xs"
        position="top"
      >
        <div className="flex justify-around p-4">
          <GmailModal />
          <a href="https://github.com/jnavarro30" target="_blank" rel="noreferrer">
            <IconButton size={40} ariaLabel="GitHub">
              <BrandGithub size={40} />
            </IconButton>
          </a>
          <a
            href="https://www.linkedin.com/in/jessenavarro42/"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton size={40} ariaLabel="LinkedIn">
              <BrandLinkedin style={{ color: "#4682b4" }} size={40} />
            </IconButton>
          </a>
        </div>
      </Drawer>

      <div className="flex justify-center">
        <IconButton size={40} ariaLabel="Open contact" onClick={() => setOpened(true)}>
          <At style={{ color: "#4169e1" }} size={40} />
        </IconButton>
      </div>
    </>
  );
}

export default ContactDrawer;
