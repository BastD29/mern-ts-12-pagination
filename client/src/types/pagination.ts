import {
  SET_PAGE,
  SET_TOTAL_ITEMS,
  SET_TOTAL_PAGES,
} from "../constants/actions";

type PaginationType = {
  page: number;
  totalPages: number;
  totalItems: number;
};

type PaginationStateType = {
  pagination: PaginationType;
};

// actions

type SetPageActionType = {
  type: typeof SET_PAGE;
  payload: number;
};

type SetTotalItemsActionType = {
  type: typeof SET_TOTAL_ITEMS;
  payload: number;
};

type SetTotalPagesActionType = {
  type: typeof SET_TOTAL_PAGES;
  payload: number;
};

type PaginationActionType =
  | SetPageActionType
  | SetTotalItemsActionType
  | SetTotalPagesActionType;

export type { PaginationType, PaginationStateType, PaginationActionType };
