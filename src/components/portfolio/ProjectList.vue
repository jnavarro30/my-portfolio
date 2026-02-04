<script setup>
const projectTitles = ["Kingdom of Dwarves", "Pokemon Pokedex", "Hangman", "Coming Soon"];
</script>

<template>
  <ul class="space-y-4">
    <li v-for="(title, index) in projectTitles" :key="index">
      <a :href="`#${index}`" class="block">
        <div
          class="font-montserrat text-center p-6 rounded-md cursor-pointer bg-gray-50 hover:bg-gray-100 dark:bg-white/5 dark:hover:bg-white/10"
        >
          {{ title }}
        </div>
      </a>
    </li>
  </ul>
</template>
