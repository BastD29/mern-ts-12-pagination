// import { FC, ReactNode, useEffect, useReducer } from "react";
// import { initialState, reducer } from "../../reducers/item";
// import { ItemContext } from "./context";
// import {
//   FETCH_ITEMS_FAILURE,
//   FETCH_ITEMS_REQUEST,
//   FETCH_ITEMS_SUCCESS,
//   SET_TOTAL_ITEMS,
//   SET_TOTAL_PAGES,
// } from "../../constants/actions";
// import { getItems } from "../../services/item2";
// import { usePaginationContext } from "../../hooks/usePaginationContext";

// type ItemProviderPropsType = {
//   children: ReactNode;
// };

// const ItemProvider: FC<ItemProviderPropsType> = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   const {
//     dispatch: paginationDispatch,
//     state: { pagination },
//   } = usePaginationContext();
//   const { page } = pagination;

//   console.log("items:", state.items);

//   useEffect(() => {
//     const fetchItems = async () => {
//       dispatch({ type: FETCH_ITEMS_REQUEST });

//       try {
//         const { data } = await getItems({ page, limit: 5 });
//         dispatch({ type: FETCH_ITEMS_SUCCESS, payload: data?.items || [] });

//         // set the total items and total pages once items have successfully been fetched
//         paginationDispatch({
//           type: SET_TOTAL_ITEMS,
//           payload: data?.totalItems ?? 0,
//         });

//         paginationDispatch({
//           type: SET_TOTAL_PAGES,
//           payload: data?.totalPages ?? 1,
//         });
//       } catch (error) {
//         dispatch({
//           type: FETCH_ITEMS_FAILURE,
//           payload: (error as Error).message,
//         });
//       }
//     };

//     fetchItems();
//   }, [page]);

//   return (
//     <ItemContext.Provider value={{ state, dispatch }}>
//       {children}
//     </ItemContext.Provider>
//   );
// };

// export { ItemProvider };
