import React from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

const arr = [
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
    imgUrl: "./img/sneakers/1.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Air Max 270",
    price: 12000,
    imgUrl: "./img/sneakers/2.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 13000,
    imgUrl: "./img/sneakers/3.jpg",
  },
  {
    title: "Кроссовки Puma X Aka Boku Future Rider",
    price: 2000,
    imgUrl: "./img/sneakers/4.jpg",
  },
  {
    title: "Мужские Кроссовки Under Armour Curry 8",
    price: 8000,
    imgUrl: "./img/sneakers/5.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Kyrie 7",
    price: 2180,
    imgUrl: "./img/sneakers/6.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Kyrie 7",
    price: 2180,
    imgUrl: "./img/sneakers/7.jpg",
  },
  {
    title: "Мужские Кроссовки Nike Kyrie 7",
    price: 2180,
    imgUrl: "./img/sneakers/8.jpg",
  },
];

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  return (
    <div className="wrapper clear">
      {cartOpened ? <Drawer /> : null}
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
          {arr.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imgUrl={obj.imgUrl}
              //   onClickFavorite={() => console.log("Добавили закладки")}
              //   onClickPlus={() => console.log("Нажали плюс")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
