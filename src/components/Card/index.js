import styles from "./Card.module.scss";

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          className="heart-button"
          src="/img/heart-unlike.svg"
          alt="unlike"
        />
      </div>
      <img width={113} height={112} src={props.imgUrl} alt="sneakers1" />
      <h5>{props.title}</h5>
      <div className={styles.cardBottom}>
        <div className={styles.cardBottom_price}>
          <span>Цена</span>
          <b>{props.price} rub.</b>
        </div>
        <button onClick={props.onClick}>
          <img src="/img/button-outcard.svg" alt="addIncardButton" />
        </button>
      </div>
    </div>
  );
}

export default Card;
