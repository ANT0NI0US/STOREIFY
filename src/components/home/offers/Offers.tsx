import Clock from "./Clock";
import Button from "@/ui/Button";
import Container from "@/ui/Container";

export default function Offers() {
  return (
    <section className="bg-secondary-light-color dark:bg-secondary-dark-color w-full overflow-hidden md:h-[530px]">
      <div className="flex h-full w-full flex-col-reverse md:flex-row md:items-center md:justify-evenly">
        <div className="h-full w-full basis-1/2">
          <img
            loading="lazy"
            className="h-full w-full"
            src="https://firebasestorage.googleapis.com/v0/b/furniture-ecommerce-841f4.appspot.com/o/siteImages%2Foffers.webp?alt=media&token=6499f1e7-b28f-4221-b0c2-3c3d6867b020"
            alt="counter-timer-img"
          />
        </div>
        <Container Styles="flexCenter flex-col md:basis-1/2 flex flex-col gap-4 py-[80px] md:px-[30px] text-center md:py-0 md:text-left">
          <p className="font-bold">PROMOTION</p>
          <h1 className="text-2xl font-semibold uppercase md:text-5xl">
            Hurry up! 40% OFF
          </h1>
          <p>Thousands of high tech are waiting for you</p>
          <h2 className="font-medium">Offer expires in:</h2>
          <Clock />

          <Button AriaLabel="Shopping Now" To="/shop" Font="mx-auto w-[150px]!">
            SHOP NOW
          </Button>
        </Container>
      </div>
    </section>
  );
}
