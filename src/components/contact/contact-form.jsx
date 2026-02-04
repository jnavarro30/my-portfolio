import { useState } from "react";
import { TextInput, Textarea, ActionIcon } from "@mantine/core";
import { Send, Check } from "tabler-icons-react";
import emailjs from "emailjs-com";

function ContactForm() {
  const [icon, setIcon] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1jqw7s3",
        "template_eef2wpp",
        e.target,
        "GFj7TR0SGgWQfEuQc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setIcon(false);
    setTimeout(() => {
      setIcon(true);
    }, 2000);
  };

  return (
    <form className="grid gap-4" onSubmit={sendEmail}>
      <TextInput
        placeholder="first and last name"
        label="Full Name"
        name="name"
        required
      />
      <TextInput
        placeholder="email"
        label="Email address"
        name="email"
        required
      />
      <TextInput
        placeholder="subject"
        label="Subject"
        name="subject"
        required
      />
      <Textarea placeholder="comments" label="your comments" name="comments" />
      <ActionIcon
        className="border-4 rounded w-1/2 p-2 justify-self-center hover:cursor-pointer hover:bg-white"
        type="submit"
      >
        {icon ? (
          <Send size={35} />
        ) : (
          <Check style={{ color: "green" }} size={35} />
        )}
      </ActionIcon>
    </form>
  );
}

export default ContactForm;
