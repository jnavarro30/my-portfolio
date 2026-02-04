import { useState } from "react";
import { Send, Check } from "tabler-icons-react";
import emailjs from "emailjs-com";
import IconButton from "../ui/IconButton";

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
      <label className="grid gap-1">
        <span className="text-sm font-montserrat">Full Name</span>
        <input
          className="rounded border border-black/20 dark:border-white/20 bg-white dark:bg-neutral-800 px-3 py-2"
          placeholder="first and last name"
          name="name"
          required
        />
      </label>

      <label className="grid gap-1">
        <span className="text-sm font-montserrat">Email address</span>
        <input
          className="rounded border border-black/20 dark:border-white/20 bg-white dark:bg-neutral-800 px-3 py-2"
          placeholder="email"
          name="email"
          type="email"
          required
        />
      </label>

      <label className="grid gap-1">
        <span className="text-sm font-montserrat">Subject</span>
        <input
          className="rounded border border-black/20 dark:border-white/20 bg-white dark:bg-neutral-800 px-3 py-2"
          placeholder="subject"
          name="subject"
          required
        />
      </label>

      <label className="grid gap-1">
        <span className="text-sm font-montserrat">Your comments</span>
        <textarea
          className="rounded border border-black/20 dark:border-white/20 bg-white dark:bg-neutral-800 px-3 py-2 min-h-[120px]"
          placeholder="comments"
          name="comments"
        />
      </label>

      <div className="flex justify-center">
        <IconButton
          className="border-4 rounded w-1/2 p-2 hover:cursor-pointer hover:bg-white/70 dark:hover:bg-white/10"
          type="submit"
          ariaLabel="Send email"
        >
          {icon ? <Send size={35} /> : <Check style={{ color: "green" }} size={35} />}
        </IconButton>
      </div>
    </form>
  );
}

export default ContactForm;
