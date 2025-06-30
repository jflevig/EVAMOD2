$("#formulario").on("submit", function(e) {
    e.preventDefault();

    console.log('hi');

    let email = $("#InputEmail").val();
    let okEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    let okCheckbox = $("#Check").is(":checked");

    if (!okEmail) {
      alert("Correo inválido.");
    } else if (!okCheckbox) {
      alert("Debes aceptar los términos.");
    } else {
      alert("Formulario válido. Enviado!");
    }
});