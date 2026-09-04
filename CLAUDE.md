# 프로젝트: 스마트시티코리아(주) 홈페이지

## 1. 프로젝트 목적
- 스마트시티코리아(주)의 **첫 공식 홈페이지**를 제작한다 (기존 홈페이지 없음)
- 목적: 발주처/협업사가 방문했을 때 회사소개·제품·설치사례를 빠르게 확인하고 떠날 수 있게 한다
- 상세 요구사항·문구·사이트맵·확인기준은 항상 `spec.md`가 기준이며, 이 문서(CLAUDE.md)는 spec.md를 구현할 때 **매 작업마다 지켜야 하는 규칙**만 담는다 (내용이 겹치는 항목은 여기서는 값만, 이유/전체 맥락은 spec.md 참고)

## 2. 전체 구조
- 메인 페이지는 앵커 스크롤 기반 **단일 페이지**로 구성한다
- 콘텐츠가 많거나 개별 링크 공유가 필요한 경우(제품 상세 등)만 예외적으로 별도 페이지(`/products/[slug]` 등)를 허용한다
- 화면 너비 **768px**을 기준으로 데스크톱/모바일 레이아웃을 전환한다 (기기 종류가 아니라 뷰포트 너비 기준)
- 폴더 구조 초안 (구현 착수 전 설계 검토 단계에서 확정/조정):
  ```
  /app
    page.tsx                 # 홈 (앵커 스크롤 단일 페이지)
    /products/[slug]/page.tsx
  /components
    home-hero-section.tsx
    product-card.tsx
    ...
  /content.json
  /public/images/...
  ```

## 3. 기술 스택
- Next.js 사용 (App Router, static export 모드)
- 새로운 프레임워크(Vue, Astro 등)를 임의로 추가하지 않는다
- 배포: 자체 서버 (현재는 학습 목적으로 PC에 리눅스 환경(WSL2) + nginx로 직접 운영, Cloudflare Tunnel로 외부 접속 노출 → 추후 회사 자체 서버/클라우드 서버가 마련되면 그대로 이전)

## 4. 반드시 지켜야 할 규칙

### 4.1 작업 진행 방식 (To-do 기반 문서 참조)
- 작업을 시작하기 전 To-do list로 단계를 세분화한다
- **각 항목을 시작할 때만** 그 항목과 관련된 문서(spec.md의 해당 섹션, brand-colors.html 등)를 열어서 확인한다 — 전체 스펙을 한 번에 다 기억하려 하지 않는다
- `spec.md`에 없는 기능이나 콘텐츠를 임의로 추가하지 않는다
- `spec.md`의 [TODO] 항목은 구현하지 말고, 먼저 사용자에게 물어본다

### 4.2 코드 원칙 — SSOT & DRY
- **같은 값/로직을 두 곳 이상에 복붙하지 않는다 (DRY)**
- **모든 값의 원본은 단 한 곳에만 존재해야 한다 (SSOT)** — 색상은 CSS 변수, 문구는 `content.json`, 반복되는 UI는 공용 컴포넌트로만 관리한다
- 새 코드를 작성하기 전, 이미 존재하는 유사한 컴포넌트/값/함수가 있는지 먼저 확인하고 재사용한다

### 4.3 모듈화
- 파일 하나가 **1500줄을 넘지 않도록** 한다. 넘어갈 경우 기능 단위로 파일을 분리한다 (예: Hero, ProductGrid, Footer 등 섹션별 컴포넌트로 분리)
- 컴포넌트/함수는 하나의 역할만 담당하도록 쪼갠다 (여러 책임을 한 파일에 몰아넣지 않는다)

### 4.4 명명 규칙
- 파일명/컴포넌트명/CSS 클래스명은 `[도메인·위치]-[대상]-[동작·상태]` 구조를 따른다
  - 예: `home-hero-section`, `product-card-hover`, `footer-link-active`

### 4.5 콘텐츠 관리
- 회사소개 문구, 슬로건 등 텍스트 콘텐츠는 컴포넌트에 직접 하드코딩하지 않고 `content.json`으로 분리한다
- 문구를 수정할 때는 `content.json`만 수정한다

### 4.6 디자인 토큰 (색상)
- 색상은 반드시 아래 CSS 변수로만 사용하고, 컴포넌트에 hex값을 직접 하드코딩하지 않는다
- 자세한 사용 가이드/대비(접근성) 기준은 `brand-colors.html` 참고
- Secondary(Orange)는 본문 텍스트 배경으로 쓰지 않는다 (대비 부족, 아이콘/포인트 배지 용도로만 사용)

```css
:root {
  --color-primary: #ED1C26;
  --color-primary-dark: #C4141D;
  --color-primary-tint: #FDEAEB;
  --color-secondary: #F06A22;
  --color-secondary-dark: #CC5314;
  --color-secondary-tint: #FEF0E7;
  --color-ink: #1A0F0F;
  --color-gray-700: #4A4A4A;
  --color-gray-500: #6B6B6B;
  --color-gray-300: #D9D9D9;
  --color-gray-100: #F5F5F5;
}
```

### 4.7 이미지 처리
- 카드/그리드의 이미지 영역은 고정된 가로세로 비율로 통일하고 `object-fit: cover`로 처리한다 (원본 해상도가 달라도 비율 유지)
- 이미지가 없거나 로드 실패 시 기본 이미지로 대체하여 레이아웃이 깨지지 않게 한다

## 5. 참고 문서 경로
- `spec.md` — 상세 요구사항, 사이트맵, 페이지별 확인기준 (항상 최우선 참고 대상)
- `brand-colors.html` — 브랜드 컬러 사용 가이드 및 대비(접근성) 기준
- `content.json` — 실제 텍스트 콘텐츠 (구현 시 생성)

---

**다시 한번:** 코드를 작성하기 전에는 항상 SSOT(값의 원본은 한 곳에만) / DRY(중복 금지) 원칙을 먼저 확인하고, 1500줄·단일 책임 모듈화 규칙을 지킨다.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
