export const settings = {
   infinite: true,
   speed: 500,
   slidesToShow: 5,
   touchThreshold: 100,
   slidesToScroll: 2,
   arrows: true,
   responsive: [
      {
         breakpoint: 1600,
         settings: {
            slidesToShow: 4,
            slidesToScroll: 4
         }
      },
      {
         breakpoint: 1250,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 3
         }
      },
      {
         breakpoint: 1024,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 2
         }
      },
      {
         breakpoint: 700,
         settings: {
            touchThreshold: 10,

            slidesToShow: 1,
            slidesToScroll: 1,

            arrows: false
         }
      }
   ]
};
