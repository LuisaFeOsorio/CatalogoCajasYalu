// Datos de los productos
const productos = [
  {
    id: 1,
    name: "Bolsa blanca",
    description: "Bolsa en papel importado, incluye cinta del color de tu preferencia y personalización de logo",
    categories: ["joyeria", "amoryamistad"],
    image: "img/bolsablanca.png",
    images: [
      "img/bolsablanca.png",
      "img/bolsamedidas.png"
    ],
    variants: [
      {size: "11cm alto x 9cm ancho x 5cm profundo", price: "$1,700"},
      {size: "16cm alto x 14cm ancho x 6cm profundo", price: "$2,550"},
      {size: "19cm alto x 15cm ancho x 7cm profundo", price: "$2,900"},
      {size: "18cm alto x 25cm ancho x 10cm profundo", price: "$3,600"},
      {size: "24cm alto x 30cm ancho x 13cm profundo", price: "$4,300"}
    ]
  },
  {
    id: 2,
    name: "Bolsa de color",
    description: "Bolsa en papel importado, incluye cinta del color de tu preferencia",
    category: "detalles",
    image: "img/bolsarosa.png",
    images: [
      "img/bolsarosa.png",
      "img/bolsamedidas.png"
    ],
    variants: [
      {size: "11cm alto x 9cm ancho x 5cm profundo", price: "$2,200"},
      {size: "16cm alto x 14cm ancho x 6cm profundo", price: "$3,300"},
      {size: "19cm alto x 15cm ancho x 7cm profundo", price: "$4,000"},
      {size: "18cm alto x 25cm ancho x 10cm profundo", price: "$4,500"},
      {size: "24cm alto x 30cm ancho x 13cm profundo", price: "$5,000"}
    ]
  },
  {
    id: 3,
    name: "Bolsa de color negra",
    description: "Bolsa en papel importado, incluye cinta del color de tu preferencia",
    category: "popular",
    image: "img/bolsanegra.png",
    images: [
      "img/bolsanegra.png",
      "img/bolsamedidas.png"
    ],
    variants: [
      {size: "11cm alto x 9cm ancho x 5cm profundo", price: "$2,200"},
      {size: "16cm alto x 14cm ancho x 6cm profundo", price: "$3,300"},
      {size: "19cm alto x 15cm ancho x 7cm profundo", price: "$4,000"},
      {size: "18cm alto x 25cm ancho x 10cm profundo", price: "$4,500"},
      {size: "24cm alto x 30cm ancho x 13cm profundo", price: "$5,000"}
    ]
  },
  {
    id: 4,
    name: "Corazón Forrado",
    description: "Base en cartón rígido, variedad de colores, resistentes y elegantes, ideal para flores, arreglos...",
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
      {size: "30cm de ancho x 10 cm de alto", price: "$13,000"}
    ]
  },
  {
    id: 5,
    name: "Cilindro Forrado",
    description: "Base en cartón rígido, variedad de colores, resistentes y elegantes, ideal para flores, arreglos...",
    category: "popular",
    image: "img/CilindroForrado6.jpeg",
    images: [
      "img/CilindroForrado6.jpeg",
      "img/Cilindro33.png",
      "img/Cilindro44.png"
    ],
    variants: [
      {size: "13cm de diámetro x 10 cm de alto", price: "$6,000"},
      {size: "16cm de diámetro x 13 cm de alto", price: "$7,500"},
      {size: "20cm de diámetro x 13 cm de alto", price: "$9,000"},
      {size: "25cm de diámetro x 13 cm de alto", price: "$11,000"}
    ]
  },
  {
    id: 6,
    name: "Cuadrada",
    description: "Cajón en cartón rígido, muy resistentes y elegantes, ideal para flores, arreglos...",
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
      {size: "Base 25cm x 25cm x 10 cm de alto", price: "$10,000"}
    ]
  },
  {
    id: 7,
    name: "Cajón Corazón",
    description: "Cajón en cartón rígido, muy resistentes y elegantes, ideal para flores, arreglos...",
    category: "popular",
    image: "img/cajoncorazon1.png",
    images: [
      "img/cajoncorazon1.png",
      "img/cajoncorazon2.png",
      "img/cajoncorazon3.png"
    ],
    variants: [
      {size: "Medida del cajón interno: 26cm x 18cm. Corazón de 24cm de diámetro", price: "$14,000"}
    ]
  },
  {
    id: 8,
    name: "Libro Corazón #1",
    description: "Base del corazón en cartón rígido, libro con doble capa de cartón blanco de 300gr",
    category: "popular",
    image: "img/librocorazon2.jpeg",
    images: [
      "img/librocorazon2.jpeg",
      "img/librocorazon1.jpeg",
      "img/librocorazon3.jpeg"
    ],
    variants: [
      {size: "Corazón de 25cm de diámetro", price: "$8,000"}
    ]
  },
  {
    id: 9,
    name: "Libro Corazón #2",
    description: "Base del corazón en cartón rígido, libro con doble capa de cartón blanco de 300gr",
    category: "popular",
    image: "img/librocorazon22.png",
    images: [
      "img/librocorazon22.png",
      "img/librocorazon23.png"
    ],
    variants: [
      {size: "Corazón de 25cm de diámetro", price: "$8,000"}
    ]
  },
  {
    id: 10,
    name: "Dulcera",
    description: "Caja resistente con borde de 1cm y separadores",
    category: "losmasllevados",
    image: "img/dulcera1.jpeg",
    images: [
      "img/dulcera1.jpeg",
      "img/dulcera2.png"
    ],
    variants: [
      {size: "Tamaño mediano", price: "$5,000"}
    ]
  },
  {
    id: 11,
    name: "Mom",
    description: "Base de letras en cartón rígido, doble capa de cartón blanco en base y tapa",
    category: "losmasllevados",
    image: "img/mom1.jpeg",
    images: [
      "img/mom1.jpeg",
      "img/mom2.jpeg",
      "img/mom3.jpeg"
    ],
    variants: [
      {size: "53cm x 18cm x 6 cm de alto", price: "$13,500"}
    ]
  },
  {
    id: 12,
    name: "I love u",
    description: "Base de letras en cartón rígido, doble capa de cartón blanco en base y tapa",
    category: "losmasllevados",
    image: "img/loveu1.jpeg",
    images: [
      "img/loveu1.jpeg",
      "img/loveu2.jpeg"
    ],
    variants: [
      {size: "50cm x 18cm x 6 cm de alto", price: "$13,500"}
    ]
  },
  {
    id: 13,
    name: "Buffet",
    description: "Caja con borde de 1cm incluye separadores, salseros y tapa con ventana, ideal para desayunos sorpresa",
    category: "losmasllevados",
    image: "img/buffet.jpeg",
    images: [
      "img/buffet.jpeg",
      "img/buffet2.jpeg"
    ],
    variants: [
      {size: "34cm x 26cm x 6cm", price: "$9,000"}
    ]
  },
  {
    id: 14,
    name: "Cofre",
    description: "Cajón en cartón rígido, muy resistentes y elegantes, ideal para flores, arreglos...",
    category: "losmasllevados",
    image: "img/cofre1.jpeg",
    images: [
      "img/cofre1.jpeg",
      "img/cofre2.jpeg"
    ],
    variants: [
      {size: "Mediano: 23cm x 17cm x 15cm alto total", price: "$13,000"},
      {size: "Grande: 30cm x 20cm x 15 cm alto total", price: "$15,000"}
    ]
  },
  {
    id: 15,
    name: "Libro con broche imán",
    description: "Cajón en cartón rígido, muy resistentes y elegantes, ideal para flores, arreglos...",
    category: "losmasllevados",
    image: "img/librobroche1.jpeg",
    images: [
      "img/librobroche1.jpeg",
      "img/librobroche2.jpeg"
    ],
    variants: [
      {size: "Mediano: 25cm x 20cm x 8cm", price: "$9,500"},
      {size: "Grande: 30cm x 25cm x 8cm", price: "$11,000"}
    ]
  },
  {
    id: 16,
    name: "Cilindro sin forrar Alto",
    description: "Cajón en cartón rígido, muy resistentes y elegantes, ideal para flores, arreglos...",
    category: "losmasllevados",
    image: "img/cilindrosinforrar1.png",
    images: [
      "img/cilindrosinforrar1.png",
      "img/cilindrosinforrar2.png"
    ],
    variants: [
      {size: "13cm de diámetro x 10 cm de alto", price: "$4,800"},
      {size: "16cm de diámetro x 13 cm de alto", price: "$5,500"},
      {size: "20cm de diámetro x 13 cm de alto", price: "$7,000"},
      {size: "25cm de diámetro x 13 cm de alto", price: "$9,000"}
    ]
  },
  {
    id: 17,
    name: "Cilindro sin forrar Bajo",
    description: "Cajón en cartón rígido, muy resistentes y elegantes, ideal para flores, arreglos...",
    category: "losmasllevados",
    image: "img/cilindrosinforrarbajos.png",
    images: [
      "img/cilindrosinforrarbajos.png"
    ],
    variants: [
      {size: "13cm de diámetro x 5 cm de alto", price: "$4,300"},
      {size: "16cm de diámetro x 7 cm de alto", price: "$5,000"},
      {size: "20cm de diámetro x 7 cm de alto", price: "$6,600"},
      {size: "25cm de diámetro x 7 cm de alto", price: "$8,500"}
    ]
  },
  {
    id: 18,
    name: "Corazones sin forrar",
    description: "Cajón en cartón rígido, muy resistentes y elegantes, ideal para flores, arreglos...",
    category: "losmasllevados",
    image: "img/corasinforrar2.jpeg",
    images: [
      "img/corasinforrar2.jpeg",
      "img/corasinforrar1.jpeg"
    ],
    variants: [
      {size: "20cm de ancho x 10 cm de alto", price: "$6,000"},
      {size: "25cm de ancho x 10 cm de alto", price: "$7,000"},
      {size: "30cm de ancho x 10 cm de alto", price: "$8,000"}
    ]
  },
  {
    id: 19,
    name: "Reloj",
    description: "Disponible en múltiples colores. PRECIO SOLO LA CAJA, si quieres adicionar la almohadilla y el moño, aumenta $1,000",
    category: "joyeria",
    image: "img/Relojnuevo.png",
    images: [
      "img/Relojnuevo.png",
      "img/reloj2.jpeg"
    ],
    variants: [
      {size: "7,5cm x 8,5cm x 7cm de alto", price: "$4,000"}
    ]
  },
  {
    id: 20,
    name: "Joyas #1",
    description: "Disponible en color blanco, resistentes y elegantes",
    category: "joyeria",
    image: "img/joyasluxury.jpeg",
    images: [
      "img/joyasluxury.jpeg",
      "img/joyasluxury2.jpeg"
    ],
    variants: [
      {size: "SIN personalización"},
      {size: "6cm x 6cm x 4cm de alto", price: "$4,000"},
      {size: "10cm x 10m x 4cm de alto", price: "$5,000"},
      {size: "CON personalización"},
      {size: "6cm x 6cm x 4cm de alto", price: "$4,800"},
      {size: "10cm x 10m x 4cm de alto", price: "$5,800"}
    ]
  },
  {
    id: 21,
    name: "Joyas #2",
    description: "Variedad de colores",
    category: "joyeria",
    image: "img/joyasrosanegra.jpeg",
    images: [
      "img/joyasrosanegra.jpeg",
      "img/joyasrosa.jpeg",
      "img/joyasnegra.jpeg"
    ],
    variants: [
      {size: "SENCILLAS"},
      {size: "5cm x 5cm x 3cm", price: "$2,900"},
      {size: "7cm x 7cm x 4cm", price: "$4,000"},
      {size: "10cm x 10cm x 4cm", price: "$5,000"},
      {size: "PERSONALIZADAS"},
      {size: "5cm x 5cm x 3cm", price: "$3,700"},
      {size: "7cm x 7cm x 4cm", price: "$4,800"},
      {size: "10cm x 10cm x 4cm", price: "$5,800"}
    ]
  },
  {
    id: 22,
    name: "Joyeros #3",
    description: "Disponible en cartón blanco, gris, rosa, vienen sin forrar, incluye nido en cartón. SE PUEDEN PERSONALIZAR CON LOGO",
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
      {size: "Color rosa o gris: 10cm x 10cm x 4cm", price: "$2,300"}
    ]
  },
  {
    id: 23,
    name: "Joyeros #4",
    description: "Completamente forrada en cualquier color, elegante, incluye nido en cartón",
    category: "joyeria",
    image: "img/estilo2.png",
    images: [
      "img/estilo2.png",
      "img/estilo21.png"
    ],
    variants: [
      {size: "SENCILLAS"},
      {size: "5cm x 5cm x 3cm", price: "$2,900"},
      {size: "7cm x 7cm x 4cm", price: "$4,000"},
      {size: "10cm x 10cm x 4cm", price: "$5,000"},
      {size: "PERSONALIZADAS"},
      {size: "5cm x 5cm x 3cm", price: "$3,700"},
      {size: "7cm x 7cm x 4cm", price: "$4,800"},
      {size: "10cm x 10cm x 4cm", price: "$5,800"}
    ]
  },
  {
    id: 24,
    name: "Joyeros #5",
    description: "Cartulina de 150gr, disponible en todos los colores, incluye nido en cartón",
    category: "joyeria",
    image: "img/estilo3.png",
    images: [
      "img/estilo3.png",
      "img/estilo31.png"
    ],
    variants: [
      {size: "SIN personalización"},
      {size: "6cm x 6cm x 4cm de alto", price: "$3,000"},
      {size: "10cm x 10m x 4cm de alto", price: "$4,000"},
      {size: "CON personalización"},
      {size: "6cm x 6cm x 4cm de alto", price: "$3,700"},
      {size: "10cm x 10m x 4cm de alto", price: "$4,800"}
    ]
  },
  {
    id: 25,
    name: "Joyeros #6",
    description: "Base y tapas forradas en múltiples colores, incluye nido en cartón",
    category: "joyeria",
    image: "img/joyasCuadradasLogo.png",
    images: [
      "img/joyasCuadradasLogo.png",
      "img/estilo4.png"
    ],
    variants: [
      {size: "SENCILLAS"},
      {size: "5cm x 5cm x 3cm", price: "$2,500"},
      {size: "7cm x 7cm x 4cm", price: "$3,500"},
      {size: "10cm x 10cm x 4cm", price: "$4,500"},
      {size: "PERSONALIZADAS"},
      {size: "5cm x 5cm x 3cm", price: "$3,200"},
      {size: "7cm x 7cm x 4cm", price: "$4,300"},
      {size: "10cm x 10cm x 4cm", price: "$5,200"}
    ]
  },
  {
    id: 26,
    name: "Joyas #7",
    description: "Color blanco, cartón de 300gr, no incluye nido",
    category: "joyeria",
    image: "img/joyasimple2.jpeg",
    images: [
      "img/joyasimple2.jpeg",
      "img/joyasimple.jpeg"
    ],
    variants: [
      {size: "5cm x 5cm x 3cm", price: "$1,500"},
      {size: "7cm x 7cm x 4cm", price: "$2,000"},
      {size: "10cm x 10cm x 4cm", price: "$2,500"},
      {size: "CON VENTANA"},
      {size: "5cm x 5cm x 3cm", price: "$1,900"},
      {size: "7cm x 7cm x 4cm", price: "$2,500"},
      {size: "10cm x 10cm x 4cm", price: "$2,900"}
    ]
  },
  {
    id: 27,
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
      {size: "13cm x 18cm x 9cm", price: "$7,500"}
    ]
  },
  {
    id: 28,
    name: "Ancheta",
    description: "Base en cartón rígido, variedad de colores",
    category: "hombres",
    image: "img/acheta1.png",
    images: [
      "img/acheta1.png",
      "img/acheta2.png"
    ],
    variants: [
      {size: "13cm x 13cm x 10cm", price: "$4,500"}
    ]
  },
  {
    id: 29,
    name: "Ancheta Esmoquin",
    description: "Base en cartón rígido, sin forrar con decoración",
    category: "hombres",
    image: "img/anchetahombre1.png",
    images: [
      "img/anchetahombre1.png",
      "img/anchetahombre2.png"
    ],
    variants: [
      {size: "13cm x 13cm x 10cm", price: "$4,000"}
    ]
  },
  {
    id: 30,
    name: "Cilindro Esmoquin",
    description: "Base en cartón rígido, forrados en variedad de colores",
    category: "hombres",
    image: "img/cilindroesmoquin.jpg",
    images: [
      "img/cilindroesmoquin.jpg",
      "img/cilindroesmoquin2.jpg"
    ],
    variants: [
      {size: "17cm de diámetro x 13 cm de alto", price: "$7,000"}
    ]
  },
  {
    id: 31,
    name: "Ancheta Amor",
    description: "Base en cartón rígido, forrados en variedad de colores",
    category: "amoryamistad",
    image: "img/anchetaamor1.png",
    images: [
      "img/anchetaamor1.png",
      "img/anchetaamor2.png"
    ],
    variants: [
      {size: "13cm x 15cm x 10cm de alto", price: "$5,500"}
    ]
  }
];
// Variables globales
let currentProductIndex = 0;
let currentSlideIndex = 0;
let currentCategory = 'all';

