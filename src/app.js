const countEl = document.getElementById('count');
const btn = document.getElementById('incBtn');
const toast = document.getElementById('toast');

let count = 0;

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('visible');
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.remove('visible'), 2000);
}

btn.addEventListener('click', () => {
  count += 1;
  countEl.textContent = count;
  showToast(`Incremented to ${count}`);
});

// keyboard shortcut: space to increment
window.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    e.preventDefault();
    btn.click();
  }
});

// simple initialization
document.addEventListener('DOMContentLoaded', () => {
  countEl.textContent = count;
});
