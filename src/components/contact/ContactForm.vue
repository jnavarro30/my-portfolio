<script setup>
import { ref } from "vue";
import { IconSend, IconCheck } from "@tabler/icons-vue";
import emailjs from "emailjs-com";
import IconButton from "../ui/IconButton.vue";

const showSendIcon = ref(true);
const formRef = ref(null);

const sendEmail = (e) => {
  e?.preventDefault?.();

  if (!formRef.value) return;

  emailjs
    .sendForm(
      "service_1jqw7s3",
      "template_eef2wpp",
      formRef.value,
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

  formRef.value.reset();
  showSendIcon.value = false;
  setTimeout(() => {
    showSendIcon.value = true;
  }, 2000);
};
</script>

<template>
  <form ref="formRef" class="grid gap-4" @submit="sendEmail">
    <label class="grid gap-1">
      <span class="text-sm font-montserrat">Full Name</span>
      <input
        class="rounded border border-black/20 dark:border-white/20 bg-white dark:bg-neutral-800 px-3 py-2"
        placeholder="first and last name"
        name="name"
        required
      />
    </label>

    <label class="grid gap-1">
      <span class="text-sm font-montserrat">Email address</span>
      <input
        class="rounded border border-black/20 dark:border-white/20 bg-white dark:bg-neutral-800 px-3 py-2"
        placeholder="email"
        name="email"
        type="email"
        required
      />
    </label>

    <label class="grid gap-1">
      <span class="text-sm font-montserrat">Subject</span>
      <input
        class="rounded border border-black/20 dark:border-white/20 bg-white dark:bg-neutral-800 px-3 py-2"
        placeholder="subject"
        name="subject"
        required
      />
    </label>

    <label class="grid gap-1">
      <span class="text-sm font-montserrat">Your comments</span>
      <textarea
        class="rounded border border-black/20 dark:border-white/20 bg-white dark:bg-neutral-800 px-3 py-2 min-h-[120px]"
        placeholder="comments"
        name="comments"
      />
    </label>

    <div class="flex justify-center">
      <IconButton
        class="border-4 rounded w-1/2 p-2 hover:cursor-pointer hover:bg-white/70 dark:hover:bg-white/10"
        type="submit"
        ariaLabel="Send email"
      >
        <IconSend v-if="showSendIcon" :size="35" />
        <IconCheck v-else :size="35" color="green" />
      </IconButton>
    </div>
  </form>
</template>
