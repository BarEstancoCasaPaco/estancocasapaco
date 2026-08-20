import { Cookie } from 'lucide-react'

export default function CookieConsent({ visible, onAccept, onReject }) {
  if (!visible) return null

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Aviso de cookies">
      <div className="cookie-banner__inner">
        <div className="cookie-banner__icon" aria-hidden="true">
          <Cookie size={22} strokeWidth={1.75} />
        </div>
        <p className="cookie-banner__text">
          Usamos cookies necesarias para la web y, si aceptas, cookies de Google para el mapa.{' '}
          <a href={`${import.meta.env.BASE_URL}politica-cookies.html`}>Más info</a>.
        </p>
        <div className="cookie-banner__actions">
          <button type="button" className="btn btn-outline-dark" onClick={onReject}>
            Rechazar
          </button>
          <button type="button" className="btn btn-primary" onClick={onAccept}>
            Aceptar
          </button>
        </div>
      </div>
    </div>
  )
}
