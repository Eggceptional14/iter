import React, { Component } from "react";
import Box from '@mui/material/box';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BasicCard from "./Card";
import styles from '../../styles/Landing.module.css';

// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    >
      NEXT
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    >
      BACK
    </div>
  );
}
export default function SimpleSlider() {
  const slider = React.useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />
  };

  return (
    <Slider ref={slider} {...settings}>
      {products?.map((item, index) => {
        return <BasicCard item={item} />;
      })}
    </Slider>
  );
}


const products = [
  {
    id: 1,
    image: "https://a.cdn-hotels.com/gdcs/production172/d459/3af9262b-3d8b-40c6-b61d-e37ae1aa90aa.jpg?impolicy=fcrop&w=800&h=533&q=medium",
  },
  {
    id: 2,
    image: "https://image.cnbcfm.com/api/v1/image/107084217-1656920960285-gettyimages-1176589866-20180323_8108969.jpeg?v=1656924982",
  },
  {
    id: 3,
    image: "https://www.thediscoveriesof.com/wp-content/uploads/2020/06/Thailand-45-720x540.jpg",
  },
  {
    id: 4,
    image: "https://www.traveloffpath.com/wp-content/uploads/2022/09/viewpoint-phi-phi-thailand.jpg",
  },
  {
    id: 5,
    image: "https://res.klook.com/image/upload/q_85/c_fill,w_750/v1595072605/blog/xldrgpvqobvsvsp38kka.jpg",
  },
  {
    id: 6,
    image: "https://www.telegraph.co.uk/content/dam/Travel/2016/December/marble%20temple%20thailand.jpg",
  },
];

// export default function SimpleSlider() {
//   // const settings = {
//   //   dots: true,
//   //   infinite: true,
//   //   speed: 500,
//   //   slidesToShow: 1,
//   //   slidesToScroll: 1
//   // };

//   return (
//     <CarouselProvider
//       naturalSlideWidth={100}
//       naturalSlideHeight={125}
//       totalSlides={3}
//     >
//       <Slider>
//         <Slide index={0}>I am the first Slide.</Slide>
//         <Slide index={1}>I am the second Slide.</Slide>
//         <Slide index={2}>I am the third Slide.</Slide>
//       </Slider>
//     </CarouselProvider>
//   );
// }