var main = function () {
    "use strict";
    var $content = $("<div>Hello. World!</div>").hide();
    var $moreContect = $("<div>Goodbye World!</div>").hide();
    $("body").append($content);
    $content.slideDown(2000, function () {
        $("body").append($moreContect);
        $moreContect.fadeIn();    
    });
};
$(document).ready(main);