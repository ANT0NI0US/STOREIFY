import Information from "./Information";
import InformationTitle from "./InformationTitle";
import { ModalFormGrid } from "@/ui";
import { CartItem, ordersFireBase } from "@/utils/types";

interface OrderItemsProps {
  order: ordersFireBase;
}

export default function OrderItems({ order }: OrderItemsProps) {
  const { items, itemsAmount } = order;
  return (
    <div className="border-accent-light-color dark:border-accent-dark-color border-b-[0.5px] pb-3.5 md:pb-5">
      <InformationTitle title="items" subTitle={`( ${itemsAmount}$ )`} />
      <ModalFormGrid>
        {items?.map(({ id, quantity, productName, totalPrice }: CartItem) => (
          <Information
            key={id}
            text={`${quantity} item/s`}
            value={`(${productName}) with ${totalPrice}$`}
          />
        ))}
      </ModalFormGrid>
    </div>
  );
}
