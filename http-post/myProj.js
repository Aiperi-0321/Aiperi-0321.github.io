document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");
  const addProductBtn = document.getElementById("add-product-btn");
  const cartBtn = document.getElementById("toggle-cart-btn");
  const cartProd = document.getElementById("cart-dropdown");
  const cartItemsContainer = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");

  let products = [
    {
      name: "Cuticle cutter",
      price: 16,
      description: "For cuticle remove",
      image: "images/cutter.webp",
    },
    {
      name: "Base gel",
      price: 25,
      description: "Elastic base for nails",
      image: "images/base.webp",
    },
    {
      name: "Cuticle oil",
      price: 10,
      description: "Moisturizing oil for your cuticles",
      image: "images/download.jpeg",
    },
    {
      name: "Gel polish",
      price: 15,
      description: "Gel polish",
      image: "images/fun-lacquer-playful-gel-1_800x.webp",
    },
    {
      name: "Glitter",
      price: 15,
      description: "For nail design",
      image: "images/glitter.webp",
    },
    {
      name: "Nail drell",
      price: 75,
      description: "Nail drell",
      image: "images/nail drell.webp",
    },
    {
      name: "Cuticle oil",
      price: 5,
      description: "Cuticle oil",
      image: "images/oil.webp",
    },
    {
      name: "Gel polish/White color",
      price: 80,
      description: "White color",
      image: "images/white gel.webp",
    },
    {
      name: "UV-lamp",
      price: 50,
      description: "Powerful UV-Lamp",
      image: "images/lamp",
    },
    {
      name: "Nail brushes",
      price: 10,
      description: "Nail brushes",
      image: "images/disign.webp",
    },
  ];
  let cart = [];

  function renderProductList() {
    productList.innerHTML = "";
    products.forEach((product, index) => {
      const productItem = document.createElement("div");
      productItem.className = "product-item";
      productItem.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div>
                    <h3>${product.name}</h3>
                    <p>Price: $${product.price}</p>
                    <p>${product.description}</p>
                    <button onclick="addToCart(${index})">Add to Cart</button>
                </div>
            `;
      productList.appendChild(productItem);
    });
  }

  window.addToCart = function (index) {
    const product = products[index];
    cart.push(product);
    cartCount.textContent = cart.length;
    renderCart();
  };

  function renderCart() {
    cartItemsContainer.innerHTML = "";
    cart.forEach((item, index) => {
      const cartItem = document.createElement("div");
      cartItem.className = "cart-item";
      cartItem.innerHTML = `
                <p>${item.name} - $${item.price}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            `;
      cartItemsContainer.appendChild(cartItem);
    });
  }

  window.removeFromCart = function (index) {
    cart.splice(index, 1);
    cartCount.textContent = cart.length;
    renderCart();
  };

  addProductBtn.addEventListener("click", () => {
    const name = prompt("Enter product name:");
    const price = prompt("Enter product price:");
    const description = prompt("Enter product description:");
    const image = prompt("Enter product image URL:");

    if (name && price && description && image) {
      products.push({ name, price: Number(price), description, image });
      renderProductList();
    }
  });

  cartBtn.addEventListener("click", () => {
    cartProd.classList.toggle("hidden");
  });

  renderProductList();
});
