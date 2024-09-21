// Selectors - a function receiving Redux state and returning some data from it
//import { IRootState } from '../../react-app-env';
export const getSelectedCart = (state) => state.selectedcart;
export const getCurrentFlowers = (state) => state.currentFlowers;
export const getAllFlowers = (state) => state.allFlowers;
export const getError = (state) => state.error;
export const getAllShops = (state) => state.allShops;
export const getCoupons = (state) => state.coupons;
export const getCurrentTotal = (state) => state.currentTotal;
