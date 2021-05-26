$(function(){
    const popupMain = $('.popup__main');
    const mainBtn = $('.main__btn');
    const mainInput = $('.main__input');
    let database = ['test1@mail.ru','test2@mail.ru','test3@mail.ru']
    const popupRegistration = $('.popup__registration');
    const popupAuthorization = $('.popup__authorization');
    const popupPasswordRecovery = $('.popup__password-recovery');

    $(mainBtn).on("click", function(){
        $.fancybox.close();
    });
    // $(mainInput).keyup(function(e){
    //     if(e.keyCode == 13)
    //     {
    //         $(this).trigger("enterKey");
    //     }
    // });
    $(mainInput).on( "change", function(){
        let flag = false;
        console.log(mainInput.value);
        // for(let num = 0; num < database.length; num++){
        //     console.log(mainInput.value);
        //     if(mainInput.innerHTML == database[num]){
        //         flag = true;
        //     }
        // }

        

    } )

});

