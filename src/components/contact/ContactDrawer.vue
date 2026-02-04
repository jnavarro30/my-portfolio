<script setup>
import { ref } from "vue";
import { IconAt, IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-vue";
import Drawer from "../ui/Drawer.vue";
import IconButton from "../ui/IconButton.vue";
import ContactGmailModal from "./ContactGmailModal.vue";

const opened = ref(false);
</script>

<template>
  <Drawer :open="opened" title="CONTACT" size="xs" position="top" @close="opened = false">
    <div class="flex justify-around p-4">
      <ContactGmailModal />

      <a href="https://github.com/jnavarro30" target="_blank" rel="noreferrer">
        <IconButton :size="40" ariaLabel="GitHub">
          <IconBrandGithub :size="40" />
        </IconButton>
      </a>

      <a href="https://www.linkedin.com/in/jessenavarro42/" target="_blank" rel="noreferrer">
        <IconButton :size="40" ariaLabel="LinkedIn">
          <IconBrandLinkedin :size="40" color="#4682b4" />
        </IconButton>
      </a>
    </div>
  </Drawer>

  <div class="flex justify-center">
    <IconButton :size="40" ariaLabel="Open contact" @click="opened = true">
      <IconAt :size="40" color="#4169e1" />
    </IconButton>
  </div>
</template>
