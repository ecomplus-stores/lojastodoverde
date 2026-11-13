const functions = require('firebase-functions')

const { ssr: renderSsr } = require('@ecomplus/storefront-renderer/functions/')

// Security: the renderer `/~reverse-proxy/` route forwards visitor headers to any URL,
// which exposes the GCP metadata server (service account token). Keep it disabled.
const ssr = (req, res) => {
  if (/reverse-proxy/i.test(`${req.url}${req.originalUrl || ''}`)) {
    return res.sendStatus(404)
  }
  return renderSsr(req, res)
}

process.env.STOREFRONT_LONG_CACHE = 'true'

exports.ssr = functions.https.onRequest((req, res) => ssr(req, res))
