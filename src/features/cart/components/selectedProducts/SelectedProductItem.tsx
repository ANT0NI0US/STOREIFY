import ProductImage from "./ProductImage";
import ProductDetails from "./ProductDetails";
import QuantityControl from "./QuantityControl";
import DeleteButton from "./DeleteButton";
import { CartItem } from "@/utils/types";

interface SelectedProductItemProps {
  item: CartItem;
}

export default function SelectedProductItem({
  item,
}: SelectedProductItemProps) {
  return (
    <div className="flexBetween relative h-[350px] flex-col gap-1 p-3.5 md:h-[250px] md:flex-row md:p-5">
      <DeleteButton item={item} />
      <ProductImage imgUrl={item.imgUrl} productName={item.productName} />
      <ProductDetails productName={item.productName} price={item.price} />
      <QuantityControl item={item} />
    </div>
  );
}
