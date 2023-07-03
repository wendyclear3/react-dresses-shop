function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/heart.png" alt="heartlogo" />
          <div>
            <h3 className="text-uppercase">React Pin-Up Dresses</h3>
            <p className="opacity-5"> Магазин платьев &#10024;</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="/img/cart.svg" alt="cart" />
            <span>1205 руб.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="user" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Все платья</h1>

        <div className="d-flex">
          <div className="card">
            <img
              width={142}
              height={163}
              src="/img/dresses/1.jpg"
              alt="dress"
            />
            <h5>Платье Gerda</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>3 499 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={142}
              height={163}
              src="/img/dresses/2.jpg"
              alt="dress"
            />
            <h5>Платье Gerda</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>3 499 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={142}
              height={163}
              src="/img/dresses/3.jpg"
              alt="dress"
            />
            <h5>Платье Gerda</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>3 499 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={142}
              height={163}
              src="/img/dresses/4.jpg"
              alt="dress"
            />
            <h5>Платье Gerda</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span>Цена:</span>
                <b>3 499 руб.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.svg" alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
