// Theme toggle + year
(function(){
  const root = document.documentElement;
  const saved = localStorage.getItem('theme');
  if(saved){ root.classList.toggle('light', saved==='light'); }
  document.getElementById('themeToggle').addEventListener('click', ()=>{
    const isLight = root.classList.toggle('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });
  document.getElementById('year').textContent = new Date().getFullYear();
})();