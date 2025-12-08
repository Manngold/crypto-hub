# 🚀 Crypto Hub

> **전 세계 주요 암호화폐의 실시간 시세, 변동률, 차트를 한 곳에서 조회하는 웹 애플리케이션**

---

## 📌 프로젝트 개요

**Crypto Hub**는 다양한 암호화폐의 가격 정보를 실시간으로 조회할 수 있는  
**Crypto Price Tracking 웹앱**입니다.

React 19 기반의 최신 프론트엔드 스택을 활용하며,  
성능·재사용성·유지보수성을 고려한 구조를 지향합니다.

---

## ✨ 주요 기능

### 🟦 1. 실시간 코인 시세 조회

- 주요 코인(BTC, ETH 등) 가격 제공
- 실시간 가격 갱신(Polling 또는 WebSocket 예정)
- 변동률 시각 강조(상승/하락 색상)

### 🟩 2. 코인 상세 정보 페이지

- 코인별 상세 가격 및 정보
- 라인 차트를 활용한 가격 추세 시각화
- 24h 변화량, 시가총액 등 주요 메트릭 제공

### 🟨 3. 대시보드

- 주요 코인 리스트 테이블
- 가격 / 변동률 / 시가총액을 한눈에 조회
- 코인 상세 페이지로 이동

### 🟧 4. 검색 기능

- 코인 이름 또는 심볼 검색
- 자동완성(선택적으로 구현 가능)

### 🟥 5. 성능 최적화

- React 19 Suspense 기반 렌더링 전략
- API 호출 최소화
- 컴포넌트 메모이제이션

---

## 🧱 프로젝트 구조

```bash
crypto-hub/
│
├── src/
│   ├── components/      # UI 공용 컴포넌트
│   ├── features/        # 도메인 기능 모듈 (coin, chart, search 등)
│   ├── pages/           # Dashboard, CoinDetail 등 페이지
│   ├── routes/          # React Router 설정
│   ├── hooks/           # Custom Hooks
│   ├── utils/           # Utility 함수
│   ├── styles/          # SCSS 모듈 및 전역 스타일
│   └── main.tsx         # 엔트리 포인트
│
└── public/
```

```bash
# Repository Clone
git clone https://github.com/Manngold/crypto-hub.git

# 프로젝트 폴더 이동
cd crypto-hub

# 패키지 설치
npm install

# 개발 서버 실행
npm run dev
```

# 📈 개발 로드맵 (Development Roadmap)

## 🚩 Phase 1 — 베이스 구축

- [x] React 19 + TypeScript + Vite 초기 세팅
- [x] React Router 구성
- [x] Prettier 설정
- [x] 기본 레이아웃 구축
- [x] UI 컴포넌트 구조 정의

## 🚩 Phase 2 — 핵심 기능 구현

- [ ] 코인 리스트 조회
- [ ] 실시간 가격 업데이트
- [ ] 코인 상세 페이지 + 차트
- [ ] 검색 기능 구현

## 🚩 Phase 3 — 고도화 기능 개발

- [ ] 즐겨찾기(Watchlist) 기능
- [ ] 다크 모드 적용
- [ ] Skeleton UI 적용
- [ ] API 캐싱 전략 적용
- [ ] 반응형 UI 최적화

---

# 👨‍💻 개발 방향 (Development Direction)

## ✔ 최신 React 19 기능 적극 활용

- React Suspense 기반 비동기 처리
- Streaming Rendering 적용
- use() 기반 데이터 패칭 구조 도입

## ✔ 컴포넌트 재사용성과 유지보수성 강화

- Card / Table / Chart / Chip 등 공용 UI 컴포넌트 구성
- features 기반 폴더 구조로 도메인 단위 분리
- API Layer, hooks, utils 모듈화

## ✔ 성능 최적화 전략

- Code Splitting / Lazy Loading 적용
- React memo, useMemo, useCallback을 통한 렌더링 최소화
- API 호출 최소화를 위한 캐싱 전략 도입

## ✔ 안정성과 개발 경험 향상

- 최소한의 TypeScript 도입으로 타입 안정성 확보
- 명확한 데이터 스키마 정의
- 예외 처리 및 오류 대응 구조 강화
