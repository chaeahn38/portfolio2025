const marquee = document.getElementById('marquee');

  // 전체 너비 저장용
  let marqueeWidth;
  let posX = 0;
  const speed = 0.3; // 스크롤 속도 (px/frame)

  // 초기 너비 계산 (복사본 포함 전체 길이)
  function init() {
    marqueeWidth = marquee.offsetWidth / 2; // 복사본 포함 전체 너비의 절반
  }

  // 애니메이션 함수
  function animate() {
    posX -= speed;
    if (posX <= -marqueeWidth) {
      posX = 0;
    }
    marquee.style.transform = `translateX(${posX}px)`;
    requestAnimationFrame(animate);
  }

  window.addEventListener('load', () => {
    init();
    animate();
  });

  // 창 크기 바뀔 때 너비 재계산
  window.addEventListener('resize', () => {
    init();
  });
