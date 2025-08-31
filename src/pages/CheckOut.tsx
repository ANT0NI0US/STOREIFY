import BillsDetails from "@/components/checkout/BillsDetails";
import { CommonSection, Container } from "@/ui";
import useHelmet from "@/hooks/useHelmet";

export default function CheckOut() {
  useHelmet("Checkout");

  return (
    <>
      <CommonSection title="Checkout" />
      <section className="py-[40px] md:py-[80px]">
        <Container>
          <BillsDetails />
        </Container>
      </section>
    </>
  );
}
