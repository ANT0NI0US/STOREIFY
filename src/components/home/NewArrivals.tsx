import { useState, useEffect } from "react";
import { Container, HeadText, ProductsList, Spinner } from "@/ui";
import { productCardProps } from "@/utils/types";
import { getProducts } from "@/store/service/productService";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";

export default function NewArrivals() {
  const [mobileWirelessProducts, setMobileWirelessProducts] = useState<
    productCardProps[]
  >([]);

  const dispatch = useAppDispatch();

  const { isLoading } = useAppSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts())
      .unwrap()
      .then((allProducts) => {
        const filteredWirelessMobiles = allProducts.filter(
          (item: productCardProps) =>
            item.category === "mobile" || item.category === "wireless",
        );
        setMobileWirelessProducts(filteredWirelessMobiles);
      })
      .catch((error) => {
        throw new error();
      });
  }, [dispatch]);

  if (isLoading) return <Spinner height="h-[200px]" />;

  return (
    <section className="bg-secondary-light-color dark:bg-secondary-dark-color w-full py-[40px] md:py-[80px]">
      <Container>
        <HeadText text="New Arrivals" />

        <ProductsList items={mobileWirelessProducts} />
      </Container>
    </section>
  );
}
