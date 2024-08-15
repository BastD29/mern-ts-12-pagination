import { FC, ReactNode, useReducer } from "react";
import { initialState, reducer } from "../../reducers/filter";
import { FilterContext } from "./context";

type FilterProviderPropsType = {
  children: ReactNode;
};

const FilterProvider: FC<FilterProviderPropsType> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("filters:", state.filters);

  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export { FilterProvider };
