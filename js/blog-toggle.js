document.addEventListener("DOMContentLoaded", function () {
  const dates = document.querySelectorAll(".date");

  dates.forEach(date => {
    date.addEventListener("click", function () {
      const targetId = this.dataset.target;

      // 현재 보여지고 있는 언어의 entry만 선택
      const currentLang = targetId.endsWith("-en") ? "en" : "ko";
      const entries = document.querySelectorAll(`.blog-entry[lang="${currentLang}"]`);

      // 모든 entry 숨김
      entries.forEach(entry => entry.classList.remove("active"));

      // 해당 entry만 표시
      const targetEntry = document.getElementById(targetId);
      if (targetEntry) {
        targetEntry.classList.add("active");
      }
    });
  });

  // 초기 표시 설정: 현재 언어 기준 첫 번째 entry만 보이게
  const initialLang = document.getElementById('lang-toggle').textContent === 'English' ? 'ko' : 'en';
  const initialEntries = document.querySelectorAll(`.blog-entry[lang="${initialLang}"]`);
  if (initialEntries.length > 0) {
    initialEntries[0].classList.add("active");
  }
});
