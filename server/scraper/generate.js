// Genera los JSON estáticos de tasas ejecutando el scraper una vez.
// Los escribe en public/tasas/ para que se sirvan como archivos estáticos
// (Vite los copia a dist/ y el frontend los lee sin necesidad de un backend).
//
// Uso:  node generate.js
const fs = require('fs')
const path = require('path')
const { scrapeCdt, scrapeHipotecas } = require('./scraper')

async function main() {
  const outDir = path.resolve(__dirname, '../../public/tasas')
  fs.mkdirSync(outDir, { recursive: true })

  const cdt = await scrapeCdt()
  fs.writeFileSync(path.join(outDir, 'cdt.json'), JSON.stringify(cdt, null, 2))
  console.log('✓ cdt.json')

  const hipotecas = await scrapeHipotecas()
  fs.writeFileSync(path.join(outDir, 'hipotecas.json'), JSON.stringify(hipotecas, null, 2))
  console.log('✓ hipotecas.json')

  console.log('Tasas generadas en', outDir)
}

main().catch((e) => {
  console.error('Error generando las tasas:', e)
  process.exit(1)
})
