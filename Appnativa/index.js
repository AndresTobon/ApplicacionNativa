document.addEventListener('DOMContentLoaded', () => {

    // Variables
    
    const baseDeDatos = [
        {
            id: 1,
            nombre: 'Figura',
            precio: 100.000,
            imagen: new URL('./img/figura.jpg', import.meta.url)
        },
        {
            id: 2,
            nombre: 'Mug',
            precio: 50.000,
            imagen: new URL('./img/mug.png', import.meta.url)
        },
        {
            id: 3,
            nombre: 'Figura 2',
            precio: 200.000,
            imagen: new URL('./img/figura2.jpg', import.meta.url)
        },
        {
            id: 4,
            nombre: 'Figura 3',
            precio: 300.000,
            imagen: new URL('./img/figura3.jpg', import.meta.url)
        },
        {
            id: 5,
            nombre: 'Sal',
            precio: 3.000,
            imagen: new URL('./img/sal.jpg', import.meta.url)
        },
        {
            id: 6,
            nombre: 'Azucar',
            precio: 10.000,
            imagen: new URL('./img/azucar.jpg', import.meta.url)
        },
        {
            id: 7,
            nombre: 'Arroz',
            precio: 15.000,
            imagen: new URL('./img/arroz.jpg', import.meta.url)
        },
        {
            id: 8,
            nombre: 'Lentejas',
            precio: 8.000,
            imagen: new URL('./img/lentejas.jpg', import.meta.url)
        },
        {
            id: 9,
            nombre: 'Frijoles',
            precio: 5.500,
            imagen: new URL('./img/frijoles.jpg', import.meta.url)
        },
        {
            id: 10,
            nombre: 'Garbanzo',
            precio: 7.000,
            imagen: new URL('./img/garbanzo.jpg', import.meta.url)
        },
        {
            id: 11,
            nombre: 'Pimienta',
            precio: 6.000,
            imagen: new URL('./img/pimienta.jpg', import.meta.url)
        },
        {
            id: 12,
            nombre: 'Color',
            precio: 3.000,
            imagen: new URL('./img/color.jpg', import.meta.url)
        },
        {
            id: 13,
            nombre: 'Sal de ajo',
            precio: 4.200,
            imagen: new URL('./img/saldeajo.jpg', import.meta.url)
        },
        {
            id: 14,
            nombre: 'Comino',
            precio: 5.600,
            imagen: new URL('./img/comino.jpg', import.meta.url)
        },
        {
            id: 15,
            nombre: 'Laurel',
            precio: 3.250,
            imagen: new URL('./img/laurel.jpg', import.meta.url)
        },
        {
            id: 16,
            nombre: 'Bicarbonato',
            precio: 2.950,
            imagen: new URL('./img/bicarbonato.jpg', import.meta.url)
        },
        {
            id: 17,
            nombre: 'Ajo',
            precio: 3.600,
            imagen: new URL('./img/ajo.jpg', import.meta.url)
        },
        {
            id: 18,
            nombre: 'La fina',
            precio: 6.000,
            imagen: new URL('./img/lafina.jpg', import.meta.url)
        },
        {
            id: 19,
            nombre: 'Mantequilla',
            precio: 12.000,
            imagen: new URL('./img/mantequilla.jpg', import.meta.url)
        },
        {
            id: 20,
            nombre: 'Queso crema',
            precio: 11.000,
            imagen: new URL('./img/quesocrema.jpg', import.meta.url)
        },
        {
            id: 21,
            nombre: 'Mozzarella',
            precio: 14.500,
            imagen: new URL('./img/mozzarella.jpg', import.meta.url)
        },
        {
            id: 22,
            nombre: 'Queso cheddar',
            precio: 17.000,
            imagen: new URL('./img/quesocheddar.jpg', import.meta.url)
        },
        {
            id: 23,
            nombre: 'Leche',
            precio: 30.000,
            imagen: new URL('./img/leche.jpg', import.meta.url)
        },
        {
            id: 24,
            nombre: 'Manzanas',
            precio: 8.000,
            imagen: new URL('./img/manzanas.jpg', import.meta.url)
        },
        {
            id: 25,
            nombre: 'Uvas',
            precio: 15.700,
            imagen: new URL('./img/uvas.jpg', import.meta.url)
        },
        {
            id: 26,
            nombre: 'Mango',
            precio: 6.500,
            imagen: new URL('./img/mango.jpg', import.meta.url)
        },
        {
            id: 27,
            nombre: 'Pera',
            precio: 8.900,
            imagen: new URL('./img/pera.jpg', import.meta.url)
        },
        {
            id: 28,
            nombre: 'Tomate',
            precio: 10.000,
            imagen: new URL('./img/tomate.jpg', import.meta.url)
        }
    ];

    

    let carrito = [];
    const divisa = '$';
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');
    const miLocalStorage = window.localStorage;

    // Funciones

    /**
    * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
    */
    function renderizarProductos() {
        baseDeDatos.forEach((info) => {
            // Estructura
            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');
            // Body
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            // Titulo
            const miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.nombre;
            // Imagen
            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info.imagen);
            // Precio
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = `${info.precio}${divisa}`;
            // Boton
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = '+';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
            // Insertamos
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
    }

    /**
    * Evento para añadir un producto al carrito de la compra
    */
    function anyadirProductoAlCarrito(evento) {
        // Anyadimos el Nodo a nuestro carrito
        carrito.push(evento.target.getAttribute('marcador'))
        // Actualizamos el carrito
        renderizarCarrito();
        // Actualizamos el LocalStorage
        guardarCarritoEnLocalStorage();
    }

    /**
    * Dibuja todos los productos guardados en el carrito
    */
    function renderizarCarrito() {
        // Vaciamos todo el html
        DOMcarrito.textContent = '';
        // Quitamos los duplicados
        const carritoSinDuplicados = [...new Set(carrito)];
        // Generamos los Nodos a partir de carrito
        carritoSinDuplicados.forEach((item) => {
            // Obtenemos el item que necesitamos de la variable base de datos
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                // ¿Coincide las id? Solo puede existir un caso
                return itemBaseDatos.id === parseInt(item);
            });
            // Cuenta el número de veces que se repite el producto
            const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
                return itemId === item ? total += 1 : total;
            }, 0);
            // Creamos el nodo del item del carrito
            const miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
            // Boton de borrar
            const miBoton = document.createElement('button');
            miBoton.classList.add('btn', 'btn-danger', 'mx-5');
            miBoton.textContent = 'X';
            miBoton.style.marginLeft = '1rem';
            miBoton.dataset.item = item;
            miBoton.addEventListener('click', borrarItemCarrito);
            // Mezclamos nodos
            miNodo.appendChild(miBoton);
            DOMcarrito.appendChild(miNodo);
        });
        // Renderizamos el precio total en el HTML
        DOMtotal.textContent = calcularTotal();
    }

    /**
    * Evento para borrar un elemento del carrito
    */
    function borrarItemCarrito(evento) {
        // Obtenemos el producto ID que hay en el boton pulsado
        const id = evento.target.dataset.item;
        // Borramos todos los productos
        carrito = carrito.filter((carritoId) => {
            return carritoId !== id;
        });
        // volvemos a renderizar
        renderizarCarrito();
        // Actualizamos el LocalStorage
        guardarCarritoEnLocalStorage();

    }

    /**
     * Calcula el precio total teniendo en cuenta los productos repetidos
     */
    function calcularTotal() {
        // Recorremos el array del carrito
        return carrito.reduce((total, item) => {
            // De cada elemento obtenemos su precio
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
            });
            // Los sumamos al total
            return total + miItem[0].precio;
        }, 0).toFixed(2);
    }

    /**
    * Varia el carrito y vuelve a dibujarlo
    */
    function vaciarCarrito() {
        // Limpiamos los productos guardados
        carrito = [];
        // Renderizamos los cambios
        renderizarCarrito();
        // Borra LocalStorage
        localStorage.clear();

    }

    function guardarCarritoEnLocalStorage () {
        miLocalStorage.setItem('carrito', JSON.stringify(carrito));
    }

    function cargarCarritoDeLocalStorage () {
        // ¿Existe un carrito previo guardado en LocalStorage?
        if (miLocalStorage.getItem('carrito') !== null) {
            // Carga la información
            carrito = JSON.parse(miLocalStorage.getItem('carrito'));
        }
    }

    // Eventos
    DOMbotonVaciar.addEventListener('click', vaciarCarrito);


    // Inicio
    cargarCarritoDeLocalStorage();
    renderizarProductos();
    renderizarCarrito();
});