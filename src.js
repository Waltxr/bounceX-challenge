let numOfItems = document.getElementsByClassName("minicart-quantity").length
let orderTotal = document.getElementsByClassName("order-value")[0].firstChild
let itemImages = []
let imageHTML = document.getElementsByClassName("mini-cart-image")

for (let i = 0; i < imageHTML.length; i++) {
  itemImages.push(imageHTML[0].firstElementChild.firstElementChild.src)
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
  let tr = document.createElement("tr")
  tr.className = 'order-subtotal'
  tableBody.appendChild(tr)
  let th = document.createElement('th')
  th.role='text'
  th.innerHTML='Subtotal'
  tr.appendChild(th)
  td = document.createElement('td')
  td.innerHTML = orderTotal.textContent
  tr.appendChild(td)
  let yourCartSpan = document.createElement('span')
  yourCartSpan.className = 'hide-for-large'
  yourCartSpan.innerHTML = 'Your cart has ' + numOfItems + ' items!'
  yourCartSpan.style['font-size'] = '24px'
  miniCartTable.className = 'order-totals-table'
  closeButton.innerHTML = 'Close!'
  closeButton.type = 'button'
  closeButton.onclick = function() { closeOverlay() }
  closeButton.className = 'primary-button'
  overlayData.setAttribute("id", "data")
  overlayData.style['background-color'] = '#fff'
  overlayData.style.width = '500px'
  overlayData.style.height = '500px'
  overlayData.style.display = 'inline-block'
  overlayData.style['margin-top'] = '125px'
  overlayData.appendChild(closeButton)
  overlayData.appendChild(yourCartSpan)
  overlayData.appendChild(miniCartTableDiv)
  overlayDiv.appendChild(overlayData)
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
