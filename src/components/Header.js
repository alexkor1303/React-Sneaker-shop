import { Link } from "react-router-dom";
function Header(props) {
  return (
    <header>
      <div className="headerLeft">
        <Link to="/">
          <img width={40} height={40} src="/img/logo.png"></img>
          <div className="headerInfo">
            <h3>react snickers</h3>
            <p>Online sneacker-shop </p>
          </div>
        </Link>
      </div>
      <ul className="headerRight">
        <li onClick={props.onClickCart} className="headerCartButton">
          <img width={18} height={18} src="/img/cart.svg"></img>
          <span>1205 rub.</span>
        </li>
        <li>
          <Link to="/favorites">
            <img width={18} height={18} src="/img/favorite-heart.svg"></img>
            <span>Закладки</span>
          </Link>
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg" alt="Закладки"></img>
          <span>Профиль</span>
        </li>
      </ul>
    </header>
  );
}
export default Header;
