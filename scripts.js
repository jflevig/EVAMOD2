// Verificación de formulario para Suscripción

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

//Funcionamiento Modal del Cuestionario

$("#test-btn").click(function() {
  $('html, body').animate({scrollTop: 0}, 600)
  $("#form-modal").fadeIn();
})

$(".close").click(function() {
  $("#form-modal").fadeOut();
})

$("#form-modal").click(function (event) {
  if (!$(event.target).closest(".modal-card").length) {
    $("#form-modal").fadeOut();
  }
});
$("#test-msg").click(function (event) {
  if (!$(event.target).closest(".test-card").length) {
    $("#test-msg").fadeOut();
  }
});

// Funcionamiento Cuestionario

$('#test-form').on('submit', function(e){
    e.preventDefault();

    let respuestas_correctas = 0;

    if ($('input[name="pregunta1"]:checked').val() == 'respuesta2') {
      respuestas_correctas++;
    }
    if ($('input[name="pregunta2"]:checked').val() == 'respuesta3') {
      respuestas_correctas++;
    }
    if ($('input[name="pregunta3"]:checked').val() == 'respuesta3') {
      respuestas_correctas++;
    }
    if ($('input[name="pregunta4"]:checked').val() == 'respuesta4') {
      respuestas_correctas++;
    }

    $("#msg").html(
      "Tienes<strong> " + respuestas_correctas + "</strong> respuestas correctas"
    );
    if (respuestas_correctas == 4) {
      $("#msg").append("<p>¡Excelente! Tienes un gran conocimiento en ciberseguridad. Sigue manteniendo actualizado para seguir navegando seguro.</p>");
    } else if (respuestas_correctas >= 2){
      $("#msg").append("<p>¡Bien hecho! Aún puedes fortalecer tus conocimientos en ciberseguridad.</p>");
    } else {
      $("#msg").append("<p>Parece que necesitas reforzar tu seguridad digital. ¡Nunca es tarde para aprender!</p>");
    }
    $("#form-modal").fadeOut();
    $("#test-msg").fadeIn();
})