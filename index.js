document.querySelector('nav')
  .addEventListener('click', function (ev) {
    var links = document.querySelectorAll('nav a');
    for(var i = 0, n = links.length; i < n; i++) {
      links[i].classList.remove('selected');
    }
    ev.target.classList.add('selected');
  });

// select the nav menu item for the current page on first load
var link = document.querySelector('[href="' + location.hash + '"]')
  if (link) link.classList.add('selected');
