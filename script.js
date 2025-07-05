// Función para mostrar alertas (que faltaba en tu código)
function appendAlert2(message, type) {
  const alertPlaceholder = document.createElement('div');
  alertPlaceholder.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${JSON.stringify(message)}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('');

  document.body.appendChild(alertPlaceholder);
}

// Función principal al hacer click
document.getElementById('liveAlertBtn2').addEventListener('click', () => {
  // 1. Obtener valor actual del input
  const cadena = document.getElementById("inputPassword2").value;
  

  //  Convertir a array de números
  const digitos = cadena.split('').map(Number);
  
  // Ordenar en ambos sentidos
  const mayorAMenor = [...digitos].sort((a, b) => b - a);
  const menorAMayor = [...digitos].sort((a, b) => a - b);
  
  // Mostrar resultados
  appendAlert2({
    original: digitos,
    descendente: mayorAMenor,
    ascendente: menorAMayor
  }, 'success');
});