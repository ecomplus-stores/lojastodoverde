import '#template/js/checkout'
import './custom-js/checkout'
import ecomCart from '@ecomplus/shopping-cart'
var lessUnit = document.getElementById('lessUnit')
var firstphrase = document.getElementById('lessSome')
var lastphrase = document.getElementById('noMore')
var lessQuantity = 0
lessUnit.innerHTML = lessQuantity
ecomCart.on('change', ({ data }) => {
  var cartCalc = document.querySelectorAll('#cart')
  if (cartCalc.length) {
    document.getElementById('containerCalc').style.display = 'block'
    var checkoutButton = document.querySelector('.cart__btn-checkout')
    var percentBar
    var countQuantity = data.items.reduce((acc, curr) => acc + curr.quantity, 0)
    var evalQuantity = lessQuantity - countQuantity
    if (evalQuantity > 0) {
      lessUnit.innerHTML = evalQuantity
      percentBar = Math.round(countQuantity / lessQuantity * 100) + '%'
      document.getElementById('lastUnitsBar').style.width = percentBar
      document.getElementById('percentBar').innerHTML = percentBar
      firstphrase.style.display = 'block'
      lastphrase.style.display = 'none'
      checkoutButton.style.display = 'none'
    } else {
      percentBar = '100%'
      checkoutButton.style.display = 'block'
      firstphrase.style.display = 'none'
      lastphrase.style.display = 'block'
      document.getElementById('lastUnitsBar').style.width = percentBar
      document.getElementById('percentBar').innerHTML = percentBar
    }
  } else {
    document.getElementById('containerCalc').style.display = 'none'
  }
})
const router1 = window.storefrontApp && window.storefrontApp.router
setInterval(function () {
  if (router1) {
    const emitCheckout1 = (name) => {
      var countQuantity = ecomCart.data.items.reduce((acc, curr) => acc + curr.quantity, 0)
      if (countQuantity < lessQuantity) {
       window.location.href = '/app/#/cart'
       window.alert('Apenas ' + countQuantity + ' itens no carrinho. Um deles acabou estoque! Você estará sendo direcionado para o carrinho para inserir mais um item')
      }
    }

    const addRoute1ToData = ({ name }) => {
      if (name === 'checkout') {
        emitCheckout1(name)
      }
    }

    if (router1.currentRoute) {
      addRoute1ToData(router1.currentRoute)
    }
    router1.afterEach(addRoute1ToData)
  }
}, 300)
