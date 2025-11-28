'use client'

import { useRef, useState } from "react"
import styled from "styled-components"
import { Autoplay, EffectCards } from "swiper/modules"
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react"
import img1 from "@/assets/top_bg/img1.png"
import img2 from "@/assets/top_bg/img2.jpg"
import img3 from "@/assets/top_bg/img3.jpg"
import img4 from "@/assets/top_bg/img4.png"
import img5 from "@/assets/top_bg/img5.jpg"
import img6 from "@/assets/top_bg/img6.png"
import left from "@/assets/icon_arrow_left.svg"
import right from "@/assets/icon_arrow_right.svg"
import pause from "@/assets/icon_pause.svg"
import play from "@/assets/icon_play.svg"
import arrow_right from "@/assets/arrow_right_white.svg"
import bg_chart from "@/assets/bg_chart.svg"
import bg_glass from "@/assets/bg_glass.svg"
import datalab from "@/assets/datalab.svg"
import Image, { StaticImageData } from "next/image"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './first-styles.css';
import Link from "next/link"


const Section = styled.section`
  width: 1290px;
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
`

const SwiperBox = styled.div`
  position: relative;
  width: 970px;
  height: 350px;
  padding-top: 50px;
  padding-bottom: 36px;
  box-sizing: content-box;
`

const SwiperImage = styled(Image)`
  border-radius: 30px;
`

const ControlBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
`

const PrevButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14px;
  height: 14px;
  background-image: url(${left.src});
  background-position: center;
  background-repeat: no-repeat;
  margin-right: 22px;
  cursor: pointer;
`

const NextButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14px;
  height: 14px;
  background-image: url(${right.src});
  background-position: center;
  background-repeat: no-repeat;
  margin-left: 22px;
  cursor: pointer;
`

const PauseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14px;
  height: 14px;
  background-image: url(${pause.src});
  background-position: center;
  background-repeat: no-repeat;
  margin-left: 22px;
  cursor: pointer;
`

const PlayButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14px;
  height: 14px;
  background-image: url(${play.src});
  background-position: center;
  background-repeat: no-repeat;
  margin-left: 10px;
  cursor: pointer;
`

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  height: 350px;
  padding: 40px 60px;
`

const Category = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.375rem;
  letter-spacing: -0.0225rem;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 6px;
`

const Content = styled.div`
  font-size: 2.75rem;
  font-weight: 600;
  line-height: 3.25rem;
  letter-spacing: -0.055rem;
  color: #fff;
`

const Detail = styled(Link)`
  background-color: #121111;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 50px;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.32px;
  color: #fff;
  border-radius: 50px;
  width: 167px;
`

const LinkBox = styled.div`
  position: relative;
  width: calc(25% - 40px);
`

const ListBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 50px;
`

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  gap: 10px;
  padding: 24px;
  color: #fff;
  background-repeat: no-repeat;
  background-size: 130px;
  background-position: bottom right;
`

const ItemText = styled.div`
  font-size: 1.25rem;
  line-height: 1.4;
  font-weight: 600;
  color: #fff;
`

const ItemLink = styled(Link)`
  opacity: 0.6;
  font-size: 14px;
  color: #fff;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  height: 20px;
`

const ItemIcon = styled.div`
  width: 14px;
  height: 14px;
  background-image: url(${arrow_right.src});
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;
  display: inline-block;
`

const Dot = styled.div`
  display: inline-block;
  border-radius: 100px;
  width: 4px;
  height: 4px;
  background-color: #FFF;
`

type DataType = {
  img: StaticImageData;
  url: string;
  content: string;
}

const data: DataType[] = [
  {
    img: img1,
    url: '/',
    content: 'Vol.32 해외여행의 동기와 국내여행 재도약 방안: 한국인의 여행 심리를 중심으로 '
  },
  {
    img: img2,
    url: '/',
    content: 'Vol.31 프로야구를 활용한 지역관광 활성화 방안'
  },
  {
    img: img3,
    url: '/',
    content: 'Vol.30 야놀자 매력도 지수: 지표의 개발과 활용, 그리고 의의'
  },
  {
    img: img4,
    url: '/',
    content: 'Vol.29 인구구조와 경제기조로 본 골프산업의 미래'
  },
  {
    img: img5,
    url: '/',
    content: 'Vol.28 동북아 항공 네트워크 분석을 통해 본 지역공항 활성화: 외항사 유치의 가능성과 과제'
  },
  {
    img: img6,
    url: '/',
    content: 'Vol.33 K-의료관광의 현황과 질적 성장 전략'
  }
]

export default function HomeFirstSection() {

  const [activeIndex, setActiveIndex] = useState<number>(0);
  const swiperRef = useRef<SwiperClass>(null);

  return (
    <Section>
      <SwiperBox>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          // 자동재생, 페이지네이션, 카드효과
          modules={[Autoplay, EffectCards]}
          // 카드효과
          effect="cards"
          cardsEffect={{
            perSlideOffset: 8, // 카드 겹침 정도
            perSlideRotate: 0,
            rotate: false,
            slideShadows: false, // 카드 그림자
          }}
          slidesOffsetAfter={40}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          loop={true}>
          {data.map((value, index) => (
            <SwiperSlide key={index} virtualIndex={index}>
              <ContentBox>
                <Category><Dot/> 인사이트</Category>
                <Content>{value.content}</Content>
                <Detail href={value.url}>자세히보기</Detail>
              </ContentBox>
              <SwiperImage alt="top_bg" src={value.img} fill />
            </SwiperSlide>
          ))}
        </Swiper>
        <ControlBox>
          {/* prev/next 제어 */}
          <PrevButton onClick={() => swiperRef.current?.slidePrev()} />
          <div>
            {data.map((_, index) => (
              <span
                key={index}
                onClick={() => swiperRef.current?.slideToLoop(index)}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  background: activeIndex === index ? "#000" : "#fff",
                  cursor: "pointer",
                  display: "inline-block",
                  border: '1px solid #000',
                  opacity: activeIndex === index ? 1 : 0.2,
                  marginRight: 12,
                }}
              />
            ))}
          </div>
          {/* autoplay 제어 */}
          <PlayButton onClick={() => swiperRef.current?.autoplay.start()} />
          <PauseButton onClick={() => swiperRef.current?.autoplay.stop()} />
          {/* prev/next 제어 */}
          <NextButton onClick={() => swiperRef.current?.slideNext()} />
        </ControlBox>
      </SwiperBox>
      <LinkBox>
        <ListBox>
          <ListItem style={{backgroundColor:'#F54B1E', backgroundImage:`url(${bg_chart.src})`, backgroundSize: '90px auto'}}>
            <ItemText>야놀자 매력도 지수</ItemText>
            <ItemLink href="">바로가기<ItemIcon /></ItemLink>
          </ListItem>
          <ListItem style={{backgroundColor:'#E43608', backgroundImage:`url(${bg_glass.src})`, backgroundSize: '90px auto'}}>
            <ItemText>야놀자 브랜드자산 지수</ItemText>
            <ItemLink href="">바로가기<ItemIcon /></ItemLink>
          </ListItem>
          <ListItem style={{backgroundColor:'#F54B1E', backgroundImage:`url(${datalab.src})`, backgroundSize: '90px auto'}}>
            <ItemText>데이터랩</ItemText>
            <ItemLink href="">바로가기<ItemIcon /></ItemLink>
          </ListItem>
        </ListBox>
      </LinkBox >
    </Section >
  )
}