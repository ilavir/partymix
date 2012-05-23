$(function () {
    var containerHeight = $('.container').height();
    $('.container').css('min-height', containerHeight - 178);
});

$('.filter-search').live("click", function () {
    var filterExpanded = $('.filter-expanded').css('display');
    if (filterExpanded == 'none') {
        $('.filter-expanded').animate({height:"toggle"}, 1000);
        $(this).removeClass('filter-search-bg').addClass('filter-search-bga');
    } else {
        $('.filter-expanded').animate({height:"toggle"}, 1000);
        $(this).removeClass('filter-search-bga').addClass('filter-search-bg');
    }
});

$(function () {
    var path = window.location.pathname;
    //alert(path);
    if (path == '/D:/data/work/sites/PartyMix/www_new_new/photo-start.html') {
        $('.photo-start-cont').append('<div class="photo-start"><img src="images/photo-start.jpg" width="1220" height="761" alt="Добро пожаловать на сайт компании &quot;PartyMix&quot;"></div>');
        //$('body').append('<div class="fader"></div>');
        $('.photo-start-cont').delay(3000).animate({height:"hide"}, 1500, function () {
            $('div.fader').fadeOut('slow', function () {
                $('div.fader').remove()
            });
        });
    }
});

$(function () {
        var tovarWidth = $('.tovar-inner-cont .tovar-inner-pic').outerWidth();
        var tovarDescWidth = $('.tovar-inner-cont').width() - tovarWidth - 30;
        $('.tovar-inner-desc').width(tovarDescWidth);
    }
);

//        $('.photo-start').live("click", function() {
//            $(this).stop().animate({height:"10px"}, 1500);
//        });