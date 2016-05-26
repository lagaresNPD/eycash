
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
    // var dd_id = $(this).closest('button span[id]').attr('id');
    // console.log($(dd_id));

    $('#' + dd_id).text(dd_result);
});

/* highlight date in mini calendar */
$('.filters .mini-calendar tbody td').click( function () {
    var calId = $(this).closest('table').attr('id');
    $('#' + calId + ' td').removeClass('active');
    $(this).toggleClass('active');
});

/* listen for date range picked to update the view and collapse the dropdown */
$('#date-to').click( function () {
    alert('Date Range Selected - update the view!');
    $('#dateRangePicker').collapse('hide');
});

/* number cells in a top-5 table */
// $(document).ready(function(){
// 	$('.top5-table tr').each(function(tr_index){
// 		$(this).children().first().html(tr_index + 1);
// 	});
// });
