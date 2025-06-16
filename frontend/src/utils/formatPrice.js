/**
 * Formatea un número como precio en ARS.
 *
 * @param {number} amount           — Parte entera del precio
 * @param {number} [decimals=0]     — Decimales (0‑99). Opcional.
 * @param {object} [options]        — Permite sobreescribir locale y currency.
 * @returns {string}                — Ej. "$ 300.000"  o  "$ 300.000,75"
 */
export function formatPrice(
  amount,
  decimals = 0,
  { locale = 'es-AR', currency = 'ARS' } = {}
) {
  // Intl solo para la parte entera, así controlamos los decimales a mano
  const formatter = new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });

  const base = formatter.format(amount);          // "$ 300.000"
  if (decimals === 0) return base;

  const decStr = decimals.toString().padStart(2, '0');
  return `${base},${decStr}`;                     // "$ 300.000,75"
}
