var jsonString = '{"rank" : "туз", "suft" : "пик"}';

//JSON.parse прелобразует её в объект

var card = JSON.parse(jsonString);
console.log(card);

//JSON.stringify преобразует  объект в строку

var card = JSON.stringify(jsonString);
console.log(card);
