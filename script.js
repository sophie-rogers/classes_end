//Executes correct calcuation dependent on button clicked, using the value from the input buttons and numbers from text field inputs
function calculateRes(val) {     

      // Get the values of the input fields with the ids "firstNumber" and "secondNumber"
      num1 = parseInt(document.getElementById("firstNumber").value);
      num2 = parseInt(document.getElementById("secondNumber").value);

    //Switch statement executing correct operation dependent on the value of the button clicked
    switch (val) {
        case 'Add':
            document.getElementById("result").innerHTML = num1 + " + " + num2 + " = " + parseInt(num1 + num2);
          break;
    
        case 'Subtract':
           document.getElementById("result").innerHTML = num1 + " - " + num2 + " = " + parseInt(num1 - num2);
          break;
    
        case 'Multiply':
            document.getElementById("result").innerHTML = num1 + " * " + num2 + " = " + num1 * num2;
          break;
    
        case 'Divide':
            document.getElementById("result").innerHTML = num1 + " / " + num2 + " = " + num1 / num2;
          break;
      }

  } 
