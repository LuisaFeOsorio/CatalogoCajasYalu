// Tus productos - MODIFICA ESTOS DATOS CON TUS PRODUCTOS REALES
const products = [
  {
    id: 1,
    name: "Corazon Forrado",
    description: "Base en cartón rigido, variedad de colores, resistentes y elegantes, ideal para flores, arreglos... ",
    price: "Desde",
    category: "popular",
    image: "img/CorazónForrado1.jpg",
    images: [
      "img/CorazónForrado1.jpg",
      "img/CorazonForrado4.jpeg",
      "img/CorazonForrado5.jpeg"
    ],
    variants: [
      {size: "20cm de ancho x 10 cm de alto", price: "$8,500"},
      {size: "25cm de ancho x 10 cm de alto", price: "$10,000"},
      {size: "30cm de ancho x 10 cm de alto", price: "$13,000"}]
  },
  {
    id: 2,
    name: "Cilindro Forrado",
    description: "Base en cartón rigido, variedad de colores, resistentes y elegantes, ideal para flores, arreglos... ",
    price: "Desde",
    category: "popular",
    image: "img/CilindroForrado6.jpeg",
    images: [
      "img/CilindroForrado6.jpeg",
      "img/CilindroForrado"
    ],
    variants: [
      {size: "13cm de diametro x 10 cm de alto", price: "$6,000"},
      {size: "16cm de diametro x 13 cm de alto", price: "$7,500"},
      {size: "20cm de diametro x 13 cm de alto", price: "$9,000"},
      {size: "25cm de diametro x 13 cm de alto", price: "$11,000"}]
  },
  {
    id: 24,
    name: "Cuadrada",
    description: "Cajón en cartón rígido, muy resistentes y elegantes, ideal para flores, arreglos... ",
    price: "Desde",
    category: "popular",
    image: "img/cuadrada1.png",
    images: [
      "img/cuadrada2.jpeg",
      "img/cuadrada3.jpeg"
    ],
    variants: [
      {size: "Base 13cm x 13cm x 10 cm de alto", price: "$6,000"},
      {size: "Base 16cm x 16cm x 10 cm de alto", price: "$7,500"},
      {size: "Base 20cm x 20cm x 10 cm de alto", price: "$8,500"},
      {size: "Base 25cm x 25cm x 10 cm de alto", price: "$10,000"}]
  },
  {
    id: 3,
    name: "Cajón Corazón",
    description: "Cajón en cartón rígido, muy resistentes y elegantes, ideal para flores, arreglos... ",
    price: "Desde",
    category: "popular",
    image: "img/cajoncorazon1.png",
    images: [
      "img/cajoncorazon1.png",
      "img/cajoncorazon2.png",
      "img/cajoncorazon3.png"
    ],
    variants: [
      {size: "Medida del cajon interno: 26cm x 18cm. Corazón de 24cm de diametro ", price: "$14,000"}]
  },
  {
    id: 4,
    name: "Libro Corazón #1",
    description: "Base del corazón en cartón rígido, libro con doble capa de carton blanco de 300gr ",
    price: "Desde",
    category: "popular",
    image: "img/librocorazon2.jpeg",
    images: [
      "img/librocorazon2.jpeg",
      "img/librocorazon1.jpeg",
      "img/librocorazon3.jpeg"
    ],
    variants: [
      {size: "Corazón de 25cm de diametro", price: "$8,000"}]
  },
  {
    id: 21,
    name: "Libro Corazón #2",
    description: "Base del corazón en cartón rígido, libro con doble capa de carton blanco de 300gr ",
    price: "Desde",
    category: "popular",
    image: "img/librocorazon22.png",
    images: [
      "img/librocorazon22.png",
      "img/librocorazon23.png"
    ],
    variants: [
      {size: "Corazón de 25cm de diametro", price: "$8,000"}]
  },
  {
    id: 5,
    name: "Dulcera",
    description: "Caja resistente con borde de 1cm y separadores ",
    price: "Desde",
    category: "Los mas llevados",
    image: "img/dulcera1.jpeg",
    images: [
      "img/dulcera1.jpeg",
      "img/dulcera2.png"
    ],
    variants: [
      {size: "Tamaño mediano", price: "$5,000"}]
  },
  {
    id: 6,
    name: "Mom",
    description: "Base de letras en cartón rídigo, doble capa de cartón blanco en basey tapa",
    price: "Desde",
    category: "Los mas llevados",
    image: "img/mom1.jpeg",
    images: [
      "img/mom1.jpeg",
      "img/mom2.jpeg",
      "img/mom3.jpeg"
    ],
    variants: [
      {size: "53cm x 18cm x 6 cm de alto", price: "$13,500"}]
  },
  {
    id: 7,
    name: "I love u",
    description: "Base de letras en cartón rídigo, doble capa de cartón blanco en basey tapa",
    price: "Desde",
    category: "Los mas llevados",
    image: "img/loveu1.jpeg",
    images: [
      "img/loveu1.jpeg",
      "img/loveu2.jpeg"
    ],
    variants: [
      {size: "50cm x 18cm x 6 cm de alto", price: "$13,500"}]
  },

  {
    id: 8,
    name: "Buffet",
    description: "Caja con borde de 1cm incluye separadores, salseros y tapa con ventana, ideal para desayunos sorpresa",
    price: "Desde",
    image: "img/buffet.jpeg",
    images: [
      "img/buffet.jpeg",
      "img/buffet2.jpeg"
    ],
    variants: [
      {size: "34cm x 26cm x 6cm", price: "$9,000"}]
  },
  {
    id: 10,
    name: "Cofre",
    description: "Cajón en cartón rígico, muy resistentes y elegantes, ideal para flores, arreglos... ",
    price: "Desde",
    category: "Los mas llevados",
    image: "img/cofre1.jpeg",
    images: [
      "img/cofre1.jpeg",
      "img/cofre2.jpeg"
    ],
    variants: [
      {size: "Mediano: 23cm x 17cm x 15cm alto total", price: "$13,000"},
      {size: "Grande: 30cm x 20cm x 15 cm alto total", price: "$15,000"}]
  },

  {
    id: 11,
    name: "Libro con broche iman",
    description: "Cajón en cartón rígico, muy resistentes y elegantes, ideal para flores, arreglos... ",
    price: "Desde",
    category: "Los mas llevados",
    image: "img/librobroche1.jpeg",
    images: [
      "img/librobroche1.jpeg",
      "img/librobroche2.jpeg"
    ],
    variants: [
      {size: "Mediano: 25cm x 20cm x 8cm", price: "$9,500"},
      {size: "Grande: 30cm x 25cm x 8cm", price: "$11,000"}],

  },
  {
    id: 12,
    name: "Cilindro sin forrar Alto",
    description: "Cajón en cartón rígico, muy resistentes y elegantes, ideal para flores, arreglos... ",
    price: "Desde",
    category: "Los mas llevados",
    image: "img/cilindrosinforrar1.png",
    images: [
      "img/cilindrosinforrar1.png",
      "img/cilindrosinforrar2.png"
    ],
    variants: [
      {size: "13cm de diametro x 10 cm de alto", price: "$4,800"},
      {size: "16cm de diametro x 13 cm de alto", price: "$5,500"},
      {size: "20cm de diametro x 13 cm de alto", price: "$7,000"},
      {size: "25cm de diametro x 13 cm de alto", price: "$9,000"}],

  },
  {
    id: 28,
    name: "Cilindro sin forrar Bajo",
    description: "Cajón en cartón rígico, muy resistentes y elegantes, ideal para flores, arreglos... ",
    price: "Desde",
    category: "Los mas llevados",
    image: "img/cilindrosinforrarbajos.png",
    images: [
      "img/cilindrosinforrarbajos.png"
    ],
    variants: [
      {size: "13cm de diametro x 5 cm de alto", price: "$4,300"},
      {size: "16cm de diametro x 7 cm de alto", price: "$5,000"},
      {size: "20cm de diametro x 7 cm de alto", price: "$6,600"},
      {size: "25cm de diametro x 7 cm de alto", price: "$8,500"}],

  },

  {
    id: 13,
    name: "Corazones sin forrar",
    description: "Cajón en cartón rígico, muy resistentes y elegantes, ideal para flores, arreglos... ",
    price: "Desde",
    category: "Los mas llevados",
    image: "img/corasinforrar2.jpeg",
    images: [
      "img/corasinforrar2.jpeg",
      "img/corasinforrar1.jpeg"
    ],
    variants: [
      {size: "20cm de ancho x 10 cm de alto", price: "$6,000"},
      {size: "25cm de ancho x 10 cm de alto", price: "$7,000"},
      {size: "30cm de ancho x 10 cm de alto", price: "$8,000"}],

  },
  {
    id: 14,
    name: "Reloj ",
    description: "Disponible en multiples colores. PRECIO SOLO LA CAJA, si quieres adicionar la almohadilla" +
      "y el moño, aumenta $1,000",
    price: "Precio",
    category: "joyeria",
    image: "img/reloj.jpeg",
    images: [
      "img/reloj.jpeg",
      "img/reloj2.jpeg"
    ],
    variants: [
      {size: "7,5cm x 8,5cm x 7cm de alto", price: "$4,000"}],

  },
  {
    id: 15,
    name: "Joyeros #1",
    description: "Disponible en carton blanco, gris, rosa, vienen sin forrar, incluye nido en cartón ",
    price: "Desde",
    category: "joyeria",
    image: "img/estilo1.jpeg",
    images: [
      "img/estilo1.jpeg",
      "img/estilo12.jpeg"
    ],
    variants: [
      {size: "Color blanco: 5cm x 5cm x 3cm", price: "$1,000"},
      {size: "Color blanco: 7cm x 7cm x 4cm", price: "$1,400"},
      {size: "Color blanco: 10cm x 10cm x 4cm", price: "$1,800"},

      {size: "Color rosa o gris: 5cm x 5cm x 3cm", price: "$1,500"},
      {size: "Color rosa o gris: 7cm x 7cm x 4cm", price: "$1,800"},
      {size: "Color rosa o gris: 10cm x 10cm x 4cm", price: "$2,300"}],

  },
  {
    id: 16,
    name: "Joyeros #2",
    description: "Completamente forrada en cualquier color, elegante, incluye nido en cartón ",
    price: "Desde",
    category: "joyeria",
    image: "img/estilo2.png",
    images: [
      "img/estilo2.png",
      "img/estilo21.png"
    ],
    variants: [
      {size: "5cm x 5cm x 3cm", price: "$2,800"},
      {size: "7cm x 7cm x 4cm", price: "$3,200"},
      {size: "10cm x 10cm x 4cm", price: "$3,800"}],

  },
  {
    id: 17,
    name: "Joyeros #3",
    description: "Disponible en color rosa, gris o blanco, incluye nido en cartón",
    price: "Desde",
    category: "joyeria",
    image: "img/estilo3.png",
    images: [
      "img/estilo3.png",
      "img/estilo31.png"
    ],
    variants: [
      {size: "5cm x 5cm x 3cm", price: "$2,400"},
      {size: "7cm x 7cm x 4cm", price: "$2,800"},
      {size: "10cm x 10cm x 4cm", price: "$3,300"}],

  },
  {
    id: 18,
    name: "Joyeros #4",
    description: "Base y tapas forradas en multiples colores, incluye nido en cartón",
    price: "Desde",
    category: "joyeria",
    image: "img/estilo4.png",
    images: [
      "img/estilo4.png"
    ],
    variants: [
      {size: "5cm x 5cm x 3cm", price: "$2,400"},
      {size: "7cm x 7cm x 4cm", price: "$2,800"},
      {size: "10cm x 10cm x 4cm", price: "$3,300"}],

  },
  {
    id: 25,
    name: "Empaques #1",
    description: "Puedes personalizar las medidas, cartón 300gr. PRECIO NO INCLUYE CINTA NI STICKER",
    price: "Desde",
    category: "empaques",
    image: "img/empaque1.png",
    images: [
      "img/empaque1.png",
      "img/empaque12.png"
    ],
    variants: [
      {size: "15cm x 15cm x 7cm ", price: "$2,200"},
      {size: "20cm x 20cm x 7cm ", price: "$2,900"},
      {size: "25cm x 25cm x 7cm ", price: "$3,500"}],

  }, {
    id: 26,
    name: "Empaques #2",
    description: "Cartón de 300gr, con borde de 1cm. PRECIO CON VENTANA AUMENTA $600",
    price: "Desde",
    category: "empaques",
    image: "img/empaque21.png",
    images: [
      "img/empaque21.png",
      "img/empaque22.png"
    ],
    variants: [
      {size: "20cm x 12cm x 6cm", price: "$4,000"},
      {size: "25cm x 20cm x 6cm", price: "$5,400"},
      {size: "30cm x 25cm x 6cm", price: "$6,400"}],

  },
  {
    id: 27,
    name: "Empaques #3",
    description: "Cartón de 300gr, con borde sencillo. PRECIO CON VENTANA AUMENTA $600",
    price: "Desde",
    category: "empaques",
    image: "img/Empaque31.png",
    images: [
      "img/Empaque31.png",
      "img/Empaque32.png",
      "img/empaque33.png"
    ],
    variants: [
      {size: "20cm x 12cm x 6cm", price: "$2,400"},
      {size: "25cm x 20cm x 6cm", price: "$3,500"},
      {size: "30cm x 25cm x 6cm", price: "$4,200"}],

  },
  {
    id: 9,
    name: "Carrito Corona",
    description: "Se puede personalizar la impresión",
    price: "Desde",
    category: "hombres",
    image: "img/corona1.jpeg",
    images: [
      "img/corona1.jpeg",
      "img/corona2.jpeg",
      "img/carritoejemplo.png"
    ],
    variants: [
      {size: "13cm x 18cm x 9cm", price: "$7,500"}]
  },
  {
    id: 19,
    name: "Ancheta",
    description: "Base en cartón rigido, variedad de colores",
    price: "Desde",
    image: "img/acheta1.png",
    images: [
      "img/acheta1.png",
      "img/acheta2.png"

    ],
    variants: [
      {size: "13cm x 13cm x 10cm ", price: "$4,500"}],

  },
  {
    id: 20,
    name: "Ancheta Esmoquin",
    description: "Base en cartón rigido, sin forrar con decoración",
    price: "Desde",
    category: "hombres",
    image: "img/anchetahombre1.png",
    images: [
      "img/anchetahombre1.png",
      "img/anchetahombre2.png"
    ],
    variants: [
      {size: "13cm x 13cm x 10cm ", price: "$4,000"}]
  },
  {
    id: 22,
    name: "Cilindro Esmoquin",
    description: "Base en cartón rigido, forrados en variedad de colores",
    price: "Desde",
    category: "hombres",
    image: "img/cilindroesmoquin.jpg",
    images: [
      "img/cilindroesmoquin.jpg",
      "img/cilindroesmoquin2.jpg"
    ],
    variants: [
      {size: "17cm de diametro x 13 cm de alto", price: "$7,000"}]
  },
  {
    id: 23,
    name: "Ancheta Amor",
    description: "Base en cartón rigido, forrados en variedad de colores",
    price: "Desde",
    category: "amoryamistad",
    image: "img/anchetaamor1.png",
    images: [
      "img/anchetaamor1.png",
      "img/anchetaamor2.png"
    ],
    variants: [
      {size: "13cm x 15cm x 10cm de alto", price: "$5,500"}]
  },

];

