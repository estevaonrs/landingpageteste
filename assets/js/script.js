
// Fixed Navbar Function
const navbarScroll = document.getElementById('navbar');


window.addEventListener('scroll', function() {
    if(this.window.scrollY > 90) {
        navbarScroll.classList.add('active');
    } else {
        navbarScroll.classList.remove('active');
    }
});

// Toggle Navbar active link
const ul = document.querySelector('ul');
const li = document.querySelectorAll('li');

li.forEach(el => {
    el.addEventListener('click', function(){
        ul.querySelector('.active').classList.remove('active');

        el.classList.add('active');
    });
});