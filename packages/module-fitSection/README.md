# fitSection

- 스크롤 한후 몇초 뒤에 사용자가 설정한 section 의 가장 가까운쪽 section 을 화면에 fit 하게 스크롤을 자동으로 시켜준다.

## 폴더 구조

```
├── README.md                 - 리드미 파일
│
├── index.html                - 예시 템플릿 html 파일
├── index.js                  - entry point js
├── calculatePositionTop
│   ├── index.js                - element의 position top 값을 계산
├── getWindowScrollTop
│   ├── index.js                - 윈도우의 scroll 위치값 계산
├── judgeNearValue
│   ├── index.js                - 배열에 있는 integer 한 값중에 target에 가장 가까운 값을 반환
├── moveScroll
│   ├── constant.js             - 상수 및 easing 정의
│   ├── index.js                - 해당 target 위치로 스크롤 이동
├── fitSection
│   ├── index.js                - fitSection 모듈 클래스
└── └── util                    - 유틸 관련 폴더
```

## DEMO TEST USAGE

```sh
$ yarn start:dev
```

브라우저에서 자신의 ip 주소와 포트 9000 번을 통해 접속

## fitSection Module USAGE

```javascript
// default example
new M.FitSection({
  section: ["kakaoContent", "section1", "section2", "section3"]
});
```

## fitSection Module Options

```javascript
// options example
new M.FitSection({
  section: ["kakaoContent", "section1", "section2", "section3"],
  easing: "easeInExpo",
  duration: 1000,
  delay: 500
});
```

| name     | type   | required | default    | description                                     |
| -------- | ------ | -------- | ---------- | ----------------------------------------------- |
| section  | Array  | ✔        | []         | 각 섹션별 id 문자열을 지닌 배열                 |
| easing   | string |          | easeInExpo | easing 문자열 값                                |
| duration | number |          | 1000 (ms)  | 스크롤이 이뤄질때 몇초동안 이뤄질지에 대한 시간 |
| delay    | number |          | 500 (ms)   | 몇초 뒤에 스크롤이 이뤄질지에 대한 시간         |

## easing 종류

- easeInExpo
- easeOutSine

* 추가 가능.

## browser support

- pc : >= IE10
- mo : Andriod : 4.4 이상, iOS : 9.0 이상