// Elementos del DOM
const productsGrid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');

// Modales
const productModal = document.getElementById('productModal');
const productModalContent = document.getElementById('productModalContent');
const closeProductModal = document.querySelector('.close');

const imageModal = document.getElementById('imageModal');
const imageModalContent = document.getElementById('imageModalContent');
const closeImageModal = document.querySelector('.close-image');

let currentFilter = 'all';
let currentSearch = '';

// Carrito de compras
let cart = [];

// Inicializar la página
document.addEventListener('DOMContentLoaded', function () {
  displayProducts(products);
  setupEventListeners();
});

// Configurar event listeners
/// Configurar event listeners - VERSIÓN CORREGIDA
function setupEventListeners() {
  // ✅ Configurar filtros primero (esto se estaba perdiendo)
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      currentFilter = this.dataset.filter;

      // Limpiar búsqueda cuando se cambia de filtro
      searchInput.value = '';
      currentSearch = '';

      // ✅ Ocultar combos inmediatamente si no es "all"
      if (currentFilter !== 'all') {
        hideCombosSection();
      } else {
        showCombosSection();
      }

      filterProducts();
    });
  });

  // ✅ Búsqueda
  searchInput.addEventListener('input', function() {
    currentSearch = this.value.toLowerCase();

    // ✅ Ocultar combos si hay búsqueda activa
    if (currentSearch.trim() !== '') {
      hideCombosSection();
    } else if (currentFilter === 'all') {
      // ✅ Mostrar combos solo si no hay búsqueda y está en "Todos"
      showCombosSection();
    }

    filterProducts();
  });

  // ✅ Event listeners específicos para cerrar modales (NO usar event delegation general)

  // Modal de producto
  if (closeProductModal) {
    closeProductModal.addEventListener('click', function() {
      console.log('✅ Cerrando modal de producto');
      productModal.style.display = 'none';
    });
  }

  // Modal de imágenes
  if (closeImageModal) {
    closeImageModal.addEventListener('click', function() {
      console.log('✅ Cerrando modal de imágenes');
      imageModal.style.display = 'none';
    });
  }

  // ✅ Cerrar modales al hacer clic fuera - PERO solo en el fondo del modal
  if (productModal) {
    productModal.addEventListener('click', function(event) {
      if (event.target === productModal) {
        console.log('✅ Cerrando modal de producto (click fuera)');
        productModal.style.display = 'none';
      }
    });
  }

  if (imageModal) {
    imageModal.addEventListener('click', function(event) {
      if (event.target === imageModal) {
        console.log('✅ Cerrando modal de imágenes (click fuera)');
        imageModal.style.display = 'none';
      }
    });
  }

  // ✅ Cerrar con tecla Escape
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      console.log('✅ Tecla Escape presionada');
      if (productModal.style.display === 'block') {
        productModal.style.display = 'none';
      }
      if (imageModal.style.display === 'block') {
        imageModal.style.display = 'none';
      }
    }
  });
}
// FUNCIONES DEL CARRITO - CORREGIDAS

