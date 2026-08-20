const STORAGE_KEY = 'ecp-cookie-consent'
const CONSENT_VERSION = 1

export function readConsent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    if (parsed.version !== CONSENT_VERSION) return null
    return parsed
  } catch {
    return null
  }
}

export function writeConsent(maps) {
  const value = { version: CONSENT_VERSION, maps, decidedAt: new Date().toISOString() }
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value))
  } catch {
    // localStorage no disponible (modo privado, etc.) - el consentimiento no persiste entre visitas
  }
  return value
}

export function clearConsent() {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch {
    // ignore
  }
}
