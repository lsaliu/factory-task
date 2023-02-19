$(document).ready(function(){
    $("#btn-right").on("click", function(){
       rightClick();
    });

    $("#btn-left").on("click", function(){
        leftClick();
     });
});

function rightClick() {
    var currentImgFirstRow = $('#slider-first-row').children().first();
    currentImgFirstRow.fadeOut(500, function() {
        currentImgFirstRow.removeAttr("style");
        $('#slider-first-row').append(currentImgFirstRow);  
    }) 
  
    var currentImgSecondRow = $('#slider-second-row').children().first();
    currentImgSecondRow.fadeOut(500, function() {
        currentImgSecondRow.removeAttr("style");
        $('#slider-second-row').append(currentImgSecondRow);  
    })   
}

function leftClick() {
    var lastImgFirstRow = $('#slider-first-row').children().last();
    $(lastImgFirstRow).prependTo($('#slider-first-row')).hide().fadeIn(700);
 
    var lastImgSecondRow = $('#slider-second-row').children().last();
    $(lastImgSecondRow).prependTo($('#slider-second-row')).hide().fadeIn(700);
}







