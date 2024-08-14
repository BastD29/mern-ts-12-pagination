import {
  FETCH_ITEMS_FAILURE,
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
} from "../constants/actions";
import { ItemActionType, ItemStateType } from "../types/item";

const initialState: ItemStateType = {
  items: null,
  loading: false,
  error: null,
};

const reducer = (
  state: ItemStateType,
  action: ItemActionType
): ItemStateType => {
  switch (action.type) {
    case FETCH_ITEMS_REQUEST: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case FETCH_ITEMS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export { initialState, reducer };
