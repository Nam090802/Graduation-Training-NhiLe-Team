const navBarMenu = document.querySelector('.nav-bar-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const closeButton = document.querySelector('.closebtn')
const dropDownTriggers = document.querySelectorAll('.mobile-menu .menu-items .menu-main .menu-item .dd-trigger')
const iconsDDTrigger = document.querySelectorAll('.mobile-menu .menu-items .menu-main .menu-item .dd-trigger i')
const subsMenuMobile = document.querySelectorAll('.mobile-menu .menu-items .menu-main .menu-item .sub-menu')
const footerArticlesTitle = document.querySelectorAll('.footer-article .title')
const subFooterArticales = document.querySelectorAll('.footer-article .sub-articles')
const btnScrollUp = document.querySelector('.scroll-up-btn')
   
navBarMenu.onclick = () => {
    navBarMenu.classList.toggle('change')
    mobileMenu.classList.toggle('slip')
}

closeButton.onclick = () => {
    navBarMenu.classList.toggle('change')
    mobileMenu.classList.toggle('slip')
}

const openSubMenu = () => {
    for (let i = 0; i < dropDownTriggers.length; i++) {
        dropDownTriggers[i].onclick = () => {
            subsMenuMobile[i].classList.toggle('open')
            iconsDDTrigger[i].classList.toggle('rotate')
        }
    }
}

const openSubArticles = () => {
    for (let i = 0; i < footerArticlesTitle.length; i++) {
        footerArticlesTitle[i].onclick = () => {
            subFooterArticales[i].classList.toggle('expanded')
        }
    }
}

// btnScrollUp.onclick = () => {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//     });
// }

//     window.onscroll = function() {
//         scrollFunction();
//     };
  
//     function scrollFunction() {
//     if (600 < document.body.scrollTop || 600 < document.documentElement.scrollTop) {
//         btnScrollUp.style.display = "block";
//     } else {
//         btnScrollUp.style.display = "none";
//     }
//     }

document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        var scrollPosition = window.scrollY || document.documentElement.scrollTop;
        var windowWidth = window.innerWidth || document.documentElement.clientWidth;
    
        if (scrollPosition > 600) {
            btnScrollUp.style.display = "block";
    
            // Lấy chiều cao của toàn bộ trang
            var documentHeight = Math.max(
                document.body.scrollHeight,
                document.body.offsetHeight,
                document.documentElement.clientHeight,
                document.documentElement.scrollHeight,
                document.documentElement.offsetHeight
            );
    
            // Khi đến cuối trang và chiều rộng màn hình <= 991px, cách bottom 208px
            if (scrollPosition + window.innerHeight >= documentHeight - 208 && windowWidth <= 991) {
                btnScrollUp.style.bottom = "208px";
            } else if (scrollPosition + window.innerHeight >= documentHeight - 100 && windowWidth > 991) {
                btnScrollUp.style.bottom = "100px";
            } else {
                btnScrollUp.style.bottom = "12px";
            }
        } else {
            btnScrollUp.style.display = "none";
        }
    });
    
    btnScrollUp.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
      
openSubMenu()
openSubArticles()