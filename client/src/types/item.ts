import {
  FETCH_ITEMS_FAILURE,
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
} from "../constants/actions";

type ItemType = {
  _id: number;
  name: string;
  category: string;
  price: number;
  inStock: boolean;
};

type ItemStateType = {
  items: ItemType[] | null;
  loading: boolean;
  error: string | null;
};

// actions

type FetchItemsRequestActionType = {
  type: typeof FETCH_ITEMS_REQUEST;
};

type FetchItemsSuccessActionType = {
  type: typeof FETCH_ITEMS_SUCCESS;
  payload: ItemType[];
};

type FetchItemsFailureActionType = {
  type: typeof FETCH_ITEMS_FAILURE;
  payload: string;
};

type ItemActionType =
  | FetchItemsRequestActionType
  | FetchItemsSuccessActionType
  | FetchItemsFailureActionType;

export type {
  ItemType,
  ItemStateType,
  // actions
  ItemActionType,
};