// Elementos del DOM
const homeScreen = document.getElementById('homeScreen');
const catalogScreen = document.getElementById('catalogScreen');
const backButton = document.getElementById('backButton');
const catalogGrid = document.getElementById('catalogGrid');
const categoryTitle = document.getElementById('categoryTitle');
const categorySubtitle = document.getElementById('categorySubtitle');
const modalOverlay = document.getElementById('modalOverlay');
const closeModal = document.getElementById('closeModal');
const carouselSlide = document.getElementById('carouselSlide');
const carouselIndicators = document.getElementById('carouselIndicators');
const prevArrow = document.getElementById('prevArrow');
const nextArrow = document.getElementById('nextArrow');
const productTitle = document.getElementById('productTitle');
const productDescription = document.getElementById('productDescription');
const variantsContainer = document.getElementById('variantsContainer');

// Nombres de las categorías para mostrar
const categoryNames = {
  'joyeria': 'Joyas & Accesorios',
  'hombres': 'Para Hombres',
  'amoryamistad': 'Amor & Amistad',
  'detalles': 'Detalles-Arreglos',
  'all': 'Todos los Productos'
};

// Descripciones de las categorías
const categoryDescriptions = {
  'joyeria': 'Cajas especiales para joyería, relojes y accesorios',
  'popular': 'Nuestros empaques más vendidos y solicitados',
  'hombres': 'Diseños masculinos y elegantes',
  'amoryamistad': 'Para regalos especiales y ocasiones',
  'losmasllevados': 'Los favoritos de nuestros clientes',
  'all': 'Explora todos nuestros empaques'
};

