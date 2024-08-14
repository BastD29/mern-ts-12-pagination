import { FC } from "react";
import { useItemContext } from "../../hooks/useItemContext";
import style from "./ItemsList.module.scss";

const ItemsList: FC = () => {
  const { state } = useItemContext();
  const { error, items, loading } = state;

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (items === null) {
    return <p>No items available.</p>;
  }

  if (items.length === 0) {
    return <p>No items found.</p>;
  }

  return (
    <div className={style["items-list"]}>
      {items.map((item) => (
        <div key={item._id}>{item.name}</div>
      ))}
    </div>
  );
};

export default ItemsList;
