document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('menu-toggle');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const closeButton = document.getElementById('close-sidebar');
    const toggleSidebar = () => {
        console.log('Toggle button clicked');
        console.log('Sidebar classes before:', sidebar.className);
        if (sidebar.classList.contains('translate-x-full')) {
            console.log('Opening sidebar');
            sidebar.classList.remove('translate-x-full');
            sidebar.classList.add('translate-x-0');
            overlay.classList.remove('hidden');
        } else {
            console.log('Closing sidebar');
            sidebar.classList.remove('translate-x-0');
            sidebar.classList.add('translate-x-full');
            overlay.classList.add('hidden');
        }
        console.log('Sidebar classes after:', sidebar.className);
    };
    toggleButton.addEventListener('click', toggleSidebar);
    closeButton.addEventListener('click', () => {
        console.log('Close button clicked');
        sidebar.classList.remove('translate-x-0');
        sidebar.classList.add('translate-x-full');
        overlay.classList.add('hidden');
    });
    overlay.addEventListener('click', () => {
        console.log('Overlay clicked');
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


document.getElementById("dropdownButton").addEventListener("click", function () {
    document.getElementById("dropdownMenu").classList.toggle("hidden");
});

document.getElementById("contactButton").addEventListener("click", function () {
    let dropdown = document.getElementById("contactDropdown");
    dropdown.classList.toggle("hidden");
});


const banner = document.querySelector('.banner');
const text = document.querySelector('.banner-text');

banner.addEventListener('mousemove', (e) => {
    const { offsetWidth: width, offsetHeight: height } = banner;
    const { offsetX: mouseX, offsetY: mouseY } = e;
    const moveX = (mouseX / width) - 0.5;
    const moveY = (mouseY / height) - 0.5;
    text.style.transform = `translate(${moveX * 30}px, ${moveY * 10}px)`;
});