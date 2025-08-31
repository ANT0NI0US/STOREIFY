import type { IconType } from "react-icons";

/*----------------------------------------  AUTHENTICATION ----------------------------------------*/
export interface loginServiceState {
  isLoading: boolean;
  user: userProps | object;
  errors: string | null;
  isAdmin: boolean;
  isAuthenticated: boolean | undefined;
  token: string | null;
}
/*----------------------------------------  NAVBAR + FOOTER ----------------------------------------*/
export interface arrLinks {
  path: string;
  text: string;
}
/*----------------------------------------  NAVBAR + FOOTER ----------------------------------------*/
export interface Review {
  rating: number | null;
  text: string;
  name?: string;
}

export interface Item {
  id: string;
  productName: string;
  imgUrl: string | File | null;
  price: number;
}

export interface RemovedProduct {
  id: string;
  productName: string;
}

export interface CartItem extends Item {
  quantity?: number;
  totalPrice?: number;
}

export interface CartState {
  cartItems: CartItem[];
  totalAmount: number;
  totalQuantity: number;
  perfectItems: Item[];
  totalFavoriteItemsQuantity: number;
}
/*----------------------------------------  ADMIN ----------------------------------------*/
/* ALL USERS */
export interface userProps {
  id?: string;
  displayName: string;
  email: string;
  photoURL: string;
  type: "admin" | "user";
  uid?: string;
  cart: { productID: string }[];
  favorites: { productID: string }[];
}

export interface userServiceState {
  isLoading: boolean;
  user: userProps | object;
  errors: string | null;
}

/* ALL PRODUCTS */
export interface productServiceState {
  isLoading: boolean;
  product: newProductProps | object;
  errors: null | string;
  allProducts: newProductProps[];
}

export interface order {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  code: string;
  country: string;
}

/* ALL ORDERS */
export interface ordersFireBase extends order {
  id?: string;
  orderDate: string;
  deliveryDate: string;
  items: CartItem[];
  itemsAmount: number;
  itemsQuantity: number;
  userId: string;
  userPhoto: string;
}

export interface newOrderProps extends order {
  id?: string;
  cartItems: CartItem[];
  totalAmount: number;
  totalQuantity: number;
  uid: string;
  photoURL: string;
  orderDate: string;
  deliveryDate: string;
}

export interface orderServiceState {
  isLoading: boolean;
  isCertainOrderLoading: boolean;
  errors: null | string;
  order: ordersFireBase | null;
  allOrders: ordersFireBase[];
}
/*----------------------------------------  UI ----------------------------------------*/
/*  WIDGETS */
export interface widgetProps {
  icon: IconType;
  title: string;
  description: string;
}

export interface WidgetType {
  type?: "color" | "noColor";
}

export interface WidgetsProps extends WidgetType {
  widgetsData: widgetProps[];
}

/*  PRODUCTS */
export interface newProductProps {
  id?: string;
  productName: string;
  imgUrl: File | null | string;
  category: string;
  price: number;
  shortDesc: string;
  description: string;
  reviews?: Review[];
  avgRating?: number;
}

export interface productCardProps {
  id: string;
  productName: string;
  imgUrl: string;
  category: string;
  price: number;
  shortDesc: string;
  description: string;
  reviews?: Review[];
  avgRating?: number;
}
/*----------------------------------------  CONTACT ----------------------------------------*/
export interface ContactDataProps {
  address: string;
  email: string;
  phone: string;
  sms: string;
}

export interface ContactServiceState {
  isLoading: boolean;
  Contacts: ContactDataProps | null;
  errors: null | string;
}
