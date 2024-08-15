import { FC, ReactNode, useEffect, useReducer } from "react";
import { initialState, reducer } from "../../reducers/item";
import { ItemContext } from "./context";
import {
  FETCH_ITEMS_FAILURE,
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
  SET_FILTER,
  SET_PAGE,
  SET_TOTAL_ITEMS,
  SET_TOTAL_PAGES,
} from "../../constants/actions";
import { getItems } from "../../services/item3";
import { usePaginationContext } from "../../hooks/usePaginationContext";
import { useFilterContext } from "../../hooks/useFilterContext";
import { useSearchParams } from "react-router-dom";

type ItemProviderPropsType = {
  children: ReactNode;
};

const ItemProvider: FC<ItemProviderPropsType> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const {
    dispatch: paginationDispatch,
    state: { pagination },
  } = usePaginationContext();
  const { page } = pagination;

  const {
    dispatch: filterDispatch,
    state: { filters },
  } = useFilterContext();

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    // Update searchParams whenever filters or pagination changes
    const params: Record<string, string> = {};

    if (page) params.page = page.toString();
    if (filters.name) params.name = filters.name;
    if (filters.category) params.category = filters.category;
    if (filters.minPrice) params.minPrice = filters.minPrice.toString();
    if (filters.maxPrice) params.maxPrice = filters.maxPrice.toString();
    if (filters.inStock !== undefined)
      params.inStock = filters.inStock.toString();

    setSearchParams(params);
  }, [pagination, filters]);

  useEffect(() => {
    // Sync state with URL params on initial load
    const page = searchParams.get("page");
    const name = searchParams.get("name");
    const category = searchParams.get("category");
    const minPrice = searchParams.get("minPrice");
    const maxPrice = searchParams.get("maxPrice");
    const inStock = searchParams.get("inStock");

    if (page) paginationDispatch({ type: SET_PAGE, payload: parseInt(page) });
    if (name)
      filterDispatch({
        type: SET_FILTER,
        payload: { name: "name", value: name },
      });
    if (category)
      filterDispatch({
        type: SET_FILTER,
        payload: { name: "category", value: category },
      });
    if (minPrice)
      filterDispatch({
        type: SET_FILTER,
        payload: { name: "minPrice", value: minPrice },
      });
    if (maxPrice)
      filterDispatch({
        type: SET_FILTER,
        payload: { name: "maxPrice", value: maxPrice },
      });
    if (inStock)
      filterDispatch({
        type: SET_FILTER,
        payload: { name: "inStock", value: inStock },
      });
  }, []);

  console.log("items:", state.items);

  useEffect(() => {
    const fetchItems = async () => {
      dispatch({ type: FETCH_ITEMS_REQUEST });

      try {
        const { data } = await getItems({ page, limit: 5, ...filters });
        dispatch({ type: FETCH_ITEMS_SUCCESS, payload: data?.items || [] });

        // set the total items...
        paginationDispatch({
          type: SET_TOTAL_ITEMS,
          payload: data?.totalItems ?? 0,
        });

        // ...and total pages once items have successfully been fetched
        paginationDispatch({
          type: SET_TOTAL_PAGES,
          payload: data?.totalPages ?? 1,
        });

        // If the current page is greater than the new total pages, reset to page 1
        if (page > (data?.totalPages ?? 1)) {
          paginationDispatch({ type: SET_PAGE, payload: 1 });
        }
      } catch (error) {
        dispatch({
          type: FETCH_ITEMS_FAILURE,
          payload: (error as Error).message,
        });
      }
    };

    fetchItems();
  }, [page, filters]);

  return (
    <ItemContext.Provider value={{ state, dispatch }}>
      {children}
    </ItemContext.Provider>
  );
};

export { ItemProvider };
