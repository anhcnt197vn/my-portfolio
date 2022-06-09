import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import menuItemReducer from './slices/menuItemSlice';

export function makeStore() {
  return configureStore({
    reducer: { menuItem: menuItemReducer },
  });
}

const store = makeStore();

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppState, unknown, Action<string>>;

export default store;
