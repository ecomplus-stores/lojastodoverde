const path = require('path')
const dirSearchAlias = path.resolve(__dirname, 'template/js/lib/search-engine')
const pathDslAlias = path.resolve(dirSearchAlias, 'dsl')

module.exports = () => ({
  resolve: {
    alias: {
   
      './html/ProductGallery.html': path.resolve(__dirname, 'template/js/custom-js/components/ProductGallery.html')
    }
  }
})
