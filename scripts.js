const images = [
    'https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', // Classroom with students
    'https://images.pexels.com/photos/1158366/pexels-photo-1158366.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', // Books and stationery
    'https://images.pexels.com/photos/464149/pexels-photo-464149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' // Blackboard with writing
];
let currentIndex = 0;

function changeBackgroundImage() {
    const homeSection = document.getElementById('home');
    homeSection.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackgroundImage, 5000); // Change image every 5 seconds

window.addEventListener('scroll', function() {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});
