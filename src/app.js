let main = document.getElementById('main');

// store data selected
let storage = JSON.parse(localStorage.getItem('data')) || [];

// generate template
let generateMain = () => {
  return (main.innerHTML = itemList
    .map((item) => {
      const { id, name, price, img } = item;

      // const search = storage.find((x) => x.id === id) || [];
      // search.item === undefined ? 0 : search.item;

      const html = String.raw;

      return html`
        <div id=${id} class="item">
          <figure>
            <img src=${img} alt="Icon" width="100" height="100" />
            <figcaption>
              <h2>${name}</h2>
              <p>$${price.toFixed(2)}</p>
            </figcaption>
          </figure>
          <button onclick="increment(${id})">Add To Cart</button>
        </div>
      `;
    })
    .join(''));
};

generateMain();

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

// updates on console
let update = (id) => {
  storage.find((x) => x.id === id);
  updateCal();
};

// calculate and show on cart
let updateCal = () => {
  const showCart = document.getElementById('cartAmount');
  showCart.innerHTML = storage
    .map((x) => x.item)
    .reduce((acc, next) => acc + next, 0);
  // console.log(storage.map((check) => check.item).reduce((acc, next) => acc + next, 0));
};

// still show amount on cart icon when page updated
updateCal();
