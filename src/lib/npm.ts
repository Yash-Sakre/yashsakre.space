/** Re-fetch npm stats at most once a day. */
const REVALIDATE_SECONDS = 60 * 60 * 24;

export type NpmStats = {
  version: string | null;
  monthlyDownloads: number | null;
};

async function getJson<T>(url: string): Promise<T | null> {
  try {
    const res = await fetch(url, {
      next: { revalidate: REVALIDATE_SECONDS },
      // Never let a slow registry hold up the build or a page render.
      signal: AbortSignal.timeout(5000),
    });
    return res.ok ? ((await res.json()) as T) : null;
  } catch {
    return null;
  }
}

/** Latest version and last-30-day downloads. Fields are null when npm is unreachable. */
export async function getNpmStats(name: string): Promise<NpmStats> {
  const pkg = encodeURIComponent(name);
  const [latest, downloads] = await Promise.all([
    getJson<{ version?: string }>(`https://registry.npmjs.org/${pkg}/latest`),
    getJson<{ downloads?: number }>(
      `https://api.npmjs.org/downloads/point/last-month/${pkg}`,
    ),
  ]);
  return {
    version: latest?.version ?? null,
    monthlyDownloads: downloads?.downloads ?? null,
  };
}

export function npmUrl(name: string) {
  return `https://www.npmjs.com/package/${name}`;
}
