jQuery.noConflict();
jQuery(document).ready(function($) {    
// start code
$('#main').modal('show');
$('#main').on('hidden.bs.modal', function (e) {
	/*$('#main11').modal('show'); */
	$('[data-toggle="tooltip"]').tooltip({template:'<div class="tooltip" role="tooltip">www<div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'});
})
// end code    
});
