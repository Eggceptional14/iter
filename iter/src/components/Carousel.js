import React, { useState, Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BasicCard from "./Card";
import { Carousel, Card, Stack, Button } from "react-bootstrap";
import { 
  ArrowForwardIos,
  ArrowBackIos,
} from '@mui/icons-material';

const images = [
  {
    id: 1,
    src: 'https://a.cdn-hotels.com/gdcs/production172/d459/3af9262b-3d8b-40c6-b61d-e37ae1aa90aa.jpg?impolicy=fcrop&w=800&h=533&q=medium',
    alt: "Image 1"
  },
  {
    id: 2,
    src: 'https://a.cdn-hotels.com/gdcs/production172/d459/3af9262b-3d8b-40c6-b61d-e37ae1aa90aa.jpg?impolicy=fcrop&w=800&h=533&q=medium',
    alt: "Image 2"
  },
  {
    id: 3,
    src: 'https://a.cdn-hotels.com/gdcs/production172/d459/3af9262b-3d8b-40c6-b61d-e37ae1aa90aa.jpg?impolicy=fcrop&w=800&h=533&q=medium',
    alt: "Image 3"
  },
  {
    id: 4,
    src: 'https://a.cdn-hotels.com/gdcs/production172/d459/3af9262b-3d8b-40c6-b61d-e37ae1aa90aa.jpg?impolicy=fcrop&w=800&h=533&q=medium',
    alt: "Image 4"
  },
  {
    id: 5,
    src: 'https://a.cdn-hotels.com/gdcs/production172/d459/3af9262b-3d8b-40c6-b61d-e37ae1aa90aa.jpg?impolicy=fcrop&w=800&h=533&q=medium',
    alt: "Image 5"
  },
  {
    id: 6,
    src: 'https://a.cdn-hotels.com/gdcs/production172/d459/3af9262b-3d8b-40c6-b61d-e37ae1aa90aa.jpg?impolicy=fcrop&w=800&h=533&q=medium',
    alt: "Image 6"
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <ArrowForwardIos style={{ color: 'black'}}/>,
  prevArrow: <ArrowBackIos style={{ color: 'black'}}/>,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function MultiCarousel() {

  return (
    <div className="container-fluid">
      <Carousel 
        show={3} 
        style={{ height: 500 }}
        nextIcon={<ArrowForwardIos style={{ color: 'black'}}/>}
        prevIcon={<ArrowBackIos style={{ color: 'black'}}/>}
        indicators={false}
      >
        {images.map((item, index) => (
          <Carousel.Item style={{ height: 500, borderRadius: '30px' }}>
            <Stack
              direction="horizontal"
              className="h-100 justify-content-center align-items-center"
              gap={3}
            >
              <Card 
                style={{ 
                  width: "15rem", 
                  height: "18rem", 
                  borderWidth: 0,
                  borderRadius: 30, 
                  backgroundColor: '#FFF4E3',
                  boxShadow: '0px 5px 4px 0px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Card.Img 
                  variant="top" 
                  src={item.src} 
                  style={{ width: 'inherit', height: "10rem", borderTopLeftRadius: 30, borderTopRightRadius: 30 }} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                </Card.Body>
              </Card>

              <Card 
                style={{ 
                  width: "15rem", 
                  height: "18rem", 
                  borderWidth: 0,
                  borderRadius: 30, 
                  backgroundColor: '#FFF4E3',
                  boxShadow: '0px 5px 4px 0px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Card.Img 
                  variant="top" 
                  src={item.src} 
                  style={{ width: 'inherit', height: "10rem", borderTopLeftRadius: 30, borderTopRightRadius: 30 }} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                </Card.Body>
              </Card>

              <Card 
                style={{ 
                  width: "15rem", 
                  height: "18rem", 
                  borderWidth: 0,
                  borderRadius: 30, 
                  backgroundColor: '#FFF4E3',
                  boxShadow: '0px 5px 4px 0px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Card.Img 
                  variant="top" 
                  src={item.src} 
                  style={{ width: 'inherit', height: "10rem", borderTopLeftRadius: 30, borderTopRightRadius: 30 }} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                </Card.Body>
              </Card>

              <Card 
                style={{ 
                  width: "15rem", 
                  height: "18rem", 
                  borderWidth: 0,
                  borderRadius: 30, 
                  backgroundColor: '#FFF4E3',
                  boxShadow: '0px 5px 4px 0px rgba(0, 0, 0, 0.1)',
                }}
              >
                <Card.Img 
                  variant="top" 
                  src={item.src} 
                  style={{ width: 'inherit', height: "10rem", borderTopLeftRadius: 30, borderTopRightRadius: 30 }} />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                </Card.Body>
              </Card>
            </Stack>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}


//=========================================================
// Carousel.js
// import React, { Component } from "react";
// import Slider from 'react-slick';
// import Box from '@mui/material/box';
// import BasicCard from "./Card";
// import styles from '../../styles/Home.module.css';

// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

// export default function Carousel() {
  
//   const slider = React.useRef(null);
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//   };

//   const hotelCards = [
//     {
//       imageSrc:
//         'https://images.unsplash.com/photo-1559508551-44bff1de756b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
//       title: 'Studio Room',
//       description: 'Lorem ipsum dolor sit amet, consectur dolori',
//       pricingText: 'USD 50/Day',
//       features: ['Free Wifi', 'Free breakfast'],
//     },
//     {
//       imageSrc:
//         'https://images.unsplash.com/photo-1616940844649-535215ae4eb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
//       title: 'Deluxe Room',
//       description: 'Lorem ipsum dolor sit amet, consectur dolori',
//       pricingText: 'USD 80/Day',
//       features: ['Free Wifi', 'Free breakfast'],
//     },
//     {
//       imageSrc:
//         'https://images.unsplash.com/photo-1599619351208-3e6c839d6828?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80',
//       title: 'King Deluxe Room',
//       description: 'Lorem ipsum dolor sit amet, consectur dolori',
//       pricingText: 'USD 150/Day',
//       features: ['Free Wifi', 'Free breakfast', 'Discounted Meals'],
//     },
//     {
//       imageSrc:
//         'https://images.unsplash.com/photo-1461092746677-7b4afb1178f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
//       title: 'Royal Suite',
//       description: 'Lorem ipsum dolor sit amet, consectur dolori',
//       pricingText: 'USD 299/Day',
//       features: [
//         'Free Wifi',
//         'Free breakfast',
//         'Discounted Meals',
//         "MacBook for work use (hotel's property)",
//       ],
//     },
//     {
//       imageSrc:
//         'https://images.unsplash.com/photo-1461092746677-7b4afb1178f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
//       title: 'Royal Suite',
//       description: 'Lorem ipsum dolor sit amet, consectur dolori',
//       pricingText: 'USD 299/Day',
//       features: [
//         'Free Wifi',
//         'Free breakfast',
//         'Discounted Meals',
//         "MacBook for work use (hotel's property)",
//       ],
//     },
    
//   ]


//   return (
//     <Slider ref={slider} {...settings}>
//       {hotelCards?.map((item, index) => {
//         return <BasicCard item={item} />;
//       })}
//     </Slider>
//   )
// }

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}
//     >
//       NEXT
//     </div>
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}
//     >
//       BACK
//     </div>
//   );
// }

//=========================================================

// function MultiCarousal(props) {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };

//   const images = [
//     'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//     'https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
//     'https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//     'https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//     'https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//     'https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//     'https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//     'https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//     'https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//     'https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//     'https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//     'https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
//   ];

//   return (
//     <Slider {...settings}>
//       <div>
//         <h3>1</h3>
//       </div>
//       <div>
//         <h3>2</h3>
//       </div>
//       <div>
//         <h3>3</h3>
//       </div>
//       <div>
//         <h3>4</h3>
//       </div>
//       <div>
//         <h3>5</h3>
//       </div>
//       <div>
//         <h3>6</h3>
//       </div>
//     </Slider>
//   );
// }
// export default MultiCarousal;