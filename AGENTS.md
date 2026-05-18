<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# 작업 로그 활용 방식

## WORKLOG.md
프로젝트 루트의 `WORKLOG.md`는 고도화 작업의 전체 진행 상황을 기록하는 파일입니다.

### 세션 시작 시
1. `WORKLOG.md`를 읽어 현재 어느 Phase까지 완료되었는지 파악한다.
2. 다음 작업할 Phase와 항목을 사용자에게 안내한다.

### 작업 완료 시
1. 완료된 항목의 `[ ]`를 `[x]`로 변경한다.
2. 해당 Phase에 완료일과 변경된 파일 목록을 기록한다.

### 작업 방침 (사용자 확인 워크플로우)
- 모든 코드 변경 전에는 변경 내용을 먼저 설명하고 사용자 확인을 받는다.
- 단, 사용자가 명확하게 수정을 요청한 경우에는 바로 진행해도 된다.
- 각 Phase는 사용자의 "다음 단계 진행" 확인 후 시작한다.
