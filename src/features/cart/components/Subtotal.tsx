import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";
import Button from "@/ui/Button";
import { cartSliceState } from "@/utils/types";

export default function Subtotal() {
  const navigate = useNavigate();
  const { totalAmount } = useSelector((state: cartSliceState) => state.cart);
  return (
    <div className="flexCenter border-accent-light-color dark:border-accent-dark-color bg-primary-light-color dark:bg-primary-dark-color col-span-12 h-fit flex-col rounded-md border-[0.5px] p-3.5 sm:items-start sm:justify-start md:col-span-4 md:p-5">
      <div className="flexCenter w-full gap-5 md:block">
        <h6 className="text-3xl">Subtotal</h6>
        <span className="text-xl font-semibold">${totalAmount}</span>
      </div>
      <p className="my-3.5 w-full text-center text-sm capitalize md:my-5 md:text-left">
        taxes and shipping will calculate in checkout
      </p>
      <div className="flex w-full flex-col items-center justify-center gap-3.5 md:items-start md:gap-5">
        <Button
          ArialLabel="Go-To-Shop"
          variation="secondary"
          onClick={() => navigate("/shop")}
          Font="w-[200px]!"
        >
          <MdOutlineShoppingCart />
          <span>Continue Shopping</span>
        </Button>
        <Button
          ArialLabel="Go-To-Checkout"
          variation="secondary"
          onClick={() => navigate("/checkout")}
          Font="w-[150px]!"
        >
          <IoBagCheckOutline />
          <span>Checkout</span>
        </Button>
      </div>
    </div>
  );
}
