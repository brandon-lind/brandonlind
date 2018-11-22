/*
	Story by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {
  const	$window = $(window);


  const $body = $('body');


  const $wrapper = $('#wrapper');

  // Breakpoints.
  breakpoints({
    xlarge: ['1281px', '1680px'],
    large: ['981px', '1280px'],
    medium: ['737px', '980px'],
    small: ['481px', '736px'],
    xsmall: ['361px', '480px'],
    xxsmall: [null, '360px'],
  });

  // Play initial animations on page load.
  $window.on('load', () => {
    window.setTimeout(() => {
      $body.removeClass('is-preload');
    }, 100);
  });

  // Browser fixes.

  // IE: Flexbox min-height bug.
  if (browser.name == 'ie') {
    (function () {
      let flexboxFixTimeoutId;

      $window.on('resize.flexbox-fix', () => {
        const $x = $('.fullscreen');

        clearTimeout(flexboxFixTimeoutId);

        flexboxFixTimeoutId = setTimeout(() => {
          if ($x.prop('scrollHeight') > $window.height()) { $x.css('height', 'auto'); } else { $x.css('height', '100vh'); }
        }, 250);
      }).triggerHandler('resize.flexbox-fix');
    }());
  }

  // Object fit workaround.
  if (!browser.canUse('object-fit')) {
    (function () {
      $('.banner .image, .spotlight .image').each(function () {
        const $this = $(this);


        const $img = $this.children('img');


        const positionClass = $this.parent().attr('class').match(/image-position-([a-z]+)/);

        // Set image.
        $this
          .css('background-image', `url("${$img.attr('src')}")`)
          .css('background-repeat', 'no-repeat')
          .css('background-size', 'cover');

        // Set position.
        switch (positionClass.length > 1 ? positionClass[1] : '') {
          case 'left':
            $this.css('background-position', 'left');
            break;

          case 'right':
            $this.css('background-position', 'right');
            break;

          default:
          case 'center':
            $this.css('background-position', 'center');
            break;
        }

        // Hide original.
        $img.css('opacity', '0');
      });
    }());
  }

  // Smooth scroll.
  $('.smooth-scroll').scrolly();
  $('.smooth-scroll-middle').scrolly({ anchor: 'middle' });

  // Wrapper.
  $wrapper.children()
    .scrollex({
      top:	'30vh',
      bottom:	'30vh',
      initialize() {
        $(this).addClass('is-inactive');
      },
      terminate() {
        $(this).removeClass('is-inactive');
      },
      enter() {
        $(this).removeClass('is-inactive');
      },
      leave() {
        const $this = $(this);

        if ($this.hasClass('onscroll-bidirectional')) { $this.addClass('is-inactive'); }
      },
    });

  // Items.
  $('.items')
    .scrollex({
      top:	'30vh',
      bottom:	'30vh',
      delay:	50,
      initialize() {
        $(this).addClass('is-inactive');
      },
      terminate() {
        $(this).removeClass('is-inactive');
      },
      enter() {
        $(this).removeClass('is-inactive');
      },
      leave() {
        const $this = $(this);

        if ($this.hasClass('onscroll-bidirectional')) { $this.addClass('is-inactive'); }
      },
    })
    .children()
    .wrapInner('<div class="inner"></div>');

  // Gallery.
  $('.gallery')
    .wrapInner('<div class="inner"></div>')
    .prepend(browser.mobile ? '' : '<div class="forward"></div><div class="backward"></div>')
    .scrollex({
      top:	'30vh',
      bottom:	'30vh',
      delay:	50,
      initialize() {
        $(this).addClass('is-inactive');
      },
      terminate() {
        $(this).removeClass('is-inactive');
      },
      enter() {
        $(this).removeClass('is-inactive');
      },
      leave() {
        const $this = $(this);

        if ($this.hasClass('onscroll-bidirectional')) { $this.addClass('is-inactive'); }
      },
    })
    .children('.inner')
  // .css('overflow', 'hidden')
    .css('overflow-y', browser.mobile ? 'visible' : 'hidden')
    .css('overflow-x', browser.mobile ? 'scroll' : 'hidden')
    .scrollLeft(0);

  // Style #1.
  // ...

  // Style #2.
  $('.gallery')
    .on('wheel', '.inner', function (event) {
      const	$this = $(this);


      let delta = (event.originalEvent.deltaX * 10);

      // Cap delta.
      if (delta > 0) { delta = Math.min(25, delta); } else if (delta < 0) { delta = Math.max(-25, delta); }

      // Scroll.
      $this.scrollLeft($this.scrollLeft() + delta);
    })
    .on('mouseenter', '.forward, .backward', function (event) {
      const $this = $(this);


      const $inner = $this.siblings('.inner');


      const direction = ($this.hasClass('forward') ? 1 : -1);

      // Clear move interval.
      clearInterval(this._gallery_moveIntervalId);

      // Start interval.
      this._gallery_moveIntervalId = setInterval(() => {
        $inner.scrollLeft($inner.scrollLeft() + (5 * direction));
      }, 10);
    })
    .on('mouseleave', '.forward, .backward', function (event) {
      // Clear move interval.
      clearInterval(this._gallery_moveIntervalId);
    });

  // Lightbox.
  $('.gallery.lightbox')
    .on('click', 'a', function (event) {
      const $a = $(this);


      const $gallery = $a.parents('.gallery');


      const $modal = $gallery.children('.modal');


      const $modalImg = $modal.find('img');


      const href = $a.attr('href');

      // Not an image? Bail.
      if (!href.match(/\.(jpg|gif|png|mp4)$/)) { return; }

      // Prevent default.
      event.preventDefault();
      event.stopPropagation();

      // Locked? Bail.
      if ($modal[0]._locked) { return; }

      // Lock.
      $modal[0]._locked = true;

      // Set src.
      $modalImg.attr('src', href);

      // Set visible.
      $modal.addClass('visible');

      // Focus.
      $modal.focus();

      // Delay.
      setTimeout(() => {
        // Unlock.
        $modal[0]._locked = false;
      }, 600);
    })
    .on('click', '.modal', function (event) {
      const $modal = $(this);


      const $modalImg = $modal.find('img');

      // Locked? Bail.
      if ($modal[0]._locked) { return; }

      // Already hidden? Bail.
      if (!$modal.hasClass('visible')) { return; }

      // Lock.
      $modal[0]._locked = true;

      // Clear visible, loaded.
      $modal
        .removeClass('loaded');

      // Delay.
      setTimeout(() => {
        $modal
          .removeClass('visible');

        setTimeout(() => {
          // Clear src.
          $modalImg.attr('src', '');

          // Unlock.
          $modal[0]._locked = false;

          // Focus.
          $body.focus();
        }, 475);
      }, 125);
    })
    .on('keypress', '.modal', function (event) {
      const $modal = $(this);

      // Escape? Hide modal.
      if (event.keyCode == 27) { $modal.trigger('click'); }
    })
    .prepend('<div class="modal" tabIndex="-1"><div class="inner"><img src="" /></div></div>')
    .find('img')
    .on('load', function (event) {
      const $modalImg = $(this);


      const $modal = $modalImg.parents('.modal');

      setTimeout(() => {
        // No longer visible? Bail.
        if (!$modal.hasClass('visible')) { return; }

        // Set loaded.
        $modal.addClass('loaded');
      }, 275);
    });
}(jQuery));
