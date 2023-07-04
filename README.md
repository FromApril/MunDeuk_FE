# 문득 (MunDeuk)


## 문득이란?
어떤 장소에 가면 '문득' 떠오르는 생각이 있지 않나요? <br />
떠오르는 생각, 감정, 아이디어들을 자신의 장소에 남겨보세요! <br />
자신의 생각뿐만 아니라 다른 사람들의 생각도 쪽지로 확인해보실 수 있어요 😄


## Production (alpha version)
'문득'은 웹뷰로 구현되어 있습니다.
추후, Flutter를 사용하여 안드로이드(AOS) 앱과 아이폰 앱으로 배포할 예정입니다.

브라우저 환경에서는 아래 사이트에서 확인해보실 수 있습니다. 

https://mundeuk.vercel.app/



## Frontend Tech Stack
![Next.js](https://img.shields.io/badge/-Nextjs-000000?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/-React-222222?style=flat-square&logo=react)
![React-Query](https://img.shields.io/badge/-React_Query-142111?style=flat-square&logo=react-query)
![Emotion.js](https://img.shields.io/badge/-Emotion.js-f8c7da?style=flat-square&logo=emotion.js)
![Redux](https://img.shields.io/badge/-Recoil-000000?style=flat-square&logo=recoil)
![Github Action](https://img.shields.io/badge/-Github_Action-db0000?style=flat-square&logo=github)
![Jest](https://img.shields.io/badge/-Jest-65d786?style=flat-square&logo=jest)
![Cypress](https://img.shields.io/badge/-Cypress-007acc?logo=cypress)
![Storybook](https://img.shields.io/badge/-Storybook-f8c7da?style=Storybook&logo=storybook)


## 프로젝트 구조

```
📦 src
 ┣ 📂 apis           Axios 클라이언트와 API
 ┣ 📂 components     컴포넌트
 ┃ ┣ 📂 common       공통 컴포넌트
 ┃ ┣ 📂 layouts      레이아웃 컴포넌트
 ┃ ┣ 📂 pages        화면별 컴포넌트
 ┣ 📂 constants      상수 파일정리
 ┣ 📂 hooks          공통 hooks
 ┣ 📂 interfaces     인터페이스
 ┣ 📂 pages          페이지 폴더
 ┣ 📂 queries        React-Query hook을 정리
 ┣ 📂 recoil         Recoil state
 ┣ 📂 styles         스타일 관련
 ┣ 📂 utils          유틸함수
```