// Verificar si hay categoría en la URL
function checkURLForCategory() {
  const urlParams = new URLSearchParams(window.location.search);
  const categoryFromURL = urlParams.get('categoria');

  if (categoryFromURL && categoryNames[categoryFromURL]) {
    // Si hay categoría en la URL, navegar directamente
    setTimeout(() => navigateToCategory(categoryFromURL), 100);
  }
}

function countProductsByCategory() {
  const counts = {
    'joyeria': 0,
    'popular': 0,
    'hombres': 0,
    'amoryamistad': 0,
    'losmasllevados': 0,
    'all': productos.length
  };

  productos.forEach(product => {
    if (product.categories) {
      // Si es array de categorías
      product.categories.forEach(category => {
        if (counts.hasOwnProperty(category)) {
          counts[category]++;
        }
      });
    } else if (product.category && counts.hasOwnProperty(product.category)) {
      // Si es categoría simple (para compatibilidad)
      counts[product.category]++;
    }
  });

  // Actualizar contadores
  document.querySelectorAll('.category-count').forEach(element => {
    const category = element.closest('.category-card').dataset.category;
    if (counts[category] !== undefined) {
      element.textContent = `${counts[category]} productos`;
    }
  });
}

// Navegar a una categoría - ÚNICA VERSIÓN
function navigateToCategory(category) {
  console.log('Navegando a categoría:', category);

  if (!categoryNames[category]) {
    console.error('Categoría no válida:', category);
    return;
  }

  currentCategory = category;

  // Actualizar título y subtítulo
  categoryTitle.innerHTML = `<i class="fas fa-gift"></i> ${categoryNames[category]}`;
  categorySubtitle.textContent = categoryDescriptions[category];

  // Cambiar de pantalla
  homeScreen.classList.remove('active');
  catalogScreen.classList.add('active');

  // Actualizar URL (si usas enlaces directos)
  if (typeof window.history !== 'undefined') {
    const newURL = window.location.origin + window.location.pathname + `?categoria=${category}`;
    window.history.pushState({ category }, '', newURL);
  }

  // Mostrar productos de la categoría
  showCategoryProducts(category);

  // Desplazarse al inicio
  window.scrollTo(0, 0);
}

