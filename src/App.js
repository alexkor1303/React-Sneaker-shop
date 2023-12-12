import React from "react";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Home from "./pages/home";
import FavoritesPages from "./pages/favorites";
import { Route, Routes } from "react-router-dom";
import axios from "axios";

function App() {
  const [cartOpened, setCartOpened] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setIsFavorites] = React.useState([]);
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
    axios
      .get("https://65731ff9192318b7db419810.mockapi.io/favorites")
      .then((res) => {
        setIsFavorites(res.data);
      });
  }, []);

  const onAddToCart = (obj) => {
    if (cartItems.find((item) => item.id === obj.id)) {
      setCartItems((prev) => prev.filter((item) => item.id !== obj.id));
    }
    axios.post("https://65717b83d61ba6fcc012aed0.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://65717b83d61ba6fcc012aed0.mockapi.io/cart/${id}`, id);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = (obj) => {
    if (favorites.find((favObj) => favObj.id === obj.id)) {
      axios.delete(
        `https://65731ff9192318b7db419810.mockapi.io/favorites/${obj.id}`
      );
      setIsFavorites((prev) => prev.filter((item) => item.id !== obj.id));
    } else {
      axios.post("https://65731ff9192318b7db419810.mockapi.io/favorites", obj);
      setIsFavorites((prev) => [...prev, obj]);
    }
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
      <Header onClickCart={() => setCartOpened(true)} />
      <Routes>
        <Route
          path="/"
          exact
          element={
            <Home
              items={items}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              onSearchInput={onSearchInput}
              onAddToCart={onAddToCart}
              onAddToFavorite={onAddToFavorite}
            />
          }
        />
        <Route
          path="/Favorites"
          exact
          element={
            <FavoritesPages
              items={favorites}
              onAddToFavorite={onAddToFavorite}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
