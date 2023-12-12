import Card from "../components/Card";

function Home({
  items,
  searchValue,
  setSearchValue,
  onAddToCart,
  onAddToFavorite,
  onSearchInput,
}) {
  return (
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
              onFavorite={(obj) => onAddToFavorite(obj)}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
