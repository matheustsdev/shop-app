export interface ProductType {
  id: number;
  title: string;
  price: number;
  img_url: string;
  description: string;
  category: number;
  stock: number;
}

export interface CategoryType {
  id: number;
  name: string;
}

export interface InCartProductType extends ProductType {
  inCartAmount: number;
}

export interface UserType {
  id: string;
  nickname?: string;
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

export interface CreateSellType {
  sell: {
    user_id: string;
    total: number;
  };
  products: {
    product_id: number;
    amount: Number;
  }[];
}
