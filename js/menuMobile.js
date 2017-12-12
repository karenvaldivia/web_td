$(document).ready(function () {

  var numero = 1;

  $('#btnMenu').on('click', function (e) {

    e.preventDefault();
    if (numero == 1) {
      $('.menu-mobile .menu-principal').animate({left:0}, 300, function () {
        numero = 0;
      });
    } else {
      $('.menu-mobile .menu-principal').animate({left:'-100%'}, 300, function () {
        numero = 1;
      })
    }

  })

  $('.menu-mobile .menu-principal a').on('click', function () {

    $('.menu-mobile .menu-principal').animate({left:'-100%'}, 300, function () {
      numero = 1;
    })

  })

});







// $(document).ready(function () {

//   var fixedHeader = $('#fixedHeader');

//   $(window).on('scroll', function () {

//     var difOffsetTop = $('#dif').offset().top;

//     if ($(window).scrollTop() >= difOffsetTop) {

//       fixedHeader.css('margin-top', 0);

//     }else if ($(window).scrollTop() <= difOffsetTop/2) {

//       fixedHeader.css('margin-top', '-68px');
//     }
//   })
// });


$(document).ready(function () {

  var fixedHeader = $('#fixedHeader');

  $(window).on('scroll', function () {

    var difOffsetTop = $('#dif').offset().top;

    if ($(window).scrollTop() >= difOffsetTop) {

      fixedHeader.css('margin-top', 0);

    }else if ($(window).scrollTop() <= difOffsetTop/2) {

      fixedHeader.css('margin-top', '-200px');
    }
  })
});

