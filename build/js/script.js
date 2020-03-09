'use strict';

var header = document.querySelector('.header__inner');

header.classList.remove('header__inner--no-js');

var openButton = document.querySelector('.header__button--open');
var closeButton = document.querySelector('.header__button--close');
var modal = document.querySelector('.header__wrapper');
var page = document.querySelector('.page');

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
