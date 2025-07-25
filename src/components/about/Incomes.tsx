import { AiFillShop } from "react-icons/ai";
import { AiFillDollarCircle } from "react-icons/ai";
import { BiSolidShoppingBags } from "react-icons/bi";
import { GiTakeMyMoney } from "react-icons/gi";
import HeadText from "@/ui/HeadText";
import Widgets from "@/ui/Widgets";
import Container from "@/ui/Container";
import { widgetProps } from "@/utils/types";

const incomesData: widgetProps[] = [
  {
    icon: AiFillShop,
    title: "10.5k",
    description: "Sellers active our site",
  },
  {
    icon: AiFillDollarCircle,
    title: "33k",
    description: "Monthly Product Sale",
  },
  {
    icon: BiSolidShoppingBags,
    title: "45.5k",
    description: "Customer active in our site",
  },
  {
    icon: GiTakeMyMoney,
    title: "25k",
    description: "Annual gross sale in our site",
  },
];

export default function Incomes() {
  return (
    <section className="py-[40px] md:py-[80px]">
      <Container>
        <HeadText text="Incomes" />
        <Widgets widgetsData={incomesData} type="noColor" />
      </Container>
    </section>
  );
}