function increaseQuantity(productId) {
  const quantityInput = document.getElementById(`quantity-${productId}`);
  quantityInput.value = parseInt(quantityInput.value) + 1;
}

function decreaseQuantity(productId) {
  const quantityInput = document.getElementById(`quantity-${productId}`);
  const currentValue = parseInt(quantityInput.value);
  if (currentValue > 12) {
    quantityInput.value = currentValue - 1;
  }
}

function validateQuantity(productId) {
  const quantityInput = document.getElementById(`quantity-${productId}`);
  if (parseInt(quantityInput.value) < 12) {
    quantityInput.value = 12;
    showCartMessage(productId, '⚠️ La cantidad mínima es 12 unidades', 'warning');
  }
}

function showCartMessage(productId, message, type) {
  const messageElement = document.getElementById(`cart-message-${productId}`);
  if (messageElement) {
    messageElement.textContent = message;
    messageElement.className = `cart-message ${type}`;

    setTimeout(() => {
      messageElement.textContent = '';
      messageElement.className = 'cart-message';
    }, 3000);
  }
}

function addToCart(productId) {
  console.log('🛒 Intentando añadir producto ID:', productId);

  const product = products.find(p => p.id === productId);
  if (!product) {
    console.error('❌ Producto no encontrado');
    showCartMessage(productId, '❌ Error: Producto no encontrado', 'error');
    return;
  }

  const quantityInput = document.getElementById(`quantity-${productId}`);
  if (!quantityInput) {
    console.error('❌ Input de cantidad no encontrado');
    showCartMessage(productId, '❌ Error en la cantidad', 'error');
    return;
  }

  const quantity = parseInt(quantityInput.value);
  console.log('📦 Cantidad seleccionada:', quantity);

  if (quantity < 12) {
    showCartMessage(productId, '❌ La cantidad mínima es 12 unidades', 'error');
    return;
  }

  // OBTENER LA VARIANTE SELECCIONADA
  let selectedVariant = null;
  if (product.variants) {
    const selectedVariantItem = document.querySelector(`#variantsList-${productId} .variant-item.selected`);
    if (selectedVariantItem) {
      selectedVariant = {
        size: selectedVariantItem.dataset.size,
        price: selectedVariantItem.dataset.price
      };
    }
  }

  console.log('🎯 Variante seleccionada:', selectedVariant);

  // Buscar si el producto ya está en el carrito (ahora considerando la variante)
  const existingItemIndex = cart.findIndex(item =>
    item.product.id === productId &&
    item.selectedVariant?.size === selectedVariant?.size
  );

  if (existingItemIndex !== -1) {
    // Producto con misma variante ya existe, actualizar cantidad
    cart[existingItemIndex].quantity += quantity;
    console.log('✅ Producto actualizado en carrito');
  } else {
    // Producto nuevo o con diferente variante, agregar al carrito
    cart.push({
      product: product,
      quantity: quantity,
      selectedVariant: selectedVariant
    });
    console.log('✅ Nuevo producto añadido al carrito');
  }

  console.log('🛒 Carrito actual:', cart);
  showCartMessage(productId, `✅ ${quantity} unidades añadidas al pedido`, 'success');

  // Actualizar contador del carrito
  updateCartCounter();

  // Cerrar el modal después de añadir (opcional)
  setTimeout(() => {
    const modal = document.getElementById('productModal');
    if (modal) {
      modal.style.display = 'none';
    }
  }, 1500);
}

