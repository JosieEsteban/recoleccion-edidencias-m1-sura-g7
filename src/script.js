let turno = "";
let edad = null;
let prioridad = false;     // Declaracion de Variables
let opcion = 0;

while (opcion !== 5) {      // Inicio de ciclo Mientras = Opcion diferente a 5 Haga...


     console.log("\n \n *** Bienvenido al Sistema Fila Express ***  \n")

         console.log("1. Solicitar Turno para Caja");
         console.log("2. Solicitar Turno para Asesoría");
         console.log("3. Verificar Prioridad (Tercera Edad)");
         console.log("4. Ver su Turno Asignado \n");

         console.log("5. Salir \n \n");
        

      opcion = parseInt (prompt("Seleccione una opción:"));


    switch (opcion) {    // INICIO del SWITCHE


    case 1:     // INICIO Caso 4 ***********************************************

      if (turno === "") {
        turno = "C-1";
        console.log("Turno de Caja asignado: C-1");
      } else 
        console.log("Ya tienes un turno asignado: " + turno);
        
      
      break;

    case 2:     // INICIO Caso 2 ***********************************************


      if (turno === "" ) {
        turno = "A-1";
        console.log("Turno de Asesoría asignado: A-1");
      } else 
        console.log("Ya tienes un turno asignado: " + turno);
      
      break;

    case 3:   // INICIO Caso 3 ***********************************************


      edad = int(prompt("Ingrese su edad:"));
      prioridad = edad >= 60;

      if (prioridad) {
        console.log("!Prioridad... CUENTAS con Atención Preferencial");
      } else 
        console.log("No aplicas para atención preferencial");
      
      break;

    case 4:  // INICIO Caso 4 ***********************************************

      switch (true) {

        case turno ==="":
          console.log("No TIENES TURNO, Debe solicitar un servicio primero");
          break;

        case prioridad:
          console.log("Su turno es: P-1 | Preferencial |");
          break;

        case turno === "C-1":
          console.log("Su turno es: C-1 | Caja |");
          break;

        case turno === "A-1":
          console.log("Su turno es: A-1 | Asesoría |");
          break;

        default:
          console.log("Error al mostrar el turno");
      }
         break;

    case 5:
      console.log("Gracias por usar Fila Express");
      break;

      default:
      console.log("Opción inválida. Intente nuevamente.");
  } //Fin Switche

}  // Fin While

// **********************************************************************************************************