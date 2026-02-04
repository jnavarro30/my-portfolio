<script setup>
import { ref } from "vue";
import { IconBriefcase } from "@tabler/icons-vue";
import { useScrollPosition } from "../../utils/useScrollPosition";
import Drawer from "../ui/Drawer.vue";
import IconButton from "../ui/IconButton.vue";
import ProjectList from "./ProjectList.vue";

const opened = ref(false);
const scrollPosition = useScrollPosition();

const handleOnClose = () => {
  opened.value = false;
  setTimeout(() => window.scrollTo(0, scrollPosition.value), 21);
};
</script>

<template>
  <Drawer
    panelClass="font-montserrat"
    :open="opened"
    title="PROJECTS"
    size="lg"
    :lockScroll="false"
    @close="handleOnClose"
  >
    <ProjectList />
  </Drawer>

  <div class="flex justify-center">
    <IconButton :size="40" ariaLabel="Open projects" @click="opened = true">
      <IconBriefcase :size="40" color="#a0522d" />
    </IconButton>
  </div>
</template>
