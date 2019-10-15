document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav')
    var instances = M.Sidenav.init(elems, {})
})

$(document).ready(function() {
    $('a.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000)
        return false
    });      
})
