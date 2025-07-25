import { useSelector } from "react-redux";
import SelectedProducts from "./selectedProducts/SelectedProducts";
import Subtotal from "./Subtotal";
import Empty from "@/ui/Empty";
import { cartSliceState } from "@/utils/types";
import ClearCart from "./ClearCart";

export default function CartDetails() {
  const allCartItems = useSelector(
    (state: cartSliceState) => state.cart.cartItems,
  );

  if (!allCartItems.length || !allCartItems)
    return <Empty title="No items Added To The Cart" />;
  return (
    <>
      <ClearCart />
      <div className="grid grid-cols-12 gap-4 sm:gap-6">
        <SelectedProducts allCartItems={allCartItems} />
        <Subtotal />
      </div>
    </>
  );
}
