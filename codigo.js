let calculadora = "";

while (calculadora !== "4") {
let menu = prompt("1: saludar\n2: entrar calculadora");
if (menu == 1) {
    let nombre = prompt("¿Cual es tu nombre?");

    alert(`¡Hola ${nombre}!✅🤣🥳🎉`);
}


if (menu == 2) {

    calculadora = prompt("1: Sumar\n 2: restar\n 3: multiplicar\n 4: dividir");

    if (calculadora == 1) {
        let numero1 = Number (prompt("Numero 1 (Recuerda que puedes poner en vasio, y darle aceptar, por si solo quieres sumar 2 sifras"));
        let numero2 = Number (prompt("Numero 2"));
        let numero3 = Number (prompt("Numero 3"));
        let numero4 = Number (prompt("Numero 4"));
        let numero5 = Number (prompt("Numero 5"));
        let numero6 = Number (prompt("Numero 6"));
        let numero7 = Number (prompt("Numero 7"));
        let numero8 = Number (prompt("Numero 8"));
        let numero9 = Number (prompt("Numero 9"));
        let numero10 = Number (prompt("Numero 10"));

        alert(numero1 + numero2 + numero3 + numero4 + numero5 + numero6 + numero7 + numero8 + numero9 + numero10)
    } 

    else if (calculadora == 2) {
        let numero1 = Number (prompt("Numero 1 (Recuerda que puedes poner en vasio, y darle aceptar, por si solo quieres restar 2 sifras"));
        let numero2 = Number (prompt("Numero 2"));
        let numero3 = Number (prompt("Numero 3"));
        let numero4 = Number (prompt("Numero 4"));
        let numero5 = Number (prompt("Numero 5"));
        let numero6 = Number (prompt("Numero 6"));
        let numero7 = Number (prompt("Numero 7"));
        let numero8 = Number (prompt("Numero 8"));
        let numero9 = Number (prompt("Numero 9"));
        let numero10 = Number (prompt("Numero 10"));

        alert(numero1 - numero2 + numero3 + numero4 + numero5 + numero6 + numero7 + numero8 + numero9 + numero10)
    } 

    else if (calculadora == 3) {
        let numero1 = Number (prompt("Numero 1 (Recuerda que puedes poner en vasio, y darle aceptar, por si solo quieres multiplicar 2 sifras"));
        let numero2 = Number (prompt("Numero 2"));
        let numero3 = Number (prompt("Numero 3"));
        let numero4 = Number (prompt("Numero 4"));
        let numero5 = Number (prompt("Numero 5"));
        let numero6 = Number (prompt("Numero 6"));
        let numero7 = Number (prompt("Numero 7"));
        let numero8 = Number (prompt("Numero 8"));
        let numero9 = Number (prompt("Numero 9"));
        let numero10 = Number (prompt("Numero 10"));

        alert(numero1 * numero2 + numero3 + numero4 + numero5 + numero6 + numero7 + numero8 + numero9 + numero10)
    } 
    
    else if (calculadora == 4) {
        let numero1 = Number (prompt("Numero 1 (Recuerda que puedes poner en vasio, y darle aceptar, por si solo quieres dividir 2 sifras"));
        let numero2 = Number (prompt("Numero 2"));

        alert(numero1 / numero2)
    }

}
}