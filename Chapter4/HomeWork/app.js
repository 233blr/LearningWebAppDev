var main = function () {
    "use strict";
    // $("*").css("color","red"); // функция css позволяет менять стиль выбраных элементов с помощью jQuery
    $(".important").css("color", "blue");
    $(".relevant p:nth-child(1)").css("color", "red");
};
$(document).ready(main);