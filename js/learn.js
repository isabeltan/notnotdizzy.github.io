$(document).ready(function () {

    $("#btn").click(function () {
        $("p").toggle("slow");
    });

    $(".main").one("mouseenter", function () {
        alert("This is by Matisse!");
    });

    $('input[type="radio"]').click(function () {
        if ($(this).attr('id') == 'yes') {
            $('#show-yes').show();
        } else {
            $('#show-yes').hide();
        }
        if ($(this).attr('id') == 'no') {
            $('#show-no').show();
        } else {
            $('#show-no').hide();
        }
    });


    // Hide Header on on scroll down http://jsfiddle.net/mariusc23/s6mLJ/31/ https://medium.com/@mariusc23/hide-header-on-scroll-down-show-on-scroll-up-67bbaae9a78c
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight){
        // Scroll Down
        $('header').removeClass('nav-down').addClass('nav-up');
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            $('header').removeClass('nav-up').addClass('nav-down');
        }
    }
    
    lastScrollTop = st;
}
//end




    $(function () {
        function moveQuote() {
            $('.quote').css({
                'right': window.innerWidth - $('.quote').position().left - $('.quote').width(),
                'left': 'auto'
            }).animate({
                'right': '20px'
            }, 4800, "linear", function () {
                $('.quote').css({
                    'left': $('.quote').position().left,
                    'right': 'auto'
                }).animate({
                    'left': '20px'
                }, 4800, "linear", moveQuote);
            });
        }
        moveQuote();
    });




    $('.img-chg-brand')
        .mouseover(function () {
            $(this).attr("src", "img/notnot.svg");
        })
        .mouseout(function () {
            $(this).attr("src", "img/not.svg");
        });

    $('.img-chg')
        .mouseover(function () {
            $(this).attr("src", "../img/notnot.svg");
        })
        .mouseout(function () {
            $(this).attr("src", "../img/not.svg");
        });





    $(function makeDiv() {
        // vary size for fun
        var divsize = ((Math.random() * 100) + 50).toFixed();
        var color = '#' + Math.round(0xffffff * Math.random()).toString(16);
        $newdiv = $('<div/>').css({
            'width': divsize + 'px',
            'height': divsize + 'px',
            'background-color': color
        });

        // make position sensitive to size and document's width
        var posx = (Math.random() * ($(document).width() - divsize)).toFixed();
        var posy = (Math.random() * ($(document).height() - divsize)).toFixed();

        $newdiv.css({
            'position': 'absolute',
            'left': posx + 'px',
            'top': posy + 'px',
            'display': 'none'
        }).appendTo('body').fadeIn(100).delay(1000).fadeOut(500, function () {
            $(this).remove();
            makeDiv();
        });
    })();

        // SCALETHIS1
    $('#scalethis1').mouseenter(function () {
        $(this).css("cursor", "pointer");
        $(this).animate({
            width: "100%",
            height: "100%"
        }, 'slow');
    });

    $('#scalethis1').mouseleave(function () {
        $(this).animate({
            width: "60%"
        }, 'slow');
    });

        // SCALETHIS2
    $('#scalethis2').mouseenter(function () {
        $(this).css("cursor", "pointer");
        $(this).animate({
            width: "100%",
            height: "100%"
        }, 'slow');
    });

    $('#scalethis2').mouseleave(function () {
        $(this).animate({
            width: "60%"
        }, 'slow');
    });

            // SCALETHIS3
    $('#scalethis3').mouseenter(function () {
        $(this).css("cursor", "pointer");
        $(this).animate({
            width: "100%",
            height: "100%"
        }, 'slow');
    });

    $('#scalethis3').mouseleave(function () {
        $(this).animate({
            width: "60%"
        }, 'slow');
    });


    $('.month').on('mouseover', function (event){
        $(this).find('span').fadeIn();
    });

    $('.month').on('mouseout', function (event) {
        $(this).find('span').stop().fadeOut();
    });




});
