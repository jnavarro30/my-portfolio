function AboutSummary() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-montserrat text-3xl mt-10">About Me</h1>
      <div className="m-10 w-full max-w-3xl rounded-md border border-black/10 dark:border-white/10 bg-white/80 dark:bg-white/5 shadow-sm p-6">
        <p className="w-3/4 m-auto font-roboto text-black/80 dark:text-white/80">
          Hello, I'm Jesse. I have been a dental technician for the past decade
          and currently I digitally design orthadontics remotely. I began coding
          in late 2018 focusing on the fundamentals of Javascript. In 2021 I
          graduated from the Thinkful full-stack boot-camp which covered
          industry standards, and conventions. I am ready to apply my new
          skills.
        </p>
      </div>
    </div>
  );
}

export default AboutSummary;
