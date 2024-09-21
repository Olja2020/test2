// import { ICoupon, IObjectForCart, IFlower, IShops  } from '../../react-app-env';

// // Action types - is just a constant. MUST have a unique value.
// //  const ActionType {
// //   SET_SELECTED_CART = 'SET_SELECTED_CART',
// //   DEL_FROM_CART = 'DEL_FROM_CART',
// //   SET_CURRENT_FLOWERS = 'SET_CURRENT_FLOWERS',
// //   SET_QUANTITY = 'SET_QUANTITY',
// //   SET_ALL_FLOWERS = 'SET_ALL_FLOWERS',
// //   SET_ERROR = 'SET_ERROR',
// //   SET_ALL_SHOPS = 'SET_ALL_SHOPS',
// //   CLEAR_CART = 'CLEAR_CART',
// //   SET_COUPONS = 'SET_COUPONS',
// //   SET_TOTAL = 'SET_TOTAL',
// // }

// const ISetSelectedCart= ({
//   type: ActionType.SET_SELECTED_CART,
//   payload: IObjectForCart,
// })

// const IDelFromCart = {
//   type: ActionType.DEL_FROM_CART,
//   payload: IObjectForCart,
// }

// const ISetCurrentFlowers ={
//   type: ActionType.SET_CURRENT_FLOWERS,
//   payload: IFlower[],
// }

// const  ISetQuantity ={
//   type: ActionType.SET_QUANTITY,
//   payload: IObjectForCart,
// }

// const ISetAllFlowers= {
//   type: ActionType.SET_ALL_FLOWERS,
//   payload: IFlower[],
// }

// const ISetError ={
//   type: ActionType.SET_ERROR,
//   payload: string,
// }

// const ISetAllShops= {
//   type: ActionType.SET_ALL_SHOPS,
//   payload: IShops[],
// }

// const IClearCart= {
//   type: ActionType.CLEAR_CART,
//   payload: undefined,
// }

// const ISetCoupons= {
//   type: ActionType.SET_COUPONS,
//   payload: ICoupon[],
// }

// const ISetTotal= {
//   type: ActionType.SET_TOTAL,
//   payload: string,
// }

// // Action creators - a function returning an action object

// export const setSelectedCart = (flower) => ({
   
//   type: ActionType.SET_SELECTED_CART,
//   payload: flower,
// });

// export const delFromCart = (flower) => ({
//   type: ActionType.DEL_FROM_CART,
//   payload: flower,
// });

// export const setCurrentFlowers = (payload) => ({
//   type: ActionType.SET_CURRENT_FLOWERS,
//   payload,
// });

// export const setQuantity = (payload) => ({
//   type: ActionType.SET_QUANTITY,
//   payload,
// });

// export const setAllFlowers = (payload) => ({
//   type: ActionType.SET_ALL_FLOWERS,
//   payload,
// });

// export const setError = (payload)=> ({
//   type: ActionType.SET_ERROR,
//   payload,
// });

// export const setAllShops = (payload) => ({
//   type: ActionType.SET_ALL_SHOPS,
//   payload,
// });

// export const clearCart = (payload) => ({
//   type: ActionType.CLEAR_CART,
//   payload,
// });

// export const setCoupons = (payload) => ({
//   type: ActionType.SET_COUPONS,
//   payload,
// });

// export const setTotal = (payload) => ({
//   type: ActionType.SET_TOTAL,
//   payload,
// });

// const ISetCurrentFlowers ={
//   export default ISetSelectedCart, IDelFromCart, 
//import { ICoupon, IObjectForCart, IFlower, IShops } from '../../react-app-env';

// Action types - is just a constant. MUST have a unique value.
const ActionType = {
  SET_SELECTED_CART: 'SET_SELECTED_CART',
  DEL_FROM_CART: 'DEL_FROM_CART',
  SET_CURRENT_FLOWERS: 'SET_CURRENT_FLOWERS',
  SET_QUANTITY: 'SET_QUANTITY',
  SET_ALL_FLOWERS: 'SET_ALL_FLOWERS',
  SET_ERROR: 'SET_ERROR',
  SET_ALL_SHOPS: 'SET_ALL_SHOPS',
  CLEAR_CART: 'CLEAR_CART',
  SET_COUPONS: 'SET_COUPONS',
  SET_TOTAL: 'SET_TOTAL',
};

// Action creators - a function returning an action object
export const setSelectedCart = (flower) => ({
  type: ActionType.SET_SELECTED_CART,
  payload: flower,
});

export const delFromCart = (flower) => ({
  type: ActionType.DEL_FROM_CART,
  payload: flower,
});

export const setCurrentFlowers = (payload) => ({
  type: ActionType.SET_CURRENT_FLOWERS,
  payload,
});

export const setQuantity = (payload) => ({
  type: ActionType.SET_QUANTITY,
  payload,
});

export const setAllFlowers = (payload) => ({
  type: ActionType.SET_ALL_FLOWERS,
  payload,
});

export const setError = (payload) => ({
  type: ActionType.SET_ERROR,
  payload,
});

export const setAllShops = (payload) => ({
  type: ActionType.SET_ALL_SHOPS,
  payload,
});

export const clearCart = () => ({ 
  type: ActionType.CLEAR_CART,
});

export const setCoupons = (payload) => ({
  type: ActionType.SET_COUPONS,
  payload,
});

export const setTotal = (payload) => ({
  type: ActionType.SET_TOTAL,
  payload,
});
