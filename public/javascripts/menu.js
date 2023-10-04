// menu.js Nick Kaplan 301261925 2023-10-04
$(document).ready(function(){
    var element = $('meta[name="active-menu"]').attr('content');
    $('#' + element).addClass('active');
});