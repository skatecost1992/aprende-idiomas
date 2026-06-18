import { useState } from 'react'
import { api } from '../api/client.js'

// Muro de pago (Requerimiento 0): si el estudiante no tiene suscripción activa,
// no puede entrar y debe pagar mediante el botón PSE.
// El pago está SIMULADO: en producción se integraría la pasarela PSE real.
const BANKS = [
  'Bancolombia', 'Banco de Bogotá', 'Davivienda', 'BBVA Colombia',
  'Banco de Occidente', 'Scotiabank Colpatria', 'Nequi', 'Banco Caja Social',
]

const PRICE = '$29.900 COP / mes'

export default function Paywall({ auth }) {
  const [stage, setStage] = useState('plan') // plan | pse | processing | done
  const [pse, setPse] = useState({ personType: 'natural', bank: '', docType: 'CC', doc: '' })

  const set = (k) => (e) => setPse({ ...pse, [k]: e.target.value })

  async function pay(e) {
    e.preventDefault()
    setStage('processing')

    if (auth.useApi) {
      // Modo backend real: el servidor crea la transacción PSE y devuelve la URL
      // del banco; la suscripción la confirma luego el webhook del servidor.
      try {
        const { redirectUrl } = await api.createPSEPayment(pse)
        window.location.href = redirectUrl
      } catch (err) {
        alert('No se pudo iniciar el pago: ' + err.message)
        setStage('pse')
      }
      return
    }

    // Modo demo: simulación del redireccionamiento y la confirmación de PSE.
    setTimeout(() => {
      auth.activateSubscription(1)
      setStage('done')
    }, 1900)
  }

  return (
    <div className="gate">
      <div className="gate-card wide">
        <h1 className="logo">🔒 Suscripción requerida</h1>
        <p className="gate-sub">
          Hola, <strong>{auth.user?.name}</strong>. Para acceder al contenido necesitas una suscripción activa.
        </p>

        {stage === 'plan' && (
          <div className="plan">
            <div className="plan-box">
              <span className="plan-name">Plan Mensual</span>
              <span className="plan-price">{PRICE}</span>
              <ul>
                <li>✓ 22 idiomas con ruta A1–C2</li>
                <li>✓ 6 áreas del conocimiento</li>
                <li>✓ Tarjetas, quizzes y seguimiento de progreso</li>
              </ul>
            </div>
            <button className="pse-btn" onClick={() => setStage('pse')}>
              <span className="pse-logo">PSE</span> Pagar con PSE
            </button>
            <button className="link-btn" onClick={auth.logout}>Cerrar sesión</button>
          </div>
        )}

        {stage === 'pse' && (
          <form className="pse-form" onSubmit={pay}>
            <p className="pse-title"><span className="pse-logo">PSE</span> Pagos Seguros en Línea</p>
            <label>Tipo de persona
              <select value={pse.personType} onChange={set('personType')}>
                <option value="natural">Persona natural</option>
                <option value="juridica">Persona jurídica</option>
              </select>
            </label>
            <label>Banco
              <select value={pse.bank} onChange={set('bank')} required>
                <option value="">Selecciona tu banco…</option>
                {BANKS.map((b) => <option key={b} value={b}>{b}</option>)}
              </select>
            </label>
            <div className="pse-row">
              <label>Documento
                <select value={pse.docType} onChange={set('docType')}>
                  <option value="CC">C.C.</option>
                  <option value="CE">C.E.</option>
                  <option value="NIT">NIT</option>
                </select>
              </label>
              <label>Número
                <input value={pse.doc} onChange={set('doc')} placeholder="Número de documento" required />
              </label>
            </div>
            <button type="submit" className="pse-btn">Pagar {PRICE}</button>
            <button type="button" className="link-btn" onClick={() => setStage('plan')}>Volver</button>
          </form>
        )}

        {stage === 'processing' && (
          <div className="pse-processing">
            <div className="spinner" />
            <p>Redirigiendo a tu banco y confirmando el pago…</p>
          </div>
        )}

        {stage === 'done' && (
          <div className="pse-done">
            <div className="check">✓</div>
            <p>¡Pago aprobado! Tu suscripción está activa.</p>
            <button className="primary big" onClick={() => window.location.reload()}>Entrar a la plataforma</button>
          </div>
        )}
      </div>
    </div>
  )
}
