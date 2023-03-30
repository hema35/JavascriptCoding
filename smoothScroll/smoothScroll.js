
const btnScroll = document.getElementById('scroll');
const section = document.getElementById('scrolled');

btnScroll.addEventListener('click', function (e){
    scrolled.scrollIntoView({behavior: 'smooth'});
})

