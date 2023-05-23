
const cantidadInput = document.getElementById("cant")
const categoriaSelect = document.getElementById("select");
const totalElement = document.getElementById("total");

function calcularTotal() {
  const cantidad = parseInt(cantidadInput.value);
  const precio = 200;
  let totalPagar = (precio * cantidad);

  const categoria = categoriaSelect.value;
  if (categoria === "estudiante") {
    const descuento = 80;
    totalPagar = aplicarDescuento(totalPagar, descuento);
  } else if (categoria === "trainee") {
    const descuento = 50;
    totalPagar = aplicarDescuento(totalPagar, descuento);
  } else if (categoria === "junior") {
    const descuento = 15;
    totalPagar = aplicarDescuento(totalPagar, descuento);
  }

  totalElement.value = `Total a Pagar: $${totalPagar}`;
}

function aplicarDescuento(total, descuento) {
    return total - (total * descuento) / 100;
  }

// Evento para calcular el total al cambiar la cantidad o la categoría
document.getElementById("resumen").addEventListener("click", calcularTotal);
















