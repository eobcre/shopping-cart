let shopping_bag = document.getElementById('shopping-bag');
let price = document.getElementById('price');

// Store data selected
let storage = JSON.parse(localStorage.getItem('data')) || [];

// Calculate and update on cart
let updateCal = () => {
  let showCart = document.getElementById('cartAmount');
  showCart.innerHTML = storage
    .map((check) => check.item)
    .reduce((acc, next) => acc + next, 0);
  // console.log(storage.map((check) => check.item).reduce((acc, next) => acc + next, 0));
};

// still show amount on cart icon when page updated
updateCal();

let generateCartItems = () => {
  if (storage.length !== 0) {
    return (shopping_bag.innerHTML = storage
      .map((x) => {
        let { id, item } = x;
        let search = itemList.find((y) => y.id === id) || [];
        let html = String.raw;
        shopping_bag.innerHTML = ``;
        return html`
          <div class="cart-item">
            <img src=${search.img} alt="Image" width="100" />
            <div class="item-decription">
              <h2>${search.name}</h2>
              <p class="item-price">$${search.price.toFixed(2)}</p>
              <div class="buttons">
                <i onclick="increment(${id})" class="bi bi-plus-circle"></i>
                <div id=${id} class="count">${item}</div>
                <i onclick="decrement(${id})" class="bi bi-dash-circle"></i>
              </div>
            </div>
          </div>
        `;
      })
      .join(''));
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

// increment
let increment = (id) => {
  // check id exist or not === id selected
  let search = storage.find((x) => x.id === id);
  // if the item does not exist then push
  if (search === undefined) {
    storage.push({
      id: id,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  update(id);

  // Local storage settings
  localStorage.setItem('data', JSON.stringify(storage));
};

// decrement
let decrement = (id) => {
  // check id exist or not === id selected
  let search = storage.find((x) => x.id === id);
  // if search is undefined do nothing
  if (search === undefined) return;
  // stop going under 1
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }

  update(id);

  // filter the ones that are item: number but not 0
  storage = storage.filter((x) => x.item !== 0);

  generateCartItems();

  // local storage settings
  // save the data in local storage
  localStorage.setItem('data', JSON.stringify(storage));
};

// updates on console and show
let update = (id) => {
  let search = storage.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  updateCal();
};

let totalAmount = () => {
  if (storage.length !== 0) {
    let amount = storage
      .map((x) => {
        let { item, id } = x;
        // retrieve the first match
        let search = itemList.find((y) => y.id === id) || [];
        // $3.00 * 4 items
        return item * search.price;
      })
      // items + $3.00 * 4 items
      .reduce((x, y) => x + y, 0);
    // console.log(amount);
    price.innerHTML = `
    <h2>Total : $ ${amount.toFixed(2)}</h2>
    <button class="checkout">Checkout</button>
    `;
  } else return;
};

totalAmount();
