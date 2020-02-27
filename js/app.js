$(function() {
  $('a[href="' + window.location.pathname + '"]').each(function(el) {
    if(window.location.pathname === '/docs') {
      $('a[href="/docs/installation"]').css('color', '#357EDD');
    } else if (window.location.pathname.startsWith('/docs')) {
      $(this).css('color', '#357EDD');
    }
  })
})
