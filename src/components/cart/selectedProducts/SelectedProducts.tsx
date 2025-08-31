import SelectedProductItem from "./SelectedProductItem";
import { CartItem } from "@/utils/types";

interface SelectedProductsProps {
  allCartItems: CartItem[];
}

export default function SelectedProducts({
  allCartItems,
}: SelectedProductsProps) {
  return (
    <div className="divide-accent-light-color border-accent-light-color dark:divide-accent-dark-color dark:border-accent-dark-color bg-primary-light-color dark:bg-primary-dark-color col-span-12 divide-y-[0.5px] rounded-md border-[0.5px] md:col-span-8">
      {allCartItems?.map((item) => (
        <SelectedProductItem key={item.id} item={item} />
      ))}
    </div>
  );
}
