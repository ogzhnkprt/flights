$(document).ready(function(){
    $(window).resize();
});
$(window).resize(function(){
    // your code
    var windowWidth=$(window).width();
    var mainContainerWidth=windowWidth-100; // For example
    $("#yourMainContainer").css({"width":mainContainerWidth+"px"});
});


$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip(); 
});






/*$(function(){
    $('a[title]').tooltip();
});*/


/*$(document).ready(function(){
    $('.clickable').on('click',function(){  console.log("xxxxxxxxxxx");
        var effect = $(this).data('effect');
        $(this).closest('.panel')[effect]();
        });
});*/

/*function sil(){
    alert("zxcxc");
}*/

