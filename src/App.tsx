import Header from "./components/Header";
import Cart from "./components/Cart";
import Products from "./components/Products";
import Footer from "./components/Footer";

import useFilter from "./hooks/useFilters";
import { products } from "./mocks/products.json";
import { CartProvider } from "./context/cart";

function App() {
  const { filterProducts } = useFilter();

  const filteredProducts = filterProducts(products);

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products filteredProducts={filteredProducts} />
      <Footer />
    </CartProvider>
  );
}

export default App;
