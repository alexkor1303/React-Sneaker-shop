function Drawer(props) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2>
          Корзина{" "}
          <img
            onClick={props.onClose}
            className="removeBtn"
            src="/img/button-remove.svg"
            alt="remove"
          />
        </h2>
        <div className="items">
          <div className="cartItem">
            <div
              style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
              className="cartItemImg"
            ></div>
            <div className="cartRightblock">
              <p className="cartDiscription">
                Мужские Кроссовки Nike Blazer Mid Suede
              </p>
              <b>12 999 rub.</b>
            </div>
            <img
              className="removeBtn"
              src="/img/button-remove.svg"
              alt="remove"
            />
          </div>
          <div className="cartItem">
            <div
              style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
              className="cartItemImg"
            ></div>
            <div className="cartRightblock">
              <p className="cartDiscription">
                Мужские Кроссовки Nike Blazer Mid Suede
              </p>
              <b>12 999 rub.</b>
            </div>
            <img
              className="removeBtn"
              src="/img/button-remove.svg"
              alt="remove"
            />
          </div>
        </div>
        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого</span>
              <div></div>
              <b>21 498 rub.</b>
            </li>
            <li>
              <span>Налог 5%</span>
              <div></div>
              <b>1074 rub.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ
            <img src="/img/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
