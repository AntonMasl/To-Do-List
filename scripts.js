$(function () {
    let addWork = function () {
        let valueInput = $('.content__input').val();
        let element = '<li class="content__list-item"></li>';
        let elemBtn = '<button class="content__close-btn">Сделал</button>';
        if (valueInput == '') {
            alert('Вы ничего не ввели повторите ввод');
        }
        else {
            $('.content__list').append(element);
            $('.content__list-item').last().text(valueInput).append(elemBtn);

        }
        $('.content__input').val('');
    };
    let delWork = function () {
        $(this).css({ 'background-color': 'green' });
        $(this).parent().css({
            'text-decoration': 'line-through',
            'border-style': 'solid',
            'border-color': 'green',
            'border-width': '2px',
            'color': 'green'
        });
        setTimeout(() => {
            $(this).parent().remove();
        }, 1000);
    };
    $(".content__btn").on('click', addWork);
    $('.content__list').on('click', '.content__close-btn', delWork);

    $('.content__input').on('keyup', function (event) {
        if (event.which == 13){
            $('.content__btn').addClass("content__btn_active").delay(50).queue(function(next){
                $(this).removeClass("content__btn_active");
                next();
            });
            
            $('.content__btn').trigger('click');
        }
    });
});
