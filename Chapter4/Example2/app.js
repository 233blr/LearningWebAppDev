//Page 120
//Реструктурированный код
var main = function () {
    "use scrict"
    var addCommentFromInputBox = function () { //Абстрактная функция
        var $new_comment;
        if  ($(".comment-input input").val() !== "") {
            $new_comment = $("<p>").text($(".comment-input input").val());
            $new_comment.hide();
            $(".comments").append($new_comment);
            $new_comment.fadeIn();
            $(".comment-input input").val("");
        }
    };
    $(".comment-input button").on("click", function (event) {
        addCommentFromInputBox();
    });
    $(".comment-input input").on("keypress", function (event) {
        if (event.keyCode === 13) {
        addCommentFromInputBox();
        }
    });
};
$(document).ready(main);

//Page 119
//Работающий код, нужна реструктуризация!!
/*
var main = function () {
    "use scrict";
    $(".comment-input input").on("keypress", function (event) {
        var $new_comment;
        if (event.keyCode === 13) {
            if ($(".comment-input input").val() !== "") {
                $new_comment = $("<p>").text($(".comment-input input").val());
                $(".comments").append($new_comment);
                $(".comment-input input").val("");
            }
        }
    });
};
    $(".comment-input button").on("click", function (event) {
        var $new_comment;
        if ($(".comment-input input").val() !== "") {
            $new_comment = $("<p>").text($(".comment-input input").val());
            $new_comment.hide();
            $(".comments").append($new_comment);
            $new_comment.fadeIn();
            $(".comment-input input").val("");
        }
    });
$(document).ready(main);
*/

//Page 118
//Плавное появление комментариев
/*
var main = function () {
    "use scrict";
    $(".comment-input button").on("click", function (event) {
        var $new_comment;
        if ($(".comment-input input").val() !== "") {
            $new_comment = $("<p>").text($(".comment-input input").val());
            $new_comment.hide();
            $(".comments").append($new_comment);
            $new_comment.fadeIn();
            $(".comment-input input").val("");
        }
    });
};
$(document).ready(main);
*/

//Page 118
//Выводит коментарий при нажатии Enter
/*
var main = function () {
    "use scrict";
    $(".comment-input input").on("keypress", function (event) {
        var $new_comment;
        if (event.keyCode === 13) {
            if ($(".comment-input input").val() !== "") {
                $new_comment = $("<p>").text($(".comment-input input").val());
                $(".comments").append($new_comment);
                $(".comment-input input").val("");
            }
        }
    });
};
$(document).ready(main);
*/

//Page 117
//Добавлена проверка содержимого переменной
/*
var main = function () {
    "use scrict";
    $(".comment-input button").on("click", function (event) {
        var $new_comment;
        if ($(".comment-input input").val() !== "") {
            $new_comment = $("<p>").text($(".comment-input input").val());
            $(".comments").append($new_comment);
            $(".comment-input input").val("");
        }
    });
};
$(document).ready(main);
*/

//Page 115
//Добавили код позволяющий хранить содержимое текстового поля 
/*
var main = function () {
    "use scrict";
    $(".comment-input button").on("click", function (event) {
        var $new_comment = $("<p>");
        //var $new_comment = $("<p>").text($(".comment-input input").val());//Сокращённый вариант
        comment_text = $(".comment-input input").val();
        $new_comment.text(comment_text);
        $(".comments").append($new_comment); 
    });
};
$(document).ready(main);
*/

//Page 114
//Код делает тоже самое что и в прошлый раз, но сам код реструктурирован
/*
var main = function () {
    "use scrict";
    $(".comment-input button").on("click", function (event) {
        var $new_comment = $("<p>");
        //var $new_comment = $("<p>").text("Это новай коментарий");//В одну строчку
        $new_comment.text("Это новый комментарий")
        $(".comments").append($new_comment); 
    });
};
$(document).ready(main);
*/

//Page 114
//Добавляет абзац с комментарием
/*
var main = function () {
    "use scrict";
    $(".comment-input button").on("click", function (event) {
        $(".comments").append("<p>Это новый коментарий</p>");  
    });
};
$(document).ready(main);
*/

//Page 113
//Когда пользователь нажимает +, набирай "Hello World" в консоль
/*
var main = function () {
    "use scrict";
    $(".comment-input button").on("click", function (event) {
    console.log("Hello. World!");  
    });
};
$(document).ready(main);
*/