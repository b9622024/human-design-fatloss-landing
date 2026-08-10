(() => {
  const sent = new Set();
  document.querySelectorAll('.track-lead').forEach(link => {
    link.addEventListener('click', () => {
      const key = link.dataset.channel || link.href;
      if (sent.has(key)) return;
      sent.add(key);
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'Lead', {content_name:'人類圖減脂行動測驗', contact_channel:key});
      }
    });
  });
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
  }, {threshold:.08});
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
})();
