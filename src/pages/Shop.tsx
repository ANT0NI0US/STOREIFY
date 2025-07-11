import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterProducts from "@/components/shop/FilterProducts";
import Products from "@/components/shop/Products";
import CommonSection from "@/ui/CommonSection";
import Container from "@/ui/Container";
import { newProductProps, productState } from "@/utils/types";
import { getProducts } from "@/store/service/productService";
import { AppDispatch } from "@/store";
import useHelmet from "@/hooks/useHelmet";

export default function Shop() {
  useHelmet("Products");

  const dispatch = useDispatch<AppDispatch>();
  const [productsData, setProductData] = useState<newProductProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleChangingProduct = useCallback(
    (newProductData: newProductProps[]) => {
      setCurrentPage(1);
      setProductData(newProductData);
    },
    [],
  );

  const { isLoading, allProducts } = useSelector(
    (state: productState) => state.product,
  );

  useEffect(() => {
    dispatch(getProducts())
      .unwrap()
      .then((allProducts) => {
        setProductData(allProducts);
      });
  }, [dispatch]);

  return (
    <div className="bg-secondary-light-color dark:bg-secondary-dark-color">
      <CommonSection title="Products" />
      <Container Styles="py-[40px] md:py-[80px] flex flex-col gap-4 md:gap-6">
        <FilterProducts
          productsData={productsData}
          allProducts={allProducts}
          handleChangingProduct={handleChangingProduct}
        />

        <Products
          productsData={productsData}
          isLoading={isLoading}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </Container>
    </div>
  );
}
