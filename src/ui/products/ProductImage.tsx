import { motion } from "framer-motion";

interface productNameProps {
  imgUrl: File | null | string;
  productName: string;
  viewMode?: "grid" | "list";
}

export default function ProductImage({
  imgUrl,
  productName,
  viewMode = "grid",
}: productNameProps) {
  return (
    <div
      className={`p-2 ${viewMode === "grid" ? "h-[252px] max-h-[252px]" : "my-auto flex h-[200px] w-[200px] min-w-[110px] items-center justify-center"}`}
    >
      <motion.img
        loading="lazy"
        whileHover={{ scale: 0.9 }}
        className="max-h-full max-w-full"
        src={typeof imgUrl === "string" ? imgUrl : undefined}
        alt={productName}
      />
    </div>
  );
}
