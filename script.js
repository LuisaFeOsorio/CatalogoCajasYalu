// Tus productos - MODIFICA ESTOS DATOS CON TUS PRODUCTOS REALES
const products = [
  {
    id: 1,
    name: "Corazon Forrado",
    description: "Base en cartón rigido, variedad de colores, resistentes y elegantes, ideal para flores, arreglos... ",
    price: "Desde",
    category: "Los mas llevados",
    image: "img/CorazónForrado1.jpg",
    images: [
      "img/CorazónForrado1.jpg",
      "img/CorazonForrado4.jpeg",
      "img/CorazonForrado5.jpeg"
    ],
    variants: [
      { size: "20cm", price: "$8,500" },
      { size: "25cm", price: "$19.99" },
      { size: "30cm", price: "$24.99" }]
  },
  {
    id: 2,
    name: "Cilindro Forrado",
    description: "Base en cartón rigido, variedad de colores, resistentes y elegantes, ideal para flores, arreglos... ",
    price: "Desde",
    category: "Los mas llevados",
    image: "/img/CilindroForrado6.jpeg",
    images: [
      "/img/CilindroForrado6.jpeg",
      "/img/CilindroForrado",
      "img/laptop-pantalla.jpg"
    ],
    variants: [
      { size: "20cm", price: "$8,500" },
      { size: "25cm", price: "$19.99" },
      { size: "30cm", price: "$24.99" }]
  },
  {
    id: 3,
    name: "Cajón Corazón",
    description: "Cajón en cartón rígico, muy resistentes y elegantes, ideal para flores, arreglos... ",
    price: "Desde",
    category: "Los mas llevados",
    image: "/img/cajoncorazon1.png",
    images: [
      "/img//cajoncorazon1.png",
      "/img//cajoncorazon2.png",
      "/img//cajoncorazon3.png"
    ],
    variants: [
      { size: "20cm", price: "$8,500" }]
  },
  {
    id: 4,
    name: "Libro Corazón",
    description: "Cajón en cartón rígico, muy resistentes y elegantes, ideal para flores, arreglos... ",
    price: "Desde",
    category: "Los mas llevados",
    image: "/img/librocorazon2.jpeg",
    images: [
      "/img/librocorazon2.jpeg",
      "/img/librocorazon1.jpeg",
      "/img/librocorazon3.jpeg"
    ],
    variants: [
      { size: "20cm", price: "$8,500" }]
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

// Inicializar la página
document.addEventListener('DOMContentLoaded', function() {
  displayProducts(products);
  setupEventListeners();
});

// Configurar event listeners
function setupEventListeners() {
  // Filtros
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      currentFilter = this.dataset.filter;
      filterProducts();
    });
  });

  // Búsqueda
  searchInput.addEventListener('input', function() {
    currentSearch = this.value.toLowerCase();
    filterProducts();
  });

  // Modal de producto
  closeProductModal.addEventListener('click', function() {
    productModal.style.display = 'none';
  });

  // Modal de imágenes
  closeImageModal.addEventListener('click', function() {
    imageModal.style.display = 'none';
  });

  // Cerrar modales al hacer clic fuera
  window.addEventListener('click', function(event) {
    if (event.target === productModal) {
      productModal.style.display = 'none';
    }
    if (event.target === imageModal) {
      imageModal.style.display = 'none';
    }
  });
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

            </div>
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description.substring(0, 60)}...</p>
                <div class="product-price">${product.variants ? 'Desde ' + product.variants[0].price : product.price}</div>
            </div>
        `;

    // ✅ CAMBIO: Click en la imagen → Abre MISMO modal de descripción
    const productImage = productCard.querySelector('.product-image');
    productImage.addEventListener('click', (e) => {
      e.stopPropagation();
      openProductModal(product); // Misma función que el click en la tarjeta
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

// Filtrar productos
function filterProducts() {
  let filteredProducts = products;

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
      product.category.toLowerCase().includes(currentSearch)
    );
  }

  displayProducts(filteredProducts);
}

// Función para abrir modal de producto (información)
function openProductModal(product) {
  // Construir HTML de variantes si existen
  const variantsHTML = product.variants ? `
        <div class="product-variants">
            <h3>📏 Tamaños y Precios:</h3>
            <div class="variants-list">
                ${product.variants.map(variant => `
                    <div class="variant-item">
                        <span class="variant-size">${variant.size}</span>
                        <span class="variant-price">${variant.price}</span>
                    </div>
                `).join('')}
            </div>
        </div>
    ` : '';

  // Construir el badge de galería si hay múltiples imágenes
  const galleryBadgeHTML = product.images && product.images.length > 1 ?
    `<div class="modal-image-badge" onclick="openImageModal(${product.id})">📷 Ver ${product.images.length} fotos</div>` : '';

  productModalContent.innerHTML = `
        <div class="modal-product">
            <div class="modal-image-container">
                <img src="${product.image}" alt="${product.name}" class="modal-image"
                     onclick="openImageModal(${product.id})"
                     onerror="this.src='https://via.placeholder.com/500x300/667eea/white?text=Imagen+No+Disponible'">
                ${galleryBadgeHTML}
            </div>
            <div class="modal-details">
                <h2>${product.name}</h2>
                <p class="modal-description">${product.description}</p>

                ${variantsHTML}
                <span class="product-category">${product.category}</span>

                ${product.images && product.images.length > 1 ?
    `<button class="view-gallery-btn" onclick="openImageModal(${product.id})">📷 Ver Galería Completa (${product.images.length} fotos)</button>` : ''}
            </div>
        </div>
    `;
  productModal.style.display = 'block';
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
