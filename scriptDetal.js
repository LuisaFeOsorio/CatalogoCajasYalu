const MIN_ORDER_QTY = 1;
const products = [
  {
    id: 1,
    name: "Corazon Forrado",
    description: "Base en cartón rigido, variedad de colores, resistentes y elegantes, ideal para flores, arreglos... ",

    category: "popular",
    image: "img/CorazónForrado1.jpg",
    images: [
      "img/CorazónForrado1.jpg",
      "img/CorazonForrado4.jpeg",
      "img/CorazonForrado5.jpeg"
    ],
    variants: [
      {size: "25cm de ancho x 10 cm de alto", price: "$12,000"},
      {size: "30cm de ancho x 10 cm de alto", price: "$15,000"}]
  },
  {
    id: 2,
    name: "Cilindro Forrado",
    description: "Base en cartón rigido, variedad de colores, resistentes y elegantes, ideal para flores, arreglos... ",

    category: "popular",
    image: "img/CilindroForrado6.jpeg",
    images: [
      "img/CilindroForrado6.jpeg",
      "img/Cilindro33.png",
      "img/Cilindro44.png"
    ],
    variants: [
      {size: "16cm de diametro x 13 cm de alto", price: "$9,000"},
      {size: "20cm de diametro x 13 cm de alto", price: "$10,500"},
      {size: "25cm de diametro x 13 cm de alto", price: "$13,000"}]
  },
  {
    id: 24,
    name: "Cuadrada",
    description: "Cajón en cartón rígido, muy resistentes y elegantes, ideal para flores, arreglos... ",

    category: "popular",
    image: "img/cuadrada1.png",
    images: [
      "img/cuadrada2.jpeg",
      "img/cuadrada3.jpeg"
    ],
    variants: [
      {size: "Base 16cm x 16cm x 10 cm de alto", price: "$8,500"},
      {size: "Base 20cm x 20cm x 10 cm de alto", price: "$10,500"},
      {size: "Base 25cm x 25cm x 10 cm de alto", price: "$12,000"}]
  },
  {
    id: 3,
    name: "Cajón Corazón",
    description: "Cajón en cartón rígido, muy resistentes y elegantes, ideal para flores, arreglos... ",

    category: "popular",
    image: "img/cajoncorazon1.png",
    images: [
      "img/cajoncorazon1.png",
      "img/cajoncorazon2.png",
      "img/cajoncorazon3.png"
    ],
    variants: [
      {size: "Medida del cajon interno: 26cm x 18cm. Corazón de 24cm de diametro ", price: "$17,000"}]
  },
  {
    id: 4,
    name: "Libro Corazón #1",
    description: "Base del corazón en cartón rígido, libro con doble capa de carton blanco de 300gr ",

    category: "popular",
    image: "img/librocorazon2.jpeg",
    images: [
      "img/librocorazon2.jpeg",
      "img/librocorazon1.jpeg",
      "img/librocorazon3.jpeg"
    ],
    variants: [
      {size: "Corazón de 25cm de diametro", price: "$10,000"}]
  },
  {
    id: 21,
    name: "Libro Corazón #2",
    description: "Base del corazón en cartón rígido, libro con doble capa de carton blanco de 300gr ",

    category: "popular",
    image: "img/librocorazon22.png",
    images: [
      "img/librocorazon22.png",
      "img/librocorazon23.png"
    ],
    variants: [
      {size: "Corazón de 25cm de diametro", price: "$10,000"}]
  },
  {
    id: 5,
    name: "Dulcera",
    description: "Caja resistente con borde de 1cm y separadores ",
    category: "Los mas llevados",
    image: "img/dulcera1.jpeg",
    images: [
      "img/dulcera1.jpeg",
      "img/dulcera2.png"
    ],
    variants: [
      {size: "Tamaño mediano", price: "$6,500"}]
  },
  {
    id: 6,
    name: "Mom",
    description: "Base de letras en cartón rídigo, doble capa de cartón blanco en basey tapa",
    category: "Los mas llevados",
    image: "img/mom1.jpeg",
    images: [
      "img/mom1.jpeg",
      "img/mom2.jpeg",
      "img/mom3.jpeg"
    ],
    variants: [
      {size: "53cm x 18cm x 6 cm de alto", price: "$16,000"}]
  },
  {
    id: 7,
    name: "I love u",
    description: "Base de letras en cartón rídigo, doble capa de cartón blanco en basey tapa",
    category: "Los mas llevados",
    image: "img/loveu1.jpeg",
    images: [
      "img/loveu1.jpeg",
      "img/loveu2.jpeg"
    ],
    variants: [
      {size: "50cm x 18cm x 6 cm de alto", price: "$16,000"}]
  },

  {
    id: 8,
    name: "Buffet",
    description: "Caja con borde de 1cm incluye separadores, salseros y tapa con ventana, ideal para desayunos sorpresa",
    image: "img/buffet.jpeg",
    images: [
      "img/buffet.jpeg",
      "img/buffet2.jpeg"
    ],
    variants: [
      {size: "34cm x 26cm x 6cm", price: "$12,000"}]
  },
  {
    id: 10,
    name: "Cofre",
    description: "Cajón en cartón rígico, muy resistentes y elegantes, ideal para flores, arreglos... ",
    category: "Los mas llevados",
    image: "img/cofre1.jpeg",
    images: [
      "img/cofre1.jpeg",
      "img/cofre2.jpeg"
    ],
    variants: [
      {size: "Mediano: 23cm x 17cm x 15cm alto total", price: "$15,000"},
      {size: "Grande: 30cm x 20cm x 15 cm alto total", price: "$17,000"}]
  },

  {
    id: 11,
    name: "Libro con broche iman",
    description: "Cajón en cartón rígico, muy resistentes y elegantes, ideal para flores, arreglos... ",
    category: "Los mas llevados",
    image: "img/librobroche1.jpeg",
    images: [
      "img/librobroche1.jpeg",
      "img/librobroche2.jpeg"
    ],
    variants: [
      {size: "Mediano: 25cm x 20cm x 8cm", price: "$11,000"},
      {size: "Grande: 30cm x 25cm x 8cm", price: "$13,000"}],

  },
  {
    id: 12,
    name: "Cilindro sin forrar Alto",
    description: "Cajón en cartón rígico, muy resistentes y elegantes, ideal para flores, arreglos... ",
    category: "Los mas llevados",
    image: "img/cilindrosinforrar1.png",
    images: [
      "img/cilindrosinforrar1.png",
      "img/cilindrosinforrar2.png"
    ],
    variants: [
      {size: "16cm de diametro x 13 cm de alto", price: "$6,500"},
      {size: "20cm de diametro x 13 cm de alto", price: "$8,000"},
      {size: "25cm de diametro x 13 cm de alto", price: "$10,000"}],

  },
  {
    id: 28,
    name: "Cilindro sin forrar Bajo",
    description: "Cajón en cartón rígico, muy resistentes y elegantes, ideal para flores, arreglos... ",
    category: "Los mas llevados",
    image: "img/cilindrosinforrarbajos.png",
    images: [
      "img/cilindrosinforrarbajos.png"
    ],
    variants: [
      {size: "16cm de diametro x 7 cm de alto", price: "$6,000"},
      {size: "20cm de diametro x 7 cm de alto", price: "$7,600"},
      {size: "25cm de diametro x 7 cm de alto", price: "$10,000"}],

  },

  {
    id: 13,
    name: "Corazones sin forrar",
    description: "Cajón en cartón rígico, muy resistentes y elegantes, ideal para flores, arreglos... ",
    category: "Los mas llevados",
    image: "img/corasinforrar2.jpeg",
    images: [
      "img/corasinforrar2.jpeg",
      "img/corasinforrar1.jpeg"
    ],
    variants: [
      {size: "20cm de ancho x 10 cm de alto", price: "$7,500"},
      {size: "25cm de ancho x 10 cm de alto", price: "$9,000"},
      {size: "30cm de ancho x 10 cm de alto", price: "$10,000"}],

  },
  {
    id: 14,
    name: "Reloj ",
    description: "Disponible en multiples colores. PRECIO SOLO LA CAJA, si quieres adicionar la almohadilla" +
      "y el moño, aumenta $1,000",
    category: "joyeria",
    image: "img/reloj.jpeg",
    images: ["img/reloj.jpeg",
      "img/reloj2.jpeg"
    ],
    variants: [
      {size: "7,5cm x 8,5cm x 7cm de alto", price: "$5,000"}],

  },
  {
    id: 15,
    name: "Joyeros #1",
    description: "Disponible en carton blanco, gris, rosa, vienen sin forrar ",
    category: "joyeria",
    image: "img/estilo1.jpeg",
    images: [
      "img/estilo1.jpeg",
      "img/estilo12.jpeg"
    ],
    variants: [
      {size: "Color blanco: 5cm x 5cm x 3cm", price: "$1,500"},
      {size: "Color blanco: 7cm x 7cm x 4cm", price: "$2,000"},
      {size: "Color blanco: 10cm x 10cm x 4cm", price: "$2,800"},

      {size: "Color rosa o gris: 5cm x 5cm x 3cm", price: "$2,000"},
      {size: "Color rosa o gris: 7cm x 7cm x 4cm", price: "$2,700"},
      {size: "Color rosa o gris: 10cm x 10cm x 4cm", price: "$3,400"}],

  },
  {
    id: 16,
    name: "Joyeros #2",
    description: "Completamente forrada en cualquier color, elegante. ",
    category: "joyeria",
    image: "img/estilo2.png",
    images: [
      "img/estilo2.png",
      "img/estilo21.png"
    ],
    variants: [
      {size: "5cm x 5cm x 3cm", price: "$3,300"},
      {size: "7cm x 7cm x 4cm", price: "$3,900"},
      {size: "10cm x 10cm x 4cm", price: "$4,500"}],

  },
  {
    id: 17,
    name: "Joyeros #3",
    description: "Disponible en color rosa, gris o blanco",
    category: "joyeria",
    image: "img/estilo3.png",
    images: [
      "img/estilo3.png",
      "img/estilo31.png"
    ],
    variants: [
      {size: "5cm x 5cm x 3cm", price: "$2,900"},
      {size: "7cm x 7cm x 4cm", price: "$3,500"},
      {size: "10cm x 10cm x 4cm", price: "$4,000"}],

  },
  {
    id: 18,
    name: "Joyeros #4",
    description: "Base y tapas forradas en multiples colores",
    category: "joyeria",
    image: "img/estilo4.png",
    images: [
      "img/estilo4.png"
    ],
    variants: [
      {size: "5cm x 5cm x 3cm", price: "$3,000"},
      {size: "7cm x 7cm x 4cm", price: "$3,400"},
      {size: "10cm x 10cm x 4cm", price: "$3,900"}],

  },
  {
    id: 25,
    name: "Empaques #1",
    description: "Puedes personalizar las medidas, cartón 300gr. PRECIO NO INCLUYE CINTA NI STICKER",
    category: "empaques",
    image: "img/empaque1.png",
    images: [
      "img/empaque1.png",
      "img/empaque12.png"
    ],
    variants: [
      {size: "15cm x 15cm x 7cm ", price: "$2,600"},
      {size: "20cm x 20cm x 7cm ", price: "$3,300"},
      {size: "25cm x 25cm x 7cm ", price: "$3,900"}],

  }, {
    id: 26,
    name: "Empaques #2",
    description: "Cartón de 300gr, con borde de 1cm. PRECIO CON VENTANA AUMENTA $600",
    category: "empaques",
    image: "img/empaque21.png",
    images: [
      "img/empaque21.png",
      "img/empaque22.png"
    ],
    variants: [
      {size: "20cm x 12cm x 6cm", price: "$4,400"},
      {size: "25cm x 20cm x 6cm", price: "$5,900"},
      {size: "30cm x 25cm x 6cm", price: "$7,000"}],

  },
  {
    id: 27,
    name: "Empaques #3",
    description: "Cartón de 300gr, con borde sencillo. PRECIO CON VENTANA AUMENTA $600",
    category: "empaques",
    image: "img/Empaque31.png",
    images: [
      "img/Empaque31.png",
      "img/Empaque32.png",
      "img/empaque33.png"
    ],
    variants: [
      {size: "20cm x 12cm x 6cm", price: "$2,800"},
      {size: "25cm x 20cm x 6cm", price: "$3,900"},
      {size: "30cm x 25cm x 6cm", price: "$4,600"}],

  },
  {
    id: 9,
    name: "Carrito Corona",
    description: "Se puede personalizar la impresión",
    category: "hombres",
    image: "img/corona1.jpeg",
    images: [
      "img/corona1.jpeg",
      "img/corona2.jpeg",
      "img/carritoejemplo.png"
    ],
    variants: [
      {size: "13cm x 18cm x 9cm", price: "$9,500"}]
  },
  {
    id: 19,
    name: "Ancheta",
    description: "Base en cartón rigido, variedad de colores",
    image: "img/acheta1.png",
    images: [
      "img/acheta1.png",
      "img/acheta2.png"

    ],
    variants: [
      {size: "13cm x 13cm x 10cm ", price: "$6,000"}],

  },
  {
    id: 20,
    name: "Ancheta Esmoquin",
    description: "Base en cartón rigido, sin forrar con decoración",
    category: "hombres",
    image: "img/anchetahombre1.png",
    images: [
      "img/anchetahombre1.png",
      "img/anchetahombre2.png"
    ],
    variants: [
      {size: "13cm x 13cm x 10cm ", price: "$5,000"}]
  },
  {
    id: 22,
    name: "Cilindro Esmoquin",
    description: "Base en cartón rigido, forrados en variedad de colores",
    category: "hombres",
    image: "img/cilindroesmoquin.jpg",
    images: [
      "img/cilindroesmoquin.jpg",
      "img/cilindroesmoquin2.jpg"
    ],
    variants: [
      {size: "17cm de diametro x 13 cm de alto", price: "$9,000"}]
  },
  {
    id: 23,
    name: "Ancheta Amor",
    description: "Base en cartón rigido, forrados en variedad de colores",
    category: "amoryamistad",
    image: "img/anchetaamor1.png",
    images: [
      "img/anchetaamor1.png",
      "img/anchetaamor2.png"
    ],
    variants: [
      {size: "13cm x 15cm x 10cm de alto", price: "$7,500"}]
  },

];
// Estado
let cart = JSON.parse(localStorage.getItem('cart_detal')) || [];
let currentFilter = 'all';
let currentSearch = '';

