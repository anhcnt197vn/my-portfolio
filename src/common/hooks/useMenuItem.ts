import { useAppDispatch, useAppSelector } from '@/store/helper';
import { AppState } from '@/store/index';
import { MenuItems, setActiveMenu } from '@/store/slices/menuItemSlice';
import { createSelector } from 'reselect';

export const useMenuItem = () => {
  const dispatch = useAppDispatch();
  const menuItemSelector = (state: AppState) => state.menuItem;
  const activeMenuItem = useAppSelector(createSelector(menuItemSelector, (menuItem) => menuItem.activeMenu));

  const setActiveMenuItem = (menuItem: MenuItems) => {
    dispatch(setActiveMenu({ activeMenu: menuItem }));
  };

  return { activeMenuItem, setActiveMenuItem };
};
