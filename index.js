function calculadora(num1, num2, operacion) {
       switch (operacion) {
         
        case "/":
           return num1 / num2;
           break;

         case "-":
           return num1 - num2;
           break;
    
         case "*":
           return num1 * num2;
           
           break;

           case "+":
           return num1 + num2;
           break;
    
        
    
         default:
           return "Operacion no encontrada";
           break;
       }
    } 
let numero1 = parseInt(prompt("Ingrese los dígitos para la operación"));
let numero2 = parseInt(prompt("Ingrese los segundos dígitos"));
let operacion = prompt("Ingrese la operación");

let resultado = calculadora(numero1, numero2, operacion);

alert(`El resultado de la operacion es: ${resultado}`);
