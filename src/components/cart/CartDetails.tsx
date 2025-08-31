import SelectedProducts from "./selectedProducts/SelectedProducts";
import Subtotal from "./Subtotal";
import ClearCart from "./ClearCart";
import { Empty } from "@/ui";
import { useAppSelector } from "@/hooks/useAppSelector";

export default function CartDetails() {
  const { cartItems } = useAppSelector((state) => state.cart);

  if (!cartItems.length || !cartItems)
    return <Empty title="No items Added To The Cart" />;
  return (
    <>
      <ClearCart />
      <div className="grid grid-cols-12 gap-4 sm:gap-6">
        <SelectedProducts allCartItems={cartItems} />
        <Subtotal />
      </div>
    </>
  );
}
