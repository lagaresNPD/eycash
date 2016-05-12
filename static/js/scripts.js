$('th').click(function() {
    var th_index = $(this).index();
    $('tr').each(function() {
        if($(this).find('td').eq(th_index).hasClass('highlight')){
            $(this).find('td').eq(th_index).removeClass('highlight');
        } else {
            $(this).find('td').removeClass('highlight');
            $(this).find('td').eq(th_index).toggleClass('highlight');
        }
    });
});
