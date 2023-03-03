let main = document.getElementById('main');

let generateMain = () => {
  return (main.innerHTML = `
  <div class="item">
        <figure>
          <img src="./img/apple.svg" alt="Icon" width="100" height="100" />
          <figcaption>
            <h2>Apple</h2>
            <p>$3.00</p>
          </figcaption>
        </figure>
        <button class="cart-btn">Add To Cart</button>
        <a href="confirm.html"><button>Remove</button></a>
      </div>
  `);
};

generateMain();