// Elementos DOM
const productsGrid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('.filter-btn');
const cartCounter = document.getElementById('cart-counter');
const btnViewCart = document.getElementById('btnViewCart');
const productCount = document.getElementById('product-count');

// Bootstrap modales
const productModalEl = document.getElementById('productModal');
const productModal = new bootstrap.Modal(productModalEl);
const productModalContent = document.getElementById('productModalContent');

const imageModalEl = document.getElementById('imageModal');
const imageModal = new bootstrap.Modal(imageModalEl);
const imageModalContent = document.getElementById('imageModalContent');

document.addEventListener('DOMContentLoaded', () => {
  renderProducts(products);
  setupEventListeners();
  updateCartCounter();
  updateProductCount();
});

function setupEventListeners() {
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.dataset.filter;
      applyFilters();
    });
  });

  searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value.trim().toLowerCase();
    applyFilters();
  });

  btnViewCart.addEventListener('click', () => {
    viewCart();
  });
}

function renderProducts(list) {
  productsGrid.innerHTML = '';
  if (!list.length) {
    productsGrid.innerHTML = `<div class="col-12 text-center py-4 text-muted">No se encontraron productos.</div>`;
    updateProductCount();
    return;
  }

  list.forEach(product => {
    const col = document.createElement('div');
    col.className = 'col-12 col-sm-6 col-md-4 col-lg-3';
    col.setAttribute('data-category', product.category);

    col.innerHTML = `
      <div class="product-card">
        <div class="product-image-container">
          <img src="${product.image}" alt="${escapeHtml(product.name)}" class="product-image"
               onerror="this.src='https://via.placeholder.com/400x300/667eea/ffffff?text=Sin+imagen'">
        </div>
        <div class="product-info">
          <h5 class="product-title mb-2">${escapeHtml(product.name)}</h5>
          <p class="product-category text-muted small mb-2 text-uppercase">${escapeHtml(product.category)}</p>
          <p class="product-description small text-muted mb-3">${escapeHtml((product.description||'').substring(0,80))}${product.description && product.description.length>80 ? '...' : ''}</p>
          <div class="d-flex justify-content-between align-items-center mt-auto">
            <div>
              <div class="product-price fw-bold text-primary">${product.variants ? product.variants[0].price : ''}</div>
              <small class="text-muted">Mínimo: ${MIN_ORDER_QTY} unidad</small>
            </div>
            <button class="btn btn-sm btn-primary btn-view" data-id="${product.id}">
              <i class="bi bi-eye me-1"></i>Ver
            </button>
          </div>
        </div>
      </div>
    `;

    productsGrid.appendChild(col);
  });

  // Delegación de botones "Ver"
  productsGrid.querySelectorAll('.btn-view').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id, 10);
      const product = products.find(p => p.id === id);
      if (product) openProductModal(product);
    });
  });

  updateProductCount();
}

