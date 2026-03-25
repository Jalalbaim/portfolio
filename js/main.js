// Highlight the active nav link based on the current page filename
(function () {
  var path = window.location.pathname;
  var links = document.querySelectorAll('.nav-links a');
  links.forEach(function (link) {
    var href = link.getAttribute('href');
    var isIndex = href === 'index.html' &&
      (path === '/' || path.endsWith('/') || path.endsWith('index.html'));
    var isOther = href !== 'index.html' && path.endsWith(href);
    if (isIndex || isOther) {
      link.classList.add('active');
    }
  });
})();

// Hide PDF report buttons whose file doesn't exist yet (avoids GitHub Pages 404)
(function () {
  var reportLinks = document.querySelectorAll('.proj-footer a[href$=".pdf"]');
  reportLinks.forEach(function (link) {
    fetch(link.href, { method: 'HEAD' })
      .then(function (res) {
        if (!res.ok) link.style.display = 'none';
      })
      .catch(function () {
        link.style.display = 'none';
      });
  });
})();
