import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeadText from "@/ui/HeadText";
import ProductsList from "@/ui/products/ProductsList";
import Spinner from "@/ui/spinner/Spinner";
import Container from "@/ui/Container";
import { productCardProps, productState } from "@/utils/types";
import { getProducts } from "@/store/service/productService";
import { AppDispatch } from "@/store";

export default function NewArrivals() {
  const [mobileWirelessProducts, setMobileWirelessProducts] = useState<
    productCardProps[]
  >([]);

  const dispatch = useDispatch<AppDispatch>();

  const { isLoading } = useSelector((state: productState) => state.product);

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
