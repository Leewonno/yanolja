'use client'

import styled from "styled-components"
import blogger from "@/assets/sns/blogger.svg"
import facebook from "@/assets/sns/facebook.svg"
import instagram from "@/assets/sns/instagram.svg"
import linkedin from "@/assets/sns/linkedin.svg"
import naverblog from "@/assets/sns/naverblog.svg"
import threads from "@/assets/sns/threads.svg"
import tiktok from "@/assets/sns/tiktok.svg"
import twitter from "@/assets/sns/twitter.svg"
import weibo from "@/assets/sns/weibo.svg"
import youtube from "@/assets/sns/youtube.svg"
import Link from "next/link"
import Image from "next/image"

const Section = styled.section`
  background-color: #F5EBE1;
  width: 100%;
`

const Container = styled.div`
  position: relative;
  max-width: 1290px;
  width: 100%;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 70px;
  padding-bottom: 90px;
`

const Group = styled.div`
  display: flex;
  justify-content: space-between;
`

const Left = styled.div`
  
`

const Title = styled.div`
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.625rem;
  letter-spacing: -0.04rem;
  margin-bottom: 26px;
  text-align: center;
`

const IconBox = styled.div`
  display: flex;
  gap: 26px;
`

const IconLink = styled(Link)`
  
`

const Icon = styled(Image)`
  
`

const Right = styled.div`
  
`

const SubLink = styled(Link)`
  text-decoration: none;
`

const SubButton = styled.button`
  background-color: #F25430;
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 50px;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.32px;
  border-radius: 50px;
  border: none;
  cursor: pointer;
`


export default function HomeFifthSection() {
  return (
    <Section>
      <Container>
        <Group>
          <Left>
            <Title>야놀자리서치의 더 많은 소식을 SNS로 만나보세요.</Title>
            <IconBox>
              <IconLink href={'/'}>
                <Icon src={youtube} alt="youtube"/>
              </IconLink>
              <IconLink href={'/'}>
                <Icon src={instagram} alt="youtube"/>
              </IconLink>
              <IconLink href={'/'}>
                <Icon src={facebook} alt="facebook"/>
              </IconLink>
              <IconLink href={'/'}>
                <Icon src={linkedin} alt="linkedin"/>
              </IconLink>
              <IconLink href={'/'}>
                <Icon src={twitter} alt="twitter"/>
              </IconLink>
              <IconLink href={'/'}>
                <Icon src={threads} alt="threads"/>
              </IconLink>
              <IconLink href={'/'}>
                <Icon src={blogger} alt="blogger"/>
              </IconLink>
              <IconLink href={'/'}>
                <Icon src={naverblog} alt="naverblog"/>
              </IconLink>
              <IconLink href={'/'}>
                <Icon src={weibo} alt="weibo"/>
              </IconLink>
              <IconLink href={'/'}>
                <Icon src={tiktok} alt="tiktok"/>
              </IconLink>
            </IconBox>
          </Left>
          <Right>
            <SubLink href={'/'}>
              <SubButton>구독신청하기</SubButton>
            </SubLink>
          </Right>
        </Group>
      </Container>
    </Section>
  )
}