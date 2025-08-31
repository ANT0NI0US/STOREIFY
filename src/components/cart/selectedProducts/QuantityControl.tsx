import { FaMinus, FaPlus } from "react-icons/fa6";
import { Button } from "@/ui";
import { CartItem } from "@/utils/types";
import {
  MaximizeQuantityItem,
  MinimizeQuantityItem,
} from "@/store/slice/cartSlice";
import { useAppDispatch } from "@/hooks/useAppDispatch";

interface QuantityControlProps {
  item: CartItem;
}

export default function QuantityControl({ item }: QuantityControlProps) {
  const dispatch = useAppDispatch();

  const handleDecrease = () => {
    dispatch(MinimizeQuantityItem(item?.id));
  };

  const handleIncrease = () => {
    dispatch(MaximizeQuantityItem(item?.id));
  };
  return (
    <div className="flexBetween bg-secondary-light-color dark:bg-secondary-dark-color gap-5 rounded-md">
      <Button
        variation="secondary"
        aria-label="minus Product"
        title="minus Product"
        disabled={item?.quantity === 1}
        onClick={handleDecrease}
        size="actions"
      >
        <FaMinus />
      </Button>
      <span className="text-2xl font-extrabold">{item?.quantity}</span>
      <Button
        variation="secondary"
        aria-label="Plus Product"
        title="Plus Product"
        onClick={handleIncrease}
        size="actions"
      >
        <FaPlus />
      </Button>
    </div>
  );
}
