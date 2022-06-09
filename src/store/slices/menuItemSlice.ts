import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum MenuItems {
  HOME = 'hero',
  ABOUT = 'about',
  RESUME = 'resume',
  ARTICLE = 'article',
  CONTACT = 'contact',
}

export interface SidebarMenu {
  activeMenu: MenuItems;
}

const initialState: SidebarMenu = {
  activeMenu: MenuItems.HOME,
};

export const menuItemSlice = createSlice({
  name: 'menuItem',
  initialState,
  reducers: {
    setActiveMenu: (state, action: PayloadAction<SidebarMenu>) => {
      state.activeMenu = action.payload.activeMenu;
    },
  },
});

export const { setActiveMenu } = menuItemSlice.actions;
export default menuItemSlice.reducer;
