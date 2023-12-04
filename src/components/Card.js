function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img
          className="heart-button"
          src="/img/heart-unlike.svg"
          alt="unlike"
        />
      </div>
      <img width={113} height={112} src="/img/sneakers/1.jpg" alt="sneakers1" />
      <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="cardBottom">
        <div className="cardBottom_price">
          <span>Цена</span>
          <b>12 999 rub.</b>
        </div>
        <img src="/img/button-outcard.svg" alt="addIncardButton" />
      </div>
    </div>
  );
}

export default Card;
