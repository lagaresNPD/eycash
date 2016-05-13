
/* highlight table column */
$('.data-table th').click(function() {
    var th_index = $(this).index();
	$('.data-table thead th').removeClass('highlight');
    $(this).addClass('highlight');
    $('.data-table tr').each(function() {
        $(this).find('td').removeClass('highlight');
    	$(this).find('td').eq(th_index -1).addClass('highlight');
    });
});

/* number cells in a top-5 table */
// $(document).ready(function(){
// 	$('.top5-table tr').each(function(tr_index){
// 		$(this).children().first().html(tr_index + 1);
// 	});
// });
