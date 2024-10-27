document.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const mainNav = document.querySelector('.main-nav');
    if(scrollTop >10) {
        mainNav.classList.add('fixed-header');
    }
    else {
        mainNav.classList.remove('fixed-header')
    }
});