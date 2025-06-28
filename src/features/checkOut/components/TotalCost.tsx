interface totalCostProps {
  totalQuantity: number;
  totalAmount: number;
  orderDate: string;
  deliveryDate: string;
}

export default function TotalCost({
  totalQuantity,
  totalAmount,
  orderDate,
  deliveryDate,
}: totalCostProps) {
  return (
    <div className="border-accent-light-color dark:border-accent-dark-color col-span-12 h-fit rounded-md border-[0.5px] p-5 md:col-span-4">
      <div className="flex w-full flex-col gap-5">
        <h6 className="flexBetween w-full">
          <span className="font-bold">Order Date:</span>
          <span>{orderDate}</span>
        </h6>
        <div className="flex w-full flex-col">
          <h6 className="flexBetween w-full">
            <span className="font-bold">Delivery Date:</span>
            <span>{deliveryDate}</span>
          </h6>
          <span className="text-accent-light-color dark:text-accent-dark-color ml-2 text-sm">
            Within three days of ordering.
          </span>
        </div>
        <h6 className="flexBetween w-full">
          <span className="font-bold">Total Qty:</span>
          <span>
            {totalQuantity === 1
              ? `${totalQuantity} Item`
              : `${totalQuantity} Items`}
          </span>
        </h6>
        <h6 className="flexBetween w-full">
          <span className="font-bold">Subtotal:</span>
          <span>${totalAmount}</span>
        </h6>
        <div className="flex w-full flex-col">
          <h6 className="flexBetween w-full">
            <span className="font-bold">Shipping:</span>
            <span>$0</span>
          </h6>
          <span className="text-accent-light-color dark:text-accent-dark-color ml-2 text-sm">
            Free Shipping.
          </span>
        </div>

        <h4 className="flexBetween border-accent-light-color dark:border-accent-dark-color w-full border-t-[0.5px] py-5 text-xl font-medium">
          <span className="font-extrabold">Total Cost:</span>
          <span className="font-black">${totalAmount}</span>
        </h4>
      </div>
    </div>
  );
}
