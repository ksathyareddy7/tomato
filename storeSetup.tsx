import { createContext, Dispatch, ReactNode, useReducer } from "react";
import { I_StoreState, IAction, initialState, storeReducer } from "./store";

export interface IStoreContext {
  store: I_StoreState;
  dispatch: Dispatch<IAction>;
}

interface StoreProviderProps {
  children: ReactNode;
}

export const StoreContext = createContext<IStoreContext>({
  store: initialState,
  dispatch: () => initialState,
});

export function StoreProvider({ children }: StoreProviderProps) {
  const [store, dispatch] = useReducer<React.Reducer<I_StoreState, IAction>>(
    storeReducer,
    initialState
  );
  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}
