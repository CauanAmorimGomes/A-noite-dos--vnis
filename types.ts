// ============================================================
// SHARED TYPES — Operação Noite Oficial 1986
// Used by both React frontend and Angular frontend
// ============================================================

export interface Incident {
  id: string;
  time: string;
  date: string;
  title: string;
  description: string;
  detail: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  location: string;
  confirmed: boolean;
}

export interface RadarContact {
  id: string;
  x: number;         // radar relative position 0-100
  y: number;
  speed: number;     // km/h
  altitude: number;  // meters
  type: 'ufo' | 'jet' | 'unknown';
  status: 'active' | 'lost' | 'pursuing';
  firstContact: string;
}

export interface Witness {
  id: string;
  name: string;
  rank: string;
  role: string;
  quote: string;
  credibility: 'military' | 'civilian' | 'government';
  year: number;
}

export interface Hypothesis {
  id: string;
  title: string;
  probability: number;  // 0-100
  description: string;
  evidence: string[];
  status: 'likely' | 'possible' | 'unlikely' | 'unknown';
}

export interface Stats {
  objectsDetected: number;
  fightersDeployed: number;
  durationHours: number;
  statesAffected: number;
  radarStations: number;
  maxSpeedKmh: number;
  minAltitudeM: number;
  maxAltitudeM: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  timestamp: string;
  source: string;
}

export interface EventLog {
  id: string;
  timestamp: string;
  message: string;
  level: 'info' | 'alert' | 'critical' | 'confirm';
}
