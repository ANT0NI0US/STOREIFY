import AddFavoriteProduct from "./AddFavoriteProduct";
import ProductImage from "./ProductImage";
import ProductContent from "./ProductContent";
import { newProductProps } from "@/utils/types";

export default function ProductCard({ item }: { item: newProductProps }) {
  const { imgUrl, productName } = item;
  return (
    <div className="flexBetween group hover:shadow-accent-light-color dark:hover:shadow-accent-dark-color dark:bg-primary-dark-color bg-primary-light-color relative flex-col overflow-hidden rounded-md shadow-lg transition-all duration-500">
      {/* ADD TO FAVORITES */}
      <AddFavoriteProduct item={item} />
      {/* PRODUCT IMAGE */}
      <ProductImage imgUrl={imgUrl} productName={productName} />
      {/* PRODUCT CONTENT */}
      <ProductContent item={item} />
    </div>
  );
}
