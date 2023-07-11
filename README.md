# 문득 (MunDeuk)


## 문득이란?
어떤 장소에 가면 '문득' 떠오르는 생각이 있지 않나요? <br />
떠오르는 생각, 감정, 아이디어들을 자신의 장소에 남겨보세요! <br />
자신의 생각뿐만 아니라 다른 사람들의 생각도 쪽지로 확인해보실 수 있어요 😄


<br />

## Production (alpha version)
'문득'은 웹뷰로 구현되어 있습니다.
추후, Flutter를 사용하여 안드로이드(AOS) 앱과 아이폰 앱으로 배포할 예정입니다.

브라우저 환경에서는 아래 사이트에서 확인해보실 수 있습니다. 

https://mundeuk.vercel.app/


<br />

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


<br />

## 프로젝트 구조

```
📦 src
 ┣ 📂 apis           Axios 클라이언트와 API
 ┣ 📂 components     컴포넌트
 ┃ ┣ 📂 common       공통 컴포넌트
 ┃ ┣ 📂 layouts      레이아웃 컴포넌트
 ┃ ┣ 📂 pages        페이지별 컴포넌트
 ┣ 📂 constants      상수 파일정리
 ┣ 📂 hooks          공통 hooks
 ┣ 📂 interfaces     인터페이스
 ┣ 📂 pages          페이지 폴더
 ┣ 📂 queries        React-Query hook을 정리
 ┣ 📂 recoil         Recoil state
 ┣ 📂 styles         스타일 관련
 ┣ 📂 utils          유틸함수
```

<br />

## 컴포넌트
컴포넌트는 크게 3가지 기준에 맞춰서 `components` 폴더에 정리했습니다.
1) 앱 전반적으로 사용되는 공통 컴포넌트
2) 레이아웃 화면에 사용되는 컴포넌트
3) 페이지 화면에 사용되는 컴포넌트

컴포넌트를 만드는 기준은 아래와 같습니다.
1) 여러 페이지에서 사용이 되는가?
2) 반복적으로 사용되는 UI 인가?
3) 페이지에서 의미론적으로 구분해야 하는가?
4) 뷰 로직이 많아져서 정리할 필요가 있는가?

<br />

## 비즈니스 로직
비즈니스 로직이 사용되는 곳은 아래와 같이 정리해볼 수 있습니다.
1) 페이지 단위
2) 섹션 단위 (페이지에서 의미론적으로 구분할 수 있는 단위)
3) 컴포넌트 단위

`컨테이너 - 프레젠테이션` 패턴을 기존에 많이 사용했었는데요.
- 비즈니스 로직이 있는 컴포넌트와 없는 컴포넌트를 명확하게 구분할 수 있다는 장점이 있지만,
- ~Container라는 네이밍을 지어야 한다는 점과 별도의 폴더로 관리해야 한다는 부분,
- 비즈니스 로직이 적게 사용하는 컴포넌트를 컨테이너로 굳이 컨테이너로 구분지어야 하는 의문점이 생기는 부분,
- 어떤 컨테이너는 비즈니스 로직을 비대하게 많이 가질 수 있다는 부분
- 따라서 컨테이너 내부에서 비즈니스 로직을 분리시켜 또 다른 컨테이너를 가져야 한다는 부분

<br />

위와 같은 불편함을 느꼈습니다. 그래서, 컴포넌트를 
- 비즈니스 로직이 있는 것
- 비즈니스 로직이 없는 것으로 나누고 `components` 폴더에서 관리하도록 했습니다.

<br />

어떤 컴포넌트는 비즈니스 로직을 많이 가지고 있을 수 있습니다.
- 그러면, 이 컴포넌트는 뷰 로직과 비즈니스 로직이 방대해져서 가독성이 안 좋은 코드를 가지게 됩니다.
- 그래서, 비즈니스 로직을 별도의 파일(`logics.ts`)로 분리하여 커스텀 훅을 사용하여, 뷰에 필요한 인터페이스를 제공하도록 했습니다.


<br />

**버튼 컴포넌트 폴더**
```
┣ 📂 Button     
┃ ┣ 📜 index.tsx             // 컴포넌트 파일 (뷰 로직 + 커스텀 훅 인터페이스)
┃ ┣ 📜 index.stories.tsx     // 스토리 파일
┃ ┣ 📜 logics.ts             // 비즈니스 로직 (커스텀 훅으로 정리)
```

<br />

페이지 단위(또는 레벨) 도 마찬가지 입니다.
- 페이지 단위는 여러 섹션 또는 여러 컴포넌트로 구성이 되어 있을 텐데요.
- 페이지 단위에서 필요한 비즈니스 로직이 있을 수 있습니다.
- 위에서와 마찬가지로 비즈니스 로직을 별도의 파일(`logics.ts`)로 분리하여 커스텀 훅으로 뷰에 필요한 인터페이스를 제공하면 됩니다.

<br />

**home 페이지**
```
┣ 📂 pages
  ┣ 📂 home     
  ┃ ┣ 📜 index.page.tsx        // 페이지 파일 (뷰 로직 + 커스텀 훅 인터페이스)
  ┃ ┣ 📜 logics.ts             // 비즈니스 로직 (커스텀 훅으로 정리)
```

<br /><br />

```
정리하자면, 페이지 / 컴포넌트의 비즈니스 로직을 개별적인 커스텀 훅을 만들어서 뷰에 인터페이스를 제공합니다.

MVVM 패턴이라고도 볼 수 있는데,
- Model은 뷰 로직에 필요한 데이터 (State / Props / State, Props를 가공한 데이터)
- View는 뷰 로직 (페이지 or 컴포넌트)
- ViewModel은 Model을 변경하는 Controller

View는 페이지 / 컴포넌트 파일 (index.page.tsx / index.tsx)
Model, ViewModel은 비즈니스 로직 파일 (logics.ts) 에서 제공합니다.
```

<br />

## 커스텀 훅 정리
위와 구조로 프로젝트를 설계하면, 커스텀 훅이 많이 사용되는데요.
이에 따라 커스텀 훅의 종류를 정리해줄 필요가 있습니다.

1) 페이지/컴포넌트 커스텀 훅
2) 공통 커스텀 훅
3) React-Query 커스텀 훅

<br />

1)은 페이지/컴포넌트에서 사용하는 비즈니스 로직을 관리합니다.
- 페이지/컴포넌트와 연관성이 높기 때문에,
- 페이지, 컴포넌트 폴더 하위에 파일을 생성하는 것이 개발/관리 측면에서 효율적으로 보입니다.

<br />

2)는 공통적인 로직을 관리하는 커스텀 훅입니다.
- 무한 스크롤링, API 통신을 레퍼해서 특정 로직을 수행, 팝업을 관리하는 로직 등... 
- 페이지 전반적인 곳에서 사용할 수 있는 로직을 가지고 있습니다.
- `hooks` 폴더 하위에서 관리하는 것이 바람직해보입니다.

<br />

3)은 서버 데이터를 관리하는 React-Query 커스텀 훅입니다.
- `hooks/queries`와 같이 `hooks`폴더 하위에 관리해도 되지만, 
- 개인적으로는 별도로 `queries` 폴더에 관리하는 것이 좋을 것 같아서 `hooks`폴더와 분리시켰습니다.






