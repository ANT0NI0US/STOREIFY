import { FaList } from "react-icons/fa6";
import { IoGrid } from "react-icons/io5";
import { Button } from "@/ui";
import { newProductProps } from "@/utils/types";

interface ToggleProductsViewProps {
  productsData: newProductProps[];
  viewMode: "grid" | "list";
  setViewMode: (mode: "grid" | "list") => void;
}

export default function ToggleProductsView({
  productsData,
  viewMode,
  setViewMode,
}: ToggleProductsViewProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <Button
          onClick={() => setViewMode("grid")}
          aria-label="Grid View"
          title="Grid View"
          disabled={viewMode === "grid"}
          size="actions"
        >
          <IoGrid />
        </Button>
        <Button
          onClick={() => setViewMode("list")}
          aria-label="List View"
          title="List View"
          disabled={viewMode === "list"}
          size="actions"
        >
          <FaList />
        </Button>
      </div>
      <div className="flex gap-1.5 text-lg">
        <span className="font-semibold">{productsData?.length}</span>
        <p>{productsData?.length === 1 ? "Product" : "Products"} Found</p>
      </div>
    </div>
  );
}
