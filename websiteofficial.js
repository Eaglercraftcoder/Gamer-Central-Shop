<script>
    // ALL PRODUCTS
    const products = [{
        name: "Minecraft Creeper",
        price: 15.99,
        image: "https://sp.yimg.com/ib/th?id=OPHS.1hCR3t2YMg%2fR5w474C474&o=5&pid=21.1&w=160&h=105"
      },
      {
        name: "Roblox",
        price: 12.99,
        image: "https://tse4.mm.bing.net/th/id/OIP.oIXWaYcp1pV3cCDD1gR9OQHaHa?r=0&pid=Api&h=220&P=0"
      },
      {
        name: "Roblox Old",
        price: 18.50,
        image: "https://tse2.mm.bing.net/th/id/OIP.XJ3lfIysScb9WQcP5K4VngHaHa?r=0&pid=Api&h=220&P=0"
      },
      {
        name: "Pro Gamer",
        price: 9.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsYljtixFsLjqOw6hC7gkWLfX8TS0Y5ftW50gUXnS95w&s=10"
      },
      {
        name: "Anatomy Of a Gamer",
        price: 11.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjORb31eau1IOhOttp8gVpobpqPIvPuEbHiOyH324-vA&s=10"
      },
      {
        name: "Gaming Makes Me Happy",
        price: 19.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmLWJsk2jDFb3HmIXdm0XAb7SnWPgzcrXn_txCuBE1ug&s"
      },
      {
        name: "A Day Without Video Games Is Like...",
        price: 24.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcWZR5oBIR5RB0uNCqkVXV4iMT7H4cnnzTqSaYPGnc-w&s=10"
      },
      {
        name: "Shhh, Im Gaming",
        price: 7.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS60m0CpaCM9ZHft-yF1AQ3vEvz6ytKIpkuzYVkLnyKZQ&s=10"
      },
      {
        name: "This Boy Loves Gaming",
        price: 21.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKpqNTX_hDnmePXoMSdgte3BaJkeNDc0YglftBK-AxBA&s=10"
      },
      {
        name: "Gaming Is Not a Matter of Life and Death T-Shirt",
        price: 9.99,
        image: "https://i5.walmartimages.com/seo/Gaming-Gifts-For-Teenage-Boys-8-16-Year-Old-Gamer-T-Shirt_86a2fd62-3fde-4fcf-bf39-ab25ddd7ed94.4409ad864998c4841041914b99d26295.jpeg"
      },
      {
        name: "I Wasn't Listening, I Was Gaming T-Shirt",
        price: 19.99,
        image: "https://tse1.mm.bing.net/th/id/OIP.hPQqkQSEti96C6wBLvWRtgHaHa?r=0&pid=Api&h=220&P=0"
      },
      {
        name: "I'm Lagging T-Shirt",
        price: 24.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWwMjhJpVnXbLFWQHldrmoICHQCSavf3DZBAk0fQruhg&s=10"
      },
      {
        name: "Gamer Definition T-Shirt",
        price: 7.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcB5ctxKkqpo0XALfbA92D8WdobZRW2iwdlpNqOGVNzw&s=10"
      },
      {
        name: "Eat Sleep Mine Repeat T-Shirt",
        price: 21.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7yNBTgUZbm79hR9Z2zphfsIYzXeTqwTaFvp0yF8NfWA&s=10"
      }
    ];

    // FIVE RECOMMENDED PRODUCTS
    const recommendedNames = [
      "Minecraft Creeper",
      "Roblox",
      "Pro Gamer",
      "Gaming Makes Me Happy",
      "Eat Sleep Mine Repeat T-Shirt"
    ];

    const recommendedProducts = products.filter(product =>
      recommendedNames.includes(product.name)
    );

    const cart = [];

    // DISPLAYS PRODUCTS
    function renderProducts(productList, containerId) {
      const container = document.getElementById(containerId);

      container.innerHTML = productList.map(product => `
        <div class="card">
          <img
            src="${product.image}"
            alt="${product.name}"
            onerror="this.onerror=null;this.src='https://placehold.co/300x200/333333/ffffff?text=Gaming+Merch';"
          >
          <p>
            <strong>${product.name}</strong><br>
            <span class="price">$${product.price.toFixed(2)}</span>
          </p>
          <button onclick="addToCart(${products.indexOf(product)})">
            Add to Cart
          </button>
        </div>
      `).join("");
    }

    // ADDS TO CART
    function addToCart(productIndex) {
      const product = products[productIndex];
      const existingItem = cart.find(item => item.name === product.name);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        cart.push({
          name: product.name,
          price: product.price,
          quantity: 1
        });
      }

      renderCart();
      alert("This item has been added to your cart!");
    }

    // REMOVE ONE ITEM FROM CART
    function removeItem(index) {
      const item = cart[index];
      if (!item) return;

      // Remove just one copy when there are duplicates.
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        cart.splice(index, 1);
      }

      renderCart();

      // Update checkout summary if checkout is open.
      if (!document.getElementById("checkout-page").classList.contains("hidden")) {
        updateCheckout();
      }
    }

    // CLEAR THE ENTIRE CART
    function clearCart() {
      if (cart.length === 0) {
        alert("Your cart is already empty!");
        return;
      }

      const confirmClear = confirm("Are you sure you want to clear your entire cart?");

      if (confirmClear) {
        cart.length = 0;
        renderCart();
        document.getElementById("checkout-page").classList.add("hidden");
        alert("Your cart has been cleared!");
      }
    }

    // UPDATE CART
    function renderCart() {
      const tbody = document.getElementById("cart-rows");

      if (cart.length === 0) {
        tbody.innerHTML = `
          <tr>
            <td colspan="5" style="text-align:center;padding:30px;color:#999">
              Your cart is currently empty.
            </td>
          </tr>`;

        document.getElementById("cart-grand-total").textContent = "$0.00";
        return;
      }

      let grandTotal = 0;

      tbody.innerHTML = cart.map((item, index) => {
        const itemTotal = item.price * item.quantity;
        grandTotal += itemTotal;

        return `
          <tr>
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td>$${itemTotal.toFixed(2)}</td>
            <td>
              <button onclick="removeItem(${index})"
                style="background:#ea2027;color:white;border:none;padding:6px 10px;border-radius:4px">
                Remove
              </button>
            </td>
          </tr>`;
      }).join("") + `
        <tr>
          <td colspan="3" style="text-align:right"><strong>Grand Total:</strong></td>
          <td colspan="2" style="color:#ee5a24">
            <strong>$${grandTotal.toFixed(2)}</strong>
          </td>
        </tr>`;

      document.getElementById("cart-grand-total").textContent =
        "$" + grandTotal.toFixed(2);
    }

    // SWITCH PAGES
    function showPage(pageId) {
      const pages = document.querySelectorAll(".page");
      pages.forEach(page => page.classList.add("hidden"));

      const targetPage = document.getElementById(pageId);

      if (!targetPage) {
        console.error("Page not found:", pageId);
        return;
      }

      targetPage.classList.remove("hidden");
      document.getElementById("checkout-page").classList.add("hidden");
      document.getElementById("order-confirmation").classList.add("hidden");

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }

    // OPEN CHECKOUT
    function openCheckout() {
      if (cart.length === 0) {
        alert("Your shopping cart is empty! Add a product first.");
        return;
      }

      document.getElementById("checkout-page").classList.remove("hidden");
      document.getElementById("order-confirmation").classList.add("hidden");
      updateCheckout();

      document.getElementById("checkout-page").scrollIntoView({
        behavior: "smooth"
      });
    }

    // CLOSE CHECKOUT
    function closeCheckout() {
      document.getElementById("checkout-page").classList.add("hidden");

      document.getElementById("cart-section").scrollIntoView({
        behavior: "smooth"
      });
    }

    // UPDATE CHECKOUT SUMMARY
    function updateCheckout() {
      const itemsContainer = document.getElementById("checkout-items");
      let total = 0;

      itemsContainer.innerHTML = "";

      cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;

        const row = document.createElement("p");
        row.textContent =
          `${item.name} × ${item.quantity} — $${itemTotal.toFixed(2)}`;

        itemsContainer.appendChild(row);
      });

      document.getElementById("checkout-total").textContent =
        "$" + total.toFixed(2);
    }

    // PLACE DEMO ORDER
    document.getElementById("checkout-form").addEventListener(
      "submit",
      function(event) {
        event.preventDefault();

        if (cart.length === 0) {
          alert("Your cart is empty!");
          return;
        }

        if (!this.reportValidity()) return;

        const name = document.getElementById("customer-name").value.trim();
        const payment = this.querySelector('input[name="payment"]:checked');

        if (!name || !payment) {
          alert("Please complete the required fields.");
          return;
        }

        const total = cart.reduce(
          (sum, item) => sum + item.price * item.quantity, 0
        );

        document.getElementById("confirmation-message").textContent =
          `Demo order placed for ${name}. ` +
          `Your order total is $${total.toFixed(2)}. ` +
          `Selected option: ${payment.value}. ` +
          `No real payment was processed.`;

        document.getElementById("order-confirmation").classList.remove("hidden");

        cart.length = 0;
        renderCart();

        document.getElementById("checkout-items").textContent =
          "Order submitted successfully.";
        document.getElementById("checkout-total").textContent = "$0.00";

        this.reset();

        document.getElementById("order-confirmation").scrollIntoView({
          behavior: "smooth"
        });
      }
    );

    // RETURN TO STORE
    function continueShopping() {
      document.getElementById("checkout-page").classList.add("hidden");
      document.getElementById("order-confirmation").classList.add("hidden");
      document.getElementById("checkout-form").reset();
      showPage("home-page");
    }

    // INITIALIZE WEBSITE
    renderProducts(products, "merch-grid");
    renderProducts(recommendedProducts, "recommended-grid");
    renderCart();
  </script>