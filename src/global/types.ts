export interface ProductType {
  product_id: number;
  title: string;
  price: number;
  image_url: string;
  description: string;
  category: number;
  stock: number;
}

export interface CategoryType {
  category_id: number;
  name: string;
}

export interface InCartProductType extends ProductType {
  inCartAmount: number;
}

export interface UserType {
  user_id: number;
  nickname: string;
  email: string;
  password: string;
  fullname: string;
  auth_token: string;
}

export interface SignInUser {
  nickname: string;
  email: string;
  password: string;
  fullname: string;
}
