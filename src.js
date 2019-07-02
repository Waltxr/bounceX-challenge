(global => {
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

  createOverlay = () => {
    let overlayDiv = document.createElement("div")
    let overlayData = document.createElement("div")
    overlayDiv.setAttribute("id", "overlay")
    overlayData.setAttribute("id", "data")

    document.body.appendChild(overlayDiv)
    overlayDiv.appendChild(overlayData)

    styleOverlay(overlayDiv, overlayData)
  }

  styleOverlay = (outerDiv, dataDiv) => {
    outerDiv.style['text-align'] = 'center'
    outerDiv.style.position = 'fixed'
    outerDiv.style.width = '100%'
    outerDiv.style.height = '100%'
    outerDiv.style.top = '0'
    outerDiv.style.left = '0'
    outerDiv.style.right = '0'
    outerDiv.style.bottom = '0'
    outerDiv.style['background-color'] = 'rgba(0,0,0,0.5)'
    outerDiv.style['z-index'] = '2'
    outerDiv.style.cursor = 'pointer'

    dataDiv.className = 'grid-container'
    dataDiv.style['background-color'] = '#fff'
    dataDiv.style.width = '500px'
    dataDiv.style.height = '500px'
    dataDiv.style.display = 'inline-block'
    dataDiv.style['margin-top'] = '125px'
  }

  createOverlayHeader = () => {
    let overlayHeaderContainer = document.createElement('div')
    overlayHeaderContainer.setAttribute("id", "overlay-header-container")
    let overlayHeader = document.createElement('span')
    overlayHeader.setAttribute("id", "overlay-header")
    let overlayData = document.getElementById("data")

    overlayData.appendChild(overlayHeaderContainer)
    overlayHeaderContainer.appendChild(overlayHeader)

    styleOverlayHeader(overlayHeaderContainer, overlayHeader)
  }

  styleOverlayHeader = (overlayHeaderContainer, overlayHeader) => {
    overlayHeaderContainer.style['padding-top'] = '20px'
    overlayHeaderContainer.style['padding-bottom'] = '20px'

    overlayHeader.innerHTML = 'Your cart has ' + numOfItems + ' items!'
    overlayHeader.style['font-size'] = '24px'
  }

  createImageTable = () => {
    let imageTableContainer = document.createElement("div")
    imageTableContainer.setAttribute("id", "image-table-container")
    imageTableContainer.className = 'mini-cart-subtotals'
    imageTableContainer.style['padding-left'] = '25%'

    let imageTable = document.createElement("table")
    imageTable.setAttribute("id", "image-table")

    let tableBody = document.createElement("tbody")
    tableBody.setAttribute("id", "table-body")

    let tr = document.createElement("tr")
    tr.className = 'order-subtotal'

    let tdImg1 = document.createElement('td')
    let img1 = document.createElement('img')
    img1.src = itemImages[0]

    let tdImg2 = document.createElement('td')
    let img2 = document.createElement('img')
    img2.src = itemImages[1]

    tdImg1.style.padding = '10px'
    tdImg2.style.padding = '10px'

    tdImg1.appendChild(img1)
    tdImg2.appendChild(img2)
    tr.appendChild(tdImg1)
    tr.appendChild(tdImg2)
    tableBody.appendChild(tr)
    imageTable.appendChild(tableBody)
    imageTableContainer.appendChild(imageTable)

    let overlayData = document.getElementById("data")

    overlayData.appendChild(imageTableContainer)
  }

  createSubtotalSpan = () => {
    let subtotalSpan = document.createElement('span')
    subtotalSpan.setAttribute("id", "subtotal-span")
    subtotalSpan.innerHTML = 'Subtotal: ' + orderTotal.textContent
    subtotalSpan.style['font-size'] = '18px'

    let overlayData = document.getElementById("data")
    overlayData.appendChild(subtotalSpan)
  }

  createCartButton = () => {
    let cartButtonDiv = document.createElement('div')
    cartButtonDiv.style['padding-top'] = '50px'

    let cartButton = document.createElement("button")
    cartButton.innerHTML = 'View Cart'
    cartButton.type = 'button'
    cartButton.onclick = function() { window.location='https://www.marmot.com/cart' }
    cartButton.className = 'primary-button'

    let overlayData = document.getElementById("data")
    cartButtonDiv.appendChild(cartButton)
    overlayData.appendChild(cartButtonDiv)
  }

  createCloseButton = () => {
    let closeButtonContainer = document.createElement('div')
    closeButtonContainer.setAttribute("id", "close-button-container")
    closeButtonContainer.style['padding-top'] = '100px'

    let closeButton = document.createElement("button")
    closeButton.setAttribute("id", "close-button")
    closeButton.innerHTML = 'Close!'
    closeButton.type = 'button'
    closeButton.onclick = function() { closeOverlay() }


    let overlayData = document.getElementById("data")
    closeButtonContainer.appendChild(closeButton)
    overlayData.appendChild(closeButtonContainer)

  }

  showOverlay = () => {
    createOverlay()
    createOverlayHeader()
    createImageTable()
    createSubtotalSpan()
    createCartButton()
    createCloseButton()
  }

  closeOverlay = () => {
    document.getElementById('overlay').remove()
  }

  window.addEventListener('scroll', function(e) {
    newScrollPosition = window.scrollY
    if (newScrollPosition > scrollPosition && newScrollPosition + windowHeight >= bottom10Percent && !document.getElementById("overlay")) {
      showOverlay()
    }
    scrollPosition = newScrollPosition
  })
})(window)
