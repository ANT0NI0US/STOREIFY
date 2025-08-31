import { Container, HeadText, ProductsList } from "@/ui";
import { productCardProps } from "@/utils/types";

interface SameCategoryProps {
  sameCategories: productCardProps[];
}

export default function ProductsInTheSameCategory({
  sameCategories,
}: SameCategoryProps) {
  return (
    <section className="bg-secondary-light-color dark:bg-secondary-dark-color">
      <Container Styles="py-[40px] md:py-[80px]">
        <HeadText text="You might also like" />

        <ProductsList items={sameCategories} />
      </Container>
    </section>
  );
}
