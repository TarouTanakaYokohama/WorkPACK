// ______________________________________________________
// コーヒーのアイコンを表示

import React from "react"
import styled, { keyframes } from "styled-components"
type Props = {
  size?: number // コーヒーのサイズ
}

const DEFAULT_COFFEE_SIZE = 20 // デフォルトサイズ

const swing = keyframes`
    50% {
      transform: rotate(-3deg);
    }
  `

const steamLarge = keyframes`
  
    0% {
      stroke-dashoffset: 13;
      opacity: 0.6;
    }
  
    100% {
      stroke-dashoffset: 39;
      opacity: 0;
    }
    `

const steamSmall = keyframes`

    10% {
      stroke-dashoffset: 9;
      opacity: 0.6;
    }
    80% {
      stroke-dashoffset: 27;
      opacity: 0;
    }
    100% {
      stroke-dashoffset: 27;
      opacity: 0;
    }
    `


// ______________________________________________________
//

const Component: React.FC<Props> = props => {
  const { size } = props
  return (
    <Style
      className="tea"
      width={size || DEFAULT_COFFEE_SIZE}
      height={1.4 * (size || DEFAULT_COFFEE_SIZE)}
      viewBox="0 0 37 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.0819 17H3.02508C1.91076 17 1.01376 17.9059 1.0485 19.0197C1.15761 22.5177 1.49703 29.7374 2.5 34C4.07125 40.6778 7.18553 44.8868 8.44856 46.3845C8.79051 46.79 9.29799 47 9.82843 47H20.0218C20.639 47 21.2193 46.7159 21.5659 46.2052C22.6765 44.5687 25.2312 40.4282 27.5 34C28.9757 29.8188 29.084 22.4043 29.0441 18.9156C29.0319 17.8436 28.1539 17 27.0819 17Z"
        stroke="var(--secondary)"
        strokeWidth="2"
      ></path>
      <path
        d="M29 23.5C29 23.5 34.5 20.5 35.5 25.4999C36.0986 28.4926 34.2033 31.5383 32 32.8713C29.4555 34.4108 28 34 28 34"
        stroke="var(--secondary)"
        strokeWidth="2"
      ></path>
      <path
        id="teabag"
        fill="var(--secondary)"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 25V17H14V25H12C10.3431 25 9 26.3431 9 28V34C9 35.6569 10.3431 37 12 37H18C19.6569 37 21 35.6569 21 34V28C21 26.3431 19.6569 25 18 25H16ZM11 28C11 27.4477 11.4477 27 12 27H18C18.5523 27 19 27.4477 19 28V34C19 34.5523 18.5523 35 18 35H12C11.4477 35 11 34.5523 11 34V28Z"
      ></path>
      <path
        id="steamL"
        d="M17 1C17 1 17 4.5 14 6.5C11 8.5 11 12 11 12"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke="var(--secondary)"
      ></path>
      <path
        id="steamR"
        d="M21 6C21 6 21 8.22727 19 9.5C17 10.7727 17 13 17 13"
        stroke="var(--secondary)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </Style>
  )
}

const Style = styled.svg`

  --secondary: #000;

#teabag {
  transform-origin: top center;
  transform: rotate(3deg);
  animation: ${swing} 1s infinite;
}

#steamL {
  stroke-dasharray: 13;
  stroke-dashoffset: 13;
  animation: ${steamLarge} 2s infinite;
}

#steamR {
  stroke-dasharray: 9;
  stroke-dashoffset: 9;
  animation: ${steamSmall} 2s infinite;
}

`

export default Component