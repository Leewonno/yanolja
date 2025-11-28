'use client'

import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"
import arrow_right from "@/assets/arrow_right.svg"
import icon_mail from "@/assets/icon_mail.svg"
import { useState } from "react"

const Section = styled.section`
  width: 100%;
`

const Container = styled.div`
  position: relative;
  max-width: 1290px;
  width: 100%;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
`

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 80px;
  margin-top: 80px;
  margin-bottom: 80px;
`

const Left = styled.div`
  position: relative;
  width: calc(75% - 40px);
`

const TabWrapper = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  gap: 12px;
`

const Tab = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;
  color: #999999;
  margin: 0;
  padding: 0;
  list-style: none;
`

const TabLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: flex-start;
`

const TabLinkIcon = styled(Image)`
  width: 17px;
  height: 17px;
`

const TabItem = styled.li`
  position: relative;
  letter-spacing: -0.32px;
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 2rem;
  letter-spacing: -0.035rem;
  white-space: nowrap;
  cursor: pointer;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -20px;
    width: 1px;
    height: 26px;
    background: #D9D9D9;
  }
`

const NewsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const NewsItem = styled(Link)`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  text-decoration: none;
`

const NewsTitle = styled.div`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: -0.32px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    text-decoration: underline;
  }
`

const NewsDate = styled.div`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.00875rem;
  color: #999999;
`

const Right = styled.div`
  position: relative;
  width: calc(25% - 40px);
`

const RightLink = styled(Link)`
  text-decoration: none;
  display: flex;
`

const RightTitle = styled.div`
  margin-bottom: 18px;
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 2rem;
  letter-spacing: -0.035rem;
`

const RightIcon = styled(Image)`
  
`

const RightImageBox = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 16px;
  gap: 28px;
  width: 100%;
  height: auto;
  background-color: #C8B9FF;
  border: none;
  cursor: pointer;
`

const RightImageContainer = styled.div`
  max-width: 118px;
  max-height: 103px;
  margin-top: 54px;
`

const RightImage = styled(Image)`
  position: relative;
  width: calc(75% - 40px);
`

const RightText = styled.div`
  margin-bottom: 47px;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.32px;
  padding: 0 30px;
  color: #FFFFFF;
`

export default function HomeFourthSection() {
  const [division, setDivision] = useState<string>("언론보도")

  return (
    <Section>
      <Container>
        <ContentContainer>
          <Left>
            <TabWrapper>
              <Tab>
                <TabItem style={division === '언론보도' ? { color: '#000' } : { color: '#999999' }} onClick={() => setDivision("언론보도")}>언론보도</TabItem>
                <TabItem style={division === '보도자료' ? { color: '#000' } : { color: '#999999' }} onClick={() => setDivision("보도자료")}>보도자료</TabItem>
              </Tab>
              <TabLink href={'/'}>
                더보기 <TabLinkIcon src={arrow_right} alt="tab_right_icon" />
              </TabLink>
            </TabWrapper>
            {division === '언론보도' ?
              <NewsBox>
                <NewsItem href={'/'}>
                  <NewsTitle>[파이낸셜리뷰] 한국 관광지 500 패널 토론, “객관성 높아… 지역 불균형 해소 위한 정책 근간 돼야</NewsTitle>
                  <NewsDate>2025.11.27</NewsDate>
                </NewsItem>
                <NewsItem href={'/'}>
                  <NewsTitle>[파이낸셜리뷰] 한국 관광지 500선 분석, ‘지역 편중·연계 부재’ 심각… 인바운드 확대를 위한 허브-스포크 전략 시급</NewsTitle>
                  <NewsDate>2025.11.27</NewsDate>
                </NewsItem>
                <NewsItem href={'/'}>
                  <NewsTitle>[파이낸셜리뷰] 야놀자리서치, 한국 관광지 500 발표… ‘감성평가’로 양적 지표 한계 극복, 강소 관광지 발굴 나선다</NewsTitle>
                  <NewsDate>2025.11.27</NewsDate>
                </NewsItem>
                <NewsItem href={'/'}>
                  <NewsTitle>[디지틀조선일보] 광안리·해운대, 감성평가 기반 한국 관광지 1·2위 차지</NewsTitle>
                  <NewsDate>2025.11.27</NewsDate>
                </NewsItem>
                <NewsItem href={'/'}>
                  <NewsTitle>[한경닷컴] 부산이 이정도였나…'여행 감성·경험'까지 평가했더니 1·2위 휩쓸어</NewsTitle>
                  <NewsDate>2025.11.27</NewsDate>
                </NewsItem>
              </NewsBox>
              :
              <NewsBox>
                <NewsItem href={'/'}>
                  <NewsTitle>[보도자료] 야놀자리서치, ‘여행자 감성평가 기반 한국관광지 500’ 첫 공개</NewsTitle>
                  <NewsDate>2025.11.27</NewsDate>
                </NewsItem>
                <NewsItem href={'/'}>
                  <NewsTitle>[보도자료] 외래 관광객 역대 최대…관광수지는 적자 지속</NewsTitle>
                  <NewsDate>2025.11.25</NewsDate>
                </NewsItem>
                <NewsItem href={'/'}>
                  <NewsTitle>[[보도자료] 야놀자리서치, ‘감성 기반 한국 관광지 500’ 세미나 개최—데이터기반 관광의 질적 성장 도모</NewsTitle>
                  <NewsDate>2025.11.20</NewsDate>
                </NewsItem>
                <NewsItem href={'/'}>
                  <NewsTitle>[보도자료] 해외여행 쏠림, 국내여행 전환의 해법은 ‘경험가치’다</NewsTitle>
                  <NewsDate>2025.11.10</NewsDate>
                </NewsItem>
                <NewsItem href={'/'}>
                  <NewsTitle>[보도자료] 여름 성수기 '반등'에도... 호텔 호황 VS. 레저 부진</NewsTitle>
                  <NewsDate>2025.10.30</NewsDate>
                </NewsItem>
              </NewsBox>
            }
          </Left>
          <Right>
            <RightLink href={'/'}>
              <RightTitle>
                데이터 <RightIcon src={arrow_right} alt="right_icon" />
              </RightTitle>
            </RightLink>
            <RightImageBox>
              <RightImageContainer>
                <RightImage src={icon_mail} alt="mail_icon" />
              </RightImageContainer>
              <RightText>
                야놀자리서치가 활용한 데이터를<br />
                편하게 사용해보세요!
              </RightText>
            </RightImageBox>
          </Right>
        </ContentContainer>
      </Container>
    </Section>
  )
}