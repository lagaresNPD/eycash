$('th').click(function() {
    var th_index = $(this).index();
	$('thead th').removeClass('highlight');
    $(this).addClass('highlight');
    $('tr').each(function() {
        $(this).find('td').removeClass('highlight');
    	$(this).find('td').eq(th_index -1).addClass('highlight');
        // if($(this).find('td').eq(th_index -1).hasClass('highlight')){
        //     $(this).find('td').eq(th_index -1).removeClass('highlight');
        // } else {
        //     $(this).find('td').removeClass('highlight');
        //     $(this).find('td').eq(th_index -1).toggleClass('highlight');
        // }
    });
});