// Función para ver el carrito completo
function viewCart() {
  if (cart.length === 0) {
    showEmptyCartMessage();
    return;
  }

  showCartModal();
}

// Función para mostrar mensaje de carrito vacío
function showEmptyCartMessage() {
  alert('🛒 Tu pedido está vacío\n\nAgrega productos con el botón "Añadir al Pedido"');
}

// Función para mostrar el modal del carrito
function showCartModal() {
  const cartModalHTML = `
    <div class="cart-modal">
      <div class="cart-header">
        <h2>📋 Resumen de Tu Pedido</h2>
        <span class="close-cart">&times;</span>
      </div>
      <div class="cart-items" id="cartItems">
        ${generateCartItemsHTML()}
      </div>
      <div class="cart-total">
        <strong>💰 Total: $${calculateTotal().toLocaleString()}</strong>
      </div>
      <div class="cart-actions">
        <button class="continue-shopping-btn" onclick="closeCartModal()">
          ← Seguir Comprando
        </button>
        <button class="whatsapp-btn" onclick="sendToWhatsApp()">
          💬 Confirmar Pedido por WhatsApp
        </button>
      </div>
    </div>
  `;

  // Crear modal del carrito
  const cartModal = document.createElement('div');
  cartModal.className = 'modal';
  cartModal.id = 'cartModal';
  cartModal.innerHTML = cartModalHTML;
  document.body.appendChild(cartModal);

  // Configurar event listeners
  setupCartModalListeners();

  // Mostrar modal
  cartModal.style.display = 'block';
}

