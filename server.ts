// ============================================================
// BACKEND — Node.js + Express + TypeScript
// Operação Noite Oficial 1986 — REST API
// ============================================================

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// ── Middleware: Request logger ───────────────────────────────
app.use((req: Request, _res: Response, next: NextFunction) => {
  const ts = new Date().toISOString();
  console.log(`[${ts}] ${req.method} ${req.path}`);
  next();
});

// ── DATA ─────────────────────────────────────────────────────

const incidents = [
  {
    id: 'detect',
    time: '20:00',
    date: '19/05/1986',
    title: 'Primeiro Contato de Radar',
    description:
      'O CINDACTA I detecta ecos de radar não identificados sobre o Vale do Paraíba. Velocidade anômala superior a 1.000 km/h.',
    detail:
      'Os ecos apresentavam velocidades superiores a 1.000 km/h em voo nivelado, movimentos abruptos e ausência total de transponder. Incompatível com qualquer aeronave catalogada pela FAB.',
    severity: 'medium',
    location: 'Vale do Paraíba — SP/RJ/MG',
    confirmed: true,
  },
  {
    id: 'spread',
    time: '20:45',
    date: '19/05/1986',
    title: 'Expansão dos Contatos',
    description:
      'Estações de radar em SP, RJ e MG confirmam simultaneamente os mesmos objetos. 21 contatos distintos rastreados.',
    detail:
      'A correlação entre diferentes estações eliminava hipótese de falha isolada de equipamento. Alguns objetos se moviam em formação.',
    severity: 'high',
    location: 'SP, RJ, MG',
    confirmed: true,
  },
  {
    id: 'scramble',
    time: '21:15',
    date: '19/05/1986',
    title: 'Scramble de Caças',
    description:
      'Por ordem do Ministério da Aeronáutica, F-5E Tigers e Mirages III são despachados para interceptação.',
    detail:
      'Ao todo 13 aeronaves militares participaram. Um dos maiores deployments em tempo de paz da história da FAB — motivado por objetos não identificados.',
    severity: 'critical',
    location: 'Bases de Anápolis e Santa Cruz',
    confirmed: true,
  },
  {
    id: 'chase',
    time: '21:50',
    date: '19/05/1986',
    title: 'Perseguição Aérea',
    description:
      'Pilotos confirmam visualmente os objetos. Comportamento evasivo e acelerações abruptas ao se aproximar dos caças.',
    detail:
      'Cel. Ozires Silva, com décadas de experiência, confirmou o avistamento. Os objetos pareciam "aguardar" a aproximação para então fugir.',
    severity: 'critical',
    location: 'Espaço aéreo — Vale do Paraíba',
    confirmed: true,
  },
  {
    id: 'loss',
    time: '23:30',
    date: '19/05/1986',
    title: 'Perda de Contato',
    description:
      'Todos os objetos desaparecem dos radares de forma quase simultânea. Caças retornam às bases sem interceptação.',
    detail:
      'O desaparecimento foi instantâneo — não havia gradual perda de sinal como ocorreria com uma aeronave convencional saindo do alcance.',
    severity: 'high',
    location: 'Todo o espaço aéreo afetado',
    confirmed: true,
  },
  {
    id: 'disclosure',
    time: '—',
    date: '1986–2009',
    title: 'Divulgação e Reconhecimento Oficial',
    description:
      'Min. Aeronáutica Brig. Sócrates Monteiro realiza coletiva reconhecendo publicamente o evento. Documentos liberados em 2004.',
    detail:
      'Em 2009, a FAB criou o SIFAA (Sistema de Investigação de Fenômenos Aeroespaciais), fruto direto deste evento. Caso permanece aberto.',
    severity: 'medium',
    location: 'Brasília — Ministério da Aeronáutica',
    confirmed: true,
  },
];

const witnesses = [
  {
    id: 'ozires',
    name: 'Cel. Ozires Silva',
    rank: 'Coronel / Piloto',
    role: 'Ex-Presidente da Embraer, piloto com décadas de experiência',
    quote:
      'Eu vi com meus próprios olhos. Eram pontos de luz que se moviam em velocidades que nenhuma aeronave conhecida poderia alcançar.',
    credibility: 'military',
    year: 1986,
  },
  {
    id: 'socrates',
    name: 'Brig. Sócrates Monteiro',
    rank: 'Brigadeiro',
    role: 'Ministro da Aeronáutica em 1986',
    quote:
      'Os radares registraram objetos reais. Os pilotos confirmaram visualmente. O que eram, não sabemos responder.',
    credibility: 'government',
    year: 1986,
  },
  {
    id: 'kleber',
    name: 'Ten. Kleber Caldas Marinho',
    rank: 'Tenente',
    role: 'Piloto F-5E Tiger — FAB',
    quote:
      'Quando me aproximei, o objeto simplesmente acelerou e desapareceu. Não havia explicação técnica para aquilo.',
    credibility: 'military',
    year: 1986,
  },
  {
    id: 'azambuja',
    name: 'Brig. Ary Bhattaria de Azambuja',
    rank: 'Brigadeiro',
    role: 'Oficial da FAB — Relações com a Imprensa',
    quote:
      'Posso afirmar categoricamente: houve perseguições reais naquela noite. Temos registros. Os pilotos são profissionais sérios.',
    credibility: 'military',
    year: 1986,
  },
];

