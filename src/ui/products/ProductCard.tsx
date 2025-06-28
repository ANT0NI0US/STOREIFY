import AddFavoriteProduct from "./AddFavoriteProduct";
import ProductImage from "./ProductImage";
import ProductContent from "./ProductContent";
import { newProductProps } from "@/utils/types";

export default function ProductCard({ item }: { item: newProductProps }) {
  const { imgUrl, productName } = item;
  return (
    <div className="flexBetween group hover:shadow-primary-light-color dark:hover:shadow-primary-color dark:bg-main-color bg-primary-light-color relative flex-col overflow-hidden rounded-md shadow-md drop-shadow-2xl transition-all duration-500 hover:shadow-2xl">
      {/* ADD TO FAVORITES */}
      <AddFavoriteProduct item={item} />
      {/* PRODUCT IMAGE */}
      <ProductImage imgUrl={imgUrl} productName={productName} />
      {/* PRODUCT CONTENT */}
      <ProductContent item={item} />
    </div>
  );
}
