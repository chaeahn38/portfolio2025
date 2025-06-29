document.getElementById('lang-toggle').addEventListener('click', function () {
  const isEnglish = this.textContent === 'English';
  this.textContent = isEnglish ? 'Korean' : 'English';

  // Toggle date list
  document.getElementById('date-list-ko').style.display = isEnglish ? 'none' : 'block';
  document.getElementById('date-list-en').style.display = isEnglish ? 'block' : 'none';

  // Remove all .active classes first
  document.querySelectorAll('.blog-entry').forEach(el => el.classList.remove('active'));

  // Only show first entry of selected language
  const entriesToShow = document.querySelectorAll(`.blog-entry[lang="${isEnglish ? 'en' : 'ko'}"]`);
  if (entriesToShow.length > 0) {
    entriesToShow[0].classList.add('active');
  }
});
