import React from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    fetch("https://65717b83d61ba6fcc012aed0.mockapi.io/Sneakers")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);
  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}
      {}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="contentSearchblock">
          <h1>All sneacker</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        <div className="sneakers">
          {items.map((obj) => (
            <Card title={obj.title} price={obj.price} imgUrl={obj.imgUrl} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
