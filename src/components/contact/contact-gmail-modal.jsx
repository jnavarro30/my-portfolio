import { useState } from "react";
import { BrandGmail } from "tabler-icons-react";
// components
import ContactForm from "./contact-form";
import Modal from "../ui/Modal";
import IconButton from "../ui/IconButton";

function GmailModal() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        open={opened}
        onClose={() => setOpened(false)}
        title="Let's talk"
      >
        <ContactForm />
      </Modal>

      <div className="flex justify-center">
        <IconButton size={40} ariaLabel="Open email" onClick={() => setOpened(true)}>
          <BrandGmail style={{ color: "#e03c31" }} size={40} />
        </IconButton>
      </div>
    </>
  );
}

export default GmailModal;
