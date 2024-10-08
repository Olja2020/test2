export interface IFlower {
  id: number,
  idshop: number,
  name: string,
  price: number,
  discount: number,
  imageurl: string,
}

export interface IRootState {
  selectedcart: IObjectForCart[],
  currentFlowers: IFlower[],
  allFlowers: IFlower[],
  error: string,
  allShops: IShops[],
  coupons: ICoupon[],
  currentTotal: string,
}

export interface IObjectForCart extends IFlower {
  quantity: number,
}

export interface IShops {
  id: number,
  name: string, 
  description: string, 
  href: string,
  iconurl: string,
  lat: number,
  lng: number, 
}

export interface IOrder {
  id: string,
  name: string, 
  email: string, 
  phone: string,
  address: string,
  order: IObjectForCart[],
  total: string, 
}

export interface IDoneOrders {
  id: string,
  name: string, 
  email: string, 
  phone: string,
  address: string,
  order: string,
  createdAt: string,
  total: string, 
}

export interface ICoupon {
  id: string,
  name: string, 
  discount: number, 
  code: string,
  stateUsing: string,
  imgUrl: string,
}