// Generar HTML de los items del carrito
function generateCartItemsHTML() {
  return cart.map((item, index) => `
    <div class="cart-item" data-index="${index}">
      <div class="cart-item-image">
        <img src="${item.product.image}" alt="${item.product.name}"
             onerror="this.src='https://via.placeholder.com/60x60/667eea/white?text=Imagen'">
      </div>
      <div class="cart-item-details">
        <h4>${item.product.name}</h4>
        ${item.selectedVariant ? `
          <p><strong>Tamaño:</strong> ${item.selectedVariant.size}</p>
          <p><strong>Precio unitario:</strong> ${item.selectedVariant.price}</p>
        ` : ''}
        <p><strong>Cantidad:</strong> ${item.quantity} unidades</p>
        ${item.selectedVariant ? `
          <p class="cart-item-price">
            <strong>Subtotal:</strong> $${(parsePrice(item.selectedVariant.price) * item.quantity).toLocaleString()}
          </p>
        ` : ''}
      </div>
      <button class="remove-item-btn" onclick="removeFromCart(${index})">
        🗑️ Eliminar
      </button>
    </div>
  `).join('');
}

// Calcular total
function calculateTotal() {
  return cart.reduce((total, item) => {
    const price = item.selectedVariant ? parsePrice(item.selectedVariant.price) : 0;
    return total + (price * item.quantity);
  }, 0);
}

// Eliminar producto del carrito
function removeFromCart(index) {
  if (confirm('¿Estás seguro de que quieres eliminar este producto de tu pedido?')) {
    cart.splice(index, 1);
    updateCartCounter();
    refreshCartModal();

    if (cart.length === 0) {
      closeCartModal();
      showEmptyCartMessage();
    }
  }
}

// Actualizar modal del carrito
function refreshCartModal() {
  const cartItems = document.getElementById('cartItems');
  const cartTotal = document.querySelector('.cart-total');

  if (cartItems) {
    cartItems.innerHTML = generateCartItemsHTML();
  }

  if (cartTotal) {
    cartTotal.innerHTML = `<strong>💰 Total: $${calculateTotal().toLocaleString()}</strong>`;
  }
}

