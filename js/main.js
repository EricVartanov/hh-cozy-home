'use strict'

function banner_resize() {
    var banners = [].slice.call(document.querySelectorAll('.idc-bg-wrapper'));
    banners.forEach(function(elem) {
        return elem.style.width = document.documentElement.clientWidth + 'px';
    });
}

// открытие/закрытие списка городов
const list = document.querySelector('.idc-cities')
const burger = document.querySelector('.idc-burger')

function listOpen() {

    list.addEventListener('click', function() {
        burger.classList.toggle('open')
    })

    document.addEventListener('click', function(e) {
        if (!list.contains(e.target)) {
            burger.classList.remove('open')
        }
    })
}

const cityName = document.querySelectorAll('.idc-item-name')
let allDots = document.querySelectorAll('.idc-dot')


// функция, при наведении города сравнивает дата атр из списка и айди точки, при совпадении добавляет класс к тултипу точки 
let tooltipOpen = function(names, dots) {
    dots.forEach(function(dot) {
        dot.addEventListener('mouseover', function() {
            dot.classList.add('show')

        })
        dot.addEventListener('mouseout', function() {
            if (!dot.getAttribute('data-clicked') == 1) {
                dot.classList.remove('show')
            }
        })
        dot.addEventListener('click', function() {

            var dotName = dot.querySelector('.idc-tooltip')
            let titleCity = document.querySelector('.idc-cities').firstChild
            if (!dot.getAttribute('data-clicked') == 1) {
                dots.forEach(function(e) {
                    e.classList.remove('show')
                    e.removeAttribute('data-clicked')

                })
                titleCity.textContent = dotName.textContent
                dot.classList.add('show')
                dot.setAttribute('data-clicked', 1)

            }
        })
    })
    names.forEach(function(name) {
        name.addEventListener('mouseover', function() {
            var elem = document.querySelector('#' + name.getAttribute('data-id') + '')
            elem.classList.add('show')

        })
        name.addEventListener('mouseout', function() {
            var elem = document.querySelector('#' + name.getAttribute('data-id') + '')
            if (!elem.getAttribute('data-clicked') == 1) {
                elem.classList.remove('show')
            }

        })
        name.addEventListener('click', function() {
            var elem = document.querySelector('#' + name.getAttribute('data-id') + '')
            let titleCity = document.querySelector('.idc-cities').firstChild
            allDots.forEach(function(e) {
                e.classList.remove('show')
                e.removeAttribute('data-clicked')
            })
            titleCity.textContent = name.textContent
            elem.classList.add('show')
            elem.setAttribute('data-clicked', 1)
        })
    })
}

document.onreadystatechange = function() {
    if (document.readyState === 'complete') {
        // Ваш скрипт
        tooltipOpen(cityName, allDots)

        // открытие/закрытие списка городов
        listOpen()

        window.addEventListener('resize', function() {
            banner_resize();
        });
        banner_resize();
    }
};