// Mostrar productos por categoría
function showCategoryProducts(category) {
  console.log('Mostrando productos para:', category);

  catalogGrid.innerHTML = '';

  let filteredProducts = productos;

  if (category !== 'all') {
    filteredProducts = productos.filter(product => {
      // Si tiene array de categorías (soporte múltiple)
      if (Array.isArray(product.categories)) {
        return product.categories.includes(category);
      }
      // Si tiene categoría simple (para compatibilidad)
      return product.category === category;
    });
  }

  console.log('Productos encontrados:', filteredProducts.length);

  // Si no hay productos en la categoría
  if (filteredProducts.length === 0) {
    const emptyMessage = document.createElement('div');
    emptyMessage.className = 'empty-category-message';
    emptyMessage.innerHTML = `
            <div class="empty-icon">📦</div>
            <h3>¡Próximamente!</h3>
            <p>Estamos preparando productos especiales para esta categoría.</p>
            <button class="back-to-all-btn" id="backToAllBtn">
                <i class="fas fa-arrow-left"></i> Ver todos los productos
            </button>
        `;
    catalogGrid.appendChild(emptyMessage);

    document.getElementById('backToAllBtn').addEventListener('click', () => {
      navigateToCategory('all');
    });

    return;
  }

  // Mostrar productos
  filteredProducts.forEach((product, index) => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.dataset.index = index;

    // Determinar ícono según categorías

    // Determinar clase según categorías (sin emojis)
    let badgeClass = '';

// Verificar si es de múltiples categorías
    const categories = Array.isArray(product.categories) ? product.categories : [product.category];

    if (categories.includes('joyeria')) {
      badgeClass = 'badge-joyeria';
    } else if (categories.includes('amoryamistad')) {
      badgeClass = 'badge-amor';
    } else if (categories.includes('hombres')) {
      badgeClass = 'badge-hombres';
    } else if (categories.includes('popular')) {
      badgeClass = 'badge-popular';
    } else if (categories.includes('losmasllevados')) {
      badgeClass = 'badge-llevados';
    }

    // Verificar si tiene múltiples categorías
    const isMultiCategory = Array.isArray(product.categories) && product.categories.length > 1;
    // En showCategoryProducts, actualiza el HTML de cada producto:
    productCard.innerHTML = `
    <img src="${product.image}" alt="${product.name}" class="product-image"
         onerror="this.src='https://via.placeholder.com/400x300/F5F5F0/000000?text=${encodeURIComponent(product.name.substring(0, 15))}'">
    <div class="product-info">
        <h3 class="product-name">${product.name.toUpperCase()}</h3>
        <div class="product-category">${getCategoryDisplay(product)}</div>
        <div class="product-price">
            <span class="price-label">DESDE</span>
            <span class="price-value">${getMinPriceDisplay(product)}</span>
        </div>
    </div>
`;

    productCard.addEventListener('click', () => openModal(index, filteredProducts));
    catalogGrid.appendChild(productCard);
  });

  // Mostrar contador de productos
  updateProductCounter(filteredProducts.length, category);
}

