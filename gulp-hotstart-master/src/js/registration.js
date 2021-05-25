$(function(){
    const popupMain = $('popup__main');
    const popupRegistration = $('popup__registration');
    const popupAuthorization = $('popup__authorization');
    const popupPasswordRecovery = $('popup__password-recovery');
    $("img.popup__main").fancybox(
        {						
      "padding" : 20,
      "imageScale" : false, 
        "zoomOpacity" : false,
        "zoomSpeedIn" : 1000,	
        "zoomSpeedOut" : 1000,	
        "zoomSpeedChange" : 1000, 
        "frameWidth" : 700,	 
        "frameHeight" : 600, 
        "overlayShow" : true, 
        "overlayOpacity" : 0.8,	
        "hideOnContentClick" :false,
        "centerOnScroll" : false         
        });
})