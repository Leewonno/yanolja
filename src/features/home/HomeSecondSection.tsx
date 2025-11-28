'use client'

import styled from "styled-components";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

import img1 from '@/assets/insight/img1.png'
import img2 from '@/assets/insight/img2.jpg'
import img3 from '@/assets/insight/img3.jpg'
import img4 from '@/assets/insight/img4.png'
import img5 from '@/assets/insight/img5.png'

import { useRef } from "react";
import Image, { StaticImageData } from "next/image";

type DataType = {
  img: StaticImageData;
  category: string;
  title: string;
  date: string;
  url: string;
}

// 샘플 이미지 데이터
const data : DataType[] = [
  {
    img: img4,
    category: "브리프",
    title: "Vol.10 2025년 1~9월 인바운드·아웃바운드 관광 실적 분석",
    date: "2025.11.24",
    url: '',
  },
  {
    img: img5,
    category: "인사이트",
    title: "Vol.33 K-의료관광의 현황과 질적 성장 전략",
    date: "2025.11.12",
    url: '',
  },
  {
    img: img1,
    category: "인사이트",
    title: "Vol.32 해외여행의 동기와 국내여행 재도약 방안: 한국인의 여행 심리를 중심으로",
    date: "2025.10.22",
    url: '',
  },
  {
    img: img2,
    category: "인사이트",
    title: "Vol.31 프로야구를 활용한 지역관광 활성화 방안",
    date: "2025.09.26",
    url: '',
  },
  {
    img: img3,
    category: "인사이트",
    title: "Vol.30 야놀자 매력도 지수: 지표의 개발과 활용, 그리고 의의",
    date: "2025.08.28",
    url: '',
  },
];

// Styled Components
const Section = styled.section`
  width: 1290px;
  display: flex;
  gap: 80px;
  margin-top: 52px;
  margin-bottom: 80px;
`;

const SwiperWrapper = styled.div`
  width: 100%;
`;

const SlideItem = styled.div`
  width: 270px;
  margin-right: 30px;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 60%; // 비율 유지
  overflow: hidden;
  border-radius: 10px;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const Category = styled.p<{ color?: string }>`
  margin: 8px 0 4px;
  font-weight: bold;
  color: ${({ color }) => color || "#000"};
`;

const Title = styled.h5`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const DateText = styled.small`
  color: #999;
  display: block;
  margin-top: 4px;
`;

export default function HomeSecondSection() {

  const swiperRef = useRef<SwiperClass>(null);
  return (
    <Section>
      <SwiperWrapper>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          modules={[Navigation, Scrollbar]}
          spaceBetween={30}
          slidesPerView={3.3}
          loop={false}
          scrollbar={{ draggable: true }}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <SlideItem>
                <a href={item.url}>
                  <ImageContainer>
                    <Image src={item.img} alt={item.title} fill />
                  </ImageContainer>
                  <Category color={item.category === "브리프" ? "orange" : "black"}>
                    {item.category}
                  </Category>
                  <Title>{item.title}</Title>
                  <DateText>{item.date}</DateText>
                </a>
              </SlideItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrapper>
    </Section>
  )
}