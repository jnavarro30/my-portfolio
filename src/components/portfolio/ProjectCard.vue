<script setup>
const props = defineProps({
  projectTitle: { type: String, required: true },
  projectDescription: { type: String, required: true },
  projectTechnologies: { type: Array, required: true },
  projectImage: { type: String, required: true },
  projectId: { type: String, required: true },
  projectLink: { type: String, required: true },
});

const badgeColors = [
  "bg-violet-100 text-violet-800 dark:bg-violet-500/20 dark:text-violet-200",
  "bg-indigo-100 text-indigo-800 dark:bg-indigo-500/20 dark:text-indigo-200",
  "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-200",
  "bg-cyan-100 text-cyan-800 dark:bg-cyan-500/20 dark:text-cyan-200",
];
</script>

<template>
  <div :id="props.projectId" class="w-5/6 m-auto hover:shadow-2xl">
    <a
      :href="props.projectLink"
      target="_blank"
      rel="noreferrer"
      class="block rounded-lg border border-black/10 dark:border-white/10 bg-white dark:bg-neutral-900 overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
    >
      <div class="w-full">
        <img class="mt-2 w-full h-40 object-cover" :src="props.projectImage" :alt="props.projectTitle" height="160" />
      </div>

      <div class="flex items-start justify-between gap-3 px-4 pt-4">
        <div class="font-montserrat font-semibold">{{ props.projectTitle }}</div>

        <div class="flex flex-wrap justify-end gap-2">
          <span
            v-for="(tech, index) in props.projectTechnologies"
            :key="index"
            class="text-xs px-2 py-1 rounded-full"
            :class="badgeColors[index] ?? 'bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white/80'"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <p class="p-1 m-2 font-roboto text-sm text-black/70 dark:text-white/70 leading-relaxed">
        {{ props.projectDescription }}
      </p>
    </a>
  </div>
</template>
