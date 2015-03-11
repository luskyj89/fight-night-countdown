

// videoBG
function videoStarter() {
    $('.space').videoBG({
        mp4:'video/smash-taunt-loop.mp4',
        //ogv:'video/shutterstock_v2529842.ogv',
        webm:'video/smash-taunt-loop.webm',
        //poster:'video/shutterstock_v2529842.jpg',
        scale:true,
        zIndex:0
    });
}

function init() {

    $('.countdown').countdown('03/14/2015 21:00:00', function(event) {
          var $this = $(this).html(event.strftime(''
            + '<span>%H</span> hr '
            + '<span>%M</span> min '
            + '<span>%S</span> sec'));
        });

    videoStarter();

}

$(document).ready(function(){
    init();
});
