let numOfItems = document.getElementsByClassName("minicart-quantity").length
let orderTotal = document.getElementsByClassName("order-value")[0].firstChild
let itemImages = []
let imageHTML = document.getElementsByClassName("mini-cart-image")

for (var i = 0; i < imageHTML.length; i++) {
  itemImages.push(imageHTML[0].firstElementChild.firstElementChild.src)
}
