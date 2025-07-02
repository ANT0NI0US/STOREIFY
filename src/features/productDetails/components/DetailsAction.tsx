import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { BsBox2HeartFill } from "react-icons/bs";
import { FaOpencart } from "react-icons/fa6";
import Button from "@/ui/Button";
import { cartActions } from "@/store/slice/cartSlice";
import { AppDispatch } from "@/store";

interface actionsProps {
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
}: actionsProps) {
  const dispatch = useDispatch<AppDispatch>();
  const addToCart = () => {
    dispatch(
      cartActions.addItem({
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
      cartActions.addPerfectItem({
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
        ArialLabel="Add to cart"
        Font="w-full! sm:w-[200px]!"
      >
        <FaOpencart />
        <span>Add to Cart</span>
      </Button>

      <Button
        onClick={addToFavorite}
        ArialLabel="Add to favorite"
        Font="w-full! sm:w-[200px]!"
      >
        <BsBox2HeartFill />
        <span>Add to Favorites</span>
      </Button>
    </div>
  );
}
