const { createApp, ref } = window.Vue;

const app = createApp({
  setup() {
    
    //管理輸入框的值和可見性的邏輯
    const inputValue = ref('');
    const isVisible = ref(false);

    //管理 hover 狀態的邏輯
    const isHovered = ref(false);
    const setHovered = (value) => {
      isHovered.value = value;
    };
    const toggleVisibility = () => {
      isVisible.value = !isVisible.value;
    };

    return {
      isHovered,
      setHovered,
      toggleVisibility,
      isVisible,
      inputValue
    };
  }
});

app.mount('#app');

document.addEventListener('DOMContentLoaded', () => {
  const introSection = document.querySelector('.intro-section');
  if (!introSection) {
    return;
  }

  const cells = Array.from(introSection.querySelectorAll('.why-cell'));
  const activeCells = cells.filter((cell) => !cell.classList.contains('invisible'));

  const setActiveCell = (target) => {
    activeCells.forEach((cell) => cell.classList.remove('is-active'));
    target.classList.add('is-active');
  };

  const initialCell = activeCells[0];
  if (initialCell) {
    setActiveCell(initialCell);
  }

  activeCells.forEach((cell) => {
    cell.addEventListener('mouseenter', () => setActiveCell(cell));
  });
});


