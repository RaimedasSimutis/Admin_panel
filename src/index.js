$(function() {

    $('[data-toggle]').on( "click", function(e) {
        e.preventDefault();

        let element = $(this).data('toggle');

        $('[data-' + element + ']')
        .toggleClass(element + '-hide');

        //$(`[data-${$(this).data('toggle')}]`)
        //.toggleClass(${$(this).data('toggle')} );
    });
    





});


  