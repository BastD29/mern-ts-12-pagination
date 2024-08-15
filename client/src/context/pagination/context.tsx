import { Dispatch, createContext } from "react";
import {
  PaginationActionType,
  PaginationStateType,
} from "../../types/pagination";

type PaginationContextType = {
  state: PaginationStateType;
  dispatch: Dispatch<PaginationActionType>;
};

const PaginationContext = createContext<PaginationContextType | undefined>(
  undefined
);

export { PaginationContext };
