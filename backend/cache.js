const store = new Map();

/**
 * Memoiza valores por clave durante 10 minutos.
 */
export function memoryCache (key, getter) {
  const now = Date.now();
  const cached = store.get(key);
  if (cached && now - cached.ts < 10 * 60 * 1000) return cached.value;

  const value = getter();
  store.set(key, { ts: now, value });
  return value;
}
