import { useState } from "react";
import ProductsList from "@/ui/products/ProductsList";
import Spinner from "@/ui/spinner/Spinner";
import { newProductProps } from "@/utils/types";
import ToggleProductsView from "./ToggleProductsView";

interface allProductsProps {
  isLoading: boolean;
  productsData: newProductProps[];
}

export default function Products({
  productsData,
  isLoading,
}: allProductsProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  if (isLoading) return <Spinner height="h-[200px]" />;

  if (productsData.length === 0)
    return (
      <div className="pb-[80px] text-center text-3xl">No Products Found!</div>
    );

  return (
    <>
      <ToggleProductsView
        productsData={productsData}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />
      <ProductsList items={productsData} viewMode={viewMode} />
    </>
  );
}
