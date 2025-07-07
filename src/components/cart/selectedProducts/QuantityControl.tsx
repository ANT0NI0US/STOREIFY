import { useDispatch } from "react-redux";
import { FaMinus, FaPlus } from "react-icons/fa6";
import Button from "@/ui/Button";
import { CartItem } from "@/utils/types";
import { AppDispatch } from "@/store";
import { cartActions } from "@/store/slice/cartSlice";

interface QuantityControlProps {
  item: CartItem;
}

export default function QuantityControl({ item }: QuantityControlProps) {
  const dispatch = useDispatch<AppDispatch>();

  const handleDecrease = () => {
    dispatch(cartActions.MinimizeQuantityItem(item?.id));
  };

  const handleIncrease = () => {
    dispatch(cartActions.MaximizeQuantityItem(item?.id));
  };
  return (
    <div className="flexBetween bg-secondary-light-color dark:bg-secondary-dark-color gap-5 rounded-md">
      <Button
        variation="secondary"
        AriaLabel="minus Product"
        disabled={item?.quantity === 1}
        onClick={handleDecrease}
        size="actions"
      >
        <FaMinus />
      </Button>
      <span className="text-2xl font-extrabold">{item?.quantity}</span>
      <Button
        variation="secondary"
        AriaLabel="Plus Product"
        onClick={handleIncrease}
        size="actions"
      >
        <FaPlus />
      </Button>
    </div>
  );
}
