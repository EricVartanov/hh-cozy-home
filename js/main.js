'use strict'

function banner_resize() {
    var banners = [].slice.call(document.querySelectorAll('.idc-bg-wrapper'));
    banners.forEach(function (elem) {
        return elem.style.width = document.documentElement.clientWidth + 'px';
    });
}

document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        // Ваш скрипт
        var AnchorsElem = [].slice.call(document.querySelectorAll("a[href^='#']")),
            V = 0.5;
        /* console.log(AnchorsElem) */
        AnchorsElem.forEach(function (elem) {
            elem.addEventListener('click', function (event) {
                event.preventDefault()
                var w = window.pageYOffset,  // прокрутка
                    hash = this.href.replace(/[^#]*(.*)/, '$1'),  // id элемента, к которому нужно перейти
                    t = document.querySelector(hash).getBoundingClientRect().top,  // отступ от окна браузера до id
                    start = null;
                // подробнее про функцию анимации [developer.mozilla.org]
                function step(time) {
                    if (!start) start = time;
                    var progress = time - start,
                        r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
                    window.scrollTo(0, r);
                    if (r != w + t) {
                        requestAnimationFrame(step)
                    } else {
                        location.hash = hash  // URL с хэшем
                    }
                }
                window.requestAnimationFrame(step);
                console.log(this)
            }, false)
        })

        window.addEventListener('resize', function () {
            banner_resize();
        });
        banner_resize();
    }
};