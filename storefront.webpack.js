const path = require('path')
const dirSearchAlias = path.resolve(__dirname, 'template/js/lib/search-engine')
const pathDslAlias = path.resolve(dirSearchAlias, 'dsl')

module.exports = () => ({
  resolve: {
    alias: {
      './js/APrices.js': path.resolve(__dirname, 'template/js/custom-js/components/APrices.js'),
      './html/APrices.html': path.resolve(__dirname, 'template/js/custom-js/components/APrices.html'),
      './html/ProductCard.html': path.resolve(__dirname, 'template/js/custom-js/components/ProductCard.html'),
      './html/ProductGallery.html': path.resolve(__dirname, 'template/js/custom-js/components/ProductGallery.html'),
      './html/EcCheckout.html': path.resolve(__dirname, 'template/js/custom-js/components/EcCheckout.html'),
      './js/EcCheckout.js': path.resolve(__dirname, 'template/js/custom-js/components/EcCheckout.js'),
    }
  }
})
