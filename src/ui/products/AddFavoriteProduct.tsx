import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { RiHeartFill, RiHeartLine } from "react-icons/ri";
import { cartSliceState, newProductProps } from "@/utils/types";
import { cartActions } from "@/store/slice/cartSlice";
import { AppDispatch } from "@/store";

interface AddFavoriteProductProps {
  item: newProductProps;
  viewMode?: "grid" | "list";
}

export default function AddFavoriteProduct({
  item,
  viewMode = "grid",
}: AddFavoriteProductProps) {
  const dispatch = useDispatch<AppDispatch>();

  const { perfectItems } = useSelector((state: cartSliceState) => state.cart);
  const checkProductExistInPerfectProducts = (id: string) => {
    return perfectItems?.find((item) => item.id === id);
  };

  const addToFavorite = () => {
    if (item.id) {
      dispatch(
        cartActions.addPerfectItem({
          id: item.id,
          productName: item.productName,
          price: item.price,
          imgUrl: item.imgUrl,
        }),
      );
    }
  };

  const { id } = item;
  return (
    <motion.div
      title={
        id && checkProductExistInPerfectProducts(id)
          ? "Remove from Favorites"
          : "Add To Favorites"
      }
      onClick={addToFavorite}
      whileTap={{ scale: 1.2 }}
      className={`${viewMode === "grid" ? "left-0" : "right-0"} flexCenter absolute top-0 z-10 cursor-pointer rounded-full p-2`}
    >
      {id && checkProductExistInPerfectProducts(id) ? (
        <RiHeartFill className="text-error-light-color dark:text-error-dark-color size-7" />
      ) : (
        <RiHeartLine className="text-error-light-color dark:text-error-dark-color size-7" />
      )}
    </motion.div>
  );
}
