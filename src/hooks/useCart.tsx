import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";
import {
  CreateSellType,
  InCartProductType,
  ProductType,
  UserType,
} from "../global/types";
import { Alert } from "react-native";

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextData {
  cart: InCartProductType[];
  cartTotal: number;
  productsList: ProductType[];
  addProductCart(id: number): void;
  updateProductAmount(productId: number, newAmount: number): void;
  createSell(user: UserType): Promise<void>;
  isLoading: boolean;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<InCartProductType[]>([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [productsList, setProductsList] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  //Fetch products
  useEffect(() => {
    async function getProductsList() {
      const products = await api
        .get("products")
        .then((res) => {
          setProductsList(res.data);
          return res.data;
        })
        .catch((err) => console.log(err));

      return products;
    }
    getProductsList();
  }, []);

  // Verifica se há estoque do produto solicitado retornando um boolean
  function stockVerify(productId: number, cartAmount: number) {
    const verifiedProduct = productsList.find(
      (product) => product.id === productId
    );

    if (cartAmount > verifiedProduct!.stock) {
      return false;
    } else return true;
  }

  async function updateCartTotal() {
    let rawTotal: number = 0;

    cart.forEach((product) => {
      rawTotal += product.price * product.inCartAmount;
    });

    setCartTotal(rawTotal);
  }

  async function removeProductCart(productId: number) {
    let updatedCart: InCartProductType[] = [];

    cart.forEach((product) => {
      if (productId !== product.id) {
        updatedCart.push(product);
      }
    });

    setCart(updatedCart);
  }

  async function updateProductAmount(productId: number, newAmount: number) {
    if (newAmount <= 0) {
      removeProductCart(productId);
    } else {
      if (stockVerify(productId, newAmount)) {
        const updatedCart = cart.map((product) => {
          if (product.id === productId) {
            const updatedProduct = {
              ...product,
              inCartAmount: newAmount,
            };
            return updatedProduct;
          } else return product;
        });

        setCart(updatedCart);
      } else {
        Alert.alert("Fora de estoque");
      }
    }
  }

  async function addProductCart(productId: number) {
    const alreadyInCart =
      cart.find((product) => product.id === productId) !== undefined;

    // If already this product in cart, just increse your amount
    if (alreadyInCart) {
      const toUpdateProduct = cart.find((product) => productId === product.id);

      updateProductAmount(productId, toUpdateProduct!.inCartAmount + 1);
    } else {
      // If dont have the same product in cart: add 1 unit
      const toAddProduct = productsList.find(
        (product) => productId === product.id
      );

      setCart((prev) => [...prev, { ...toAddProduct!, inCartAmount: 1 }]);
    }
  }

  async function createSell(user: UserType) {
    setIsLoading(true);

    const newSell: CreateSellType = {
      sell: {
        user_id: user.id,
        total: cartTotal,
      },
      products: cart.map((product) => {
        const sellProduct = {
          product_id: product.id,
          amount: product.inCartAmount,
        };
        return sellProduct;
      }),
    };

    const sellConfirm = await api
      .post("/add/sell", newSell, {
        headers: {
          authorization: user.auth_token,
        },
      })
      .then(() => {
        setCart([]);
        setCartTotal(0);
        setIsLoading(false);

        Alert.alert("Compra concluída!");
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  // Update value of cart in every change of cart
  useEffect(() => {
    updateCartTotal();
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartTotal,
        productsList,
        addProductCart,
        updateProductAmount,
        createSell,
        isLoading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
