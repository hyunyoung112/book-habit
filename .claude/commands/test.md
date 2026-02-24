# Test (현재 작업 테스트) - Next.js 16

**방금 구현한 기능에 대한 테스트를 작성하고 실행합니다.**

## 테스트 대상별 패턴

### 1. Zustand Store 테스트
```typescript
import { renderHook, act } from '@testing-library/react';
import { useUIStore } from '@/stores/use-ui-store';

describe('useUIStore', () => {
  beforeEach(() => {
    // 스토어 초기화
    useUIStore.setState({
      isCreateModalOpen: false,
      isSidebarOpen: true,
    });
  });

  it('모달 열기/닫기', () => {
    const { result } = renderHook(() => useUIStore());

    expect(result.current.isCreateModalOpen).toBe(false);

    act(() => {
      result.current.openCreateModal();
    });
    expect(result.current.isCreateModalOpen).toBe(true);

    act(() => {
      result.current.closeCreateModal();
    });
    expect(result.current.isCreateModalOpen).toBe(false);
  });

  it('사이드바 토글', () => {
    const { result } = renderHook(() => useUIStore());

    expect(result.current.isSidebarOpen).toBe(true);

    act(() => {
      result.current.toggleSidebar();
    });
    expect(result.current.isSidebarOpen).toBe(false);
  });
});
```

### 2. TanStack Query 테스트
```typescript
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useUsers, useCreateUser } from '@/hooks/queries/use-users';

// 테스트용 Wrapper
const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { retry: false },
    },
  });
  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

describe('useUsers', () => {
  it('사용자 목록 조회 성공', async () => {
    // Mock fetch
    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve([{ id: '1', name: '홍길동' }]),
    });

    const { result } = renderHook(() => useUsers(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    expect(result.current.data).toHaveLength(1);
    expect(result.current.data?.[0].name).toBe('홍길동');
  });

  it('사용자 목록 조회 실패', async () => {
    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: false,
    });

    const { result } = renderHook(() => useUsers(), {
      wrapper: createWrapper(),
    });

    await waitFor(() => {
      expect(result.current.isError).toBe(true);
    });
  });
});

describe('useCreateUser', () => {
  it('사용자 생성 성공', async () => {
    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ id: '1', name: '홍길동' }),
    });

    const { result } = renderHook(() => useCreateUser(), {
      wrapper: createWrapper(),
    });

    await act(async () => {
      await result.current.mutateAsync({ name: '홍길동', email: 'hong@test.com' });
    });

    expect(result.current.isSuccess).toBe(true);
  });
});
```

### 3. View 컴포넌트 테스트 (렌더링)
```typescript
import { render, screen } from '@testing-library/react';
import { UserFormView } from './user-form';

describe('UserFormView', () => {
  const defaultProps = {
    isPending: false,
    onSubmit: vi.fn(),
  };

  it('폼 요소가 렌더링된다', () => {
    render(<UserFormView {...defaultProps} />);

    expect(screen.getByLabelText('이름')).toBeInTheDocument();
    expect(screen.getByLabelText('이메일')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '생성하기' })).toBeInTheDocument();
  });

  it('로딩 중 버튼 비활성화', () => {
    render(<UserFormView {...defaultProps} isPending={true} />);

    expect(screen.getByRole('button')).toBeDisabled();
    expect(screen.getByText('처리 중...')).toBeInTheDocument();
  });

  it('에러 메시지 표시', () => {
    const errors = {
      name: ['이름은 2자 이상이어야 합니다'],
    };

    render(<UserFormView {...defaultProps} errors={errors} />);

    expect(screen.getByText('이름은 2자 이상이어야 합니다')).toBeInTheDocument();
  });
});
```

### 4. Container 테스트 (상호작용 + Store)
```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { UserListContainer } from './user-list.container';
import { useUIStore } from '@/stores/use-ui-store';

// Mock hooks
vi.mock('@/hooks/queries/use-users', () => ({
  useUsers: () => ({
    data: [{ id: '1', name: '홍길동', email: 'hong@test.com' }],
    isLoading: false,
    error: null,
  }),
  useDeleteUser: () => ({
    mutateAsync: vi.fn(),
  }),
}));

describe('UserListContainer', () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={new QueryClient()}>
      {children}
    </QueryClientProvider>
  );

  beforeEach(() => {
    useUIStore.setState({ isCreateModalOpen: false });
  });

  it('추가 버튼 클릭 시 모달 열림', async () => {
    const user = userEvent.setup();
    render(<UserListContainer />, { wrapper });

    await user.click(screen.getByRole('button', { name: /추가/i }));

    expect(useUIStore.getState().isCreateModalOpen).toBe(true);
  });
});
```

### 5. Server Action 테스트
```typescript
import { createUserAction } from './user-form.action';

describe('createUserAction', () => {
  it('유효한 데이터 - 성공', async () => {
    global.fetch = vi.fn().mockResolvedValueOnce({ ok: true });

    const formData = new FormData();
    formData.append('name', '홍길동');
    formData.append('email', 'hong@test.com');

    const result = await createUserAction({ success: false }, formData);

    expect(result.success).toBe(true);
  });

  it('유효하지 않은 이메일 - 에러 반환', async () => {
    const formData = new FormData();
    formData.append('name', '홍길동');
    formData.append('email', 'invalid');

    const result = await createUserAction({ success: false }, formData);

    expect(result.success).toBe(false);
    expect(result.errors?.email).toBeDefined();
  });
});
```

### 6. Zod 스키마 테스트
```typescript
import { createUserSchema } from '@/lib/validations/user';

describe('createUserSchema', () => {
  it('유효한 데이터', () => {
    const result = createUserSchema.safeParse({
      name: '홍길동',
      email: 'hong@test.com',
    });
    expect(result.success).toBe(true);
  });

  it('짧은 이름 거부', () => {
    const result = createUserSchema.safeParse({
      name: '홍',
      email: 'hong@test.com',
    });
    expect(result.success).toBe(false);
  });

  it('잘못된 이메일 거부', () => {
    const result = createUserSchema.safeParse({
      name: '홍길동',
      email: 'invalid',
    });
    expect(result.success).toBe(false);
  });
});
```

## 실행 명령어

```bash
# Vitest
npm test
npm test -- user-form
npm test -- --coverage

# Watch 모드
npm test -- --watch
```

## Output Format

```
🧪 테스트 진행

## 테스트 대상
- `stores/use-ui-store.ts`: Zustand 스토어
- `hooks/queries/use-users.ts`: TanStack Query
- `user-form.tsx`: View 컴포넌트
- `user-form.container.tsx`: Container
- `user-form.action.ts`: Server Action

## 테스트 케이스
- ✅ Zustand 모달 상태 테스트
- ✅ TanStack Query 조회 테스트
- ✅ 폼 렌더링 테스트
- ✅ 유효성 검사 테스트

## 테스트 결과
- 통과: X개
- 실패: X개

---
✅ 모든 테스트 통과!
```

## 테스트 종류 가이드

| 대상 | 테스트 초점 | 도구 |
|:-----|:-----------|:-----|
| Zustand | 상태 변경, 액션 | renderHook, act |
| TanStack Query | 데이터 페칭, 캐시 | renderHook, wrapper |
| View | 렌더링, Props | RTL |
| Container | Store + Query 연동 | RTL + Mock |
| Action | 서버 로직 | 단위 테스트 |
| Zod | 스키마 검증 | 단위 테스트 |
