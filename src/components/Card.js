function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="/img/unliked.svg" alt="unliked" />
      </div>
      <img width={142} height={163} src="/img/dresses/1.jpg" alt="dress" />
      <h5>Платье Gerda</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Стоимость:</span>
          <b>3 499 руб.</b>
        </div>
        <button className="button">
          <img width={11} height={11} src="/img/plus.svg" alt="plus" />
        </button>
      </div>
    </div>
  )
}

export default Card
