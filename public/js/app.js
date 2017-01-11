
  $(function () {

    var preloadimgs = [];
    $('.js-homelink').each(function () {
      var imgurl = $(this).data('img');
      preloadimgs.push(imgurl);
    });

    $('.home-link-wrap').addClass('is-visible');

    preload(preloadimgs);

    $('.js-gif').hover(function () {
      $(this).data('bg', $(this).css('background-image'));
      $(this).css('background-image', 'url(' + $(this).data('gif') + ')');
    }, function () {
      $(this).css('background-image', $(this).data('bg'));
    });

    $('.js-homelink').hover(function () {
      $(this).parent().parent().find('.home-backdrop').addClass('is-visible').css('background-image', 'url(' + $(this).data('img') + ')');
    }, function () {
      // $(this).parent().parent().find('.home-backdrop').removeClass('is-visible').css('background-image', '');
      $(this).parent().parent().find('.home-backdrop').removeClass('is-visible');
    });

    $('.js-openlist').click(function (e) {
      e.preventDefault();

      $(this).toggleClass('is-active');
      $('.listblockwrap').toggleClass('is-visible');
    });

    $('.mobilenav-toggle').click(function (e) {
      e.preventDefault();
      $(this).hide();
      $('.mobilenav-container').show(0, function () {
        $(this).addClass('is-visible').attr('style', '');
        $('.mobilenav-inner').addClass('is-visible');
      });
    });

    $('.mobilenav-container').click(function (e) {
      // e.preventDefault();
      $('.mobilenav-inner').removeClass('is-visible');
      $('.mobilenav-toggle').delay(100).fadeIn(200).queue(function (next) {
        $('.mobilenav-container').attr('style', '').removeClass('is-visible');
        $('.mobilenav-toggle').attr('style', '');
        next();
      });
    });

    $('.main-nav').hover(function (e) {
      $('.js-hover-nav').first().addClass('is-hovered');
    }, function () {
      $('.js-hover-nav').first().removeClass('is-hovered');
    });

    $('.header-logo').hover(function (e) {
      $('.js-hover-logo').first().addClass('is-hovered');
    }, function () {
      $('.js-hover-logo').first().removeClass('is-hovered');
    });

    $('.filter-link').click(function (e) {
      e.preventDefault();
      $('.filter-link').removeClass('is-active');
      $(this).addClass('is-active');

      var $videoblocks = $('.gridblock.filter');
      $videoblocks.removeClass('is-filtered');
      if ($(this).data('cat')) {
        var cl = $(this).data('cat');
        $videoblocks.addClass('is-filtered');
        $('.' + cl).removeClass('is-filtered');
      }
    });

    $('.gridblock').each(function () {
      $this = $(this);

      if ($this.css('background-image') != 'none') {
        var url = $this.css('background-image');
        url = url.slice(4, -1);
        url = url.replace(/\"/g, '');
        $('<img>').data('block', $this).attr('src', url).load(function () {
          $(this).data('block').addClass('is-visible');
          $(this).remove();
        });
      } else {
        $this.addClass('is-visible');
      }
    });

    handleResize();
    window.onresize = function () {
      handleResize();
    }

    $('a[href*=#]:not([href=#])').click(function () {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(
              /^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +
        ']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });

    $('body.filmdetail .header-logo').addClass('is-visible');
    $('body.filmdetail .main-nav').addClass('is-visible');
    $('body.filmdetail .info-link').addClass('is-visible');

  });

  var handleResize = function () {
    var $vcontainer = $('.video-inner');
    var isPortrait = $vcontainer.hasClass('video-inner--portrait');

    var contwidth = $vcontainer.parent().width();
    var contheight = $vcontainer.parent().height();
    var vheight = 0;
    var vwidth = 0;

    if(isPortrait) {
      vheight = contheight / 100 * 90 ;
      vwidth = vheight / 100 * 70;
      $vcontainer.css({
        'width': vwidth + 'px',
        'height': vheight + 'px'
      });
    } else if (contwidth / contheight > 1.7) {
      vheight =  contheight / 100 * 75;
      vwidth = vheight / 100 * 177.7;
      $vcontainer.css({
        'width': vwidth + 'px',
        'height': vheight + 'px'
      });
    } else {
      vwidth = contwidth / 100 * 90;
      vheight = vwidth / 100 * 56.2;
      $vcontainer.css({
        'width': vwidth + 'px',
        'height': vheight + 'px'
      });
    }

    var newY = (contheight - $vcontainer.outerHeight()) / 2;
    var newX = (contwidth - $vcontainer.outerWidth()) / 2;
    $vcontainer.css({
      'top': newY + 'px',
      'left': newX + 'px'
    });
  }

  var preload = function (arrayOfImages) {
    $(arrayOfImages).each(function () {
      $('<img/>')[0].src = this;
    });
  }
