import React from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import axios from "axios";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    axios
      .get("https://65717b83d61ba6fcc012aed0.mockapi.io/Sneakers")
      .then((res) => {
        setItems(res.data);
      });
    axios
      .get("https://65717b83d61ba6fcc012aed0.mockapi.io/cart")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    axios.post("https://65717b83d61ba6fcc012aed0.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://65717b83d61ba6fcc012aed0.mockapi.io/cart/${id}`, id);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}
      {}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="contentSearchblock">
          <h1>
            {searchValue
              ? `Поиск по запросу : "${searchValue}"`
              : `Все кроссовки`}
          </h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="search" />
            {searchValue && (
              <img
                onClick={() => {
                  setSearchValue("");
                }}
                className="clear removeBtn"
                src="/img/button-remove.svg"
                alt="clear"
              />
            )}
            <input
              onChange={onSearchInput}
              value={searchValue}
              placeholder="Поиск..."
            />
          </div>
        </div>
        <div className="sneakers">
          {items
            .filter((item) => item.title.toLowerCase().includes(searchValue))
            .map((item, index) => (
              <Card
                key={index}
                title={item.title}
                price={item.price}
                imgUrl={item.imgUrl}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