// Cerrar modal del carrito
function closeCartModal() {
  const cartModal = document.getElementById('cartModal');
  if (cartModal) {
    cartModal.remove();
  }
}

// Configurar event listeners del modal del carrito
function setupCartModalListeners() {
  const closeCart = document.querySelector('.close-cart');
  if (closeCart) {
    closeCart.addEventListener('click', closeCartModal);
  }

  // Cerrar al hacer clic fuera
  const cartModal = document.getElementById('cartModal');
  if (cartModal) {
    cartModal.addEventListener('click', function (event) {
      if (event.target === this) {
        closeCartModal();
      }
    });
  }
}

// Función para enviar a WhatsApp
function sendToWhatsApp() {
  if (cart.length === 0) {
    alert('❌ No hay productos en el pedido');
    return;
  }

  const phoneNumber = "573007276599";
  const message = generateWhatsAppMessage();
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  // Abrir en nueva pestaña
  window.open(whatsappURL, '_blank');
}

// Generar mensaje para WhatsApp
function generateWhatsAppMessage() {
  let message = "¡Hola! 👋\n\n";
  message += "Quiero hacer el siguiente pedido:\n\n";

  cart.forEach((item, index) => {
    message += `📦 ${item.product.name}\n`;
    if (item.selectedVariant) {
      message += `   Tamaño: ${item.selectedVariant.size}\n`;
    }
    message += `   Cantidad: ${item.quantity} unidades\n`;
    if (item.selectedVariant) {
      const price = parsePrice(item.selectedVariant.price);
      const subtotal = price * item.quantity;
      message += `   Subtotal: $${subtotal.toLocaleString()}\n`;
    }
    message += "\n";
  });

  message += `💰 *TOTAL: $${calculateTotal().toLocaleString()}*\n\n`;
  message += "Por favor confirmar disponibilidad y forma de pago. ¡Gracias! 🎉";

  return message;
}

// Función auxiliar para convertir precios
function parsePrice(priceString) {
  return parseFloat(priceString.replace(/[$,]/g, ''));
}

// Actualizar contador del carrito
function updateCartCounter() {
  const cartCounter = document.getElementById('cart-counter');
  if (cartCounter) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCounter.textContent = totalItems;
    cartCounter.style.display = totalItems > 0 ? 'flex' : 'none';
  }
}

