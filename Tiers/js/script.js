jQuery.noConflict();
jQuery(document).ready(function($) {    
// start code

if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style');
  msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
  document.querySelector('head').appendChild(msViewportStyle);
}
var nua = navigator.userAgent
var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
if (isAndroid) {$('select.form-control').removeClass('form-control').css('width', '100%')}
 
$("a[href$='.jpg'],a[href$='.png'],a[href$='.gif']").fancybox({
	padding : 5
}); 


// end code    
});
