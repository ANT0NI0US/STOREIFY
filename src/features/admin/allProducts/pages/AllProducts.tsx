import CommonSection from "@/ui/CommonSection";
import ProductTable from "../components/ProductTable";
import useHelmet from "@/hooks/useHelmet";
import AddNewProduct from "../components/AddNewProduct";

export default function AllProducts() {
  useHelmet("AllProducts");

  return (
    <>
      <CommonSection title="All Products" />

      <section className="w-full bg-light-color py-[80px] text-primary-color-light dark:bg-main-color dark:text-primary-color">
        <div className="mx-auto w-[90%] space-y-6 md:w-5/6">
          <AddNewProduct />
          <ProductTable />
        </div>
      </section>
    </>
  );
}
