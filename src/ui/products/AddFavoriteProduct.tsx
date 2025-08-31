import { motion } from "framer-motion";
import { RiHeartFill, RiHeartLine } from "react-icons/ri";
import { newProductProps } from "@/utils/types";
import { addPerfectItem } from "@/store/slice/cartSlice";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";

interface AddFavoriteProductProps {
  item: newProductProps;
  viewMode?: "grid" | "list";
}

export default function AddFavoriteProduct({
  item,
  viewMode = "grid",
}: AddFavoriteProductProps) {
  const dispatch = useAppDispatch();

  const { perfectItems } = useAppSelector((state) => state.cart);
  const checkProductExistInPerfectProducts = (id: string) => {
    return perfectItems?.find((item) => item.id === id);
  };

  const addToFavorite = () => {
    if (item.id) {
      dispatch(
        addPerfectItem({
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
