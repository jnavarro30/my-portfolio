<script setup>
const props = defineProps({
  size: { type: Number, default: 40 },
  ariaLabel: { type: String, default: undefined },
  type: { type: String, default: "button" },
});
</script>

<template>
  <button
    :type="props.type"
    :aria-label="props.ariaLabel"
    class="inline-flex items-center justify-center rounded-full transition-colors hover:bg-black/5 active:bg-black/10 dark:hover:bg-white/10 dark:active:bg-white/15"
    :style="{ width: `${props.size}px`, height: `${props.size}px` }"
  >
    <slot />
  </button>
</template>
