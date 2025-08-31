import CartDetails from "@/components/cart/CartDetails";
import { CommonSection, Container } from "@/ui";
import useHelmet from "@/hooks/useHelmet";

export default function Cart() {
  useHelmet("Shopping Cart");

  return (
    <>
      <CommonSection title="Shopping Cart" />
      <section className="bg-secondary-light-color dark:bg-secondary-dark-color py-[40px] md:py-[80px]">
        <Container>
          <CartDetails />
        </Container>
      </section>
    </>
  );
}
