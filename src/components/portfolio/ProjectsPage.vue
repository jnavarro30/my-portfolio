<script setup>
import { PROJECTS } from "../../data/projects-info";
import ProjectCard from "./ProjectCard.vue";
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
    <ProjectCard
      v-for="(project, index) in PROJECTS"
      :key="index"
      :projectTitle="project.title"
      :projectDescription="project.description"
      :projectTechnologies="project.technologies"
      :projectImage="project.image"
      :projectId="String(index)"
      :projectLink="project.link"
    />
  </div>
</template>
