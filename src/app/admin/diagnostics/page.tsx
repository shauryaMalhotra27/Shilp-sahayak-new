'use client';

import { useCallback, useEffect, useState } from 'react';
import { Activity, RefreshCcw } from 'lucide-react';
import { Button } from '../../../components/ui/Button';

type CheckStatus = 'idle' | 'ok' | 'warn' | 'error';

interface CheckResult {
  name: string;
  endpoint: string;
  status: CheckStatus;
  detail: string;
  latencyMs: number | null;
}

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || '';

function statusClasses(status: CheckStatus) {
  if (status === 'ok') return 'text-success border-success/30 bg-success/10';
  if (status === 'warn') return 'text-warning border-warning/30 bg-warning/10';
  if (status === 'error') return 'text-danger border-danger/30 bg-danger/10';
  return 'text-muted-foreground border-border bg-muted';
}

async function runCheck(
  name: string,
  endpoint: string,
  expect: (status: number) => CheckStatus
): Promise<CheckResult> {
  const start = performance.now();
  try {
    const res = await fetch(endpoint, { method: 'GET', cache: 'no-store' });
    const latency = Math.round(performance.now() - start);
    const status = expect(res.status);
    return {
      name,
      endpoint,
      status,
      detail: `HTTP ${res.status}`,
      latencyMs: latency,
    };
  } catch (error) {
    return {
      name,
      endpoint,
      status: 'error',
      detail: error instanceof Error ? error.message : 'Network error',
      latencyMs: null,
    };
  }
}

export default function AdminDiagnosticsPage() {
  const [checks, setChecks] = useState<CheckResult[]>([]);
  const [running, setRunning] = useState(false);
  const [lastRunAt, setLastRunAt] = useState('');

  const runDiagnostics = useCallback(async () => {
    if (!API_BASE) {
      setChecks([
        {
          name: 'Config',
          endpoint: 'NEXT_PUBLIC_API_BASE_URL',
          status: 'warn',
          detail: 'Missing NEXT_PUBLIC_API_BASE_URL',
          latencyMs: null,
        },
      ]);
      return;
    }

    setRunning(true);
    const results = await Promise.all([
      runCheck('API Health', `${API_BASE}/health`, (s) => (s === 200 ? 'ok' : 'error')),
      runCheck('Products Endpoint (D1)', `${API_BASE}/api/products`, (s) =>
        s === 200 ? 'ok' : 'error'
      ),
      runCheck('Content Endpoint (D1)', `${API_BASE}/api/content?section=home`, (s) =>
        s === 200 ? 'ok' : 'error'
      ),
      runCheck('Auth Login Route', `${API_BASE}/api/auth/login`, (s) =>
        s === 405 || s === 400 ? 'ok' : s >= 200 && s < 500 ? 'warn' : 'error'
      ),
    ]);
    setChecks(results);
    setLastRunAt(new Date().toLocaleTimeString());
    setRunning(false);
  }, []);

  useEffect(() => {
    void runDiagnostics();
  }, [runDiagnostics]);

  const okCount = checks.filter((c) => c.status === 'ok').length;

  return (
    <div className="max-w-5xl space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">API + D1 Diagnostics</h1>
          <p className="text-muted-foreground mt-1">
            Quick connectivity checks for Worker and D1-backed endpoints.
          </p>
        </div>
        <Button
          variant="outline"
          onClick={() => void runDiagnostics()}
          isLoading={running}
          leftIcon={<RefreshCcw className="w-4 h-4" />}
        >
          Re-run
        </Button>
      </div>

      <div className="bg-card border border-border rounded-xl p-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-foreground">
          <Activity className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">
            {okCount}/{checks.length} checks healthy
          </span>
        </div>
        <p className="text-xs text-muted-foreground">
          {lastRunAt ? `Last run at ${lastRunAt}` : 'Not run yet'}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {checks.map((check) => (
          <div key={check.name} className="bg-card border border-border rounded-xl p-4 space-y-2">
            <div className="flex items-center justify-between">
              <h2 className="font-semibold text-foreground">{check.name}</h2>
              <span className={`text-xs px-2 py-1 rounded-full border ${statusClasses(check.status)}`}>
                {check.status.toUpperCase()}
              </span>
            </div>
            <p className="text-xs text-muted-foreground break-all">{check.endpoint}</p>
            <p className="text-sm text-foreground">{check.detail}</p>
            <p className="text-xs text-muted-foreground">
              {check.latencyMs !== null ? `${check.latencyMs} ms` : 'n/a'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

