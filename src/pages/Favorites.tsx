import FavoriteProductTable from "@/components/favorites/FavoriteProductTable";
import { CommonSection, Container } from "@/ui";
import useHelmet from "@/hooks/useHelmet";
import { useAppSelector } from "@/hooks/useAppSelector";

export default function Favorites() {
  useHelmet("Favorites");
  const { perfectItems } = useAppSelector((state) => state.cart);
  return (
    <>
      <CommonSection title="Favorites" />
      <section className="bg-secondary-light-color dark:bg-secondary-dark-color w-full py-[40px] md:py-[80px]">
        <Container>
          <FavoriteProductTable perfectItems={perfectItems} />
        </Container>
      </section>
    </>
  );
}
