import Banner from "@/components/home/Banner";
import NewArrivals from "@/components/home/NewArrivals";
import Experiences from "@/components/home/Experiences";
import Offers from "@/components/home/offers/Offers";
import OurHappyCustomers from "@/components/home/OurHappyCustomers";
import Materials from "@/components/home/Materials";
import useHelmet from "@/hooks/useHelmet";

export default function Home() {
  useHelmet("Home");
  return (
    <>
      <Banner />
      <NewArrivals />
      <Experiences />
      <Offers />
      <Materials />
      <OurHappyCustomers />
    </>
  );
}
