var header = document.querySelector('.header');
var header_logo = document.querySelector('.header-logo');
var menu_mobile = document.querySelector('.menu-mobile .menu-mobile-buttons');

var contact_desktop = document.querySelector('.header-wrapper-desktop nav .menu-header-menu-container .header-menu-list .menu-item-has-children'); 
var contact_mobile = document.querySelector('.menu-nav-mobile nav .menu-header-menu-container .header-menu-list .menu-item-has-children'); 
var sub_menu = document.querySelector('nav .menu-header-menu-container .header-menu-list .menu-item-has-children .sub-menu');



window.addEventListener('scroll', handleScroll);
menu_mobile.addEventListener('click', toggleMobileMenu);

if(contact_mobile) {
    contact_mobile.addEventListener('click', function(){
        document.querySelector('.menu-nav-mobile nav .menu-header-menu-container .header-menu-list .menu-item-has-children .sub-menu').classList.toggle('show');
        document.querySelector('nav .menu-header-menu-container .header-menu-list .menu-item-has-children a').classList.toggle('rotate-svg');
    });
}

document.body.addEventListener('click', function(){
    var element = document.querySelector('.menu-header-menu-container .header-menu-list .menu-item-has-children .sub-menu');
    if(element) {
        if(event.target == document.querySelector('.menu-header-menu-container .header-menu-list .menu-item-has-children')){ 
            element.classList.toggle('show');
        }else{
            element.classList.remove('show');
        }
    }
});

function toggleMobileMenu(){

    document.querySelector('.menu-nav-mobile').classList.toggle('open');
    document.querySelector('.menu-open').classList.toggle('show');
    document.querySelector('.menu-close').classList.toggle('show');


    if(window.scrollY < 600 && document.querySelector('.menu-nav-mobile').classList.contains('open')){
        document.querySelector('.header-cta').classList.toggle('show');
        document.querySelector('.logo-svg').classList.toggle('show');
        document.querySelector('.icon-svg').classList.toggle('show');
    }
}

function handleScroll(){

    if(window.scrollY >= 600){
        document.querySelector('.header-wrapper-desktop .logo-svg').classList.remove('show');
        document.querySelector('.header-wrapper-desktop .icon-svg').classList.add('show');
        document.querySelector('.header-cta.header-cta-desktop').classList.add('show');
        document.querySelector('.request-wrapper').classList.add('show');

    }else{
        document.querySelector('.header-wrapper-desktop .logo-svg').classList.add('show');
        document.querySelector('.header-wrapper-desktop .icon-svg').classList.remove('show');
        document.querySelector('.header-cta.header-cta-desktop').classList.remove('show');
        document.querySelector('.request-wrapper').classList.remove('show');
    }

    if (window.scrollY >= 600 && !(document.querySelector('.menu-nav-mobile').classList.contains('open'))){

        document.querySelector('.header-cta').classList.add('show');
        document.querySelector('.logo-svg').classList.remove('show');
        document.querySelector('.icon-svg').classList.add('show');

        
    }else{

        if(!(document.querySelector('.menu-nav-mobile').classList.contains('open'))){
            document.querySelector('.header-cta').classList.remove('show');
            document.querySelector('.logo-svg').classList.add('show');
            document.querySelector('.icon-svg').classList.remove('show');
        }
    }
}


// Footer

var read_more_button = document.querySelector('.read-more-button');
if(read_more_button) {
    read_more_button.addEventListener('click', function(){
        document.querySelector('.read-more-text').classList.toggle('open');
    });
}

// Disclaimer

var disclaimer_cookie = localStorage.getItem("disclaimer_cookie");
if(!disclaimer_cookie) {
    if(document.querySelector('.disclaimer-cookie')){
        document.querySelector('.disclaimer-cookie').classList.remove('disclaimer-disable');
        document.querySelector('.disclaimer-cookie button').addEventListener('click', function() {
            localStorage.setItem("disclaimer_cookie", true);
            document.querySelector('.disclaimer-cookie').classList.add('disclaimer-disable');
        })
    }
}

// Alert bar

var alert_bar = localStorage.getItem("alert_bar");
console.log(alert_bar);
if(!alert_bar) {
    document.querySelector('body').classList.add('alert-show');
}
if(document.querySelector('.alert-bar')) {
    document.querySelector('.alert-bar button').addEventListener('click', function() {
        document.querySelector('body').classList.remove('alert-show');
        localStorage.setItem("alert_bar", true);
    });
}

// Search Modal

var search_button = document.querySelectorAll('.header-search');
for(i = 0; i < search_button.length; i++) {
    search_button[i].addEventListener('click', function() {
        document.querySelector('.search-modal').classList.add('open');
        document.querySelector('.search-modal input').focus();
    });
}

var search_close = document.querySelector('.search-modal .search-close');
if(search_close) {
    search_close.addEventListener('click', function() {
        document.querySelector('.search-modal').classList.remove('open');
    });
}