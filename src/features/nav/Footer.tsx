'use client'

import styled from "styled-components";
import logo_white from "@/assets/logo_white.svg";
import plus from "@/assets/plus_white.svg";
import alarm from "@/assets/float_icon.png";
import Image from "next/image";
import Link from "next/link";

const Wrapper = styled.footer`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 52px 88px 95px;
  background: #161515;
`

const RightBox = styled.div`
  display: flex;
  flex-direction: column;
`

const ImageBox = styled.div`
  position: relative;
  width: 143px;
  height: 17px;
`

const LogoImage = styled(Image)``

const PolicyBox = styled.div`
  margin-top: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
  opacity: 0.45;
`

const PolicyLink = styled(Link)`
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  color: #fff;

`

const CompanyBox = styled.div`
  display: flex;
  opacity: 0.45;
`

const ItemList = styled.ul`
  display: flex;
`

const Item = styled.li`
  color: #fff;
  font-size: 0.875rem;
  list-style: none;
  position: relative;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-right: 18px;
  white-space: nowrap;

  &:not(:nth-child(1))::before {
    content: '';
    display: block;
    position: absolute;
    left: -9px;
    top: 50%;
    width: 1px;
    height: 11px;
    transform: translate(0, -50%);
    background-color: #3E3E3E;
  }
`

const AddressBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  opacity: 0.45;
`

const HightlightLink = styled(Link)`
  color: #ffd800;
  text-decoration: none;
  white-space: nowrap;
`

const CopyrightBox = styled.div`
  margin-top: 10px;
  opacity: 0.45;
`

const CopyrightText = styled.div`
  color: #fff;
  font-weight: 300;
`


const LeftBox = styled.div`
  position: relative;

  &::after{
    content: '';
    display: block;
    position: absolute;
    width: 10px;
    height: 10px;
    top: 50%;
    right: 19px;
    transform: translate(0, -50%);
    background-image: url(${plus.src});
    background-position: center;
  }
`

const FamilySite = styled.select`
  width: 230px;
  height: 48px;
  margin-left: 30px;
  padding: 0 24px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 30px;
  border: none;
  opacity: 0.6;
  font-size: 0.875rem;
  color: #fff;
  appearance: none;
`

const MenuBox = styled(Link)`
  position: fixed;
  z-index: 1;
  right: 0;
  bottom: 90px;
  padding: 20px 10px 50px 10px;
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  color: #FFF;
  writing-mode: sideways-lr;
  background-color:#F54B1E;
  background-image: url(${alarm.src});
  background-position: bottom 16px center;
  background-repeat: no-repeat;
  border-top-left-radius: 8px;
  border-top-right-radius: 0;
  border-bottom-left-radius: 8px;
  text-decoration: none;
`

export default function Footer() {
  return (
    <Wrapper>
      <MenuBox href={'/'}>
        구독신청
      </MenuBox>
      <RightBox>
        <ImageBox>
          <LogoImage src={logo_white} alt="logo" fill />
        </ImageBox>
        <PolicyBox>
          <PolicyLink href={'/'}>개인정보 처리방침</PolicyLink>
        </PolicyBox>
        <CompanyBox>
          <ItemList>
            <Item>(주)야놀자리서치</Item>
            <Item>대표이사. 박성식</Item>
            <Item>사업자등록번호. 308-86-02788</Item>
          </ItemList>
        </CompanyBox>
        <AddressBox>
          <ItemList>
            <Item>
              <HightlightLink href={'/'}>
                Y-Siren (Compliance/Whistleblowing)
              </HightlightLink>
            </Item>
            <Item>E-mail. yanoljaresearch@yanolja.com</Item>
            <Item>서울특별시 강남구 테헤란로 108길 42 MDM타워 4층</Item>
          </ItemList>
        </AddressBox>
        <CopyrightBox>
          <CopyrightText>
            © YANOLJA RESEARCH. All rights reserved.
          </CopyrightText>
        </CopyrightBox>
      </RightBox>
      <LeftBox>
        <FamilySite>
          <option>Family site</option>
          <option>경희대 H&T 애널리틱스 센터</option>
          <option>Purdue CHRIBA</option>
          <option>야놀자</option>
          <option>야놀자클라우드</option>
          <option>인터파크</option>
          <option>산하정보기술</option>
          <option>트리플</option>
          <option>데일리호텔</option>
          <option>데이블</option>
          <option>eZee Technosys</option>
        </FamilySite>
      </LeftBox>
    </Wrapper>
  );
}