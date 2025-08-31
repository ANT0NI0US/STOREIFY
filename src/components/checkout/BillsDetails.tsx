import OrderForm from "./OrderForm";
import TotalCost from "./TotalCost";
import { Empty } from "@/ui";
import { useAppSelector } from "@/hooks/useAppSelector";

const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

const now = new Date();
const orderDate = formatDate(now);
const deliveryDate = formatDate(new Date(now.setDate(now.getDate() + 3)));

export default function BillsDetails() {
  const { totalQuantity, totalAmount, cartItems } = useAppSelector(
    (state) => state.cart,
  );

  if (!cartItems || !cartItems.length)
    return <Empty title="No items Added To The Cart" />;
  return (
    <div className="grid grid-cols-12 gap-4">
      {/* ORDER FORM */}
      <OrderForm
        cartItems={cartItems}
        totalQuantity={totalQuantity}
        totalAmount={totalAmount}
        orderDate={orderDate}
        deliveryDate={deliveryDate}
      />
      {/* TOTAL COST */}
      <TotalCost
        totalQuantity={totalQuantity}
        totalAmount={totalAmount}
        orderDate={orderDate}
        deliveryDate={deliveryDate}
      />
    </div>
  );
}
