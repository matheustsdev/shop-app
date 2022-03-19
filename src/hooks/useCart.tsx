import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../services/api";
import { InCartProductType, ProductType } from "../global/types";

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextData {
  cart: InCartProductType[];
  cartTotal: string;
  productsList: ProductType[];
  addProductCart(id: number): void;
  updateProductAmount(productId: number, newAmount: number): void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<InCartProductType[]>([]);
  const [cartTotal, setCartTotal] = useState("");
  const [productsList, setProductsList] = useState<ProductType[]>([]);

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
      (product) => product.product_id === productId
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

    const formattedPrice = `R$ ${Math.floor(rawTotal / 100)},${String(
      rawTotal
    ).slice(-2)}`;

    setCartTotal(formattedPrice);
  }

  async function removeProductCart(productId: number) {
    let updatedCart: InCartProductType[] = [];

    cart.forEach((product) => {
      if (productId !== product.product_id) {
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
          if (product.product_id === productId) {
            const updatedProduct = {
              ...product,
              inCartAmount: newAmount,
            };
            return updatedProduct;
          } else return product;
        });

        setCart(updatedCart);
      }
    }
  }

  async function addProductCart(productId: number) {
    const alreadyInCart =
      cart.find((product) => product.product_id === productId) !== undefined;

    // If already this product in cart, just increse your amount
    if (alreadyInCart) {
      const toUpdateProduct = cart.find(
        (product) => productId === product.product_id
      );

      updateProductAmount(productId, toUpdateProduct!.inCartAmount + 1);
    } else {
      // If dont have the same product in cart: add 1 unit
      const toAddProduct = productsList.find(
        (product) => productId === product.product_id
      );

      setCart((prev) => [...prev, { ...toAddProduct!, inCartAmount: 1 }]);
    }
  }

  // Update value of cart in every change of cart
  useEffect(() => {
    updateCartTotal();
  }, [cart]);

  //   try {
  //     //Fetch da lista de produtos
  //     const productToAdd = (await api.get(`/products/${productId}`)).data;

  //     // Verifica se existe um produto no carrinho
  //     const alreadyInCart =
  //       cart.findIndex((product: Product) => product.id === productId) !== -1;

  //     const addedProductIndexInCart = cart.findIndex(
  //       (product: Product) => product.id === productId
  //     );

  //     // Caso já exista produto no cart, chamar updateProductAmount, caso não, adicionar o produto no cart.
  //     if (alreadyInCart) {
  //       const newAmount: UpdateProductAmount = {
  //         productId: productId,
  //         amount: cart[addedProductIndexInCart].amount + 1,
  //       };
  //       console.log(productToAdd);
  //       updateProductAmount(newAmount);
  //     } else {
  //       // Caso não exista produto no cart, adicionar um novo no mesmo.
  //       if (await haveStock(productId, 1)) {
  //         productToAdd.amount = 1;
  //         setCart((prevCart) => [...prevCart, productToAdd]);
  //       }
  //     }
  //   } catch (e: any) {
  //     //Tentativa de passar no test "should not be able add a product that does not exist"
  //     const promiseError = "Request failed with status code 404";
  //     if (e.message === promiseError) {
  //       toast.error("Erro na adição do produto");
  //     }
  //   }
  // };

  // Função que remove o produto
  // const removeProduct = (productId: number) => {
  //   // Verifica a existência do produto no cart
  //   const productIndexInCart = cart.findIndex(
  //     (product) => productId === product.id
  //   );
  //   try {
  //     if (productIndexInCart !== -1) {
  //       let newCart: Product[] = [];
  //       cart.forEach((product) => {
  //         if (product.id !== productId) {
  //           newCart.push(product);
  //         }
  //       });

  //       setCart(newCart);
  //     } else throw new Error();
  //   } catch {
  //     toast.error("Erro na remoção do produto");
  //   }
  // };

  // Função que atuliza a quantidade de produtos
  // const updateProductAmount = async ({
  //   productId,
  //   amount,
  // }: UpdateProductAmount) => {
  //   try {
  //     if (amount >= 1) {
  //       if (await haveStock(productId, amount)) {
  //         let updatedCart: Product[] = [];
  //         cart.forEach((product) => {
  //           if (product.id === productId) {
  //             const updatedProduct = {
  //               id: product.id,
  //               title: product.title,
  //               price: product.price,
  //               image: product.image,
  //               amount: amount,
  //             };
  //             updatedCart.push(updatedProduct);
  //           } else updatedCart.push(product);
  //         });

  //         setCart(updatedCart);
  //       }
  //     }
  //   } catch {
  //     console.log("Erro na alteração de quantidade do produto");
  //   }
  // };

  return (
    <CartContext.Provider
      value={{
        cart,
        cartTotal,
        productsList,
        addProductCart,
        updateProductAmount,
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
