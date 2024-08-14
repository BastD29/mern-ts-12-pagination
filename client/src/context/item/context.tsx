import { Dispatch, createContext } from "react";
import { ItemActionType, ItemStateType } from "../../types/item";

type ItemContextType = {
  state: ItemStateType;
  dispatch: Dispatch<ItemActionType>;
};

const ItemContext = createContext<ItemContextType | undefined>(undefined);

export { ItemContext };
