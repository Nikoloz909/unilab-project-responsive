const burger = document.getElementById('burger');
const burger_inside = document.getElementById('burger-inside');
const mobile_nav = document.getElementsByClassName('mobile-nav')[0];

burger.onclick = function () {
    burger_inside.onclick = function () {
        mobile_nav.classList.remove('d-block');
    }
    mobile_nav.classList.add('d-block');
}