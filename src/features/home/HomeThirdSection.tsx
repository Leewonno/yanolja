'use client'

import Image from "next/image"
import Link from "next/link"
import styled from "styled-components"
import arrow_right from "@/assets/arrow_right.svg"

const Section = styled.section`
  width: 100%;
  background-color: #F5EBE1;
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
  padding-top: 80px;
  padding-bottom: 80px;
`

const Title = styled(Link)`
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 2rem;
  letter-spacing: -0.035rem;
  margin-bottom: 18px;
  text-decoration: none;
`

const TitleIcon = styled(Image)`
  
`

export default function HomeThirdSection() {
  return (
    <Section>
      <Container>
        <ContentContainer>
          <Title href={'/'}>
            연구보고서 <TitleIcon src={arrow_right} alt="title_icon" />
          </Title>
        </ContentContainer>
      </Container>
    </Section>
  )
}