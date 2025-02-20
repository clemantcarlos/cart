import { useContext } from "react";
import { APIResponse } from "../components/Products";
import { FiltersContext } from "../context/filters";

export default function useFilter() {
  const { filters, setFilters } = useContext(FiltersContext);

  const filterProducts = (products: APIResponse[]) => {
    return products.filter((product) => {
      return (
        product.price >= filters.minPrice &&
        (filters.category === "all" || product.category === filters.category)
      );
    });
  };

  return { filters, filterProducts, setFilters };
}
