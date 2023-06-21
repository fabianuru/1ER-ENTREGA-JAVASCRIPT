//VARIABLES
let nombre = "";
let opcion = "";
let plan = "";

//ARRAYS 

let carrito = [];


//FUNCIONES

//SOLICITAR NOMBRE OBLIGATORIO
 function solicitarNombre(){
  nombre = prompt("Por favor, ingresa tu nombre")
  while (!nombre) {
    nombre = prompt("ATENCIÓN! \n Debes ingresar tu nombre para continuar");
    }
} 
//DAR BIENVENIDA AL USUARIO 
function bienvenida() {
console.log("Hola " + nombre +" ¡Bienvenido/a a JuiceLab ! \n Estás a un paso de una vida más saludable");
}
//MENÚ PRINCIPAL
function mostrarMenu(texto,opcion1,opcion2,opcion3,opcion4) {
  console.log(texto);
  console.log("1." +opcion1 );
  console.log("2." +opcion2);
  console.log("3." +opcion3);
  console.log("4." +opcion4);
}
function seleccionarOpcion (opcion1,opcion2,opcion3,opcion4) {
 opcion = parseInt(prompt("Elige la opción deseada: \n 1. "+ opcion1 +"\n 2. "+ opcion2 +"\n 3. " +opcion3+ "\n 4. " + opcion4));
while (opcion !== 4) {
    switch (opcion) {
        case 1:
          console.log ("Ingresaste a: "+opcion1)
              mostrarMenu ("Selecciona tu Plan:","Plan Detox", "Plan Green", "Pack 10 Jugos" , "Volver Atrás")
              seleccionarPlan ("Plan Detox", "Plan Green", "Pack 10 Jugos" , "Volver Atrás")
            break;
        case 2:
          console.log ("Has elegido la opción 2 -"+opcion2)
            break;
        case 3:
          console.log ("Has elegido la opción 3 -"+opcion3)
          generarTicket ()
            break;
        default:
          console.log ("Debes elegir una opcion válida")
            break;
    }
    opcion = parseInt(prompt("Elige la opción deseada: \n 1. "+ opcion1 +"\n 2. "+ opcion2 +"\n 3. " +opcion3+ "\n 4. " + opcion4));
}
console.log ("Saliste del menu")
}
//OPCION 1 - MENU
function seleccionarPlan (opcion1,opcion2,opcion3,opcion4) {
  opcion = parseInt(prompt("Seleccionar Plan:\n (Solo puedes elegir 1 producto) \n 1. "+ opcion1 +"\n 2. "+ opcion2 +"\n 3. " +opcion3+ "\n 4. " + opcion4));
    while (opcion !== 4) {
      switch (opcion) {
          case 1:
            console.log ("Has elegido la opción 1 -"+opcion1)
            alert ("Elegiste " + opcion1 +"\n Se agrego Plan detox a tu carrito, puedes seguir comprando")
            carrito.push (detox1)
            plan = "PLANDETOX"
            verPlan (plan);
          break;
          case 2:
            console.log ("Has elegido la opción 2 -"+opcion2)
            alert ("Elegiste " + opcion2 +"\n Se agrego Plan green a tu carrito, puedes seguir comprando")
            carrito.push (detox2)
            plan = "PLANGREEN"
            verPlan (plan);
          break;
          case 3:
            console.log ("Has elegido la opción 3 -"+opcion3)
            alert ("Elegiste " + opcion3+"\n Se agrego Pack x 10 tu carrito, puedes seguir comprando")
            carrito.push (detox3)
            plan = "PACK10"
            verPlan (plan);
          break;
          default:
            console.log ("Debes elegir una opcion válida")
          break;
        }
      opcion = parseInt(prompt("Seleccionar Plan: \n 1. "+ opcion1 +"\n 2. "+ opcion2 +"\n 3. " +opcion3+ "\n 4. " + opcion4));
    }
  console.log ("Volviste al menu Principal")
}

 // OPCION 1 - SELECCIONAR PLAN
function verPlan (plan) {
  if (plan === "PLANDETOX") {
    console.log ( detox1)
  }else if (plan === "PLANGREEN") {
    console.log (detox2)
  } else if (plan === "PACK10") {
    console.log (detox3)
  }   
}

//OPCION 3 - GENERAR TICKET
function generarTicket () {
  console.log (carrito)

}

//FUNCION CONSTRUCTORA DE OBJETOS
function detox(nombre, cantidad, precio) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.precio  = precio;
}

//CREANDO OBJETOS /PLANES DE JUGOS DETOX/
const detox1 = new detox ("Plan Green", 7, "$"+1500);
const detox2 = new detox ("Pack x 10 ", 10, "$"+2200);
const detox3 = new detox ("Detox 3 dias", 12 ,"$"+2900);


//PROGRAMA
solicitarNombre();
bienvenida();
mostrarMenu ( "Elige la opción deseada:","Seleccionar Plan", "Seleccionar fecha de envío", "Generar ticket", "Salir");
seleccionarOpcion ("Seleccionar Plan", "Seleccionar fecha de envío", "Generar Ticket", "Salir");





