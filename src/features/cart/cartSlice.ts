import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { CartItem } from "../../types/cart";
import type { Product } from "../../types/product";
import { getDiscountedPrice } from "../../utils/price";
import type { RootState } from "../../app/store";


const STORAGE_KEY = 'bandage:cart-items';
interface CartState {
  items: CartItem[];
}
const loadInitialState = (): CartState => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {items: []};
    const items = JSON.parse(raw) as CartItem[];
    return { items: Array.isArray(items) ? items : []};
  } catch {
    return { items:[]};
  }
};
const persist = (state: CartState) => {
  try{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
} catch{
// ignore//
}
};
const cartSlice = createSlice({
  name: 'cart',
  initialState: loadInitialState(),
  reducers: {
    addToCart: (state, action: PayloadAction<{ product: Product; quantity?: number}>) => {
      const {product, quantity = 1} = action.payload;
      const existing = state.items.find((item) => item.id === product.id);
      if (existing) {
        existing.quantity = Math.min(existing.quantity + quantity, product.stock);
      } else {
        state.items.push({
          id:product.id,
          title: product.title,
          thumbnail: product.thumbnail,
          price:product.price,
          discountPercentage: product.discountPercentage,
          stock: product.stock,
          quantity: Math.min(quantity, product.stock),
        });
      }
      persist(state);
},
  incrementQuantity: (state, action:PayloadAction<number>) => {
    const item = state.items.find((i) => i.id === action.payload);
    if (item && item.quantity < item.stock) item.quantity += 1;
    persist(state);
  },
  decrementQuantity: (state, action: PayloadAction<number>) => {
    const item = state.items.find((i) => i.id === action.payload);
    if (item) item.quantity -= 1;
    state.items = state.items.filter((i) => i.quantity > 0);
    persist(state);
  },
  setQuantity: (state, action: PayloadAction<{id: number; quantity:number}>) => {
    const item = state.items.find((i) => i.id === action.payload.id);
    if (!item) return;
    const clamped = Math.max(0, Math.min(action.payload.quantity, item.stock));
    if (clamped === 0) {
      state.items = state.items.filter((i) => i.id !== action.payload.id);
    }else {
      item.quantity = clamped;
    }
    persist(state);
  },
  removeFromCart: (state, action:PayloadAction<number>) => {
    state.items = state.items.filter((i) => i.id !== action.payload);
    persist(state);
  },
  clearCart: (state) => {
    state.items = [];
    persist(state);
  },
  },
});

export const {
  addToCart, 
  incrementQuantity,
  decrementQuantity,
  setQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const selectCartItems = (state: RootState): CartItem[] => state.cart.items;
export const selectCartCount = (state: RootState): number => 
  state.cart.items.reduce((sum, item) => sum + item.quantity, 0);
export const selectCartSubtotal = (state: RootState): number => 
  state.cart.items.reduce(
    (sum, item) => sum + getDiscountedPrice(item.price, item.discountPercentage) * item.quantity,
    0,
  );
  export const selectItemQuantity = 
  (id: number) => 
  (state: RootState) : number => 
    state.cart.items.find((item) => item.id === id)?.quantity ?? 0;