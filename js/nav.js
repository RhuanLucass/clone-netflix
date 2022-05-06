(function () {
    var nav = document.querySelector('header .container');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 0)nav.classList.add('header-black'); // > 0 ou outro valor desejado
        else nav.classList.remove('header-black');
    });
})();