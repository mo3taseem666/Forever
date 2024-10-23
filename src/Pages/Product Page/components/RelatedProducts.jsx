import React from 'react';
import ProductCard from '../../../Golbal Components/ProductCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // Import slick CSS
import 'slick-carousel/slick/slick-theme.css'; // Import slick theme CSS

export default function RelatedProducts({ arr }) {
   const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      touchThreshold: 100,
      slidesToScroll: 2,
      arrows: true, // Ensure arrows are enabled
      responsive: [
         {
            breakpoint: 1600,
            settings: {
               slidesToShow: 4,
               slidesToScroll: 4,
               infinite: true
            }
         },
         {
            breakpoint: 1250,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
               infinite: true
            }
         },
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               infinite: true
            }
         },
         {
            breakpoint: 700,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               infinite: true
            }
         }
      ]
   };

   return (
      <div className="w-full">
         {/* If the array has fewer items than slidesToShow, render images without the slider */}
         {arr.length < settings.slidesToShow ? (
            <div className="flex justify-center flex-wrap">
               {arr.map(el => (
                  <div key={el._id} className="flex justify-center mx-2">
                     <ProductCard
                        product={el}
                        img={el.image[0]}
                        price={el.price}
                        name={el.name}
                     />
                  </div>
               ))}
            </div>
         ) : (
            <Slider {...settings}>
               {arr.map(el => (
                  <div key={el._id} className="flex justify-center">
                     <ProductCard
                        product={el}
                        img={el.image[0]}
                        price={el.price}
                        name={el.name}
                     />
                  </div>
               ))}
            </Slider>
         )}
      </div>
   );
}