// Mostrar productos
function displayProducts(productsToShow) {
  productsGrid.innerHTML = '';

  if (productsToShow.length === 0) {
    productsGrid.innerHTML = '<p class="no-products">No se encontraron productos.</p>';
    return;
  }

  productsToShow.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
      <div class="product-image-container">
        <img src="${product.image}" alt="${product.name}" class="product-image"
             onerror="this.src='https://via.placeholder.com/300x200/667eea/white?text=Imagen+No+Disponible'">
        ${(product.images && product.images.length > 1)}
      </div>
      <div class="product-info">
        <h3 class="product-title">${product.name}</h3>
        <p class="product-description">${product.description.substring(0, 60)}...</p>
        <div class="product-price">${product.variants ? 'Desde ' + product.variants[0].price : product.price}</div>
      </div>
    `;

    // Click en la imagen → Abre modal de descripción
    const productImage = productCard.querySelector('.product-image');
    productImage.addEventListener('click', (e) => {
      e.stopPropagation();
      openProductModal(product);
    });

    // Click en el resto de la tarjeta → Abre información del producto
    productCard.addEventListener('click', (e) => {
      if (!e.target.classList.contains('product-image')) {
        openProductModal(product);
      }
    });

    productsGrid.appendChild(productCard);
  });
}

// Filtrar productos - Versión robusta
function filterProducts() {
  let filteredProducts = products;

  // ✅ LÓGICA CLARA para combos
  const shouldShowCombos = currentFilter === 'all' && currentSearch.trim() === '';

  if (shouldShowCombos) {
    showCombosSection();
  } else {
    hideCombosSection();
  }

  // Filtrar por categoría
  if (currentFilter !== 'all') {
    filteredProducts = filteredProducts.filter(product =>
      product.category === currentFilter
    );
  }

  // Filtrar por búsqueda
  if (currentSearch) {
    filteredProducts = filteredProducts.filter(product =>
      product.name.toLowerCase().includes(currentSearch) ||
      product.description.toLowerCase().includes(currentSearch) ||
      (product.category && product.category.toLowerCase().includes(currentSearch))
    );
  }

  displayProducts(filteredProducts);
}

// ✅ Función para ocultar la sección de combos
function hideCombosSection() {
  const combosSection = document.querySelector('.combos-section');
  if (combosSection) {
    combosSection.style.display = 'none';
  }
}

// ✅ Función para mostrar la sección de combos
function showCombosSection() {
  const combosSection = document.querySelector('.combos-section');
  if (combosSection) {
    combosSection.style.display = 'block';
  }
}

// ✅ También ocultar combos cuando se escribe en la búsqueda
searchInput.addEventListener('input', function() {
  currentSearch = this.value.toLowerCase();

  if (currentSearch.trim() !== '') {
    hideCombosSection();
  } else if (currentFilter === 'all') {
    showCombosSection();
  }

  filterProducts();
});

// Función para abrir modal de producto (información)
function openProductModal(product) {
  // Construir HTML de variantes con selección
  const variantsHTML = product.variants ? `
    <div class="product-variants">
      <h3>📏 Selecciona Tamaño y Precio:</h3>
      <div class="variants-list" id="variantsList-${product.id}">
        ${product.variants.map((variant, index) => `
          <div class="variant-item ${index === 0 ? 'selected' : ''}"
               data-size="${variant.size}"
               data-price="${variant.price}">
            <span class="variant-size">${variant.size}</span>
            <span class="variant-price">${variant.price}</span>
          </div>
        `).join('')}
      </div>
    </div>
  ` : '';

  // HTML para el selector de cantidad
  const quantitySelectorHTML = `
    <div class="quantity-selector">
      <h3>🛒 Cantidad:</h3>
      <div class="quantity-controls">
        <button class="quantity-btn minus-btn" onclick="decreaseQuantity(${product.id})">-</button>
        <input type="number" id="quantity-${product.id}" class="quantity-input"
               value="12" min="12" onchange="validateQuantity(${product.id})">
        <button class="quantity-btn plus-btn" onclick="increaseQuantity(${product.id})">+</button>
      </div>
      <p class="min-quantity-notice">Mínimo 12 unidades por pedido</p>
    </div>

    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
      ✅ Añadir al Pedido
    </button>

    <div id="cart-message-${product.id}" class="cart-message"></div>
  `;

  productModalContent.innerHTML = `
    <div class="modal-product">
      <div class="modal-image-container">
        <img src="${product.image}" alt="${product.name}" class="modal-image"
             onclick="openImageModal(${product.id})"
             onerror="this.src='https://via.placeholder.com/500x300/667eea/white?text=Imagen+No+Disponible'">
        ${product.images && product.images.length > 1 ?
    '<div class="modal-image-badge" onclick="openImageModal(' + product.id + ')">📷 Ver ' + product.images.length + ' fotos</div>' : ''}
      </div>
      <div class="modal-details">
        <h2>${product.name}</h2>
        <p class="modal-description">${product.description}</p>

        ${variantsHTML}

        <div class="modal-price" id="selectedPrice-${product.id}">
          ${product.variants ? 'Precio: ' + product.variants[0].price : product.price}
        </div>
        <span class="product-category">${product.category || 'Sin categoría'}</span>

        ${quantitySelectorHTML}

        ${product.images && product.images.length > 1 ?
    `<button class="view-gallery-btn" onclick="openImageModal(${product.id})">📷 Ver Galería Completa (${product.images.length} fotos)</button>` : ''}
      </div>
    </div>
  `;

  // Configurar event listeners para las variantes
  if (product.variants) {
    setupVariantSelection(product.id);
  }

  productModal.style.display = 'block';
}

// Función para configurar la selección de variantes
function setupVariantSelection(productId) {
  const variantItems = document.querySelectorAll(`#variantsList-${productId} .variant-item`);
  const priceElement = document.getElementById(`selectedPrice-${productId}`);

  variantItems.forEach(item => {
    item.addEventListener('click', function () {
      // Remover selección anterior
      variantItems.forEach(i => i.classList.remove('selected'));

      // Agregar selección actual
      this.classList.add('selected');

      // Actualizar precio mostrado
      const selectedPrice = this.querySelector('.variant-price').textContent;
      priceElement.textContent = `Precio: ${selectedPrice}`;
    });
  });
}

// Función para abrir modal de imágenes
function openImageModal(productId) {
  // Cerrar modal de producto primero
  productModal.style.display = 'none';

  // Buscar el producto por ID
  const product = products.find(p => p.id === productId);
  const images = product.images || [product.image];

  imageModalContent.innerHTML = `
    <div class="main-image-section">
      <div class="main-image-container">
        <img id="mainModalImage" src="${images[0]}" alt="${product.name}"
             onerror="this.src='https://via.placeholder.com/500x300/667eea/white?text=Imagen+No+Disponible'">
      </div>
      ${images.length > 1 ? `
      <div class="thumbnail-scroll">
        <div class="thumbnails" id="thumbnailsContainer">
          <!-- Las miniaturas se cargan aquí -->
        </div>
      </div>
      ` : ''}
    </div>
    <div class="product-info-modal">
      <h2>${product.name}</h2>
      <div class="modal-price">${product.price}</div>
      <p class="modal-description">${product.description}</p>
      <button class="back-to-product-btn" onclick="closeImageModalAndOpenProduct(${product.id})">← Volver a información del producto</button>
    </div>
  `;

  // Configurar miniaturas si hay más de una imagen
  if (images.length > 1) {
    const thumbnailsContainer = document.getElementById('thumbnailsContainer');
    const mainModalImage = document.getElementById('mainModalImage');

    images.forEach((image, index) => {
      const thumbnailItem = document.createElement('div');
      thumbnailItem.className = `thumbnail-item ${index === 0 ? 'active' : ''}`;
      thumbnailItem.innerHTML = `
        <img src="${image}" alt="${product.name} - Vista ${index + 1}"
             onerror="this.src='https://via.placeholder.com/100x100/667eea/white?text=Imagen'">
      `;

      thumbnailItem.addEventListener('click', () => {
        // Cambiar imagen principal
        mainModalImage.src = image;

        // Actualizar miniatura activa
        document.querySelectorAll('.thumbnail-item').forEach(item => {
          item.classList.remove('active');
        });
        thumbnailItem.classList.add('active');
      });

      thumbnailsContainer.appendChild(thumbnailItem);
    });
  }

  imageModal.style.display = 'block';
}

