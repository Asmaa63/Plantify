import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ScreenShot.css'

function ScreenShot() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true, // تفعيل وضع الوسط
  focusOnSelect: true,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className='ScreenShot'>
      <h2>Mobile <span> App </span></h2>
      <Slider {...settings}>
        {[...Array(7).keys()].map((index) => (
          <div key={index}>
            <img src={`${process.env.PUBLIC_URL}/Images/${index + 1}.png`} alt={`Slide ${index + 1}`} className={`image-${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ScreenShot;
