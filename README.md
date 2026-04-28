# 🛸 Operação Noite Oficial — 1986
### Projeto Full-Stack: HTML · CSS · JavaScript · React · Node.js · Angular · TypeScript

---

## 📋 Sobre o Caso

**O que aconteceu:** Na noite de 19 de maio de 1986, radares da Força Aérea Brasileira
detectaram 21 objetos voadores não identificados sobre o Vale do Paraíba (SP, RJ, MG).
Caças F-5E Tiger e Mirage III foram despachados para interceptação. Pilotos confirmaram
os objetos visualmente. Os objetos desapareceram subitamente ao fim da noite.

**Por que é especial:** O governo brasileiro reconheceu oficialmente o evento —
tornando-o um dos casos OVNI mais bem documentados do mundo.

---

## 🗂 Estrutura do Projeto

```
ovni1986/
├── index.html                    # Demo completo (HTML + CSS + JS + React inline)
├── shared/
│   └── types.ts                  # TypeScript interfaces compartilhadas
│
├── backend/                      # Node.js + Express + TypeScript
│   ├── server.ts                 # API REST com todos os endpoints
│   ├── package.json
│   └── tsconfig.json
│
├── frontend-react/               # React 18 + TypeScript + CSS Modules
│   ├── src/
│   │   ├── index.tsx             # Entry point
│   │   ├── index.css             # Estilos globais (CRT, variables)
│   │   ├── App.tsx               # Layout principal (3 colunas)
│   │   ├── App.module.css
│   │   ├── hooks/
│   │   │   └── useOvniData.ts    # Custom hook para dados
│   │   └── components/
│   │       ├── Header.tsx        # Cabeçalho com relógio em tempo real
│   │       ├── Radar.tsx         # Radar SVG com animação via requestAnimationFrame
│   │       ├── Timeline.tsx      # Linha do tempo interativa
│   │       ├── Modal.tsx         # Modal de detalhes do incidente
│   │       ├── StatsPanel.tsx    # Cards de estatísticas
│   │       └── RightPanelComponents.tsx  # Log, Testemunhos, Hipóteses
│   └── package.json
│
└── frontend-angular/             # Angular 17 + TypeScript
    ├── src/app/
    │   ├── app.module.ts         # NgModule principal
    │   ├── app.component.*       # Root component com navegação por abas
    │   ├── models.ts             # Interfaces TypeScript
    │   ├── ovni.service.ts       # Serviço de dados (Observable/RxJS)
    │   ├── radar/                # Componente de radar com @ViewChild
    │   ├── hypotheses/           # Componente de hipóteses com *ngFor
    │   └── witnesses/            # Componente de testemunhos (inline template)
    └── package.json
```

---

## 🚀 Como Rodar

### 1. Demo Imediato (index.html)
Basta abrir `index.html` no navegador — sem build necessário.
Inclui HTML + CSS + JS puro + React 18 (via CDN + Babel inline).

### 2. Backend Node.js
```bash
cd backend
npm install
npm run dev          # ts-node server.ts → http://localhost:3001
```

**Endpoints disponíveis:**
```
GET /api/incidents       → Lista de incidentes
GET /api/incidents/:id   → Incidente específico
GET /api/witnesses       → Testemunhos oficiais
GET /api/hypotheses      → Hipóteses investigativas
GET /api/stats           → Estatísticas do evento
GET /api/logs            → Log de eventos
```

### 3. Frontend React
```bash
cd frontend-react
npm install
npm start             # → http://localhost:3000
```

### 4. Frontend Angular
```bash
cd frontend-angular
npm install
ng serve              # → http://localhost:4200
```

---

## 🔧 Tecnologias Utilizadas

| Tecnologia    | Onde é usada                                      | Versão      |
|---------------|---------------------------------------------------|-------------|
| **HTML5**     | Estrutura semântica, SVG, canvas                  | —           |
| **CSS3**      | Variables, Grid, Flexbox, Animations, Modules     | —           |
| **JavaScript**| Radar animation (rAF), DOM manipulation, events   | ES2020      |
| **React**     | Componentes, Hooks (useState, useEffect, useRef)  | 18.2.0      |
| **Node.js**   | Backend Express, REST API, middleware              | 20.x        |
| **Angular**   | Components, Services, NgModules, *ngFor, @ViewChild| 17.0.0     |
| **TypeScript**| Interfaces, tipos, strict mode (shared + all apps)| 5.3.x       |

---

## 🎨 Design

- Estética de terminal militar dos anos 80 (verde fósforo, fonte mono)
- Scanlines CRT via CSS pseudo-elements
- Radar SVG animado com `requestAnimationFrame` (JavaScript)
- Blips de radar com animação CSS `@keyframes`
- Layout responsivo com CSS Grid 3 colunas
- Modal com suporte a teclado (Escape para fechar)

---

## 📡 Dados do Caso (Fontes)

- Ministério da Aeronáutica — Coletiva de Imprensa, 1986
- CINDACTA — Registros de Radar (parcialmente desclassificados, 2004)
- Brigadeiro Sócrates Monteiro — Declarações oficiais
- Coronel Ozires Silva — Testemunho público
- SIFAA — Sistema de Investigação de Fenômenos Aeroespaciais (criado 2009)

---

*"Os radares registraram objetos reais. Os pilotos confirmaram visualmente.
O que eram, não sabemos responder."* — Brig. Sócrates Monteiro, Ministro da Aeronáutica, 1986
