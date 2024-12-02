document.addEventListener('DOMContentLoaded', () => {
    const filtroCategoria = document.getElementById('filtroCategoria');
    const filtroMarca = document.getElementById('filtroMarca');
    const filtroTipo = document.getElementById('filtroTipo');
    const productos = document.querySelectorAll('.producto');
  
    // Función para filtrar productos
    function filtrarProductos() {
      const categoria = filtroCategoria.value.toLowerCase(); // Convertir a minúsculas para evitar problemas
      const marca = filtroMarca.value.toLowerCase();
      const tipo = filtroTipo.value.toLowerCase();
  
      productos.forEach(producto => {
        const categoriaProducto = producto.getAttribute('data-categoria').toLowerCase();
        const marcaProducto = producto.getAttribute('data-marca').toLowerCase();
        const tipoProducto = producto.getAttribute('data-tipo').toLowerCase();
  
        // Mostrar u ocultar productos según filtros
        if (
          (categoria === "" || categoria === categoriaProducto) &&
          (marca === "" || marca === marcaProducto) &&
          (tipo === "" || tipo === tipoProducto)
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
  
  