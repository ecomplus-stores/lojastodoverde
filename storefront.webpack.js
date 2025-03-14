const path = require('path')

module.exports = () => ({
  resolve: {
    alias: {              
      './html/ProductCard.html': path.resolve(__dirname, 'template/js/custom-js/components/ProductCard.html'),
      './html/TheProduct.html': path.resolve(__dirname, 'template/js/custom-js/components/TheProduct.html'),
      './html/ProductGallery.html': path.resolve(__dirname, 'template/js/custom-js/components/ProductGallery.html'),
      './html/EcCheckout.html': path.resolve(__dirname, 'template/js/custom-js/components/EcCheckout.html'),
      './js/EcCheckout.js': path.resolve(__dirname, 'template/js/custom-js/components/EcCheckout.js')
      /*
      './js/ProductCard.js': path.resolve(__dirname, 'template/js/custom-js/components/ProductCard.js'),
      './js/TheProduct.js': path.resolve(__dirname, 'template/js/custom-js/components/TheProduct.js'),
      './js/APrices.js': path.resolve(__dirname, 'template/js/custom-js/components/APrices.js'),
      './html/APrices.html': path.resolve(__dirname, 'template/js/custom-js/components/APrices.html'),    
      */
    }
  }
})

