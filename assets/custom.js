$(document).ready(function () {
    $(".book_service").click(function() {
        $(this).closest(".hulk_form").find(".modal_overlay").show();
        $(this).closest(".hulk_form").find(".form_modal").show();
    })
    $(".fa-close").click(function() {
        $(this).closest(".hulk_form").find(".modal_overlay").hide();
        $(this).closest(".hulk_form").find(".form_modal").hide();
    })

    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
           var date = new Date();
           date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
           expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    function getCookie(name) {
        var nameEQ = name + "=";
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
           var cookie = cookies[i].trim();
           if (cookie.indexOf(nameEQ) === 0) {
              return cookie.substring(nameEQ.length, cookie.length);
           }
        }
        return null;
    }

    if (!getCookie('firstTimeVisitorPopup')) {
        setCookie('firstTimeVisitorPopup', 'true', 30);
        console.log("new visitor")
    }
    else {
        console.log("recurring visitor")
        $("#sca-p-popup-main-popup-container").hide()
    }
});
