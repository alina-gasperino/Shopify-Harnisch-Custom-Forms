$(document).ready(function () {
    $(".book_service").click(function() {
        $(this).closest(".hulk_form").find(".modal_overlay").show();
        $(this).closest(".hulk_form").find(".form_modal").show();
    })
    $(".fa-close").click(function() {
        $(this).closest(".hulk_form").find(".modal_overlay").hide();
        $(this).closest(".hulk_form").find(".form_modal").hide();
    })
});
