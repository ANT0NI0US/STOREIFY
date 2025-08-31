import toast from "react-hot-toast";
import { MdAddShoppingCart } from "react-icons/md";
import { RiHeartAddLine } from "react-icons/ri";
import { Button } from "@/ui";
import { addItem, addPerfectItem } from "@/store/slice/cartSlice";
import { useAppDispatch } from "@/hooks/useAppDispatch";

interface ActionsProps {
  id: string;
  productName: string;
  imgUrl: string;
  price: number;
}

export default function DetailsAction({
  id,
  productName,
  price,
  imgUrl,
}: ActionsProps) {
  const dispatch = useAppDispatch();
  const addToCart = () => {
    dispatch(
      addItem({
        id,
        productName,
        price,
        imgUrl,
      }),
    );
    toast.success("Product added successfully");
  };

  const addToFavorite = () => {
    dispatch(
      addPerfectItem({
        id,
        productName,
        price,
        imgUrl,
      }),
    );
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row md:justify-start">
      <Button
        onClick={addToCart}
        aria-label="Add to cart"
        title="Add to cart"
        styles="w-full! sm:w-[200px]!"
      >
        <MdAddShoppingCart />
        <span>Add to Cart</span>
      </Button>

      <Button
        onClick={addToFavorite}
        aria-label="Add to favorite"
        title="Add to favorite"
        styles="w-full! sm:w-[200px]!"
      >
        <RiHeartAddLine />
        <span>Add to Favorites</span>
      </Button>
    </div>
  );
}
