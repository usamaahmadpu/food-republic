//Hero Section Slider

$(".hero-testimonial").slick({
    dots: true,
    loop:true,
    infinite: true,
    speed: 1000,
    arrows:false,
    autoplay:true,
    slidesToShow: 1,
    adaptiveHeight: false
});


//feature Section Slider
$(".testimonial-row").slick({
  lopp:true,
  // arrows:true,
  prevArrow: "<button type='button' class='pull-left my-prev'><i class='fa-solid fa-arrow-left'></i></button>",
  nextArrow: "<button type='button' class='pull-right my-next'><i class='fa-solid fa-arrow-right'></i></button>",
  infinite: true,
  speed: 300,
  slidesToShow: 3.05,
  centerMode:false,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 1500,
  responsive: [
  {
    breakpoint: 1440,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      // dots: true
      variablWidth:true
    }
  },
  {
    breakpoint: 912,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: true,
      dots: true
    }
  },
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 540,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
  ]
  });

//
$(".busin-testimonial-row").slick({
  lopp:true,
  // arrows:true,
  prevArrow: "<button type='button' class='pull-left busin-prev'><i class='fa-solid fa-arrow-left'></i></button>",
  nextArrow: "<button type='button' class='pull-right busin-next'><i class='fa-solid fa-arrow-right'></i></button>",
  infinite: true,
  speed: 300,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 1500,
  // variableWidth:false,
  responsive: [
  ]
});



      