// Copy Menu For Mobile
function copyMenu() {

    // Copy inside .dpt-cat to .departments
    var dptCategory = document.querySelector('.dpt-cat')
    var dptPlace = document.querySelector('.departments')
    dptPlace.innerHTML = dptCategory.innerHTML

    // Copy inside Nav to Nav
    var mainNav = document.querySelector('.header-nav nav')
    var navPlace = document.querySelector('.off-canvas nav')
    navPlace.innerHTML = mainNav.innerHTML

    // Copy .header-top .wrapper to .thetop-nav
    var topNav = document.querySelector('.header-top .wrapper')
    var topPlace = document.querySelector('.off-canvas .thetop-nav')
    topPlace.innerHTML = topNav.innerHTML
}

copyMenu()

// Show Mobile Menu

const menuButton = document.querySelector('.trigger'),
      closeButton = document.querySelector('.t-close'),
      addClass = document.querySelector('.site');

menuButton.addEventListener('click', function() {

    addClass.classList.toggle('showmenu')
})

closeButton.addEventListener('click', function() {

    addClass.classList.remove('showmenu')
})

// Show Sub Menu On Mobile

const subMenu = document.querySelectorAll('.has-child .icon-small')

subMenu.forEach( (menu) => menu.addEventListener('click', toggle))

function toggle(e) {

    e.preventDefault()

    subMenu.forEach( (item) => item != this ? item.closest('.has-child').classList.remove('expand') : null)

    if (this.closest('.has-child').classList != 'expand') {

        this.closest('.has-child').classList.toggle('expand')
    }
}



// Swiper Init

const swiper = new Swiper('.swiper', {
   
    loop: true,
    
    pagination: {
      el: '.swiper-pagination',
    },

})


// Show Search
const searchButton = document.querySelector('.t-search'),
      tClose = document.querySelector('.search-close'),
      showClass = document.querySelector('.site');


searchButton.addEventListener('click', function() {

    showClass.classList.toggle('showsearch')
})

tClose.addEventListener('click', function() {

    showClass.classList.remove('showsearch')
})


// Show dpt Menu

const dptButton = document.querySelector('.dpt-cat .dpt-trigger'),
      dptClass = document.querySelector('.site');

dptButton.addEventListener('click', function() {

    dptClass.classList.toggle('showdpt')
})

// Product Image Slider

var productThumb = new Swiper('.small-image', {

    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {

        481: {

            spaceBetween: 32,
        }
    }
})

var productBig = new Swiper('.big-image', {

    loop: true,
    autoHeight: true,
    navigation: {

        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    thumbs: {

        swiper: productThumb
    }
})

// Stock Products Bar Width Percentage

var stocks = document.querySelectorAll('.products .stock')

for (let x = 0; x < stocks.length; x++) {

    let stock = stocks[x].dataset.stock,
    available = stocks[x].querySelector('.qty-available').innerHTML,
    sold = stocks[x].querySelector('.qty-sold').innerHTML,
    percent = sold * 100 / stock;

    stocks[x].querySelector('.available').style.width = percent + "%";
}

// Show Cart On Click

const divToShow = '.mini-cart';
const divPopUp = document.querySelector(divToShow);
const divTrigger = document.querySelector('.cart-trigger');

divTrigger.addEventListener('click', ()=> {

    setTimeout( () => {

        if (!divPopUp.classList.contains('show')) {

            divPopUp.classList.add('show')
        }
    }, 250)
})

// Close By Click Outside

document.addEventListener('click', (e) => {

    const isCloset = e.target.closest(divToShow)
    if (!isCloset && divPopUp.classList.contains('show')) {

        divPopUp.classList.remove('show')
    }
})