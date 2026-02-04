<script setup>
import { computed, watch, onUnmounted } from "vue";

const props = defineProps({
  open: { type: Boolean, default: false },
  title: { type: String, default: "" },
  position: { type: String, default: "left" }, // left | right | top | bottom
  size: { type: String, default: "md" }, // xs | sm | md | lg
  lockScroll: { type: Boolean, default: true },
  panelClass: { type: String, default: "" },
});

const emit = defineEmits(["close"]);

const sizeToPx = {
  xs: 320,
  sm: 384,
  md: 448,
  lg: 512,
};

const px = computed(() => sizeToPx[props.size] ?? sizeToPx.md);

const isTop = computed(() => props.position === "top");
const isBottom = computed(() => props.position === "bottom");
const isRight = computed(() => props.position === "right");

const panelStyle = computed(() =>
  isTop.value || isBottom.value ? { height: `${px.value}px` } : { width: `${px.value}px` }
);

const panelPos = computed(() => {
  if (isTop.value) return "top-0 left-0 right-0";
  if (isBottom.value) return "bottom-0 left-0 right-0";
  if (isRight.value) return "top-0 bottom-0 right-0";
  return "top-0 bottom-0 left-0";
});

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
      if (props.lockScroll) {
        previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
      }
    } else {
      document.removeEventListener("keydown", onKeyDown);
      if (props.lockScroll) document.body.style.overflow = previousOverflow ?? "";
    }
  },
  { immediate: true }
);

onUnmounted(() => {
  document.removeEventListener("keydown", onKeyDown);
  if (props.lockScroll) document.body.style.overflow = previousOverflow ?? "";
});
</script>

<template>
  <div v-if="props.open">
    <div class="fixed inset-0 bg-black/50 z-40" @click="onClose" />

    <div
      role="dialog"
      aria-modal="true"
      class="fixed bg-white text-black dark:bg-neutral-900 dark:text-white shadow-2xl z-50 flex flex-col"
      :class="[panelPos, props.panelClass]"
      :style="panelStyle"
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

      <div class="p-5 overflow-auto flex-1">
        <slot />
      </div>
    </div>
  </div>
</template>
