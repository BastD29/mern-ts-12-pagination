import { CLEAR_FILTER, SET_FILTER } from "../constants/actions";

type FilterType = {
  [key: string]: string;
};

type FilterStateType = {
  filters: FilterType;
};

// actions

type SetFilterActionType = {
  type: typeof SET_FILTER;
  payload: FilterType;
  // payload: { name: string; value: string };
};

type ClearFilterActionType = {
  type: typeof CLEAR_FILTER;
};

type FilterActionType = SetFilterActionType | ClearFilterActionType;

export type { FilterType, FilterStateType, FilterActionType };
