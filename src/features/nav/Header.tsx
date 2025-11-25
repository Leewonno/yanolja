'use client'

import Image from "next/image";
import styled from "styled-components";
import logo from "@/assets/logo.svg";
import lang_arrow_black from "@/assets/lang_arrow_black.svg";
import Link from "next/link";

const Wrapper = styled.header`
  position: relative;
  display: flex;
  padding: 0 40px;
  width: 100%;
  height: 97px;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #D9D9D9;
`

const LogoBox = styled(Link)`
  position: relative;
  max-width: 180px;
`

const LogoImage = styled(Image)`
  width: 100%;
`

const NavBox = styled.nav`
  display: flex;
`

const NavCategory = styled(Link)`
  width: 160px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`

const NavListBox = styled.div`
  position: absolute;
  top: 97px;
  left: 0;
  padding: 0 40px 20px;
  width: 100%;
  background-color: #FFF;
  border-bottom: 1px solid #D9D9D9;
  z-index: 10;
  display: none;
  justify-content: center;
  padding-top: 20px;

  ${Wrapper}:hover & {
    display: flex;
  }

  ${NavBox}:hover & {
    display: flex;
  }

  &:hover {
    display: flex;
  }
`

const NavList = styled.ul`
  display: block;
  width: 160px;
  text-align: center;
  margin: 0;
  padding: 0;
  list-style: none;
`

const TranslateBox = styled.div`
  max-width: 234px;
  display: flex;
`

const TranslateSelect = styled.select`
  width: 60px;
  margin-left: 35px;
  padding-right: 20px;
  font-size: 18px;
  color: #000;
  background: none;
  border: none !important;
  background-image: url(${lang_arrow_black.src});
  background-position: right center;
  background-repeat: no-repeat;
  text-indent: 1px;
`

const NavListItem = styled.li`
  padding: 10px 0;

  &:hover {
    font-weight: 600;
  }
`

const NavLink = styled(Link)`
  text-decoration: none;
`

export default function Header() {
  return (
    <Wrapper>
      <LogoBox href="/">
        <LogoImage src={logo} alt="Yanolja Logo" width={103} height={22} />
      </LogoBox>
      <NavBox>
        <NavCategory href={'/'}>Research</NavCategory>
        <NavCategory href={'/'}>Datalab</NavCategory>
        <NavCategory href={'/'}>Indexes</NavCategory>
        <NavCategory href={'/'}>About</NavCategory>
        <NavListBox>
          <NavList>
            <NavListItem><NavLink href={'/'}>인사이트</NavLink></NavListItem>
            <NavListItem><NavLink href={'/'}>브리프</NavLink></NavListItem>
            <NavListItem><NavLink href={'/'}>동향보고서</NavLink></NavListItem>
            <NavListItem><NavLink href={'/'}>연구보고서</NavLink></NavListItem>
            <NavListItem><NavLink href={'/'}>구독신청</NavLink></NavListItem>
          </NavList>
          <NavList>
            <NavListItem><NavLink href={'/'}>국내 숙박업 실적 지표</NavLink></NavListItem>
            <NavListItem><NavLink href={'/'}>관광지표 대시보드</NavLink></NavListItem>
            <NavListItem><NavLink href={'/'}>데이터 다운로드</NavLink></NavListItem>
          </NavList>
          <NavList>
            <NavListItem><NavLink href={'/'}>야놀자 매력도 지수</NavLink></NavListItem>
            <NavListItem><NavLink href={'/'}>야놀자 브랜드자산 지수</NavLink></NavListItem>
          </NavList>
          <NavList>
            <NavListItem><NavLink href={'/'}>연구원 소개</NavLink></NavListItem>
            <NavListItem><NavLink href={'/'}>인사말</NavLink></NavListItem>
            <NavListItem><NavLink href={'/'}>연구원 소식</NavLink></NavListItem>
            <NavListItem><NavLink href={'/'}>미디어</NavLink></NavListItem>
            <NavListItem><NavLink href={'/'}>공지사항</NavLink></NavListItem>
          </NavList>
        </NavListBox>
      </NavBox>
      <TranslateBox>
        <TranslateSelect>
          <option value="ko">KR</option>
          <option value="en">EN</option>
        </TranslateSelect>
      </TranslateBox>
      {/* NavBox 마우스 호버 시 나오는 nav */}
    </Wrapper>
  );
}