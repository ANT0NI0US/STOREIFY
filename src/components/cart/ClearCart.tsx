import toast from "react-hot-toast";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { Button } from "@/ui";
import { resetCartItemsAndTotal } from "@/store/slice/cartSlice";
import { useAppDispatch } from "@/hooks/useAppDispatch";

export default function ClearCart() {
  const dispatch = useAppDispatch();
  const handleResetCart = () => {
    dispatch(resetCartItemsAndTotal());
    toast.success("Cart has been cleared successfully");
  };
  return (
    <Button
      aria-label="Clear Cart"
      title="Clear Cart"
      onClick={handleResetCart}
      styles="w-full! md:w-[150px]! ms-auto mb-3.5 md:mb-5"
    >
      <MdOutlineRemoveShoppingCart />
      <span>Clear Cart</span>
    </Button>
  );
}
