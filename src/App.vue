<script setup>
import { ref } from "vue";
import { IconBulb, IconBulbOff } from "@tabler/icons-vue";
import myPic from "./images/profile-pic.png";

import NavBar from "./components/NavBar.vue";
import AboutSummary from "./components/home/AboutSummary.vue";
import ProjectsPage from "./components/portfolio/ProjectsPage.vue";
import IconButton from "./components/ui/IconButton.vue";

const bounce = ref(false);
const darkTheme = ref(false);

const triggerBounce = () => {
  bounce.value = true;
  setTimeout(() => {
    bounce.value = false;
  }, 1000);
};
</script>

<template>
  <div :class="darkTheme ? 'dark' : ''">
    <div :class="darkTheme ? 'min-h-screen bg-[#1A1B1E] text-white' : 'min-h-screen bg-white text-black'">
      <NavBar :darkTheme="darkTheme" @bounce="triggerBounce" />

      <div class="max-w-5xl mx-auto px-4">
        <div class="pt-4">
          <IconButton :size="40" ariaLabel="Toggle theme" @click="darkTheme = !darkTheme">
            <IconBulbOff v-if="darkTheme" :size="40" color="yellow" />
            <IconBulb v-else :size="40" color="yellow" />
          </IconButton>
        </div>

        <div class="mx-auto mt-4" style="max-width: 300px; aspect-ratio: 720 / 1080">
          <img
            class="rounded-md w-[250px] h-[250px] object-cover mx-auto"
            :class="bounce ? 'animate__animated animate__bounce' : ''"
            :src="myPic"
            alt="Jesse Navarro"
            width="250"
            height="250"
          />
        </div>

        <AboutSummary />
        <ProjectsPage />
      </div>
    </div>
  </div>
</template>
