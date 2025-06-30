import { motion } from "framer-motion";
import ProductCard from "./ProductCard";
import GridContainer from "../GridContainer";
import { newProductProps } from "@/utils/types";

export default function ProductsList({ items }: { items: newProductProps[] }) {
  return (
    <GridContainer>
      {items?.map((item: newProductProps) => (
        <motion.div
          key={item.id}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.5, duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <ProductCard key={item.id} item={item} />
        </motion.div>
      ))}
    </GridContainer>
  );
}
