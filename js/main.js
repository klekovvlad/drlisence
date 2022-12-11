//Меню
const navItems = document.querySelectorAll('.nav__item');
const menuItems = document.querySelectorAll('.menu__item');

navItems.forEach(function(navItem, index) {
    navItem.addEventListener('mouseover', () => {
        if(index < 7) {
            menuItems[index].classList.add('menu__item-show');
            let left = navItem.offsetLeft + 'px';
            menuItems[index].style.left = left;
        }
    });
    navItem.addEventListener('mouseout', () => {
        if(index < 7) {
            menuItems[index].classList.remove('menu__item-show');
        }
    });
})
menuItems.forEach(function(menuItem,index) {
    menuItem.addEventListener('mouseover', () => {
        menuItem.classList.add('menu__item-show');
        navItems[index].classList.add('nav-hover');
    });
    menuItem.addEventListener('mouseout', () => {
        menuItem.classList.remove('menu__item-show');
        navItems[index].classList.remove('nav-hover');
    });
});

//FAQ
const questonItems = document.querySelectorAll('.faq__question');
const answerItems = document.querySelectorAll('.faq__answer');

if(questonItems){
    questonItems.forEach(function(questionItem, index) {
        questionItem.addEventListener('click',() => {
            questionItem.classList.toggle('faq__question-active');
            answerItems[index].classList.toggle('faq__answer-active');
        });
    });
};

//Меню мобильное
const menuMobile = document.querySelector('.header__menu');
const nav = document.querySelector('.nav');

menuMobile.addEventListener('click', () => {
    menuMobile.classList.toggle('header__menu-close')
    nav.classList.toggle('nav-show');
});

//Анимации
window.addEventListener('scroll', () => {
    let windowCenter = window.innerHeight * 0.75;
    const animateUp = document.querySelectorAll('.animate-up');
    const animateRight = document.querySelectorAll('.animate-right');

    if(animateUp){
        animateUp.forEach(el => {
            let position = el.getBoundingClientRect().top - windowCenter;
            if (position <= 0) {
              el.classList.add('animate');
            };
          });
    };

    if(animateRight){
        animateRight.forEach(el => {
            let position = el.getBoundingClientRect().top - windowCenter;
              if (position <= 0) {
                el.classList.add('animate');
              };
            });
    }

});

//Анимация печати
let typed = document.querySelector('.typing');
if(typed) {
    let typed = new Typed('.typing', { // Тут id того блока, в которм будет анимация
        stringsElement: '#typed-strings', // Тут id блока из которого берем строки для анимации
        typeSpeed: 100, // Скорость печати
        startDelay: 500, // Задержка перед стартом анимации
        backSpeed: 50, // Скорость удаления
        loop: true // Указываем, повторять ли анимацию
    });
}

//Дата
let now = new Date();
const dateItem = document.querySelectorAll('.today');
const options = {
    month: 'long',
    day: 'numeric',
  };

if(dateItem){
    dateItem.forEach(el => {
        el.innerHTML = now.toLocaleString("ru", options);
    })
}

//Сообщение
const message = document.querySelector('.message');
const messageClose = document.querySelector('.message__close');

function showMessage() {
    message.classList.add('message-show');
};
setTimeout(showMessage,7000);
messageClose.addEventListener('click', () => {
    message.classList.remove('message-show');
});
