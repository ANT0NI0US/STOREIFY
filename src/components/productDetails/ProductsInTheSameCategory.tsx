import ProductsList from "@/ui/products/ProductsList";
import HeadText from "@/ui/HeadText";
import Container from "@/ui/Container";
import { productCardProps } from "@/utils/types";

interface sameCategoryProps {
  sameCategories: productCardProps[];
}

export default function ProductsInTheSameCategory({
  sameCategories,
}: sameCategoryProps) {
  return (
    <section className="bg-secondary-light-color dark:bg-secondary-dark-color">
      <Container Styles="py-[40px] md:py-[80px]">
        <HeadText text="You might also like" />

        <ProductsList items={sameCategories} />
      </Container>
    </section>
  );
}
