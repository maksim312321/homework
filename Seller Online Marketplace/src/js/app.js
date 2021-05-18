$(document).ready(function(){
    let position = 0;
    const track = $('.slider__track');//все слайды
    const item = $('.slider__item');//слайд
    const btnPrev = $('.slider__prev');//кнопка
    const btnNext = $('.slider__next');//кнопка
    itemsCount = item.size();//$('.slider__img').lenght;
    let itemWidth = 742;//ширину задал фикс, не успеваю найти адекватного способа нахождения ширины картинки
    let hasClick = false;


    function auto(){
        if(hasClick == false){
        position -= itemWidth;  
        checkBtns();
        //перемещение на след слайд    
        track.css({
            transform: `translateX(${position}px)`,
        })
    }
    }
    let timerId = setInterval(auto,2000);
    setTimeout(() => {clearInterval(timerId)}, 2000*(itemsCount-1));

    //ф-я отключения кнопок по условию
    const checkBtns = () => {
        btnPrev.prop('disabled', position === 0);
        btnNext.prop('disabled', position <= -(itemsCount - 1)*itemWidth);
    };

    btnNext.click(function(){
        hasClick =true;
        position -= itemWidth;  
        checkBtns();
        //перемещение на след слайд    
        track.css({
            transform: `translateX(${position}px)`,
        })
        
    });

    btnPrev.click(function(){
        hasClick =true;
        position += itemWidth
        checkBtns();
        //перемещение на след слайд        
        track.css({
            transform: `translateX(${position}px)`,
        })
        
    });
    checkBtns();
});

new Swiper('.viewed', {
    //стрелки
    navigation: {
        nextEl: '.viewed__next',
    },
});
new Swiper('.reviews', {
    //стрелки
    navigation: {
        nextEl: '.reviews__next',
    },
});