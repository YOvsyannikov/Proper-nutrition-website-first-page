import tabs from './modules/tabs';
        import modal from './modules/modal';
        import timer from './modules/timer';
        import cards from './modules/cards';
        import calculator from './modules/calculator';
        import form from './modules/form';
        import slider from './modules/slider';
        import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', function() {

    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);

        tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
        modal('[data-modal]', '.modal');
        timer('.timer', '2023-02-28');
        cards();
        calculator();
        form('form', modalTimerId);
        slider({
            container: '.offer__slider',
            slide: '.offer__slide',
            nextArrow: '.offer__slider-next',
            prewArrow: '.offer__slider-prev',
            totalCounter: '#total',
            currentCounter: '#current',
            wrapper: '.offer__slider-wrapper',
            field: '.offer__slider-inner'
        });


});