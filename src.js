let numOfItems = document.getElementsByClassName("minicart-quantity").length
let orderTotal = document.getElementsByClassName("order-value")[0].firstChild
let itemImages = []
let imageHTML = document.getElementsByClassName("mini-cart-image")

for (var i = 0; i < imageHTML.length; i++) {
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
  let numItemsSpan = document.createElement("span")
  numItemsSpan.innerHTML = 'Number of items in cart: ' + numOfItems
  closeButton.innerHTML = 'Close!'
  closeButton.type = 'button'
  closeButton.onclick = function() { closeOverlay() }
  overlayData.setAttribute("id", "data")
  overlayData.style['background-color'] = '#fff'
  overlayData.style.width = '500px'
  overlayData.style.height = '500px'
  overlayData.style.display = 'inline-block'
  overlayData.style['margin-top'] = '125px'
  overlayData.appendChild(numItemsSpan)
  overlayData.appendChild(closeButton)
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
