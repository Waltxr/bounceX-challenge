let numOfItems = document.getElementsByClassName("minicart-quantity").length
let orderTotal = document.getElementsByClassName("order-value")[0].firstChild
let itemImages = []
let imageHTML = document.getElementsByClassName("mini-cart-image")

for (let i = 0; i < imageHTML.length; i++) {
  itemImages.push(imageHTML[i].firstElementChild.firstElementChild.src)
}

let documentHeight = document.body.clientHeight
let windowHeight = window.innerHeight
let scrollPosition = 0
let bottom10Percent = documentHeight - documentHeight * .10

showOverlay = () => {
  let overlayDiv = document.createElement("div")
  overlayDiv.setAttribute("id", "overlay")
  let overlayData = document.createElement("div")
  let closeButton = document.createElement("button")
  let miniCartTableDiv = document.createElement("div")
  miniCartTableDiv.className = 'mini-cart-subtotals'
  let miniCartTable = document.createElement("table")
  miniCartTableDiv.appendChild(miniCartTable)
  let tableBody = document.createElement("tbody")
  miniCartTable.appendChild(tableBody)
  miniCartTableDiv.style['padding-left'] = '25%'
  let tr = document.createElement("tr")
  tr.className = 'order-subtotal'
  tableBody.appendChild(tr)
  let subtotalSpan = document.createElement('span')
  subtotalSpan.innerHTML = 'Subtotal: ' + orderTotal.textContent
  subtotalSpan.style['font-size'] = '18px'
  let yourCartSpanDiv = document.createElement('div')
  let yourCartSpan = document.createElement('span')
  yourCartSpan.innerHTML = 'Your cart has ' + numOfItems + ' items!'
  yourCartSpan.style['font-size'] = '24px'
  yourCartSpanDiv.style['padding-top'] = '20px'
  yourCartSpanDiv.style['padding-bottom'] = '20px'
  miniCartTable.className = 'order-totals-table'
  let closeButtonDiv = document.createElement('div')
  let tdImg1 = document.createElement('td')
  let img1 = document.createElement('img')
  img1.src = itemImages[0]
  let tdImg2 = document.createElement('td')
  let img2 = document.createElement('img')
  img2.src = itemImages[1]
  tdImg1.appendChild(img1)
  tdImg2.appendChild(img2)
  tdImg1.style.padding = '10px'
  tdImg2.style.padding = '10px'
  let cartButtonDiv = document.createElement('div')
  cartButtonDiv.style['padding-top'] = '50px'
  let cartButton = document.createElement("button")
  cartButton.innerHTML = 'View Cart'
  cartButton.type = 'button'
  cartButton.onclick = function() { window.location='https://www.marmot.com/cart' }
  cartButton.className = 'primary-button'
  tr.appendChild(tdImg1)
  tr.appendChild(tdImg2)
  closeButton.innerHTML = 'Close!'
  closeButton.type = 'button'
  closeButton.onclick = function() { closeOverlay() }
  closeButtonDiv.style['padding-top'] = '100px'
  overlayData.setAttribute("id", "data")
  overlayData.className = 'grid-container'
  overlayData.style['background-color'] = '#fff'
  overlayData.style.width = '500px'
  overlayData.style.height = '500px'
  overlayData.style.display = 'inline-block'
  overlayData.style['margin-top'] = '125px'
  yourCartSpanDiv.appendChild(yourCartSpan)
  overlayData.appendChild(yourCartSpanDiv)
  overlayData.appendChild(miniCartTableDiv)
  overlayDiv.appendChild(overlayData)
  overlayData.appendChild(subtotalSpan)
  cartButtonDiv.appendChild(cartButton)
  overlayData.appendChild(cartButtonDiv)
  closeButtonDiv.appendChild(closeButton)
  overlayData.appendChild(closeButtonDiv)
  overlayDiv.style['text-align'] = 'center'
  overlayDiv.style.position = 'fixed'
  overlayDiv.style.width = '100%'
  overlayDiv.style.height = '100%'
  overlayDiv.style.top = '0'
  overlayDiv.style.left = '0'
  overlayDiv.style.right = '0'
  overlayDiv.style.bottom = '0'
  overlayDiv.style['background-color'] = 'rgba(0,0,0,0.5)'
  overlayDiv.style['z-index'] = '2'
  overlayDiv.style.cursor = 'pointer'
  document.body.appendChild(overlayDiv)
}

closeOverlay = () => {
  document.getElementById('overlay').remove()
}

window.addEventListener('scroll', function(e) {
  scrollPosition = window.scrollY
  if (scrollPosition + windowHeight >= bottom10Percent && !document.getElementById("overlay")) {
    showOverlay()
  }
})
