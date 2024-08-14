import { useContext } from "react";
import { ItemContext } from "../context/item/context";

const useItemContext = () => {
  const context = useContext(ItemContext);

  if (!context) {
    throw new Error("useItemContext must be used within a ItemProvider");
  }

  return context;
};

export { useItemContext };
