/**
 * Created by renan on 30/08/16.
 */

$(document).ready(function(){

    alert('é nois');

    var $doc = $('html, body');
    $('a').click(function() {
        $doc.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });

});
