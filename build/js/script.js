'use strict';

// отключает классы для работы сайта без js

var header = document.querySelector('.header__inner');
var settings = document.querySelector('.settings');

header.classList.remove('header__inner--no-js');
settings.classList.remove('settings--no-js');

// открывает-закрвывает меню в шапке

var openButton = document.querySelector('.header__button--open');
var closeButton = document.querySelector('.header__button--close');
var modal = document.querySelector('.header__wrapper');

modal.classList.remove('header__wrapper--open');
modal.classList.add('header__wrapper--close');

openButton.addEventListener('click', function (evt) {
  evt.preventDefault();

  modal.classList.add('header__wrapper--open');
  modal.classList.remove('header__wrapper--close');
  document.querySelector('.page').style.overflow = 'hidden';
});

closeButton.addEventListener('click', function (evt) {
  evt.preventDefault();

  modal.classList.add('header__wrapper--close');
  modal.classList.remove('header__wrapper--open');
  document.querySelector('.page').style.overflow = 'visible';
});

// открывает-закрвывает блок с фильтрами в каталоге

var openSettings = document.querySelector('.filters__open');
var closeSettings = document.querySelector('.settings__button-close');

openSettings.addEventListener('click', function (evt) {
  evt.preventDefault();

  settings.classList.remove('settings--hide');
});

closeSettings.addEventListener('click', function (evt) {
  evt.preventDefault();

  settings.classList.add('settings--hide');
});
