// Intro cinematic (home only)
(function() {
  const overlay = document.getElementById('introOverlay');
  if (!overlay) return;
  const played = sessionStorage.getItem('miranmi_intro');
  if (played) { overlay.classList.add('intro-done'); return; }
  document.body.classList.add('intro-active');
  requestAnimationFrame(() => overlay.classList.add('intro-playing'));
  setTimeout(() => finishIntro(), 5200);
})();
function finishIntro() {
  const overlay = document.getElementById('introOverlay');
  if (!overlay || overlay.classList.contains('intro-done')) return;
  overlay.classList.add('intro-done');
  document.body.classList.remove('intro-active');
  sessionStorage.setItem('miranmi_intro', '1');
}