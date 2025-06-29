document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".slider img");
  let currentIndex = 0;

  function showSlide(index) {
    images.forEach((img, i) => {
      img.classList.remove("active");
      if (i === index) {
        img.classList.add("active");
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);
  }

  showSlide(currentIndex);

  // 아래 함수들 연결되어 있어야 작동합니다
  window.nextSlide = nextSlide;
  window.prevSlide = prevSlide;
});
