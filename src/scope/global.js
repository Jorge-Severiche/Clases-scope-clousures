//variables
var a; //forma de declara una variable
var b='b' //forma de declarar y asignar valor a la variable
b='bb'//forma de reasignar el valor a un variable
var a ='aa' //variable redeclarada

//global 
var fruta ='manzana' //variable global
function BestFruit(){
    console.log(fruta);
}
BestFruit();

function countries(){
    country = 'Colombia';
    console.log(country);
}
countries();
console.log(country)