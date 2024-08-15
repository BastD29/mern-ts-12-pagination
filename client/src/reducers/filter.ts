import { CLEAR_FILTER, SET_FILTER } from "../constants/actions";
import { FilterActionType, FilterStateType } from "../types/filter";

const initialState: FilterStateType = {
  filters: {},
};

const reducer = (
  state: FilterStateType,
  action: FilterActionType
): FilterStateType => {
  switch (action.type) {
    case SET_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.name]: action.payload.value,
        },
      };
    case CLEAR_FILTER:
      return initialState;
    default:
      return state;
  }
};

export { initialState, reducer };
