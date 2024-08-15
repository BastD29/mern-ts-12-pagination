import { FC } from "react";
import ItemsList from "../../components/ItemsList/ItemsList";
import Pagination from "../../components/Pagination/Pagination";
import style from "./Store.module.scss";

const Store: FC = () => {
  return (
    <div className={style["store"]}>
      <ItemsList />
      <Pagination />
    </div>
  );
};

export default Store;
