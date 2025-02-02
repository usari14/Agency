AOS.init();

document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const closeButton = document.getElementById('close-sidebar');
    const toggleSidebar = () => {
        if (sidebar.classList.contains('translate-x-full')) {
            sidebar.classList.remove('translate-x-full');
            sidebar.classList.add('translate-x-0');
            overlay.classList.remove('hidden');
        } else {
            sidebar.classList.remove('translate-x-0');
            sidebar.classList.add('translate-x-full');
            overlay.classList.add('hidden');
        }
    };
    toggleButton.addEventListener('click', toggleSidebar);
    closeButton.addEventListener('click', () => {
        sidebar.classList.remove('translate-x-0');
        sidebar.classList.add('translate-x-full');
        overlay.classList.add('hidden');
    });
    overlay.addEventListener('click', () => {
        sidebar.classList.remove('translate-x-0');
        sidebar.classList.add('translate-x-full');
        overlay.classList.add('hidden');
    });
});


const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function () {
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});


// document.getElementById("dropdownButton").addEventListener("click", function () {
//     document.getElementById("dropdownMenu").classList.toggle("hidden");
// });

// document.getElementById("contactButton").addEventListener("click", function () {
//     let dropdown = document.getElementById("contactDropdown");
//     dropdown.classList.toggle("hidden");
// });


// const banner = document.querySelector('.banner');
// const text = document.querySelector('.banner-text');

// banner.addEventListener('mousemove', (e) => {
//     const { offsetWidth: width, offsetHeight: height } = banner;
//     const { offsetX: mouseX, offsetY: mouseY } = e;
//     const moveX = (mouseX / width) - 0.5;
//     const moveY = (mouseY / height) - 0.5;
//     text.style.transform = `translate(${moveX * 30}px, ${moveY * 10}px)`;
// });


// window.onload = function () {
//     setTimeout(() => {
//         document.getElementById("preloader").classList.add("opacity-0");
//         document.getElementById("content").style.opacity = "1";
//         setTimeout(() => {
//             document.getElementById("preloader").style.display = "none";
//         }, 700);
//     }, 1500);
// };


// carousel

$(document).ready(function () {
    $(".tab-carousel").owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 2
            },
            520: {
                items: 3
            },
            768: {
                items: 4
            },
            900: {
                items: 3
            },
            1250: {
                items: 4
            }
        }
    });
});

// clients

$(document).ready(function () {
    $(".client-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplaySpeed: 1000, 
        smartSpeed: 1000,    
        responsive: {
            0: { items: 1 },
            768: { items: 2 },
            1024: { items: 3 }
        }
    });
});


// brand-carousel

$(document).ready(function () {
    $(".brand-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 6000,
        autoplaySpeed: 1000, 
        smartSpeed: 1000,    
        responsive: {
            0: { items: 2 },
            768: { items: 3 },
            1024: { items: 4 }
        }
    });
});



// smooth scrool 

// document.addEventListener("DOMContentLoaded", function () {
//     document.querySelectorAll('.nav-link').forEach(anchor => {
//         anchor.addEventListener('click', function (e) {
//             const targetId = this.getAttribute('href');
//             if (targetId.startsWith("#")) {
//                 e.preventDefault();
//                 const targetElement = document.querySelector(targetId);
//                 if (targetElement) {
//                     window.scrollTo({
//                         top: targetElement.offsetTop - 100, // Adjust offset for fixed navbar
//                         behavior: "smooth"
//                     });
//                 }
//             }
//         });
//     });
// });