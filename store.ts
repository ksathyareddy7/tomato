import {
  categoriesData,
  I_Category,
  I_Restaurant,
  restaurantsData,
} from "./data/data";
import { I_CartItem } from "./data/helpers";

export enum ActionType {
  ADD_ITEM = "ADD_ITEM",
  REDUCE_ITEM = "REDUCE_ITEM",
  REPLACE_CART = "REPLACE_CART",
  REMOVE_ITEM = "REMOVE_ITEM",
}

export interface IAction {
  type: ActionType;
  payload: any;
}

export interface I_StoreState {
  cart: I_CartItem[];
  restaurants: I_Restaurant[];
  categories: I_Category[];
}

export const initialState: I_StoreState = {
  cart: [],
  restaurants: restaurantsData,
  categories: categoriesData,
};

export const storeReducer = (
  state: I_StoreState,
  action: IAction
): I_StoreState => {
  switch (action.type) {
    case ActionType.ADD_ITEM: {
      let newCart = [...state.cart];
      const itemIndex = newCart.findIndex(
        (item) => item.id === action.payload.item.id
      );
      if (itemIndex > -1) {
        newCart[itemIndex].quantity++;
      } else {
        newCart.push({ ...action.payload.item, quantity: 1 });
      }
      return {
        ...state,
        cart: newCart,
      };
    }

    case ActionType.REDUCE_ITEM: {
      const newCart = [...state.cart];
      const itemIndex = newCart.findIndex(
        (item) => item.id === action.payload.item.id
      );
      if (itemIndex > -1) {
        if (newCart[itemIndex].quantity > 1) {
          newCart[itemIndex].quantity--;
        } else {
          newCart.splice(itemIndex, 1);
        }
      }
      return { ...state, cart: newCart };
    }
    case ActionType.REPLACE_CART: {
      return { ...state, cart: [{ ...action.payload.item, quantity: 1 }] };
    }
    case ActionType.REMOVE_ITEM: {
      const newCart = [...state.cart];
      const itemIndex = newCart.findIndex(
        (item) => item.id === action.payload.item.id
      );
      if (itemIndex > -1) {
        newCart.splice(itemIndex, 1);
      }
      return { ...state, cart: newCart };
    }

    default:
      return state;
  }
};
