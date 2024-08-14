import { FC } from "react";
import ItemsList from "../../components/ItemsList/ItemsList";
import style from "./Store.module.scss";

const Store: FC = () => {
  return (
    <div className={style["store"]}>
      <ItemsList />
    </div>
  );
};

export default Store;
