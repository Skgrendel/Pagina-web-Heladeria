document.addEventListener('DOMContentLoaded', function() {
    const contadorCarrito = document.getElementById('contador-carrito');
    const botonesAgregarCarrito = document.querySelectorAll('.agregar-carrito');
    const carrito = []; // Un arreglo para mantener un registro de los productos en el carrito
  
    botonesAgregarCarrito.forEach(boton => {
      boton.addEventListener('click', () => {
        const producto = {
          nombre: boton.getAttribute('data-producto'),
          precio: parseFloat(boton.getAttribute('data-precio')),
        };
        
        carrito.push(producto); // Agregar el producto al carrito
        actualizarContadorCarrito();
      });
    });
  
    function actualizarContadorCarrito() {
      contadorCarrito.textContent = carrito.length; // Muestra la cantidad de productos en el carrito
    }
  });
  
  