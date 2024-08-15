import { Dispatch, createContext } from "react";
import { FilterActionType, FilterStateType } from "../../types/filter";

type FilterContextType = {
  state: FilterStateType;
  dispatch: Dispatch<FilterActionType>;
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export { FilterContext };