// Función para volver del modal de imágenes al modal de producto
function closeImageModalAndOpenProduct(productId) {
  imageModal.style.display = 'none';
  const product = products.find(p => p.id === productId);
  openProductModal(product);
}
// Funciones para los combos
function openComboModal(comboId) {
  const comboData = getComboData(comboId);
  const comboModalHTML = `
        <div class="combo-modal">
            <div class="combo-modal-header">
                <h2>${comboData.title}</h2>
                <span class="close-combo">&times;</span>
            </div>
            <div class="combo-modal-content">
                <div class="combo-modal-image">
                    <img src="${comboData.image}" alt="${comboData.title}"
                         onerror="this.src='https://via.placeholder.com/500x400/667eea/white?text=Imagen+Combo'">
                </div>
                <div class="combo-modal-details">
                    <h3>📦 Contenido del Combo:</h3>
                    <ul>
                        ${comboData.items.map(item => `<li>${item}</li>`).join('')}
                    </ul>

                    <div class="combo-modal-price">
                        <span class="combo-modal-old-price">${comboData.oldPrice}</span>
                        <span class="combo-modal-big-price">${comboData.newPrice}</span>
                        <div class="combo-modal-savings">${comboData.savings}</div>
                    </div>

                    <button class="whatsapp-btn" onclick="contactForCombo('${comboData.title}')" style="width: 100%; margin-top: 1rem;">
                        💬 Consultar por este Combo
                    </button>
                </div>
            </div>
        </div>
    `;

  const comboModal = document.createElement('div');
  comboModal.className = 'modal';
  comboModal.id = 'comboModal';
  comboModal.innerHTML = comboModalHTML;
  document.body.appendChild(comboModal);

  // Configurar event listeners
  const closeCombo = comboModal.querySelector('.close-combo');
  closeCombo.addEventListener('click', () => {
    comboModal.remove();
  });

  comboModal.addEventListener('click', (event) => {
    if (event.target === comboModal) {
      comboModal.remove();
    }
  });

  comboModal.style.display = 'block';
}

function getComboData(comboId) {
  const combos = {
    'combo1': {
      title: 'COMBO EMPRENDEDOR',
      image: 'img/combo-detalle1.jpg',
      items: [
        '✓ 5 modelos diferentes de cajas',
        '✓ 12 unidades de cada modelo (60 unidades total)',
        '✓ Incluye: Corazón Forrado, Cilindro, Cuadrada, Cajón Corazón, Libro Corazón',
        '✓ Material: Cartón rígido de alta calidad',
        '✓ Forrado en papel craft premium',
        '✓ Listo para personalizar'
      ],
      oldPrice: 'Precio normal: $450,000',
      newPrice: '$382,500',
      savings: '¡Ahorras $67,500! (15% OFF)'
    },
    'combo2': {
      title: 'COMBO PROFESIONAL',
      image: 'img/combo-detalle2.jpg',
      items: [
        '✓ 8 modelos diferentes de cajas',
        '✓ 24 unidades de cada modelo (192 unidades total)',
        '✓ Incluye modelos populares + joyeros',
        '✓ Material: Cartón rígido reforzado',
        '✓ Forrado en papel importado',
        '✓ Acabados premium',
        '✓ Prioridad en producción'
      ],
      oldPrice: 'Precio normal: $900,000',
      newPrice: '$720,000',
      savings: '¡Ahorras $180,000! (20% OFF)'
    },
    'combo3': {
      title: 'COMBO CORPORATIVO',
      image: 'img/combo-detalle3.jpg',
      items: [
        '✓ 12 modelos diferentes de cajas',
        '✓ 50 unidades de cada modelo (600 unidades total)',
        '✓ Incluye toda la gama de productos',
        '✓ Material: Cartón de máxima resistencia',
        '✓ Forrado en materiales premium',
        '✓ Logística y almacenamiento incluido',
        '✓ Asesoría personalizada',
        '✓ Despacho nacional'
      ],
      oldPrice: 'Precio normal: $2,100,000',
      newPrice: '$1,575,000',
      savings: '¡Ahorras $525,000! (25% OFF)'
    }
  };

  return combos[comboId] || combos['combo1'];
}

function contactForCombo(comboTitle) {
  const phoneNumber = "573007276599"; // ⚠️ REEMPLAZA con tu número
  const message = `¡Hola! 👋\n\nEstoy interesado en el: ${comboTitle}\n\nPor favor envíenme más información sobre este combo promocional. ¡Gracias! 🎉`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  window.open(whatsappURL, '_blank');

  // Cerrar modal después de enviar
  const comboModal = document.getElementById('comboModal');
  if (comboModal) {
    comboModal.remove();
  }
}
