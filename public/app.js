const btnCargar = document.getElementById('btnCargar');
const mensaje = document.getElementById('mensaje');
const listaProductos = document.getElementById('listaProductos');
const busqueda = document.getElementById('busqueda');
const spinner = document.getElementById('spinner');

let todosLosProductos = [];

busqueda.addEventListener('input', buscarProductos);
btnCargar.addEventListener('click', cargarProductos);

async function cargarProductos() {
  mensaje.textContent = 'Cargando productos...';
  listaProductos.innerHTML = '';

  try {
    spinner.classList.remove('oculto');
    const respuesta = await fetch('/api/productos');

    if (!respuesta.ok) {
      spinner.classList.add('oculto');
      throw new Error('No se pudo obtener la información');
    }

    const productos = await respuesta.json();
    spinner.classList.add('oculto');
    todosLosProductos = productos;

    mensaje.textContent = 'Productos cargados correctamente';

    productos.forEach(producto => {
      const tarjeta = document.createElement('div');
      tarjeta.classList.add('tarjeta');

      tarjeta.innerHTML = `
        <h3>${producto.nombre}</h3>
        <p><strong>Precio:</strong> $${producto.precio}</p>
        <p><strong>Categoría:</strong> ${producto.categoria}</p>
      `;

      listaProductos.appendChild(tarjeta);
    });

  } catch (error) {
    spinner.classList.add('oculto');
    mensaje.textContent = 'Ocurrió un error al cargar los productos';
    console.error(error);
  }
}

function buscarProductos() {
  const texto = busqueda.value.toLowerCase();
  const productosFiltrados = todosLosProductos.filter(producto => {
    return producto.nombre.toLowerCase().includes(texto);
  });

  listaProductos.innerHTML = '';
  mensaje.textContent = '';
  // 2. Verificamos si hay productos filtrados
  if (productosFiltrados.length === 0) {

    mensaje.textContent = "Lo siento pero no hay resultados para tu búsqueda";
    
  } else {
    //Recorre "productosFiltrados" con un forEach y crea las tarjetas.
    productosFiltrados.forEach(producto => {
      const tarjeta = document.createElement('div');
      tarjeta.classList.add('tarjeta');

      tarjeta.innerHTML = `
        <h3>${producto.nombre}</h3>
        <p><strong>Precio:</strong> $${producto.precio}</p>
        <p><strong>Categoría:</strong> ${producto.categoria}</p>
      `;

      listaProductos.appendChild(tarjeta);
    });
    
    
    
  }
}