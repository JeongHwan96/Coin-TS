<p align="center">
  <h1 align="center">React로 코인 시세 알아보기 ✨</h1>

  <p align="center">
React와 TypeScript를 사용하여 여러가지의 코인 시세를 알아보는 페이지 입니다  <br> 현재까지 진행 중인 작업물은 <a href="https://jeonghwan96.github.io/Coin-TS/">여기서</a>에서 확인하실 수 있습니다.
  <br/>
  내용 추가와 수정이 있다면 변경되는대로 바로바로 올리겠습니다! 😊 
  <br/> 
  <br>
  (해당 프로젝트는 React와 TypeScript, react-query 등을 공부하기 위해 노마드코더의 React JS 마스터 클래스 강좌를 보면서 진행 하였습니다)
  <br/>
  <br/>
  🛠  Technical Skills 
  <br/>
  <br/>
    <img src="https://img.shields.io/badge/-React-0088CC?style=flat&logo=React"/>
     <img src="https://img.shields.io/badge/-TypeScript-CC2277?style=flat&logo=TypeScript"/>
  <img src="https://img.shields.io/badge/-Recoil-F7F8E0?style=flat&logo=Recoil"/>
  <br/>
  <br/>
  
</p>

## Project Introduction ❤️

- 여러가지의 코인 시세를 알아보는 페이지 입니다
- React, TypeScript, Recoil 등을 사용하여 제작 하였습니다
- 감사합니다~❤️❤️

## Simple Description ✨
<p align="center">
  <img src="https://user-images.githubusercontent.com/76175940/185831523-81e866d3-6031-4f8d-a0a3-68f1847906d8.gif">
  </p>
  
## Develop History 📜

2022-08-10

- 다크모드, 라이트 모드 변경 할 수 있도록 하는 기능 구현 시작
- 코인 상세 페이지에서 일년, 한달, 일주일 등 시간 별로 가격을 볼 수 있는 창 구현

2022-07-22

- css 작업
- 코인 상세 페이지에 home 버튼 추가 하여 바로 홈 화면으로 갈 수 있도록 설정

2022-07-15

- Home 화면 구현 완료
- API 사용을 위한 API.tsx 파일 생성

const BASE_URL = `https://api.coinpaprika.com/v1`;<br>

export function fetchCoins() {<br>
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());<br>
}<br>

export function fetchCoinInfo(coinId: string) {<br>
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =><br>
    response.json()<br>
  );<br>
}<br>

export function fetchCoinTickers(coinId: string) {<br>
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((response) =><br>
    response.json()<br>
  );<br>
}<br>

export function fetchCoinHistory(coinId: string) {<br>
  return fetch(<br>
    `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`<br>
  ).then((response) => response.json());<br>
}


2022-07-14

- 스타일 적용을 위해 styled.d.ts파일과 theme.tsx 파일 생성

//styled.d.ts<br>
import "styled-components";

declare module "styled-components" {<br>
  export interface DefaultTheme //외부에서 사용 가능하게 export 작성{<br>  
    bgColor: string; //배경색<br> 
    textColor: string; //글씨 색상<br>
    accentColor?: string; //Title 색상 <br>
    boxColor?: string; //코인 리스트 박스 색상 <br>
  }<br>
}<br>

//theme.tsx
import { DefaultTheme } from "styled-components";<br>

export const darkTheme: DefaultTheme = {<br>
  bgColor: "#2f3640",<br>
  textColor: "whitesmoke",<br>
  accentColor: "#8c7ae6",<br>
  boxColor: "#43474e",<br>
};

- Home 화면 구현 시작

2022-07-13

- Router를 사용하여 경로 설정

    // "react-router-dom": "^6.3.0" 버전 사용

import React from "react";<br>
import { BrowserRouter, Routes, Route } from "react-router-dom";<br>
import Coin from "./routes/Coin";<br>
import Coins from "./routes/Coins";<br>
import Price from "./routes/Price";<br>
import Chart from "./routes/Chart";<br>

interface IRouterProps {}<br>

const Router = ({}: IRouterProps) => {<br>
  return (<br>
    <BrowserRouter basename="Coin-TS"><br>
      <Routes><br>
        <Route path="/:coinId/" element={<Coin />}>  //각각의 코인을 클릭 시 해당 정보만 보기 위한 경로 설정<br>
          <Route path={`price`} element={<Price />}></Route> // 코인의 가격을 보기위한 경로 설정<br>
          <Route path={`chart`} element={<Chart coinId={""} />}></Route> // 코인의 차트를 보기위한 경로 설정<br>
        </Route><br>
        <Route path="/" element={<Coins />}></Route> 메인화면을 가기위한 경로 설정<br>
      </Routes><br>
    </BrowserRouter><br>
  );<br>
};<br>

export default Router;

