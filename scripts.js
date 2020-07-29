'use strict';
window.addEventListener('DOMContentLoaded', function () {
    let list = document.querySelector('.content__list');
    let todo;
    function toLocal() {
        todo = list.innerHTML;
        localStorage.setItem('todo', todo);
    }
    function addWork() {
        let valueInput = document.querySelector('.content__input').value;
        let element = '<li class="content__list-item"></li>';
        let elemBtn = '<button class="content__close-btn">Сделал</button>';
        if (valueInput == '') {
            alert('Вы ничего не ввели повторите ввод');
        }
        else {
            document.querySelector('.content__list').insertAdjacentHTML('beforeend', element);
            document.querySelector('.content__list-item:last-child').textContent = valueInput;
            document.querySelector('.content__list-item:last-child').insertAdjacentHTML('beforeend', elemBtn);
        }
        document.querySelector('.content__input').value = '';
        toLocal();
    }
    function delWork(event) {
        if (event.target.tagName == 'BUTTON') {
            event.target.style.backgroundColor = 'green'
            event.target.parentNode.classList.add('decorationDelWork');
            setTimeout(() => {
                event.target.parentNode.remove();
                toLocal();
            }, 1000);
        }
    };
    document.querySelector('.content__btn').addEventListener('click', addWork);
    document.querySelector('.content__list').addEventListener('click', delWork);
    if (localStorage.getItem('todo')) {
        list.innerHTML = localStorage.getItem('todo');
    }
});