function applyFilters() {
  let filtered = [...products];
  if (currentFilter && currentFilter !== 'all') {
    filtered = filtered.filter(p => p.category === currentFilter);
  }
  if (currentSearch) {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(currentSearch) ||
      (p.description || '').toLowerCase().includes(currentSearch) ||
      (p.category || '').toLowerCase().includes(currentSearch)
    );
  }
  renderProducts(filtered);
}

function openProductModal(product) {
  const variantsHTML = product.variants ? `
    <div class="mb-4">
      <h6 class="fw-semibold mb-3">Selecciona tamaño / variante</h6>
      <div id="variantsList" class="variants-container">
        ${product.variants.map((v, idx) => `
          <div class="variant-option ${idx===0 ? 'selected' : ''}"
               data-size="${escapeHtml(v.size)}" data-price="${escapeHtml(v.price)}">
            <div class="d-flex justify-content-between align-items-center">
              <span class="variant-size">${escapeHtml(v.size)}</span>
              <span class="variant-price fw-bold text-primary">${escapeHtml(v.price)}</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>` : '';

  productModalContent.innerHTML = `
    <div class="modal-header border-0 pb-0">
      <h5 class="modal-title fw-bold">${escapeHtml(product.name)}</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
    </div>
    <div class="modal-body p-4">
      <div class="row g-4">
        <div class="col-12 col-md-6">
          <div class="image-container-modal">
            <img id="modalMainImage" src="${product.images && product.images.length ? product.images[0] : product.image}"
                 class="modal-product-image" alt="${escapeHtml(product.name)}"
                 onerror="this.src='https://via.placeholder.com/500x500/667eea/ffffff?text=Sin+imagen'">
          </div>
          ${product.images && product.images.length > 1 ?
    `<div class="mt-3 d-flex gap-2 overflow-auto pb-2" id="modalThumbnails"></div>` : ''}
          <div class="mt-3 text-center">
            <button class="btn btn-outline-primary btn-sm" id="viewGalleryBtn">
              <i class="bi bi-images me-2"></i>Ver más fotos
            </button>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="product-info-content">
            <p class="text-muted mb-3">${escapeHtml(product.description || '')}</p>

            ${variantsHTML}

            <div class="mb-4">
              <h6 class="fw-semibold mb-3">Cantidad (mín ${MIN_ORDER_QTY})</h6>
              <div class="quantity-selector">
                <button class="quantity-btn" type="button" id="qtyMinus">-</button>
                <span class="quantity-display" id="quantityDisplay">${MIN_ORDER_QTY}</span>
                <button class="quantity-btn" type="button" id="qtyPlus">+</button>
              </div>
            </div>

            <div class="d-grid">
              <button id="addToCartBtn" class="btn btn-primary btn-lg py-3">
                <i class="bi bi-cart-plus me-2"></i>Añadir al pedido
              </button>
            </div>

            <div id="productMessage" class="alert alert-success mt-3 text-center d-none"></div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Thumbnails
  if (product.images && product.images.length > 1) {
    const thumbnailsContainer = productModalContent.querySelector('#modalThumbnails');
    product.images.forEach((src, idx) => {
      const thumb = document.createElement('div');
      thumb.className = 'thumbnail-item flex-shrink-0';
      thumb.innerHTML = `
        <img src="${src}" alt="Vista ${idx+1}"
             class="thumbnail-img rounded-2"
             onerror="this.src='https://via.placeholder.com/80x80/667eea/ffffff?text=Sin'">
      `;
      thumb.addEventListener('click', () => {
        const mainImage = productModalContent.querySelector('#modalMainImage');
        mainImage.style.opacity = 0;
        setTimeout(() => {
          mainImage.src = src;
          mainImage.style.opacity = 1;
        }, 150);

        thumbnailsContainer.querySelectorAll('.thumbnail-item').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
      });
      if (idx === 0) thumb.classList.add('active');
      thumbnailsContainer.appendChild(thumb);
    });
  }

  // Variant selection
  const variantOptions = productModalContent.querySelectorAll('.variant-option');
  variantOptions.forEach(option => {
    option.addEventListener('click', () => {
      variantOptions.forEach(opt => opt.classList.remove('selected'));
      option.classList.add('selected');
    });
  });

  // Cantidad
  const quantityDisplay = productModalContent.querySelector('#quantityDisplay');
  const qtyMinus = productModalContent.querySelector('#qtyMinus');
  const qtyPlus = productModalContent.querySelector('#qtyPlus');
  let currentQuantity = MIN_ORDER_QTY;

  function updateQuantityDisplay() {
    quantityDisplay.textContent = currentQuantity;
  }

  qtyMinus.addEventListener('click', () => {
    if (currentQuantity > MIN_ORDER_QTY) {
      currentQuantity--;
      updateQuantityDisplay();
    }
  });

  qtyPlus.addEventListener('click', () => {
    currentQuantity++;
    updateQuantityDisplay();
  });

  // Botones
  const addToCartBtn = productModalContent.querySelector('#addToCartBtn');
  addToCartBtn.addEventListener('click', () => {
    if (currentQuantity < MIN_ORDER_QTY) {
      showMessage('error', `La cantidad mínima es ${MIN_ORDER_QTY} unidad.`);
      return;
    }

    let selectedVariant = null;
    const selectedOption = productModalContent.querySelector('.variant-option.selected');
    if (selectedOption) {
      selectedVariant = {
        size: selectedOption.dataset.size,
        price: selectedOption.dataset.price
      };
    }

    addToCart(product.id, currentQuantity, selectedVariant);
  });

  const viewGalleryBtn = productModalContent.querySelector('#viewGalleryBtn');
  viewGalleryBtn.addEventListener('click', () => openImageModal(product.id));

  productModal.show();
}

function openImageModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  const images = product.images && product.images.length ? product.images : [product.image];

  imageModalContent.innerHTML = `
    <div class="modal-header border-0">
      <h5 class="modal-title fw-bold">${escapeHtml(product.name)} — Galería</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
    </div>
    <div class="modal-body p-4">
      <div class="row g-4">
        <div class="col-12 col-lg-8">
          <div class="image-container-modal">
            <img id="galleryMainImage" src="${images[0]}" class="gallery-main-img"
                 alt="${escapeHtml(product.name)}"
                 onerror="this.src='https://via.placeholder.com/600x500/667eea/ffffff?text=Sin+imagen'">
          </div>
        </div>
        <div class="col-12 col-lg-4">
          <div class="d-flex flex-column gap-2" id="galleryThumbnails">
            ${images.map((src, i) => `
              <div class="thumbnail-item ${i === 0 ? 'active' : ''}" data-src="${src}">
                <img src="${src}" alt="Mini ${i+1}" class="thumbnail-img"
                     onerror="this.src='https://via.placeholder.com/100x100/667eea/ffffff?text=Sin'">
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `;

  // Conectar thumbnails
  imageModalContent.querySelectorAll('.thumbnail-item').forEach((t, idx) => {
    t.addEventListener('click', () => {
      const src = t.dataset.src;
      const mainImage = imageModalContent.querySelector('#galleryMainImage');
      mainImage.style.opacity = 0;
      setTimeout(() => {
        mainImage.src = src;
        mainImage.style.opacity = 1;
      }, 150);

      imageModalContent.querySelectorAll('.thumbnail-item').forEach(x => x.classList.remove('active'));
      t.classList.add('active');
    });
  });

  imageModal.show();
}

function addToCart(productId, quantity, selectedVariant = null) {
  const product = products.find(p => p.id === productId);
  if (!product) {
    showMessage('error', 'Error: producto no encontrado');
    return;
  }

  if (quantity < MIN_ORDER_QTY) {
    showMessage('error', `La cantidad mínima es ${MIN_ORDER_QTY} unidad.`);
    return;
  }

  const price = selectedVariant ? parsePrice(selectedVariant.price) :
    (product.variants ? parsePrice(product.variants[0].price) : 0);

  const existingIndex = cart.findIndex(item =>
    item.productId === productId &&
    ((item.selectedVariant && selectedVariant && item.selectedVariant.size === selectedVariant.size) || (!item.selectedVariant && !selectedVariant))
  );

  if (existingIndex !== -1) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({
      productId,
      name: product.name,
      image: product.image,
      category: product.category,
      price,
      quantity,
      selectedVariant
    });
  }

  localStorage.setItem('cart_detal', JSON.stringify(cart));
  updateCartCounter();
  showMessage('success', `✅ ${quantity} unidad(es) añadida(s) al pedido`);

  setTimeout(() => productModal.hide(), 1500);
}

function viewCart() {
  const html = buildCartModalHTML();
  productModalContent.innerHTML = html;
  productModal.show();

  productModalContent.querySelectorAll('.btn-decrease').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.index, 10);
      changeCartQuantity(idx, cart[idx].quantity - 1);
    });
  });

  productModalContent.querySelectorAll('.btn-increase').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.index, 10);
      changeCartQuantity(idx, cart[idx].quantity + 1);
    });
  });

  productModalContent.querySelectorAll('.btn-remove').forEach(btn => {
    btn.addEventListener('click', () => {
      const idx = parseInt(btn.dataset.index, 10);
      removeFromCart(idx);
    });
  });

  const checkoutBtn = productModalContent.querySelector('#checkoutBtn');
  if (checkoutBtn) checkoutBtn.addEventListener('click', proceedToCheckout);
}

function buildCartModalHTML() {
  if (!cart.length) {
    return `
      <div class="modal-header">
        <h5 class="modal-title fw-bold">Tu pedido de detal</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body text-center py-5">
        <i class="bi bi-cart-x display-4 text-muted mb-3"></i>
        <p class="mt-3">Tu pedido está vacío.</p>
        <small class="text-muted">Agrega productos (mínimo ${MIN_ORDER_QTY} unidad por referencia)</small>
      </div>
      <div class="modal-footer">
        <button class="btn btn-secondary" data-bs-dismiss="modal">Seguir comprando</button>
      </div>
    `;
  }

  let totalUnits = 0;
  let totalPrice = 0;
  const itemsHTML = cart.map((item, idx) => {
    const subtotal = item.price * item.quantity;
    totalUnits += item.quantity;
    totalPrice += subtotal;
    return `
      <div class="d-flex align-items-center gap-3 mb-3 p-3 border rounded">
        <div style="width:72px;height:72px;overflow:hidden;border-radius:8px;">
          <img src="${item.image}" alt="${escapeHtml(item.name)}" style="width:100%;height:100%;object-fit:cover;">
        </div>
        <div class="flex-grow-1">
          <div class="fw-semibold">${escapeHtml(item.name)}</div>
          <div class="text-muted small">${item.selectedVariant ? escapeHtml(item.selectedVariant.size) : 'Tamaño único'}</div>
          <div class="small mt-1">Precio unitario: $${formatCurrency(item.price)}</div>
        </div>
        <div class="text-end">
          <div class="btn-group btn-group-sm mb-1" role="group">
            <button class="btn btn-outline-secondary btn-decrease" data-index="${idx}">-</button>
            <button class="btn btn-light">${item.quantity}</button>
            <button class="btn btn-outline-secondary btn-increase" data-index="${idx}">+</button>
          </div>
          <div>
            <button class="btn btn-sm btn-link text-danger btn-remove" data-index="${idx}">Eliminar</button>
          </div>
          <div class="small mt-2">Subtotal: <strong>$${formatCurrency(subtotal)}</strong></div>
        </div>
      </div>
    `;
  }).join('');

  return `
    <div class="modal-header">
      <h5 class="modal-title fw-bold">Pedido detal (${cart.length} referencias)</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
    </div>
    <div class="modal-body">
      ${itemsHTML}
      <hr>
      <div class="d-flex justify-content-between">
        <div>Total unidades:</div>
        <div><strong>${totalUnits}</strong></div>
      </div>
      <div class="d-flex justify-content-between mt-2">
        <div>Total a pagar:</div>
        <div><strong>$${formatCurrency(totalPrice)}</strong></div>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" data-bs-dismiss="modal">Seguir comprando</button>
      <button id="checkoutBtn" class="btn btn-primary">
        <i class="bi bi-whatsapp me-2"></i>Cotizar por WhatsApp
      </button>
    </div>
  `;
}

function changeCartQuantity(index, newQty) {
  if (newQty < MIN_ORDER_QTY) {
    if (confirm(`La cantidad mínima por referencia es ${MIN_ORDER_QTY}. ¿Eliminar la referencia del pedido?`)) {
      removeFromCart(index); return;
    } else {
      cart[index].quantity = MIN_ORDER_QTY;
    }
  } else {
    cart[index].quantity = newQty;
  }
  localStorage.setItem('cart_detal', JSON.stringify(cart));
  updateCartCounter();
  viewCart();
}

function removeFromCart(index) {
  if (!confirm('¿Estás seguro de eliminar esta referencia del pedido?')) return;
  cart.splice(index,1);
  localStorage.setItem('cart_detal', JSON.stringify(cart));
  updateCartCounter();
  viewCart();
}

function proceedToCheckout() {
  if (!cart.length) {
    alert('No hay productos en el pedido.');
    return;
  }

  const phoneNumber = "573007276599";
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(generateWhatsAppMessage())}`;
  window.open(url, '_blank');
}

