'use client'

import styled from "styled-components";

const Component = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <Component>
      {children}
    </Component>
  );
}