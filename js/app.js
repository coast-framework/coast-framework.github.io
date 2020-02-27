$(function() {
  $("time").each(function() {
    var $this = $(this)
    var seconds = parseInt($this.data('seconds'), 10);
    var d = new Date(seconds * 1000)
    var options = { year: 'numeric', month: 'long', day: 'numeric' }

    if($this.data("date")) {
      $this.text(d.toLocaleDateString('en-US', options))
    } else {
      $this.text(d.toLocaleDateString('en-US', options) + " " + d.toLocaleTimeString())
    }
  })

  $('a[href="' + window.location.pathname + '"]').each(function(el) {
    if(window.location.pathname === '/docs') {
      $('a[href="/docs/installation.md"]').css('color', '#357EDD');
    } else if (window.location.pathname.startsWith('/docs')) {
      $(this).css('color', '#357EDD');
    }
  })
})