function generateWhatsAppMessage() {
  let msg = "¡Hola!%0A%0AQuiero cotizar el siguiente pedido al detal:%0A%0A";
  cart.forEach(item => {
    msg += `🛍️ ${item.name}%0A`;
    if (item.selectedVariant) msg += `   Tamaño: ${item.selectedVariant.size}%0A`;
    msg += `   Cantidad: ${item.quantity} unidades%0A`;
    msg += `   Precio unitario: $${formatCurrency(item.price)}%0A`;
    msg += `   Subtotal: $${formatCurrency(item.price * item.quantity)}%0A%0A`;
  });
  const total = cart.reduce((s,i)=>s + i.price*i.quantity,0);
  const totalUnits = cart.reduce((s,i)=>s + i.quantity,0);
  msg += `📊 RESUMEN:%0A   Total referencias: ${cart.length}%0A   Total unidades: ${totalUnits}%0A   TOTAL: $${formatCurrency(total)}%0A%0AGracias!`;
  return msg;
}

/* ---------- Utilidades ---------- */
function parsePrice(str) {
  if (typeof str === 'number') return str;
  if (!str) return 0;
  return parseFloat(String(str).replace(/[$,\s]/g, '')) || 0;
}

function formatCurrency(n) {
  return Number(n).toLocaleString('es-CO');
}

function showMessage(type, text) {
  const messageEl = document.querySelector('#productMessage');
  if (!messageEl) return;

  messageEl.textContent = text;
  messageEl.className = `alert alert-${type === 'success' ? 'success' : 'danger'} mt-3 text-center`;
  messageEl.classList.remove('d-none');

  setTimeout(() => {
    messageEl.classList.add('d-none');
  }, 3000);
}

function updateCartCounter() {
  const total = cart.reduce((s,i)=> s + i.quantity, 0);
  cartCounter.textContent = total;
  if (total > 0) {
    cartCounter.style.display = 'inline-block';
  } else {
    cartCounter.style.display = 'none';
  }
}

function updateProductCount() {
  const visibleCount = document.querySelectorAll('#productsGrid .col-12').length;
  productCount.textContent = `${visibleCount} productos`;
}

function escapeHtml(unsafe) {
  if (!unsafe) return '';
  return String(unsafe)
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;")
    .replace(/'/g,"&#039;");
}
