//===============
           //Cart 
//===============
// Cart Section
const cartIcon = document.querySelector('#cart-icon');
const notificationEl = document.querySelector('.notification');
const cartSection = document.querySelector('#cart');
const emptyCart = document.querySelector('#empty');
const filleCart = document.querySelector('#filled');
const userQuantity = document.querySelector('#userQuantity');
const totalEl = document.querySelector('#total');
const deleteEl = filleCart.querySelector('img[alt="delete"]');
const checkOutBtn = filleCart.querySelector('button');


//Quantity controls
const quantityEl = document.querySelector('#quantity');
const increment = document.querySelector('#increment');
const decrement = document.querySelector('#decrement');
const addToCartBtn = document.querySelector('#addToCart');

//Cart Fuctionality
let quantity = 0;
let cartItems = 0;
const price = 125.00;

decrement.addEventListener('click', ()=>{
    if(quantity > 0){
        quantity--;
        quantityEl.textContent = quantity;
    }
});

increment.addEventListener('click', () => {
    quantity++;
    quantityEl.textContent = quantity;
});

//Cart toggle -> when clicking on cart icon
cartIcon.addEventListener('click', ()=>{
    cartSection.style.display = 'flex';
});

//Cart toggle -> close 
window.addEventListener('click', (e) => {
  if (!cartSection.contains(e.target) && e.target !== cartIcon) {
    cartSection.style.display = 'none';
  }
});

addToCartBtn.addEventListener('click', () =>{
    if(quantity > 0){
        cartItems = quantity;

        notificationEl.style.display = 'flex';
        notificationEl.textContent = cartItems;

        userQuantity.textContent = cartItems;
        totalEl.textContent = `${(price * cartItems).toFixed(2)}$`;

        emptyCart.style.display = 'none'
        filleCart.style.display = 'flex';

        //reset quantity
         quantity = 0;
        quantityEl.textContent = 0; 
    }
});

//Delete from Cart 
deleteEl.addEventListener('click', ()=> {
    filleCart.style.display = 'none';
    emptyCart.style.display = 'flex';
    cartItems = 0;
    notificationEl.textContent = cartItems
});

//CheckOut
checkOutBtn.addEventListener('click', ()=>{
  filleCart.style.display = 'none';
  emptyCart.style.display = 'flex';
  emptyCart.textContent  = 'Thank you for your purchase!';
   cartItems = 0;
  quantity = 0;
  quantityEl.textContent = 0;
  notificationEl.textContent = cartItems
});

//===============
       //Gallery 
//===============
// Image gallery 
const productImages = [
  "images/image-product-1.jpg",
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg"
];

let currentIndex = 0;

// Main product section 
const mainPic = document.querySelector("header .main-pic img");
const thumbs = document.querySelectorAll("header .thumbnails img");

// lightbox
const lightbox = document.querySelector('#lightbox');
const lightboxMain = lightbox.querySelector("#lightbox .main-pic img");
const lightboxThumbs = lightbox.querySelectorAll("#lightbox .thumbnails img");
const closeBtn = lightbox.querySelector('img[alt="close"]');
const leftArrow = lightbox.querySelector(".left-arrow");
const rightArrow = lightbox.querySelector(".right-arrow");
//Image gallery Fuctionality

//lightbox open -> when clicking product img
mainPic.addEventListener('click', () =>{
    lightbox.classList.add('active');
    lightboxMain.src = productImages[currentIndex];
});

//close button
closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

// Thumbnails -> main section
thumbs.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    // Style disapears when another one was clicked
    thumbs.forEach(t => {
      t.style.border = "none";
      t.style.opacity = "1";
    });
    //Style apears on clicked one
    thumb.style.border= '5px solid #ff7d1a';
    thumb.style.opacity = '0.7';
    //update the pic
    currentIndex = index;
    mainPic.src = productImages[currentIndex];
  });
});

// Thumbnails -> lightbox
lightboxThumbs.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    currentIndex = index;
    lightboxMain.src = productImages[currentIndex];
  });
});

//lightbox arrows 
leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + productImages.length) % productImages.length;
  lightboxMain.src = productImages[currentIndex];
});

//right arrow 
rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1 ) % productImages.length;
    lightboxMain.src = productImages[currentIndex];
});



//==============
//        Mobile
//=============
const menuIcon = document.querySelector('#menu-icon');
const mobileMenu = document.querySelector('#mobile-menu');

const mobileLeftArrow = document.querySelector('.mobile-arrows .left-arrow');
const mobileRightArrow = document.querySelector('.mobile-arrows .right-arrow');

menuIcon.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  // Switch icon between menu and close
  if (mobileMenu.classList.contains('active')) {
  menuIcon.src = "images/icon-close.svg";
  menuIcon.classList.add('menu-open');  
  }else{
  menuIcon.src = "images/icon-menu.svg";
  menuIcon.classList.remove('menu-open'); 
}

});


//mobile left arrow
mobileLeftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + productImages.length) % productImages.length;
  mainPic.src = productImages[currentIndex];
});

//mobile right arrow
mobileRightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % productImages.length;
  mainPic.src = productImages[currentIndex];
});