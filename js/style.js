let opciones = parseInt(prompt("Elije una opcion: \n 1- CALCULADORA \n 2- LISTA DE SUPERMERCADO \n 3- CLIMA EN LA SEMANA"))

if (opciones === 1) {
    let opcion = parseInt(prompt("Elije una opcion: \n 1- SUMAR \n 2- RESTAR \n 3- MULTIPLICAR \n 4- DIVIDIR"));

    if (opcion === 1) {
        let ingresarNum1 = parseFloat(prompt("Ingrese el primer numero a sumar"));
        let ingresarNum2 = parseFloat(prompt("Ingrese el segundo numero a sumar"));
        let resultado = ingresarNum1 + ingresarNum2;
        document.write(`El resultado de  ${ingresarNum1}  +  ${ingresarNum2} es ${resultado}`);
    } else if (opcion === 2) {
        let ingresarNum1 = parseFloat(prompt("Ingrese el primer numero a restar"));
        let ingresarNum2 = parseFloat(prompt("Ingrese el segundo numero a restar"));
        let resultado = ingresarNum1 - ingresarNum2;
        document.write(`El resultado de  ${ingresarNum1}  -  ${ingresarNum2} es ${resultado}`);
    } else if (opcion === 3) {
        let ingresarNum1 = parseFloat(prompt("Ingrese el primer numero a multiplicar"));
        let ingresarNum2 = parseFloat(prompt("Ingrese el segundo numero a multiplicar"));
        let resultado = ingresarNum1 * ingresarNum2;
        document.write(`El resultado de  ${ingresarNum1}  x  ${ingresarNum2} es ${resultado}`);
    } else if (opcion === 4) {
        let ingresarNum1 = parseFloat(prompt("Ingrese el primer numero a dividir"));
        let ingresarNum2 = parseFloat(prompt("Ingrese el segundo numero a dividir"));
        let resultado = ingresarNum1 / ingresarNum2;
        document.write(`El resultado de  ${ingresarNum1}  /  ${ingresarNum2} es ${resultado}`);
    } else {
        alert("La opcion ingresada no es correcta");
    }
} else if (opciones === 2) {
    let lista = prompt("Agregar productos a comprar en el supermercado \n Para ver lo agregado presione 5");
    while (lista != 5) {
        if (lista != "") {
            document.write(`Procucto a comprar: ${lista}` + "<br>");
        } else {
            alert("Por favor agregue productos.");
        }
        //condicion de salida
        lista = prompt("Agregar productos a comprar en el supermercado \n Para salir presione 5");

    }
} else if (opciones === 3) {
    let diaSemana = parseInt(prompt("Elije un numero para ver el clima: \n 1- LUNES \n 2- MARTES \n 3- MIERCOLES \n 4- JUEVES \n 5- VIERNES \n 6- SABADO \n 7- DOMINGO"));
    switch (diaSemana) {
        case 1:
            document.write("El lunes sera un dia soleado con minimas de 13° y maximas de 28°");
            break;
        case 2:
            document.write("El martes sera un dia soleado con minimas de 15° y maximas de 30°");
            break;
        case 3:
            document.write("El meiercoles sera un dia algo nublado con minimas de 13° y maximas de 24°");
            break;
        case 4:
            document.write("El jueves sera un dia nublado con minimas de 10° y maximas de 22°");
            break;
        case 5:
            document.write("El viernes sera un dia lluvioso con minimas de 13° y maximas de 20°");
            break;
        case 6:
            document.write("El sabado sera un dia con mucho frio con minimas de 6° y maximas de 15°");
            break;
        case 7:
            document.write("El domingo sera un dia de frio con minimas de 10° y maximas de 18°");
            break;

        default:
            alert("Lo siento esa opcion no es correcta, verifica y vuelve a intentarlo");
            diaSemana = parseInt(prompt("Elije un numero para ver el clima: \n 1- LUNES \n 2- MARTES \n 3- MIERCOLES \n 4- JUEVES \n 5- VIERNES \n 6- SABADO \n 7- DOMINGO"));
            break;
    }
} else {
    alert("Opcion incorrecta!! Por favor vuelva a ingresar una opcion.");
}