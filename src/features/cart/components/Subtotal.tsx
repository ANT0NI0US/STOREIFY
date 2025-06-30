import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "@/ui/Button";
import { cartSliceState } from "@/utils/types";

export default function Subtotal() {
  const navigate = useNavigate();
  const { totalAmount } = useSelector((state: cartSliceState) => state.cart);
  return (
    <div className="flexCenter border-accent-light-color dark:border-accent-dark-color bg-primary-light-color dark:bg-primary-dark-color col-span-12 h-fit flex-col rounded-md border-[0.5px] p-5 sm:items-start sm:justify-start md:col-span-4">
      <div className="flexCenter w-full gap-5 md:block">
        <h6 className="text-3xl font-medium">Subtotal</h6>
        <span className="text-xl font-extrabold">${totalAmount}</span>
      </div>
      <p className="mt-5 w-full text-center text-sm capitalize md:text-left">
        taxes and shipping will calculate in checkout
      </p>
      <div className="mt-5 flex w-full flex-col items-center justify-center gap-5 md:items-start">
        <Button
          ArialLabel="Go-To-Shop"
          onClick={() => navigate("/shop")}
          Font="w-[200px]!"
        >
          <span>Continue Shopping</span>
        </Button>
        <Button
          ArialLabel="Go-To-Checkout"
          onClick={() => navigate("/checkout")}
          Font="w-[100px]!"
        >
          <span>Checkout</span>
        </Button>
      </div>
    </div>
  );
}
