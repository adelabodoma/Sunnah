jQuery(document).ready(function ($) {
  const swiper = new Swiper(".header__swiper", {
    slidesPerView: 1,
    direction: "vertical",
    spaceBetween: 30,
    effect: "fade",
    pagination: {
      el: ".header__swiper .swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".header__swiper .swiper-button-next",
      prevEl: ".header__swiper .swiper-button-prev"
    },
  });


  const newsSwiper = new Swiper(".news-details__gallery__swiper", {
    slidesPerView: 1,
    navigation: {
      nextEl: ".news-details__gallery__swiper__controls .swiper-button-next",
      prevEl: ".news-details__gallery__swiper__controls .swiper-button-prev"
    },
  });

  const sliderSelectors = ['.fairs__swiper', '.temp-fairs__swiper', '.youtube__swiper', '.partners__swiper', '.partners-2__swiper', '.sponsor__swiper', '.sponsor-2__swiper']

  sliderSelectors.forEach(selector => {
    const slide = new Swiper(selector, {
      slidesPerView: 3,
      spaceBetween: 30,
      rtl: true,
      navigation: {
        nextEl: selector + "__controls .swiper-button-next",
        prevEl: selector + "__controls .swiper-button-prev",
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 991px
        991: {
          slidesPerView: 3,
          spaceBetween: 20
        },
      },
      on: {
        init: function () {
        },
        resize: function () {
        }
      }
    })
  })

  // REMOVE SPINNER
  setTimeout(() => {
    $('.loader').fadeOut('slow');
  }, 1000)


  // SEARCH FUNCTIONALITY
  $('#openSearchBtn').on('click', () => {
    $('.header__nav__search').toggle();
    // $('body').addClass('backdrop');
    $('.header__nav__search__form__input').focus()
  })


  $(document).on("click", function (event) {
    const ignore = ['.header__nav__search', '#openSearchBtn', '#openSearchBtnWithMobile'];
    // var $trigger = $(".header__nav__search");
    // var $trigger2 = $("#openSearchBtn");
    // var $trigger3 = $('#openSearchBtnWithMobile')

    if ($(event.target).closest(ignore.join(',')).length === 0) {
      $('.header__nav__search').hide();
      $('body').removeClass('backdrop');
    }
  });

  $('#openSearchBtnWithMobile').on('click', (event) => {
    topFunction();
    event.preventDefault();
    $('.header__nav__search').show().css('bottom', '-85px')
    $('body').addClass('backdrop');
  })

  // $('#closeSearchBtn').on('click', () => {
  //   $('.header__nav__search').toggle();
  //   $('body').removeClass('backdrop');
  // })

  const topButton = document.getElementById("gotToTopButton");
  const headerNav = document.querySelector(".header__mobile-nav");
  topButton.addEventListener('click', topFunction)

  window.onscroll = function () { scrollFunction(topButton, headerNav) };

  mobileNavMenuRender();


  let isAdvancedSearchOpened = false;
  $('#advancedSearch').on('click', (e) => {
    e.preventDefault();
    isAdvancedSearchOpened = !isAdvancedSearchOpened;


    if (isAdvancedSearchOpened) {
      e.target.innerHTML = '- بحث عادي';
      $('#advancedSearchContainer').fadeIn('slow');
    } else {
      e.target.innerHTML = '+ بحث متقدم';
      $('#advancedSearchContainer').fadeOut('slow');
    }
  })


  /***********************************/
  $('#FAQAccordion').collapse({
    toggle: false
  })

  $('#FAQAccordion').on('hidden.bs.collapse', function (event) {
    console.log(event)
  })


  // Form Validation
  $('#subscribeEmail').keydown(function () {
    $('#invalidEmail').hide()
  })
  var triggerTabList = [].slice.call(document.querySelectorAll('#list-tab a'))
  triggerTabList.forEach(function (triggerEl) {
    var tabTrigger = new bootstrap.Tab(triggerEl)

    triggerEl.addEventListener('click', function (event) {
      event.preventDefault()
      tabTrigger.show()
    })
  })
  $(document).ready(function () {

    $(".fa-search").click(function () {
      $(".togglesearch").toggle();
      $("input[type='text']").focus();
    });


    $('.program-details__tabs .list-group-item').on('click', (event) => {
      $('.program-details__tabs .list-group-item').removeClass('active');
      $(event.target).addClass('active')
    })

  });

  $(".toggle-password").click(function () {

    // $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("toggle"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
  $('.responsive').slick({
    dots: true,
    infinite: false,
    arrows: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  }).on('setPosition', function (event, slick) {
    slick.$slides.css('height', slick.$slideTrack.height() + 'px');
  });

  //   $(function() {
  //     $('.numbers').pagination({
  //         items: 400,
  //         itemsOnPage: 20,

  //         cssStyle: 'light-theme'
  //     });
  // });
  $(document).ready(function () {
    $('select').niceSelect();
  });
  $('.responsive3').slick({
    dots: true,
    infinite: false,
    arrows: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  $('.responsive2').slick({
    dots: true,
    infinite: false,
    arrows: true,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });



  $(document).on('ready', function () {
    $(".lazy").slick({
      lazyLoad: 'ondemand', // ondemand progressive anticipated
      infinite: true,
      arrows: true
    });
  });


});


function changeEventContainerPosition() {
  var element_position = $('#footer').offset() && $('#footer').offset().top;
  var screen_height = $(window).height();
  var activation_offset = 0.5;//determines how far up the the page the element needs to be before triggering the function
  var activation_point = element_position - (screen_height * activation_offset);
  var max_scroll_height = $('body').height() - screen_height - 5;//-5 for a little bit of buffer
  var y_scroll_pos = window.pageYOffset;

  var element_in_view = y_scroll_pos > activation_point;
  var has_reached_bottom_of_page = max_scroll_height <= y_scroll_pos && !element_in_view;

  if (element_in_view || has_reached_bottom_of_page) {
    //Do something
    $('.event-details__container').css('bottom', '450px')
  }
}

function scrollFunction(topButton, headerNav) {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topButton.style.display = "block";
    headerNav.style.top = '0px';
  } else {
    topButton.style.display = "none";
    // headerNav.style.top = '60px';
  }

  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    $('.event-details__container').css('bottom', '50px');
    changeEventContainerPosition()
  } else {
    $('.event-details__container').css('bottom', '-250px')
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function mobileNavMenuRender() {
  const navExpand = [].slice.call(document.querySelectorAll('.nav-expand'))
  const backLink = `<li class="nav-item">
	<a class="nav-link nav-back-link" href="javascript:;">
		رجوع
	</a>
</li>`

  navExpand.forEach(item => {
    item.querySelector('.nav-expand-content').insertAdjacentHTML('afterbegin', backLink)
    item.querySelector('.nav-link').addEventListener('click', () => item.classList.add('active'))
    item.querySelector('.nav-back-link').addEventListener('click', () => item.classList.remove('active'))
  })


  // ---------------------------------------
  // not-so-important stuff starts here

  const openMenuBtn = document.getElementById('openMenu');
  const closeMenuBtn = document.getElementById('closeMenu');

  openMenuBtn.addEventListener('click', function () {
    $('.header__mobile').fadeIn('slow');
    $('body').addClass('utl-opened');
  })

  closeMenuBtn.addEventListener('click', function () {
    $('.header__mobile').fadeOut('slow');
    $('body').removeClass('utl-opened');
  })
}


