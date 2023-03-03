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
            <p>$ ${price}</p>
        </figcaption>
        </figure>
        <button class="cart-btn">Add To Cart</button>
        <a href="confirm.html"><button>Remove</button></a>
    </div>
    `;
    })
    .join(''));
};

generateMain();
