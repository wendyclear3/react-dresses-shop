function Drawer() {
  return (
    <div style={{ display: 'none' }} className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <img className="cu-p" src="/img/btn-remove.svg" alt="remove" />
        </h2>

        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: 'url(/img/dresses/1.jpg)' }}
              className="cartItemImg"
            ></div>

            <div className="mr-15">
              <p className="mb-5">Платье Gerda</p>
              <b>3 499 руб.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
          </div>

          <div className="cartItem d-flex align-center mb-20">
            <div
              style={{ backgroundImage: 'url(/img/dresses/2.jpg)' }}
              className="cartItemImg"
            ></div>

            <div className="mr-15">
              <p className="mb-5">Платье Gerda</p>
              <b>3 499 руб.</b>
            </div>
            <img className="removeBtn" src="/img/btn-remove.svg" alt="remove" />
          </div>
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>6 998 руб.</b>
            </li>

            <li>
              <span>Налог 5%</span>
              <div></div>
              <b>350 руб.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ <img src="/img/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Drawer
