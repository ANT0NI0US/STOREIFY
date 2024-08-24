import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IoMdAdd } from "react-icons/io";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store";
import { cartActions } from "@/store/slice/cartSlice";
import { toast } from "react-toastify";
import { newProductProps } from "@/shared/types";

export default function ProductContent({ item }: { item: newProductProps }) {
  const dispatch = useDispatch<AppDispatch>();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      }),
    );
    toast.success("Product added to the cart successfully");
  };

  const { id, productName, category, price } = item;

  return (
    <div className="w-full">
      <div className="h-[130px] p-3 text-center gridScreen:text-left">
        <h3 className="mt-[15px] text-[1.3rem] font-[600] text-light-color gridScreen:text-[1.2rem]">
          <Link to={`/shop/${id}`}>{productName}</Link>
        </h3>
        <p className="text-sm capitalize">{category}</p>
      </div>
      <div className="flexBetween border-t-[0.5px] border-secondary-color p-3 transition-all duration-200 group-hover:border-primary-color">
        <span className="text-lg font-medium">${price}</span>
        <motion.div
          onClick={addToCart}
          whileTap={{ scale: 1.2 }}
          className="flexCenter cursor-pointer rounded-full bg-primary-color p-2"
          title="add to cart"
        >
          <IoMdAdd className="text-secondary-color" />
        </motion.div>
      </div>
    </div>
  );
}