// Actualizar contador de productos
function updateProductCounter(count, category) {
  const counterElement = document.getElementById('productCount');
  if (counterElement) {
    counterElement.textContent = `${count} productos`;
  }
}
function getCategoryName(product) {
  if (Array.isArray(product.categories)) {
    return product.categories[0];
  }
  return product.category || 'Destacado';
}

function getMinPrice(product) {
  if (!product.variants || product.variants.length === 0) {
    return 'Consultar';
  }

  const prices = product.variants
    .filter(v => v.price)
    .map(v => parseFloat(v.price.replace(/[^0-9.]/g, '')));

  if (prices.length === 0) return 'Consultar';

  const minPrice = Math.min(...prices);
  return `$${minPrice.toLocaleString()}`;
}

// Abrir modal con el producto seleccionado
function openModal(productIndex, productList = productos) {
  currentProductIndex = productIndex;
  currentSlideIndex = 0;

  const product = productList[productIndex];

  // Actualizar información del producto
  productTitle.textContent = product.name;
  productDescription.textContent = product.description;

  // Generar imágenes del carrusel
  carouselSlide.innerHTML = '';
  carouselIndicators.innerHTML = '';

  // Si no hay imágenes, usar una por defecto
  const images = product.images && product.images.length > 0 ? product.images : [product.image];

  images.forEach((image, index) => {
    const imgElement = document.createElement('img');
    imgElement.src = image;
    imgElement.alt = `${product.name} - Foto ${index + 1}`;
    imgElement.className = 'carousel-image';
    imgElement.onerror = function() {
      this.src = 'https://via.placeholder.com/500x500/FFE5EC/FF8FAB?text=Imagen+no+disponible';
    };
    carouselSlide.appendChild(imgElement);

    const indicator = document.createElement('div');
    indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
    indicator.dataset.index = index;
    indicator.addEventListener('click', () => goToSlide(index));
    carouselIndicators.appendChild(indicator);
  });

  // Generar variantes
  variantsContainer.innerHTML = '';
  if (product.variants && product.variants.length > 0) {
    const variantsTitle = document.createElement('div');
    variantsTitle.className = 'variant-title';
    variantsTitle.innerHTML = '<i class="fas fa-ruler-combined"></i> Medidas y Precios';
    variantsContainer.appendChild(variantsTitle);

    const variantsList = document.createElement('div');
    variantsList.className = 'variants-list';

    product.variants.forEach(variant => {
      const variantItem = document.createElement('div');
      variantItem.className = variant.price ? 'variant-item' : 'variant-item size-header';

      if (variant.price) {
        variantItem.innerHTML = `
                    <div class="variant-size">${variant.size}</div>
                    <div class="variant-price">${variant.price}</div>
                `;
      } else {
        variantItem.textContent = variant.size;
      }

      variantsList.appendChild(variantItem);
    });

    variantsContainer.appendChild(variantsList);
  } else {
    const noVariants = document.createElement('p');
    noVariants.textContent = 'Consulte por disponibilidad y precios';
    noVariants.style.color = '#6D6875';
    noVariants.style.fontStyle = 'italic';
    variantsContainer.appendChild(noVariants);
  }

  // Actualizar posición del carrusel
  updateCarouselPosition();

  // Mostrar u ocultar flechas según cantidad de imágenes
  if (images.length <= 1) {
    prevArrow.style.display = 'none';
    nextArrow.style.display = 'none';
  } else {
    prevArrow.style.display = 'flex';
    nextArrow.style.display = 'flex';
  }

  // Mostrar modal
  modalOverlay.classList.add('show-modal');
  document.body.style.overflow = 'hidden';
}

