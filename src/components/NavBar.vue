<script setup>
import { IconHome } from "@tabler/icons-vue";
import IconButton from "./ui/IconButton.vue";
import PortfolioDrawer from "./portfolio/PortfolioDrawer.vue";
import ContactDrawer from "./contact/ContactDrawer.vue";

const props = defineProps({
  darkTheme: { type: Boolean, default: false },
});

const emit = defineEmits(["bounce"]);

const homeOnClick = () => {
  window.scrollTo(0, 0);
  emit("bounce");
};
</script>

<template>
  <div
    class="nav_bar border-2 flex justify-evenly py-4 sticky top-0 z-10"
    :style="{ background: props.darkTheme ? '#1A1B1E' : 'white' }"
  >
    <PortfolioDrawer />

    <IconButton :size="40" ariaLabel="Home" @click="homeOnClick">
      <IconHome :size="40" color="#228b22" />
    </IconButton>

    <ContactDrawer />
  </div>
</template>
