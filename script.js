var cuentas = [
    { nombre: "Mali", saldo: 200 },
    { nombre: "Gera", saldo: 290 },
    { nombre: "Maui", saldo: 67 }
  ];

  function login() {
    var selectedAccountIndex = document.getElementById("accountSelect").value;
    var password = document.getElementById("passwordInput").value;

    if (password === "1234") {
      showOptions(selectedAccountIndex);
    } else {
      alert("Contraseña incorrecta. Intenta nuevamente.");
    }
  }

  function showOptions(accountIndex) {
    var output = document.getElementById("output");
    output.innerHTML = "";

    var account = cuentas[accountIndex];

    var option = prompt(
      "Hola " + account.nombre + "!\n" +
      "1. Consultar saldo\n" +
      "2. Ingresar monto\n" +
      "3. Retirar monto\n"
    );

    switch (option) {
      case "1":
        alert("Saldo actual: $" + account.saldo);
        break;
      case "2":
        var depositAmount = prompt("Ingresa el monto a ingresar:");
        depositAmount = parseFloat(depositAmount);

        // if (!isNaN(depositAmount) && depositAmount > 0) {
        //   account.saldo += depositAmount;
        if (!isNaN(withdrawAmount) && withdrawAmount > 0 && account.saldo - withdrawAmount >=990 && account.saldo - withdrawAmount <=10) {
          account.saldo -= withdrawAmount;
          alert("Monto ingresado: $" + depositAmount + "\nNuevo saldo: $" + account.saldo);
        } else {
          alert("Ingresa un monto válido.");
        }
        break;
      case "3":
        var withdrawAmount = prompt("Ingresa el monto a retirar:");
        withdrawAmount = parseFloat(withdrawAmount);

        if (!isNaN(withdrawAmount) && withdrawAmount > 0 && account.saldo - withdrawAmount >=10 && account.saldo - withdrawAmount <=999999999) {
          account.saldo -= withdrawAmount;
          alert("Monto retirado: $" + withdrawAmount + "\nNuevo saldo: $" + account.saldo);
        } else {
          alert("Monto inválido o saldo insuficiente.");
        }
        break;

      default:
        alert("Opción no válida.");
        break;
    }
  }
  function changeColorAndGif() {
    var select = document.getElementById('accountSelect');
    var resultDiv = document.getElementById('result');
    var imageContainer = document.getElementById('image-container');
    var colorGif = document.getElementById('colorGif');

    var selectedOption = select.value;

    resultDiv.style.backgroundColor = selectedOption;

    switch (selectedOption) {
      case '0':
        colorGif.src = './Imagenes/Mali.gif';
        break;
      case '1':
        colorGif.src = './Imagenes/Gera.gif';
        break;
      case '2':
        colorGif.src = './Imagenes/Maui.gif';
        break;
      default:
        colorGif.src = '';
        break;
    }
  }
  
