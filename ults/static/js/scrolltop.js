document.onreadystatechange = function () {
    let lastScrollPosition = 0;
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function (e) {
        lastScrollPosition = window.scrollY;

        if (lastScrollPosition > 100)
            navbar.classList.add('navbar-dark');
        else
            navbar.classList.remove('navbar-dark');
    });
    let last = 0;
    const myr = document.querySelector('.back-to-top');
    window.addEventListener('scroll', function (f) {
        last = window.scrollY;

        if (last > 100)
            myr.classList.add('show');
        else
            myr.classList.remove('show');
    });
}