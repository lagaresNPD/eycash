
/* highlight table column */
$('.highlightable-column th').click(function() {

    var th_index = $(this).index();

    $('.highlightable-column thead th').removeClass('highlight');
    $('.highlightable-column td').removeClass('highlight');

   if($(this).index() !== 0) {
        $(this).addClass('highlight');
        $('tr').each(function() {
            if($(this).find('td').eq(th_index -1).hasClass('highlight')){
                $(this).find('th').eq(th_index -1).removeClass('highlight');
                $(this).find('td').eq(th_index -1).removeClass('highlight');
            } else {
                $(this).find('td').removeClass('highlight');
                $(this).find('th').eq(th_index).addClass('highlight');
                $(this).find('td').eq(th_index -1).toggleClass('highlight');
            }
        });
    }
});

/* set filters label to name of selected link */
$('.filters .btn-group a').click( function () {
    var dd_result = $(this).text();
    var dd_id = $(this).parent().parent().attr('data-id');
    $('#' + dd_id).text(dd_result);
});

/* number cells in a top-5 table */
// $(document).ready(function(){
// 	$('.top5-table tr').each(function(tr_index){
// 		$(this).children().first().html(tr_index + 1);
// 	});
// });
