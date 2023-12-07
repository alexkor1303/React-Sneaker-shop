import styles from "./Card.module.scss";
import React from "react";

function Card({ price, imgUrl, title, onPlus, isFavorite }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const onClickPlusFunc = () => {
    onPlus({ price, imgUrl, title });
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          className="heart-button"
          src="/img/heart-unlike.svg"
          alt="unlike"
        />
      </div>
      <img width={113} height={112} src={imgUrl} alt="sneakers1" />
      <h5>{title}</h5>
      <div className={styles.cardBottom}>
        <div className={styles.cardBottom_price}>
          <span>Цена</span>
          <b>{price}rub.</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPlusFunc}
          src={isAdded ? "/img/button-incard.svg" : "/img/button-outcard.svg"}
          alt="addIncardButton"
        />
      </div>
    </div>
  );
}

export default Card;
