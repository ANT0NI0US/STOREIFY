import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { MdAddShoppingCart } from "react-icons/md";
import Button from "../Button";
import { newProductProps } from "@/utils/types";
import { AppDispatch } from "@/store";
import { cartActions } from "@/store/slice/cartSlice";

interface ProductContentProps {
  item: newProductProps;
  viewMode?: "grid" | "list";
}

export default function ProductContent({
  item,
  viewMode = "grid",
}: ProductContentProps) {
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
    <div
      className={`${viewMode === "grid" ? "rounded-t-xl" : "justify-between rounded-l-xl"} bg-accent-light-color dark:bg-accent-dark-color flex w-full flex-col gap-3 p-3 md:gap-6`}
    >
      <div className="text-start">
        <h3
          className={`${viewMode === "grid" ? "" : "w-3/4"} text-lg font-semibold sm:text-xl`}
        >
          <Link to={`/shop/${id}`}>{productName}</Link>
        </h3>
        <span className="border-text-light-color dark:border-text-dark-color mt-1.5 mb-2 block w-fit rounded-md border-2 p-1 text-xs capitalize">
          {category}
        </span>
        <p className="w-full text-xs leading-5 sm:w-11/12 sm:text-sm sm:leading-6">
          {shortDesc}
        </p>
      </div>
      <div
        className={`flexBetween gap-2 ${viewMode === "grid" ? "" : "xs:flex-row flex-col"}`}
      >
        <div
          className={`${viewMode === "grid" ? "" : "xs:flex-col xs:items-start xs:gap-0 xs:w-fit flex w-full flex-row items-center justify-between gap-1"}`}
        >
          <h4 className="tracking-widest uppercase">Price</h4>
          <span className="text-lg font-extrabold sm:text-xl">${price}</span>
        </div>

        <Button
          onClick={addToCart}
          ArialLabel="Add to cart"
          variation="secondary"
          Font={`${viewMode === "grid" ? "w-[140px]!" : "w-full! xs:w-[140px]!"} `}
        >
          <MdAddShoppingCart />
          <span>Add to cart</span>
        </Button>
      </div>
    </div>
  );
}
