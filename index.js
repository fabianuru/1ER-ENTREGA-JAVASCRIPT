//VARIABLES
let nombre = "";
let opcion = "";
let plan = "";
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
           alert ("Elegiste " + opcion1)
            plan = "PLANDETOX"
            verPlan (plan);
             break;
         case 2:
           console.log ("Has elegido la opción 2 -"+opcion2)
           alert ("Elegiste " + opcion2)
           plan = "PLANGREEN"
           verPlan (plan);
             break;
         case 3:
           console.log ("Has elegido la opción 3 -"+opcion3)
           alert ("Elegiste " + opcion3)
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
    console.log ("Nombre: PLAN DETOX  \n  CONTIENE: 12 JUGOS \n  PRECIO: $2500")
  }else if (plan === "PLANGREEN") {
    console.log ("Nombre: PLAN GREEN \n  CONTIENE: 6 JUGOS \n  PRECIO: $1500")
  } else if (plan === "PACK10") {
    console.log ("Nombre: PACK X 10 JUGOS A ELECCIÓN \n  CONTIENE: 10 JUGOS \n  PRECIO: $2200")
  }
     
 }

 
//PROGRAMA
solicitarNombre();
bienvenida();
mostrarMenu ( "Elige la opción deseada:","Seleccionar Plan", "Seleccionar fecha de envío", "Generar ticket", "Salir");
seleccionarOpcion ("Seleccionar Plan", "Seleccionar fecha de envío", "Generar Ticket", "Salir");





