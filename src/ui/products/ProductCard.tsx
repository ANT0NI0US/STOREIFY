import AddFavoriteProduct from "./AddFavoriteProduct";
import ProductImage from "./ProductImage";
import ProductContent from "./ProductContent";
import { newProductProps } from "@/utils/types";

interface ProductCardProps {
  item: newProductProps;
  viewMode?: "grid" | "list";
}

export default function ProductCard({
  item,
  viewMode = "grid",
}: ProductCardProps) {
  const { imgUrl, productName } = item;
  return (
    <div
      className={`${viewMode === "grid" ? "flexBetween flex-col" : "flex flex-row"} group hover:shadow-accent-light-color dark:hover:shadow-accent-dark-color dark:bg-primary-dark-color bg-primary-light-color relative overflow-hidden rounded-md shadow-lg transition-all duration-500`}
    >
      {/* ADD TO FAVORITES */}
      <AddFavoriteProduct item={item} viewMode={viewMode} />
      {/* PRODUCT IMAGE */}
      <ProductImage
        imgUrl={imgUrl}
        productName={productName}
        viewMode={viewMode}
      />
      {/* PRODUCT CONTENT */}
      <ProductContent item={item} viewMode={viewMode} />
    </div>
  );
}
