import { useState } from "react";
import ToggleProductsView from "./ToggleProductsView";
import PaginationControls from "./PaginationControls";
import { ProductsList, Spinner } from "@/ui";
import { newProductProps } from "@/utils/types";
import { PAGE_SIZE } from "@/utils/constants";

interface AllProductsProps {
  isLoading: boolean;
  productsData: newProductProps[];
  setCurrentPage: (currentPage: number) => void;
  currentPage: number;
}

export default function Products({
  productsData,
  isLoading,
  setCurrentPage,
  currentPage,
}: AllProductsProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  if (isLoading) return <Spinner height="h-[200px]" />;

  if (productsData.length === 0)
    return (
      <div className="pb-[80px] text-center text-3xl">No Products Found!</div>
    );

  const indexOfLastProduct = currentPage * PAGE_SIZE;
  const indexOfFirstProduct = indexOfLastProduct - PAGE_SIZE;
  const currentProducts = productsData.slice(
    indexOfFirstProduct,
    indexOfLastProduct,
  );
  const totalPages = Math.ceil(productsData.length / PAGE_SIZE);

  return (
    <>
      <ToggleProductsView
        productsData={productsData}
        viewMode={viewMode}
        setViewMode={setViewMode}
      />
      <ProductsList items={currentProducts} viewMode={viewMode} />

      {totalPages > 1 && (
        <PaginationControls
          currentPage={currentPage}
          totalPages={totalPages}
          count={productsData.length}
          onPageChange={setCurrentPage}
        />
      )}
    </>
  );
}
