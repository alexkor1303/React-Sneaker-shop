import Card from "../components/Card";

function FavoritesPages({ items, onAddToFavorite }) {
  return (
    <div className="content">
      <div className="contentSearchblock">
        <h1>Мои закладки</h1>
      </div>
      <div className="sneakers">
        {" "}
        {items.map((item, index) => (
          <Card
            key={index}
            favorited={true}
            onFavorite={onAddToFavorite}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default FavoritesPages;
