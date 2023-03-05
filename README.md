<h1 align="middle">😋</h1>
<h2 align="middle">level1 - 점심 뭐 먹지</h2>
<p align="middle">우아한테크코스 레벨1 점심 뭐 먹지 미션</p>

---

## [🎮 점심 뭐 먹지 페이지 링크](https://hyeryongchoi.github.io/javascript-lunch/)

---

## 🚀 1단계 - 음식점 목록

### 🙏 페어(페어프로그래밍)

<table>
  <tr>
    <td align="center" width="130px">
      <a href="https://github.com/HyeryongChoi" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/24777828?v=4" alt="첵스(최혜령) 프로필" />
      </a>
    </td>
    <td align="center" width="130px">
      <a href="https://github.com/jeonjeunghoon" target="_blank">
        <img src="https://avatars.githubusercontent.com/u/51967731?v=4" alt="애슐리(허서영) 프로필" />
      </a>
    </td>
  </tr>
  <tr>
    <td align="center">
      <a href="https://github.com/HyeryongChoi" target="_blank">
        첵스(최혜령)
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/ashleysyheo" target="_blank">
        애슐리(허서영)
      </a>
    </td>
  </tr>
</table>

### 📍 학습 목표

- 어플리케이션을 컴포넌트 단위로 모듈화하여 개발
  - UI를 컴포넌트 단위로 생각하고 개발하는 연습
  - 재사용할 수 있는 컴포넌트를 고민해보기
- 웹 UI 환경에서의 테스트 기초
  - 컴포넌트 단위 테스트 (1단계)
  - 사용자 관점에서 중요하다고 생각하는 기능을 스스로 정의하고 E2E 테스트로 검증해보기 (2단계)
- TypeScript의 기본 문법을 익히며 필요성을 경험

### 🎯 기능 요구 사항

캠퍼스 주변의 점심 식사 스팟 목록을 관리하는 앱을 만든다.

- 음식점 목록을 확인할 수 있다.
  - 카테고리별로 필터링해서 확인할 수 있다.
  - 이름순/거리순으로 정렬해서 확인할 수 있다.
- 음식점 목록에 새로운 음식점을 추가할 수 있다.
  - 음식점의 카테고리, 이름, 거리(도보 이동 시간), 설명, 참고 링크를 입력해서 추가할 수 있다.
  - 카테고리, 거리는 셀렉트 박스, 이름/설명/참고 링크는 텍스트 인풋을 사용한다.
  - 카테고리, 이름, 거리는 입력 필수.
    - 카테고리는 "한식", "중식", "일식", "아시안", "양식", "기타" 중 하나를 선택한다.
    - 거리는 캠퍼스로부터 도보로 걸리는 시간(분). 5, 10, 15, 20, 30 중 하나를 선택한다.
  - 설명, 참고 링크는 옵션. 입력하지 않아도 음식점을 추가할 수 있어야 한다.
  - 입력값이 잘못되었을 때 사용자에게 알려주는 방식은 자유롭게 구현한다.
- 새로고침해도 추가한 음식점 정보들이 유지되어야 한다.
