function Header(props) {
  return (
    <header>
      <div className="headerLeft">
        <img width={40} height={40} src="/img/logo.png"></img>
        <div className="headerInfo">
          <h3>react snickers</h3>
          <p>Online sneacker-shop </p>
        </div>
      </div>
      <ul className="headerRight">
        <li onClick={props.onClickCart} className="headerCartButton">
          <img width={18} height={18} src="/img/cart.svg"></img>
          <span>1205 rub.</span>
        </li>
        <li>
          <img width={18} height={18} src="/img/user.svg"></img>
        </li>
      </ul>
    </header>
  );
}
export default Header;
