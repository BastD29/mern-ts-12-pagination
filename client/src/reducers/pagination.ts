import {
  SET_PAGE,
  SET_TOTAL_ITEMS,
  SET_TOTAL_PAGES,
} from "../constants/actions";
import { PaginationActionType, PaginationStateType } from "../types/pagination";

const initialState: PaginationStateType = {
  pagination: {
    page: 1,
    totalItems: 0,
    totalPages: 1,
  },
};

const reducer = (
  state: PaginationStateType,
  action: PaginationActionType
): PaginationStateType => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          page: action.payload,
        },
      };

    case SET_TOTAL_ITEMS:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          totalItems: action.payload,
        },
      };
    case SET_TOTAL_PAGES:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          totalPages: action.payload,
        },
      };
    default:
      return state;
  }
};

export { initialState, reducer };
