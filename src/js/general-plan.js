$( document ).ready(function() {
    $('.general-plan--hover').on('mouseover', function(){
        let id = $(this).data('id');
        $('.general-plan__home[data-id="'+id+'"]').addClass('active');
    });
    $('.general-plan--hover').on('mouseout', function(){
        let id = $(this).data('id');
        $('.general-plan__home[data-id="'+id+'"]').removeClass('active');
    });
    $('.general-plan--hover').on('click', function () {
        /*alert(1);*/
    });
});