import { FC } from "react";
import ItemsList from "../../components/ItemsList/ItemsList";
import Pagination from "../../components/Pagination/Pagination2";
import Filter from "../../components/Filter/Filter5";
import style from "./Store.module.scss";

const Store: FC = () => {
  return (
    <div className={style["store"]}>
      <Filter />
      <ItemsList />
      <Pagination />
    </div>
  );
};

export default Store;
