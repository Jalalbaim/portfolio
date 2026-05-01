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

// Hide PDF links whose file doesn't exist (avoids GitHub Pages 404)
(function () {
  var pdfLinks = document.querySelectorAll('a[href$=".pdf"]');
  pdfLinks.forEach(function (link) {
    fetch(link.href, { method: 'HEAD' })
      .then(function (res) {
        if (!res.ok) link.style.display = 'none';
      })
      .catch(function () {
        link.style.display = 'none';
      });
  });
})();
