<script setup>
import { ref } from "vue";
import { IconBrandGmail } from "@tabler/icons-vue";
import Modal from "../ui/Modal.vue";
import IconButton from "../ui/IconButton.vue";
import ContactForm from "./ContactForm.vue";

const opened = ref(false);
</script>

<template>
  <Modal :open="opened" title="Let's talk" @close="opened = false">
    <ContactForm />
  </Modal>

  <div class="flex justify-center">
    <IconButton :size="40" ariaLabel="Open email" @click="opened = true">
      <IconBrandGmail :size="40" color="#e03c31" />
    </IconButton>
  </div>
</template>
