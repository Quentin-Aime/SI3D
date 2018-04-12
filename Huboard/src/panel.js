var panelImg = document.querySelector('.customization-panelImg');
var panel = document.querySelector('.customization-panel');
var panelImgReverse = document.querySelector('.customization-panelImgReverse');
var openCart = document.querySelector('.customization-cart');
var closeCart = document.querySelector('.customization-yourCartClose');
var cartPanel = document.querySelector('.customization-cartPanel');
var deleteItem = document.querySelector('.customization-yourCartDeleteItem');
var nothing = document.querySelector('.customization-nothing');
var yourCartItem = document.querySelector('.customization-yourCartItem');
var yourCartTotal = document.querySelector('.customization-yourCartTotal');

panelImg.addEventListener('click', function() {
  panel.style.left = "78%";
  panel.style.transition = "all ease auto 0.3s";
  panel.style.transitionDelay = "all ease auto 0.3s";
  panel.style.transitionDuration = "0.3s";
  panelImg.style.display = 'none';
});

panelImgReverse.addEventListener('click', function() {
  panel.style.left = "120%";
  panelImg.style.display = 'block';
});

openCart.addEventListener('click', function() {
  cartPanel.style.display = 'block';
});

closeCart.addEventListener('click', function() {
  cartPanel.style.display = 'none';
});

deleteItem.addEventListener('click', function() {
  nothing.style.display = 'block';
  yourCartItem.style.display = 'none';
  yourCartTotal.style.display = 'none';
  cartPanel.style.height = '80px';
  cartPanel.style.transition = "all ease auto 0.3s";
  cartPanel.style.transitionDelay = "all ease auto 0.3s";
  cartPanel.style.transitionDuration = "0.3s";
});

document.addEventListener('click', function(clickDisplay) {
  if (clickDisplay['srcElement']['className'] != "customization-cart"
  && clickDisplay['srcElement']['className'] != "customization-yourCartDeleteItem"
  && clickDisplay['srcElement']['className'] != "customization-cartPanel"
  && clickDisplay['srcElement']['className'] != "customization-cartPanelAlign"
  && clickDisplay['srcElement']['className'] != "customization-cartPanelItemOne"
  && clickDisplay['srcElement']['className'] != "customization-nothing"
  && clickDisplay['srcElement']['className'] != "customization-cartPanelParent"
  && clickDisplay['srcElement']['className'] != "customization-yourCart"
  && clickDisplay['srcElement']['className'] != "customization-yourCartItem"
  && clickDisplay['srcElement']['className'] != "customization-yourCartPrice"
  && clickDisplay['srcElement']['className'] != "customization-yourCartTotal"
  && clickDisplay['srcElement']['className'] != "customization-yourCartFinalTotal"
  && clickDisplay['srcElement']['className'] != "customization-yourCartFinalPrice") {
      cartPanel.style.display = 'none';
  }
});
