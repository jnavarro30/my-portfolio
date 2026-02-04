<script setup>
import { watch, onUnmounted } from "vue";

const props = defineProps({
  open: { type: Boolean, default: false },
  title: { type: String, default: "" },
  panelClass: { type: String, default: "" },
});

const emit = defineEmits(["close"]);

const onClose = () => emit("close");

let previousOverflow;
const onKeyDown = (e) => {
  if (e.key === "Escape") onClose();
};

watch(
  () => props.open,
  (open) => {
    if (open) {
      document.addEventListener("keydown", onKeyDown);
      previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    } else {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow ?? "";
    }
  },
  { immediate: true }
);

onUnmounted(() => {
  document.removeEventListener("keydown", onKeyDown);
  document.body.style.overflow = previousOverflow ?? "";
});
</script>

<template>
  <div v-if="props.open">
    <div class="fixed inset-0 bg-black/50 z-40" @click="onClose" />

    <div class="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        role="dialog"
        aria-modal="true"
        class="w-full max-w-lg rounded-lg bg-white text-black dark:bg-neutral-900 dark:text-white shadow-2xl"
        :class="props.panelClass"
      >
        <div class="flex items-center justify-between px-5 py-4 border-b border-black/10 dark:border-white/10">
          <div class="font-montserrat tracking-wider text-sm">{{ props.title }}</div>
          <button
            type="button"
            class="text-xl leading-none px-2 py-1 rounded hover:bg-black/5 dark:hover:bg-white/10"
            aria-label="Close"
            @click="onClose"
          >
            ×
          </button>
        </div>

        <div class="p-5">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
