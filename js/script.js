document.addEventListener('DOMContentLoaded', () => {
  // امتیازها
  const scores = {
    saba: [2, 3, 3],
    roshana: [4, 4, 3],
    bahar: [2, 1, 2],
    roysa: [1, 1, 1],
  };

  Object.keys(scores).forEach(id => {
    const total = scores[id].reduce((sum, val) => sum + val, 0);
    const scoreElement = document.querySelector(`#${id} .score-value`);
    if (scoreElement) {
      scoreElement.textContent = total;
    }
  });

  // دکمه حالت شب
  const toggleBtn = document.getElementById('toggle-dark');
  const starfield = document.querySelector('.starfield');

  toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  const isDark = document.body.classList.contains('dark-mode');

  if (isDark) {
    if (starfield.children.length === 0) {
      createStars(100);
    }
  } else {
    starfield.innerHTML = '';
  }
});


});

function createStars(count = 100) {
  const starfield = document.querySelector('.starfield');

  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.top = `${Math.random() * 100}%`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.animationDelay = `${Math.random() * 2}s`;
    starfield.appendChild(star);
  }
}