import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { newProductProps } from "@/utils/types";
import { FaOpencart } from "react-icons/fa6";
import { AppDispatch } from "@/store";
import { cartActions } from "@/store/slice/cartSlice";
import Button from "../Button";

export default function ProductContent({ item }: { item: newProductProps }) {
  const dispatch = useDispatch<AppDispatch>();

  const addToCart = () => {
    if (item.id) {
      dispatch(
        cartActions.addItem({
          id: item.id,
          productName: item.productName,
          price: item.price,
          imgUrl: item.imgUrl,
        }),
      );
      toast.success("Product added to the cart successfully");
    }
  };

  const { id, productName, category, price, shortDesc } = item;

  return (
    <div className="bg-accent-light-color dark:bg-accent-dark-color w-full rounded-t-xl">
      <div className="p-3 text-start">
        <h3 className="text-lg font-semibold sm:text-xl">
          <Link to={`/shop/${id}`}>{productName}</Link>
        </h3>
        <span className="border-text-light-color dark:border-text-dark-color mt-1.5 mb-2 block w-fit rounded-md border-2 p-1 text-xs capitalize">
          {category}
        </span>
        <p className="w-full text-xs leading-6 sm:w-11/12 sm:text-sm">
          {shortDesc}
        </p>
      </div>
      <div className="flexBetween gap-2 p-3 transition-all duration-200">
        <div>
          <h4 className="tracking-widest uppercase">Price</h4>
          <span className="text-lg font-extrabold sm:text-xl">${price}</span>
        </div>
        <Button
          onClick={addToCart}
          ArialLabel="Add to cart"
          variation="secondary"
          Font="w-[140px]!"
        >
          <FaOpencart size={20} />
          <span>Add to cart</span>
        </Button>
      </div>
    </div>
  );
}
