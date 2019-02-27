/*var main = function () {
    "use scrict";
    console.log("Hello world!");
}
$(document).ready(main);
*/
var ex = function () {
    "use strict";
    $.getJSON("carts/aceOfSpages.json", function (card) {
        console.log(card);
    });
};
$(document).ready(ex);