
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
				// $(this).find('th').eq(th_index).addClass('highlight');
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

/* 	hides all but the first two options in the PPG dropdown when
 	the first option in Category, "Chips," is selected  */
var category_opts = $('.filters .dropdown-menu[data-id=result2] li');
var ppg_opts = $('.filters .dropdown-menu[data-id=result5] li');
$(category_opts).click( function () {
	$(ppg_opts).removeClass('hidden');
});
$(category_opts).eq(0).click( function () {
	for (i=1; i < ppg_opts.length - 1; i++) {
		$(ppg_opts).eq(i).addClass('hidden');
	}
});

/* highlight date in mini calendar */
$('.filters .mini-calendar tbody td').click( function () {
	var calId = $(this).closest('table').attr('id');
	$('#' + calId + ' td').removeClass('active');
	$(this).toggleClass('active');
});

/* listen for date range picked to update the view and collapse the dropdown */
$('#date-to').click( function () {
	$('.report').toggleClass('hidden');
	// $('.report').toggleClass('fadeout', function() {
	// });
	$('#dateRangePicker').collapse('hide');
});

/* listen for PPG picked to update the view and collapse the dropdown */
$('#ppg a').click( function () {
	$('.report').toggleClass('hidden');
});


/* Swap tables on iframe click */
window.addEventListener('blur',function(){
	if(document.activeElement.id == 'iframe'){
		$('.sidebar .insights').toggleClass('hidden');    
	}
});

/* Animate scrolldown in trade promo page */
// $('.tpo .nav-pills a').click( function () {
//     var hash = '#tables';
//     $('html, body').animate({
//         'scrollTop': $('#tables').offset().top
//     }, 1000);
// });


/* increase delay from default 2000ms */
$('#carousel').carousel({
  interval: 5000
})


/* fix promo calendar heights on open/close */
$('.collapse').on('show.bs.collapse', function() {
	$(this).closest('td').find('.progress').css({
		'height':'120px',
		'background-color':'#ffe600'
	});
});

$('.collapse').on('hide.bs.collapse', function() {
	$(this).closest('td').find('.progress').css({
		'height':'20px',
		'background-color':'#337ab7'
	});
});


/* offcanvas.js */
$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
	$('.row-offcanvas').toggleClass('active')
  });
});

/* grid.js initialization - freezes rows/columns in big tables */
// new Grid("table1", {
// 	srcType						: "dom", 
// 	srcData						: "table1Itself", 
// 	allowGridResize				: false, 
// 	allowColumnResize			: false, 
// 	allowClientSideSorting		: false, 
// 	allowSelections				: true, 
// 	allowMultipleSelections		: true, 
// 	showSelectionColumn			: false, 
// 	fixedCols					: 1,
// 	supportMultipleGridsInView	: true
// });

/* fixed-table init */
$('#table1Itself').fxdHdrCol({
		fixedCols:  1,
		width:     "100%",
		height:    100,
		colModal: [
			   { width: 75, align: 'left' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' },
			   { width: 75, align: 'right' }
		],
		sort: false
	});

/* number cells in a top-5 table */
// $(document).ready(function(){
// 	$('.top5-table tr').each(function(tr_index){
// 		$(this).children().first().html(tr_index + 1);
// 	});
// });
