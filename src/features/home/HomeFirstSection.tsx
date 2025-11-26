'use client'

import styled from "styled-components"
import { Pagination, Virtual } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import img1 from "@/assets/top_bg/img1.png"
import img2 from "@/assets/top_bg/img2.jpg"
import img3 from "@/assets/top_bg/img3.jpg"
import img4 from "@/assets/top_bg/img4.png"
import img5 from "@/assets/top_bg/img5.jpg"
import img6 from "@/assets/top_bg/img6.png"
import Image, { StaticImageData } from "next/image"

const Section = styled.section`
  width: 1290px;
  display: flex;
  gap: 80px;
`

const SwiperBox = styled.div`
  position: relative;
  width: calc(77% - 40px);
  height: 350px;
`

const ContentBox = styled.div`
  padding-top: 50px;
  padding-bottom: 36px;
`

const SwiperImage = styled(Image)`
  object-fit: cover;
  border-radius: 30px;
  background: rgba(0, 0, 0, 0.3);
`

type DataType = {
  img: StaticImageData;
  url: string;
}

const data: DataType[] = [
  {
    img: img1,
    url: '/',
  },
  {
    img: img2,
    url: '/'
  },
  {
    img: img3,
    url: '/'
  },
  {
    img: img4,
    url: '/'
  },
  {
    img: img5,
    url: '/'
  },
  {
    img: img6,
    url: '/'
  }
]

export default function HomeFirstSection() {

  const pagination = {
    clickable: true,
    // renderBullet: function (index, className) {
    //   return '<span class="' + className + '">' + (index + 1) + '</span>';
    // },
  };

  return (
    <Section>
      <SwiperBox>
        <Swiper
          modules={[Pagination]}
          pagination={pagination}
          coverflowEffect={{}} spaceBetween={20}
          slidesPerView={3}      // 일단 1개로 고정
          style={{ width: '100%', height: '100%' }}>
          {data.map((value, index) => (
            <SwiperSlide key={index} virtualIndex={index}>
              <ContentBox>
                <SwiperImage alt="top_bg" src={value.img} fill />
              </ContentBox>
            </SwiperSlide>
          ))}
        </Swiper>

      </SwiperBox>
    </Section>
  )
}