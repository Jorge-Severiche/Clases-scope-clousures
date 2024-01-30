//
function Fruits(){
    if(true){
        var fruit1='apple'
        let fruit2='kiwi'
        const fruit3='banana'
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
    // //que es lo que pasa aqui, al momento de declarar las variables dentro de
    // un ciclo o condiconal o lo que sea, estas si son declaradas con un let 
    // o const no tienen un alcance fuera de la condicional
}
Fruits();
