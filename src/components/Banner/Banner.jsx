import React from 'react';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Banner.css';
import img from '@static/banner-img.jpg';

const bannerData = [
  {
    id: 1,
    title: 'Поставки товара из Китая',
    label: 'Dolorem officiis temporibus.',
  },
  {
    id: 2,
    title: 'Поставки товара из Китая',
    label: 'Officia non provident dolor esse et neque.',
  },
  {
    id: 3,
    title: 'Поставки товара из Китая',
    label: 'Ut recusandae vel vitae molestiae id soluta.',
  },
  {
    id: 4,
    title: 'Поставки товара из Китая',
    label: 'Qui vel consequatur recusandae illo repellendus.',
  },
  {
    id: 5,
    title: 'Поставки товара из Китая',
    label: 'Placeat odit velit itaque voluptatem.',
  },
  {
    id: 6,
    title: 'Поставки товара из Китая',
    label: 'Adipisci officiis repudiandae.',
  },
];

function Banner(props) {
  const { link1, link2 } = props;
  const isLink = link1 || link2;

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: 'progressive',
  };

  return (
    <div className="slider-wrapper">
      <Slider {...settings}>
        {bannerData.map((slide) => (
          <div className="slick-slide" key={slide.id}>
            <div className="slick-slide-info-section">
              <h2 className="slick-slide-title">{slide.title}</h2>
              {isLink && (
                <div className="slick-slide-links-container">
                  {link1 && (
                    <a href={link1} className="slick-slide-link-outlined">
                      Узнать больше
                    </a>
                  )}
                  {link2 && (
                    <a href={link2} className="slick-slide-link">
                      Узнать больше
                    </a>
                  )}
                </div>
              )}
            </div>

            <img className="slick-slide-image" src={img} alt="banner-img" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Banner;
