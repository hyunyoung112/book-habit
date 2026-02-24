# 🚀 Claude Code 워크플로우 - Next.js 16

Next.js 16 + App Router + VAC 패턴 + 상태관리 워크플로우입니다.

---

## 🔄 워크플로우

```
/task → (/plan) → /execute → /test → (/test-all)
         선택적                        배포 전
```

---

## 📋 Commands

| Command | 역할 | 코드 수정 |
|:--------|:-----|:--------:|
| `/task` | 탐색/분석 | ❌ |
| `/plan` | 계획 수립 | ❌ |
| `/execute` | 실행 | ✅ |
| `/test` | 현재 작업 테스트 | ✅ |
| `/test-all` | 전체 테스트 | ✅ |

---

## 🛠 기술 스택

### Core
- **Next.js 16** - App Router, Turbopack, Cache Components
- **React 19.2** - View Transitions, useEffectEvent
- **TypeScript 5.x**

### 상태 관리
| 종류 | 라이브러리 | 용도 |
|:-----|:----------|:-----|
| Server State | **TanStack Query** | API 데이터, 캐싱 |
| Client State | **Zustand** | UI 상태, 모달 |
| Form State | **React Hook Form** | 폼 입력 |
| URL State | **nuqs** | 쿼리 파라미터 |

### UI
- **shadcn/ui** - 컴포넌트 라이브러리
- **Tailwind CSS** - 스타일링
- **Sonner** - Toast 알림

---

## 📁 프로젝트 구조

```
src/
├── app/                    # App Router
├── components/
│   ├── ui/                 # shadcn/ui
│   └── features/           # VAC 패턴
│       └── user/
│           ├── *.tsx           # View
│           ├── *.container.tsx # Container
│           └── *.action.ts     # Action
├── stores/                 # Zustand (Client State)
├── hooks/
│   └── queries/            # TanStack Query (Server State)
├── lib/
│   └── validations/        # Zod 스키마
└── types/
```

---

## 🎯 VAC 패턴

| 파일 | 역할 |
|:-----|:-----|
| `*.tsx` | View - UI 렌더링만 |
| `*.container.tsx` | Container - 로직/상태 |
| `*.action.ts` | Action - Server Action |

---

## 📦 설치

```bash
# 상태 관리
npm install zustand @tanstack/react-query

# 폼 + 유효성
npm install react-hook-form @hookform/resolvers zod

# UI
npm install sonner

# DevTools
npm install -D @tanstack/react-query-devtools

# shadcn/ui 컴포넌트
npx shadcn@latest add button input card dialog
```

---

## 🔗 참고

- [Next.js 16 Docs](https://nextjs.org/docs)
- [TanStack Query](https://tanstack.com/query)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [shadcn/ui](https://ui.shadcn.com/)
