// Datos de ejemplo - Reemplaza con tus productos reales
const products = [
  {
    id: 1,
    name: "Producto Ejemplo 1",
    description: "Descripción detallada del producto ejemplo 1. Características y beneficios de este producto de alta calidad.",
    price: "$99.99",
    category: "categoria1",
    image: "./images/producto1.jpg"
  },
  {
    id: 2,
    name: "Producto Ejemplo 2",
    description: "Descripción detallada del producto ejemplo 2. Características y beneficios de este producto premium.",
    price: "$149.99",
    category: "categoria2",
    image: "./images/producto2.jpg"
  },
  {
    id: 3,
    name: "Producto Ejemplo 3",
    description: "Descripción detallada del producto ejemplo 3. Características y beneficios de este producto económico.",
    price: "$79.99",
    category: "categoria1",
    image: "./images/producto3.jpg"
  },
  {
    id: 4,
    name: "Producto Ejemplo 4",
    description: "Descripción detallada del producto ejemplo 4. Características y beneficios de este producto exclusivo.",
    price: "$199.99",
    category: "categoria3",
    image: "./images/producto4.jpg"
  }
];

// Elementos del DOM
const productsGrid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const modal = document.getElementById('productModal');
const closeModal = document.querySelector('.close');
const modalContent = document.getElementById('modalContent');

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

  // Modal
  closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
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
            <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='https://via.placeholder.com/300x200?text=Imagen+No+Disponible'">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-description">${product.description.substring(0, 100)}...</p>
                <div class="product-price">${product.price}</div>
                <span class="product-category">${product.category}</span>
            </div>
        `;

    productCard.addEventListener('click', () => openProductModal(product));
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
      product.description.toLowerCase().includes(currentSearch)
    );
  }

  displayProducts(filteredProducts);
}

// Abrir modal del producto
function openProductModal(product) {
  modalContent.innerHTML = `
        <div class="modal-product">
            <img src="${product.image}" alt="${product.name}" class="modal-image" onerror="this.src='https://via.placeholder.com/500x300?text=Imagen+No+Disponible'">
            <div class="modal-details">
                <h2>${product.name}</h2>
                <p class="modal-description">${product.description}</p>
                <div class="modal-price">${product.price}</div>
                <span class="product-category">Categoría: ${product.category}</span>
            </div>
        </div>
    `;
  modal.style.display = 'block';
}
