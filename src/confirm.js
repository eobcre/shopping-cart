const shopping_bag = document.getElementById('shopping-bag');
const price = document.getElementById('price');

// Store data selected
const storage = JSON.parse(localStorage.getItem('data')) || [];

// Calculate and update on cart
const updateCal = () => {
  const showCart = document.getElementById('cartAmount');
  showCart.innerHTML = storage
    .map((check) => check.item)
    .reduce((acc, next) => acc + next, 0);
  // console.log(storage.map((check) => check.item).reduce((acc, next) => acc + next, 0));
};

// Still display amount on cart icon when page updated
updateCal();

const generateCartItems = () => {
  if (storage.length !== 0) {
  } else {
    const html = String.raw;
    shopping_bag.innerHTML = ``;
    price.innerHTML = html`
      <div class="template-inner">
        <h3>Your cart is empty</h3>
        <p>You have no items in your cart at the moment.</p>
        <a href="./">
          <button class="home-btn">Start Shopping</button>
        </a>
      </div>
    `;
  }
};

generateCartItems();
