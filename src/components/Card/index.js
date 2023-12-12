import styles from "./Card.module.scss";
import React from "react";

function Card({ price, imgUrl, title, onPlus, onFavorite, favorited = false }) {
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setFavorite] = React.useState(favorited);

  const onClickPlusFunc = () => {
    onPlus({ price, imgUrl, title });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ price, imgUrl, title });
    setFavorite(!isFavorite);
  };
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img
          onClick={onClickFavorite}
          className="heart-button"
          src={isFavorite ? "/img/heart-like.svg" : "/img/heart-unlike.svg"}
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
