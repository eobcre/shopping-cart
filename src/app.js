const main = document.getElementById('main');

// Item list
const itemList = [
  {
    id: 0,
    name: 'Apple',
    price: 3.0,
    img: './img/apple.svg',
  },
  {
    id: 1,
    name: 'Banana',
    price: 3.0,
    img: './img/banana.svg',
  },
  {
    id: 2,
    name: 'Brocolli',
    price: 4.0,
    img: './img/brocolli.svg',
  },
  {
    id: 3,
    name: 'Carrot',
    price: 3.0,
    img: './img/carrot.svg',
  },
  {
    id: 4,
    name: 'Corn',
    price: 3.0,
    img: './img/corn.svg',
  },
  {
    id: 5,
    name: 'Green Onion',
    price: 2.0,
    img: './img/green-onion.svg',
  },
  {
    id: 6,
    name: 'Lemon',
    price: 2.0,
    img: './img/lemon.svg',
  },
  {
    id: 7,
    name: 'Lettuce',
    price: 4.0,
    img: './img/lettuce.svg',
  },
  {
    id: 8,
    name: 'Onion',
    price: 3.0,
    img: './img/onion.svg',
  },
  {
    id: 9,
    name: 'Potato',
    price: 3.0,
    img: './img/potato.svg',
  },
  {
    id: 10,
    name: 'Radish',
    price: 4.0,
    img: './img/radish.svg',
  },
];

// Store data selected
const storage = [];

const generateMain = () => {
  return (main.innerHTML = itemList
    .map((item) => {
      const { id, name, price, img } = item;
      return `
    <div id=${id} class="item">
        <figure>
            <img src=${img} alt="Icon" width="100" height="100" />
        <figcaption>
            <h2>${name}</h2>
            <p>$${price.toFixed(2)}</p>
        </figcaption>
        </figure>
        <button onclick='clickIncrement(${id})' class="cart-btn">Add To Cart</button>
        <button onclick='clickDecrement(${id})'>Remove</button>
    </div>
    `;
    })
    .join(''));
};

generateMain();

// Increment
const clickIncrement = (id) => {
  // check id exist or not === id selected
  const search = storage.find((check) => check.id === id);
  // if the item does not exist then push
  if (search === undefined) {
    storage.push({
      id: id,
      item: 1,
    });
  } else {
    search.item += 1;
  }
  // console.log(storage);
  update(id);
};

// Decrement
const clickDecrement = (id) => {
  // check id exist or not === id selected
  const search = storage.find((check) => check.id === id);
  // if search is undefined do nothing
  if (search === undefined) return;
  // Stop going under 1
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  // console.log(storage);
  update(id);
};

// Updates on console
const update = (id) => {
  const search = storage.find((check) => check.id === id);
  // console.log(search.item);
  updateCart();
};

// Update on cart
const updateCart = () => {
  const showCart = document.getElementById('cartAmount');
  showCart.innerHTML = storage
    .map((check) => check.item)
    .reduce((acc, next) => acc + next, 0);
  // console.log(storage.map((check) => check.item).reduce((acc, next) => acc + next, 0));
};
