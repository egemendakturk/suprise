import React from 'react';
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';

import {EffectCards, Navigation} from 'swiper/modules';
import img1 from './1.jpeg';
import img2 from './2.jpeg';
import img3 from './3.jpeg';
import img4 from './4.jpeg';
import img5 from './5.jpeg';
import img6 from './6.jpeg';
import img7 from './7.jpeg';
import img8 from './8.jpeg';
import img9 from './9.jpeg';
import img10 from './10.jpeg';

const Container = styled.div`
      width: 25vw;
      height: 70vh;
  .swiper-slide{
    background-color: #EEEDDE;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    
  }
    `

const Carousel = () => {
    return (
        <Container>
            <Swiper
            style={{width:'100%', height:'100%'}}
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards , Navigation]}
            navigation={true}
            className="mySwiper"
        >

            <SwiperSlide> <img src={img2} alt={"Surprise"} /> </SwiperSlide>
            <SwiperSlide> <img src={img3} alt={"Surprise"} /> </SwiperSlide>
            <SwiperSlide> <img src={img4} alt={"Surprise"} /> </SwiperSlide>
            <SwiperSlide> <img src={img5} alt={"Surprise"} /> </SwiperSlide>
            <SwiperSlide> <img src={img6} alt={"Surprise"} /> </SwiperSlide>
            <SwiperSlide> <img src={img7} alt={"Surprise"} /> </SwiperSlide>
            <SwiperSlide> <img src={img8} alt={"Surprise"} /> </SwiperSlide>
            <SwiperSlide> <img src={img9} alt={"Surprise"} /> </SwiperSlide>
            <SwiperSlide> <img src={img10} alt={"Surprise"} /> </SwiperSlide>
        </Swiper></Container>
    )
}

export default Carousel