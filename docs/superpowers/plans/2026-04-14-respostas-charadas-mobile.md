# Respostas Charadas Mobile Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Modernizar a página de respostas com foco em ergonomia mobile e revelar cada charada individualmente, publicando o resultado no repositório remoto.

**Architecture:** Uma única página estática em `index.html` concentra layout, estilo e interações. A validação usa um teste leve com `node:test` para garantir a presença dos cards interativos e a ausência de controles globais de progresso e revelação total.

**Tech Stack:** HTML, CSS, JavaScript vanilla, Node.js test runner, Git.

---

### Task 1: Travar a nova estrutura da página

**Files:**
- Create: `tests/index.test.mjs`
- Modify: `index.html`

- [ ] **Step 1: Escrever o teste estrutural da nova interface**
- [ ] **Step 2: Rodar o teste e confirmar falha contra o HTML antigo**
- [ ] **Step 3: Refatorar a página para a nova estrutura mobile-first**
- [ ] **Step 4: Rodar o teste novamente e confirmar sucesso**

### Task 2: Publicar a entrega

**Files:**
- Modify: `index.html`
- Create: `docs/superpowers/specs/2026-04-14-respostas-charadas-mobile-design.md`
- Create: `docs/superpowers/plans/2026-04-14-respostas-charadas-mobile.md`

- [ ] **Step 1: Revisar o HTML final e a responsividade**
- [ ] **Step 2: Preparar o repositório git local**
- [ ] **Step 3: Criar commit com a modernização mobile**
- [ ] **Step 4: Fazer push para `https://github.com/devfilipeivopereira/respostas_charadas`**
