// Intersection Observer 動畫效果
document.addEventListener("DOMContentLoaded", function() {
  // 1. 設定觀察員的選項
  const options = {
    root: null,    // 以視窗為基準
    rootMargin: '0px',
    threshold: 0.1 // 只要區塊露出 10% 就觸發
  };

  // 2. 建立觀察員 (Observer)
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      // 如果區塊進入畫面 (isIntersecting 為 true)
      if (entry.isIntersecting) {
        entry.target.classList.add('show'); // 加上 .show class 觸發 CSS 動畫
        observer.unobserve(entry.target);   // 動畫跑過一次就不再偵測 (節省效能)
      }
    });
  }, options);

  // 3. 找出所有要動畫的元素並開始觀察
  const animatedElements = document.querySelectorAll('.fade-in-up');
  animatedElements.forEach(el => {
    observer.observe(el);
  });

  
});