// Cerrar modal
function closeModalHandler() {
  modalOverlay.classList.remove('show-modal');
  document.body.style.overflow = 'auto';
}

// Actualizar posición del carrusel
function updateCarouselPosition() {
  const slideWidth = 100;
  carouselSlide.style.transform = `translateX(-${currentSlideIndex * slideWidth}%)`;

  const indicators = document.querySelectorAll('.indicator');
  indicators.forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentSlideIndex);
  });
}

// Ir a una slide específica
function goToSlide(index) {
  const product = productos[currentProductIndex];
  const images = product.images && product.images.length > 0 ? product.images : [product.image];

  if (index >= 0 && index < images.length) {
    currentSlideIndex = index;
    updateCarouselPosition();
  }
}

// Slide anterior
function prevSlide() {
  const product = productos[currentProductIndex];
  const images = product.images && product.images.length > 0 ? product.images : [product.image];

  currentSlideIndex = (currentSlideIndex - 1 + images.length) % images.length;
  updateCarouselPosition();
}

// Slide siguiente
function nextSlide() {
  const product = productos[currentProductIndex];
  const images = product.images && product.images.length > 0 ? product.images : [product.image];

  currentSlideIndex = (currentSlideIndex + 1) % images.length;
  updateCarouselPosition();
}

