'use strict';

// отключает классы для работы сайта без js

var header = document.querySelector('.header__inner');
var settings = document.querySelector('.settings');

if (header) {
  header.classList.remove('header__inner--no-js');
}

if (settings) {
  settings.classList.remove('settings--no-js');
}

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

if (settings) {
  openSettings.addEventListener('click', function (evt) {
    evt.preventDefault();

    settings.classList.remove('settings--hide');
  });

  closeSettings.addEventListener('click', function (evt) {
    evt.preventDefault();

    settings.classList.add('settings--hide');
  });
}

// сворачивает/разворачивает чекбоксы из блока фильтров

var filterWrappers = document.querySelectorAll('.settings__wrapper');
var filterButtons = document.querySelectorAll('.settings__button');

var wrapFilters = function () {
  for (var i = 0; i < filterButtons.length; ++i) {
    filterButtons[i].onclick = function () {
      filterButtons[i].classList.toggle('settings__button--open');

      for (var j = 0; i < filterWrappers.length; ++i) {
        if (filterButtons[i].dataset.buttonFilters === filterWrappers[j].dataset.wrapperFilters) {
          filterWrappers[j].classList.toggle('settings__wrapper--hide');
        }
      }
    };
  }
};

if (filterWrappers) {
  wrapFilters();
}

// слайдер на карточке товара для переключения цветов

var productColorImages = document.querySelectorAll('.product-card__image-item');
var productColorButtons = document.querySelectorAll('.product-card__color-button');
var productColorButtonChecked = productColorButtons[0];

var switchColors = function () {
  for (var i = 0; i < productColorButtons.length; ++i) {
    if (productColorButtons[i].checked) {
      productColorButtonChecked = productColorButtons[i];
    }

    productColorButtons[i].onclick = function () {
      for (var j = 0; i < productColorImages.length; ++j) {
        if (productColorButtons[i].dataset.productColorButton === productColorImages[j].dataset.productColorImage) {
          productColorImages[j].style.display = 'block';
        } else {
          productColorImages[j].style.display = 'none';
        }
      }
    };
  }
};

var switchCheckedColor = function () {
  for (var j = 0; j < productColorImages.length; ++j) {
    if (productColorButtonChecked.dataset.productColorButton === productColorImages[j].dataset.productColorImage) {
      productColorImages[j].style.display = 'block';
    } else {
      productColorImages[j].style.display = 'none';
    }
  }
};

if (productColorImages) {
  switchColors();
  switchCheckedColor();
}


// переключение в десктопной версии вкладок с детализированной информацией по товару

var tabButtons = document.querySelectorAll('.product-summary__tabs-button');
var tabBlocks = document.querySelectorAll('.product-summary__item');

var openBlocks = function () {
  for (var i = 0; i < tabButtons.length; ++i) {
    tabButtons[i].onclick = function () {
      for (var j = 0; j < tabBlocks.length; ++j) {
        var wrapper = tabBlocks[j].querySelector('.product-summary__item-wrapper');
        if (tabButtons[i].dataset.tabLink === tabBlocks[j].dataset.tabBlock) {
          tabBlocks[j].classList.add('.product-summary__item--open');
          wrapper.classList.add('product-summary__item-wrapper--open');
        } else {
          tabBlocks[j].classList.remove('.product-summary__item--open');
          wrapper.classList.remove('product-summary__item-wrapper--open');
        }
      }
    };

    if (tabButtons[i].checked) {
      for (var j = 0; j < tabBlocks.length; ++j) {
        var wrapper = tabBlocks[j].querySelector('.product-summary__item-wrapper');

        if (tabButtons[i].dataset.tabLink !== tabBlocks[j].dataset.tabBlock) {
          wrapper.classList.remove('product-summary__item-wrapper--open');
        } else {
          wrapper.classList.add('product-summary__item-wrapper--open');
        }
      }
    }
  }
};

if (tabButtons && (document.body.clientWidth >= 768)) {
  openBlocks();
}

// Открытие и закрытие вкладок в мобильной версии вкладок с детализированной информацией по товару

var tabLinks = document.querySelectorAll('.product-summary__item-heading a');

var openMobBlocks = function () {
  for (var i = 0; i < tabLinks.length; ++i) {
    tabLinks[i].addEventListener('click', function (evt) {
      evt.preventDefault();

      for (var j = 0; j < tabBlocks; ++j) {
        var wrapper = tabBlocks[j].querySelector('.product-summary__item-wrapper');

        if (tabLinks[i].dataset.tabLink === tabBlocks[j].dataset.tabBlock) {
          tabBlocks[j].classList.toggle('product-summary__item--open');
          wrapper.classList.toggle('product-summary__item-wrapper--open');
        }
      }
    });
  }
};

if (tabLinks && (document.body.clientWidth < 768)) {
  openMobBlocks();
}
