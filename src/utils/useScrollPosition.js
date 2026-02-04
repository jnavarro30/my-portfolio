import { ref, onMounted, onUnmounted } from "vue";

export function useScrollPosition() {
  const scrollPosition = ref(0);

  const updatePosition = () => {
    scrollPosition.value = window.pageYOffset;
  };

  onMounted(() => {
    window.addEventListener("scroll", updatePosition);
    updatePosition();
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", updatePosition);
  });

  return scrollPosition;
}
