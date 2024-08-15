// import { FC, ReactNode, useEffect, useReducer } from "react";
// import { initialState, reducer } from "../../reducers/item";
// import { ItemContext } from "./context";
// import {
//   FETCH_ITEMS_FAILURE,
//   FETCH_ITEMS_REQUEST,
//   FETCH_ITEMS_SUCCESS,
// } from "../../constants/actions";
// import { getItems } from "../../services/item";

// type ItemProviderPropsType = {
//   children: ReactNode;
// };

// const ItemProvider: FC<ItemProviderPropsType> = ({ children }) => {
//   const [state, dispatch] = useReducer(reducer, initialState);

//   console.log("items:", state.items);

//   useEffect(() => {
//     const fetchItems = async () => {
//       dispatch({ type: FETCH_ITEMS_REQUEST });

//       try {
//         const { data } = await getItems();
//         dispatch({ type: FETCH_ITEMS_SUCCESS, payload: data?.items || [] });
//       } catch (error) {
//         dispatch({
//           type: FETCH_ITEMS_FAILURE,
//           payload: (error as Error).message,
//         });
//       }
//     };

//     fetchItems();
//   }, []);

//   return (
//     <ItemContext.Provider value={{ state, dispatch }}>
//       {children}
//     </ItemContext.Provider>
//   );
// };

// export { ItemProvider };
