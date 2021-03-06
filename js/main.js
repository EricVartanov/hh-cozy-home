'use strict'

function banner_resize() {
    var banners = [].slice.call(document.querySelectorAll('.idc-bg-wrapper'));
    banners.forEach(function (elem) {
        return elem.style.width = document.documentElement.clientWidth + 'px';
    });
}

// открытие/закрытие списка городов
const list = document.querySelector('.idc-cities')
const burger = document.querySelector('.idc-burger')


const cityName = document.querySelectorAll('.idc-item-name')
let allDots = document.querySelectorAll('.idc-dot')
let titleCity = document.querySelector('.idc-cities').firstChild

let EditTooltip = function (namecity, editItem) {
    if (!editItem.getAttribute('data-clicked')) {
        var showElem = document.querySelector('.idc-dot.show:not(.hover)')
        if (showElem) {
            console.log(showElem)
            showElem.removeAttribute('data-clicked')
            showElem.classList.remove('show')
        }
        titleCity.textContent = namecity.textContent
        editItem.classList.add('show')
        editItem.setAttribute('data-clicked', 1)
        /*  console.log('показали новый город') */
    }
}


document.onreadystatechange = function () {
    if (document.readyState === 'complete') {
        // Ваш скрипт

        allDots.forEach(function (dot) {
            dot.addEventListener('click', function () {

                var dotName = dot.querySelector('.idc-tooltip')
                EditTooltip(dotName, dot)
            })
        })
        cityName.forEach(function (name) {
            name.addEventListener('mouseover', function () {
                var elem = document.querySelector('#' + name.getAttribute('data-id') + '')
                elem.classList.add('show', 'hover')

            })
            name.addEventListener('mouseout', function () {
                var elem = document.querySelector('#' + name.getAttribute('data-id') + '')
                if (!elem.getAttribute('data-clicked'))
                    elem.classList.remove('show')
                elem.classList.remove('hover')
            })
            name.addEventListener('click', function () {
                var elem = document.querySelector('#' + name.getAttribute('data-id') + '')
                EditTooltip(name, elem)
            })
        })

        list.addEventListener('click', function () {
            burger.classList.toggle('open')
        })

        document.addEventListener('click', function (e) {
            if (!list.contains(e.target)) {
                burger.classList.remove('open')
            }
        })
        window.addEventListener('resize', function () {
            banner_resize();
        });
        banner_resize();
    }
};