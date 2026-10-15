
function go(n) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('s' + n).classList.add('active');
  const a = document.getElementById('answer');
  if (a) a.textContent = '';
}

function yes() {
  document.getElementById('answer').textContent =
    'Correct answer 😌🩷 You are officially stuck with your Gulgula.';
}

function tease() {
  document.getElementById('answer').textContent =
    'Thinking time is over, Sirji. The answer is YES. 😂💗';
}
