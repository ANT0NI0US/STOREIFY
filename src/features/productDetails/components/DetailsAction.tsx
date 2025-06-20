import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
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
      <motion.div className="w-full sm:w-[200px]" whileTap={{ scale: 1.1 }}>
        <Button onClick={addToCart} ArialLabel="Add to cart">
          Add to Cart
        </Button>
      </motion.div>

      <motion.div className="w-full sm:w-[200px]" whileTap={{ scale: 1.1 }}>
        <Button onClick={addToFavorite} ArialLabel="Add to favorite">
          Add to Favorites
        </Button>
      </motion.div>
    </div>
  );
}
