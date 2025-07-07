import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { cartActions } from "@/store/slice/cartSlice";
import Button from "@/ui/Button";

export default function ClearCart() {
  const dispatch = useDispatch();
  const handleResetCart = () => {
    dispatch(cartActions.resetCartItemsAndTotal());
    toast.success("Cart has been cleared successfully");
  };
  return (
    <Button
      AriaLabel="Clear Cart"
      onClick={handleResetCart}
      Font="w-full! md:w-[150px]! ms-auto mb-3.5 md:mb-5"
    >
      <MdOutlineRemoveShoppingCart />
      <span>Clear Cart</span>
    </Button>
  );
}
