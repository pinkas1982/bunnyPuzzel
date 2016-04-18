﻿$(function () {
    var htmlTOAppend = "";
    for (var i = 0; i < 16; i++) {
        htmlTOAppend += "<div class='droparea'  data-number=\"" + (i) + "\"  ></div>";
    }
    $(".container").html(htmlTOAppend);

    htmlTOAppend = "";
    for (var i = 0; i < 16; i++) {
        htmlTOAppend += ("<img src=\"images\\bunny " + (i) + ".gif\" />");
    }
    $('.imgContainer').html(htmlTOAppend);

    $("img").draggable({ cursor: "pointer" });


    $(".droparea").droppable({

        accept: "img",
        hoverClass: "hover",
        drop: function (event, ui) {
           
            var imgnum = $(event.toElement).attr("src");
            imgnum = imgnum.replace("images\\bunny ", "");
            imgnum = imgnum.replace(".gif", "");
            
                if ($(this).attr("data-number") == imgnum) {
                    $(this).addClass("yellow");
                    $(this).html("<img src=\"images\\bunny " + imgnum + ".gif\" />");
                    $(event.toElement).remove();


                } else {
                    
                
            }
          

        }
    });
});