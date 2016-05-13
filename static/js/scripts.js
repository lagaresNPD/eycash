
/* highlight table column */
$('.data-table th').click(function() {

    var th_index = $(this).index();

    $('.data-table thead th').removeClass('highlight');
    $('.data-table td').removeClass('highlight');

   if($(this).index() !== 0) {
        $(this).addClass('highlight');
        $('tr').each(function() {
            if($(this).find('td').eq(th_index -1).hasClass('highlight')){
                $(this).find('td').eq(th_index -1).removeClass('highlight');
            } else {
                $(this).find('td').removeClass('highlight');
                $(this).find('td').eq(th_index -1).toggleClass('highlight');
            }
        });
    }
});

/* number cells in a top-5 table */
// $(document).ready(function(){
// 	$('.top5-table tr').each(function(tr_index){
// 		$(this).children().first().html(tr_index + 1);
// 	});
// });