const hypotheses = [
  {
    id: 'atmospheric',
    title: 'Fenômenos Atmosféricos',
    probability: 38,
    description:
      'Inversão térmica, reflexões anômalas na atmosfera ou tempestades elétricas poderiam gerar ecos falsos nos radares da época.',
    evidence: [
      'Condições climáticas anômalas naquela noite',
      'Histórico de falsos positivos em radares de 1ª geração',
      'Comportamento errático compatível com turbulência',
    ],
    status: 'likely',
  },
  {
    id: 'radar',
    title: 'Erro de Interpretação de Radar',
    probability: 27,
    description:
      'Radares militares dos anos 80 eram susceptíveis a artefatos. Objetos como pássaros, balões e lixo podem gerar ecos amplificados.',
    evidence: [
      'Tecnologia de radar da época com limitações conhecidas',
      'Ausência de evidências físicas coletadas no solo',
      'Impossibilidade de confirmação espectroscópica',
    ],
    status: 'possible',
  },
  {
    id: 'debris',
    title: 'Lixo Espacial / Meteoros',
    probability: 20,
    description:
      'Fragmentos de satélites em reentrada ou meteoros poderiam explicar as altas velocidades e luminosidade intensa observadas.',
    evidence: [
      'Velocidades registradas compatíveis com objetos em reentrada',
      'Luminosidade descrita por pilotos',
      'Ausência de material coletado no solo',
    ],
    status: 'possible',
  },
  {
    id: 'experimental',
    title: 'Aeronave Experimental',
    probability: 10,
    description:
      'Programa de aeronaves experimentais norte-americano (como drones avançados) sobre território brasileiro durante a Guerra Fria.',
    evidence: [
      'EUA tinha programas secretos ativos em 1986',
      'Brasil era estratégico na geopolítica da época',
      'Manobras táticas sugerem controle inteligente',
    ],
    status: 'unlikely',
  },
  {
    id: 'unknown',
    title: 'Fenômeno Inexplicado',
    probability: 5,
    description:
      'Após décadas de investigação, nenhuma hipótese convencional conseguiu explicar todos os aspectos simultaneamente documentados.',
    evidence: [
      'Confirmação simultânea radar + visual por múltiplos pilotos',
      'Comportamento reativo aos caças',
      'Desaparecimento instantâneo e simultâneo',
      'Reconhecimento oficial sem explicação',
    ],
    status: 'unknown',
  },
];

const stats = {
  objectsDetected: 21,
  fightersDeployed: 13,
  durationHours: 5,
  statesAffected: 3,
  radarStations: 4,
  maxSpeedKmh: 2500,
  minAltitudeM: 1000,
  maxAltitudeM: 10000,
};

const eventLogs = [
  { id: '1',  timestamp: '20:00', message: 'CINDACTA-I detecta 1º contato anômalo sobre o Vale do Paraíba', level: 'info' },
  { id: '2',  timestamp: '20:12', message: 'ALERTA — objeto sem transponder ativo detectado', level: 'alert' },
  { id: '3',  timestamp: '20:34', message: 'Segundo radar confirma eco em mesma posição — descartada falha isolada', level: 'info' },
  { id: '4',  timestamp: '20:45', message: 'MÚLTIPLOS OBJETOS — 7 contatos simultâneos identificados', level: 'alert' },
  { id: '5',  timestamp: '21:00', message: 'Velocidade > 1.000 km/h confirmada — aeronave convencional descartada', level: 'alert' },
  { id: '6',  timestamp: '21:15', message: 'SCRAMBLE AUTORIZADO — F-5E Tigers e Mirage III vetorizados', level: 'critical' },
  { id: '7',  timestamp: '21:30', message: 'Contato visual confirmado — Cel. Ozires Silva a bordo de jato executivo', level: 'confirm' },
  { id: '8',  timestamp: '21:48', message: 'Objeto efetua manobra evasiva ao se aproximar do caça interceptador', level: 'alert' },
  { id: '9',  timestamp: '22:10', message: 'PERDA DE CONTATO — objeto desaparece instantaneamente do radar', level: 'critical' },
  { id: '10', timestamp: '22:20', message: 'Novo contato 200km ao sul — velocidade estimada > 2.000 km/h', level: 'critical' },
  { id: '11', timestamp: '22:55', message: '13 caças em atividade simultânea — nenhuma interceptação bem-sucedida', level: 'alert' },
  { id: '12', timestamp: '23:30', message: 'TODOS OS OBJETOS desaparecem dos radares simultaneamente', level: 'critical' },
  { id: '13', timestamp: '23:45', message: 'Caças retornam às bases. Incidente documentado. Status: ABERTO', level: 'confirm' },
];

// ── ROUTES ───────────────────────────────────────────────────

const wrap = <T>(data: T): object => ({
  success: true,
  data,
  timestamp: new Date().toISOString(),
  source: 'FAB-CINDACTA-OVNI-API-1986',
});

app.get('/', (_req, res) => {
  res.json({
    api: 'Operação Noite Oficial 1986 — API',
    version: '1.0.0',
    endpoints: [
      'GET /api/incidents',
      'GET /api/incidents/:id',
      'GET /api/witnesses',
      'GET /api/hypotheses',
      'GET /api/stats',
      'GET /api/logs',
    ],
  });
});

app.get('/api/incidents', (_req, res) => res.json(wrap(incidents)));

app.get('/api/incidents/:id', (req, res) => {
  const found = incidents.find((i) => i.id === req.params.id);
  if (!found) return res.status(404).json({ success: false, error: 'Incident not found' });
  res.json(wrap(found));
});

app.get('/api/witnesses', (_req, res) => res.json(wrap(witnesses)));

app.get('/api/hypotheses', (_req, res) => res.json(wrap(hypotheses)));

app.get('/api/stats', (_req, res) => res.json(wrap(stats)));

app.get('/api/logs', (_req, res) => res.json(wrap(eventLogs)));

// ── START ─────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`\n🛸  Operação Noite Oficial 1986 — API running on http://localhost:${PORT}\n`);
});

export default app;
