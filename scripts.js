document.addEventListener('DOMContentLoaded', () => {
    const filtroCategoria = document.getElementById('filtroCategoria');
    const filtroMarca = document.getElementById('filtroMarca');
    const productos = document.querySelectorAll('.producto');
  
    // Función para filtrar productos
    function filtrarProductos() {
      const categoria = filtroCategoria.value.toLowerCase(); // Convertir a minúsculas para evitar problemas
      const marca = filtroMarca.value.toLowerCase();
  
      productos.forEach(producto => {
        const categoriaProducto = producto.getAttribute('data-categoria').toLowerCase();
        const marcaProducto = producto.getAttribute('data-marca').toLowerCase();
  
        // Mostrar u ocultar productos según filtros
        if (
          (categoria === "" || categoria === categoriaProducto) &&
          (marca === "" || marca === marcaProducto)
        ) {
          producto.style.display = "block"; // Mostrar producto
        } else {
          producto.style.display = "none"; // Ocultar producto
        }
      });
    }
  
    // Eventos para aplicar filtros al cambiar las opciones
    filtroCategoria.addEventListener('change', filtrarProductos);
    filtroMarca.addEventListener('change', filtrarProductos);
    filtroTipo.addEventListener('change', filtrarProductos);
  });
  
  function mostrarMensaje() {
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = "¡Comprado!";
    mensaje.style.color = "green"; // Opcional: Cambia el color del mensaje.
}