// Volver a la pantalla de inicio
function goBackHome() {
  catalogScreen.classList.remove('active');
  homeScreen.classList.add('active');
}

// Inicializar favoritos
function setupFavoriteButtons() {
  const favoriteBtn = document.querySelector('.favorite-btn');
  if (favoriteBtn) {
    const favoriteIcon = favoriteBtn.querySelector('i');
    favoriteBtn.addEventListener('click', function() {
      if (favoriteIcon.classList.contains('far')) {
        favoriteIcon.classList.remove('far');
        favoriteIcon.classList.add('fas');
        this.innerHTML = '<i class="fas fa-heart"></i> En Favoritos';

        // Efecto visual
        this.style.background = 'linear-gradient(135deg, #FF577F 0%, #FF8FAB 100%)';
        this.style.color = 'white';

        // Mensaje de confirmación
        showNotification('¡Producto agregado a favoritos! 💖');
      } else {
        favoriteIcon.classList.remove('fas');
        favoriteIcon.classList.add('far');
        this.innerHTML = '<i class="far fa-heart"></i> Favorito';
        this.style.background = 'linear-gradient(135deg, #FFCCD5 0%, #FFB3C6 100%)';
        this.style.color = '#FF577F';
      }
    });
  }
}

// Configurar botón de WhatsApp
function setupWhatsAppButton() {
  const contactBtn = document.querySelector('.contact-btn');
  if (contactBtn) {
    contactBtn.addEventListener('click', function() {
      const product = productos[currentProductIndex];
      const message = `Hola! Estoy interesado en el producto: ${product.name}.\n\nDescripción: ${product.description}\n\n¿Podrías darme más información?`;
      const whatsappURL = `https://wa.me/?text=${encodeURIComponent(message)}`;

      // Abrir WhatsApp
      window.open(whatsappURL, '_blank');

      // Efecto visual
      this.innerHTML = '<i class="fab fa-whatsapp"></i> Abriendo WhatsApp...';
      this.style.background = 'linear-gradient(135deg, #2D936C 0%, #25D366 100%)';
      this.style.color = 'white';

      setTimeout(() => {
        this.innerHTML = '<i class="fas fa-whatsapp"></i> Consultar';
        this.style.background = 'linear-gradient(135deg, #B5EAD7 0%, #95D9C3 100%)';
        this.style.color = '#2D936C';
      }, 2000);
    });
  }
}

