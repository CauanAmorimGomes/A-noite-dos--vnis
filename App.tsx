// ============================================================
// APP — App.tsx (React + TypeScript)
// Main layout: Header | Left | Center | Right
// ============================================================

import React, { useState } from 'react';
import { useOvniData } from './hooks/useOvniData';
import Header from './components/Header';
import Radar from './components/Radar';
import Timeline from './components/Timeline';
import StatsPanel from './components/StatsPanel';
import { EventLogPanel, WitnessCards, HypothesisPanel } from './components/RightPanelComponents';
import styles from './App.module.css';

type Tab = 'log' | 'witnesses' | 'hypotheses';

const App: React.FC = () => {
  const { incidents, witnesses, hypotheses, stats, logs, loading } = useOvniData();
  const [activeTab, setActiveTab] = useState<Tab>('log');

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.loadingText}>
          <span className="blink">▶</span> CONECTANDO AO CINDACTA…
        </div>
      </div>
    );
  }

  return (
    <div className={styles.app}>
      <Header stats={stats} />

      <div className={styles.main}>

        {/* LEFT */}
        <aside className={styles.leftPanel}>
          <Timeline incidents={incidents} />
          <StatsPanel stats={stats} />
        </aside>

        {/* CENTER */}
        <main className={styles.centerPanel}>
          <Radar />
          <div className={styles.infoBar}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>VELOCIDADE MÁX.</span>
              <span className={styles.infoValue}>&gt; 2.500 km/h</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>ALTITUDE</span>
              <span className={styles.infoValue}>1.000 — 10.000m</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>MANOBRAS</span>
              <span className={`${styles.infoValue} ${styles.red}`}>EVASIVAS ● ANÔMALAS</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>CONFIRMAÇÃO</span>
              <span className={`${styles.infoValue} ${styles.amber}`}>RADAR + VISUAL</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>STATUS</span>
              <span className={`${styles.infoValue} ${styles.red} blink`}>EM ABERTO</span>
            </div>
          </div>
        </main>

        {/* RIGHT */}
        <aside className={styles.rightPanel}>
          {/* Tabs */}
          <div className={styles.tabs}>
            {(['log','witnesses','hypotheses'] as Tab[]).map(t => (
              <button
                key={t}
                className={`${styles.tabBtn} ${activeTab === t ? styles.tabActive : ''}`}
                onClick={() => setActiveTab(t)}
              >
                {t === 'log' ? 'LOG' : t === 'witnesses' ? 'TESTEMUNHOS' : 'HIPÓTESES'}
              </button>
            ))}
          </div>

          <div className={styles.tabContent}>
            {activeTab === 'log'         && <EventLogPanel logs={logs} />}
            {activeTab === 'witnesses'   && <WitnessCards witnesses={witnesses} />}
            {activeTab === 'hypotheses'  && <HypothesisPanel hypotheses={hypotheses} />}
          </div>

          {/* Classification badge */}
          <div className={styles.classification}>
            <div className={styles.classStatus}>STATUS: NÃO CLASSIFICADO / ABERTO</div>
            <p className={styles.classText}>
              Evento registrado oficialmente pela FAB. Reconhecido pelo Ministério em 1986.
              Documentos parcialmente liberados em 2004. Em 2009, criado o SIFAA — Sistema
              de Investigação de Fenômenos Aeroespaciais, fruto direto deste incidente.
            </p>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default App;
