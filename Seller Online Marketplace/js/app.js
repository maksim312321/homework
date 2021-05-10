$(document).ready(function(){
    let position = 0;
    const slidesToShow = 1;
    const slidesToScroll = 1;
    const container = $('.blog__slider');
    const track = $('.slider__track');
    const item = $('.slider__item');
    const btnPrev = $('.slider__prev');
    const btnNext = $('.slider__next');
    itemsCount = item.lenght;
    const itemWidth = 742;

    btnNext.click(function(){
        position -= itemWidth
        track.css({
            transform: `translateX(${position}px)`,
        })
        heckBtns();
    });

    btnPrev.click(function(){
        position += itemWidth
        track.css({
            transform: `translateX(${position}px)`,
        })
        checkBtns();
    });

    const checkBtns = () => {
        btnPrev.prop('disabled', position == 0);
        btnPrev.prop('disabled', position <= -(itemsCount - slidesToShow)*itemWidth
        );
    };

});