// Mostrar notificación
function showNotification(message) {
  const notification = document.createElement('div');
  notification.style.position = 'fixed';
  notification.style.top = '20px';
  notification.style.right = '20px';
  notification.style.background = 'linear-gradient(135deg, #FFB3C6 0%, #FF8FAB 100%)';
  notification.style.color = 'white';
  notification.style.padding = '15px 20px';
  notification.style.borderRadius = '15px';
  notification.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
  notification.style.zIndex = '2000';
  notification.style.fontWeight = '600';
  notification.textContent = message;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transform = 'translateY(-20px)';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM cargado, productos disponibles:', productos.length);

  // Contar productos por categoría
  countProductsByCategory();

  // Navegación por categorías
  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', function(event) {
      event.preventDefault();
      const category = this.dataset.category;
      console.log('Categoría seleccionada:', category);
      if (category) {
        navigateToCategory(category);
      }
    });
  });

  // Botón de regreso
  backButton.addEventListener('click', goBackHome);

  // Modal
  closeModal.addEventListener('click', closeModalHandler);
  modalOverlay.addEventListener('click', function(e) {
    if (e.target === modalOverlay) {
      closeModalHandler();
    }
  });

  // Carrusel
  prevArrow.addEventListener('click', prevSlide);
  nextArrow.addEventListener('click', nextSlide);

  // Cerrar modal con tecla ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modalOverlay.classList.contains('show-modal')) {
      closeModalHandler();
    }
  });

  // Inicializar botones
  setupFavoriteButtons();
  setupWhatsAppButton();

  // Verificar si hay categoría en la URL
  checkURLForCategory();

  // Manejar el botón de retroceso del navegador
  window.addEventListener('popstate', function(event) {
    if (event.state && event.state.category) {
      navigateToCategory(event.state.category);
    } else {
      goBackHome();
    }
  });

  // Para debug
  console.log('Total de productos:', productos.length);
  console.log('Categorías disponibles:', Object.keys(categoryNames));
});
