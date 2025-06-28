import { parse, isBefore } from "date-fns";
import { FaCheck, FaXmark } from "react-icons/fa6";
import ShowOrder from "./ShowOrder";
import Table from "@/ui/Table";
import { ordersFireBase } from "@/utils/types";

type orderProps = {
  order: ordersFireBase;
};

function isDateInThePast(deliveredDate: string): boolean {
  const currentDate = new Date();
  const endDateObject = parse(deliveredDate, "dd MMM yyyy", new Date());
  return isBefore(endDateObject, currentDate);
}

export default function OrdersTableRow({ order }: orderProps) {
  return (
    <Table.Row key={order.id}>
      <Table.Cell>{order.name}</Table.Cell>
      <Table.Cell>{order.phone}</Table.Cell>
      <Table.Cell>{order.itemsAmount}$</Table.Cell>
      <Table.Cell>{order.orderDate}</Table.Cell>
      <Table.Cell>
        {isDateInThePast(order.deliveryDate) ? (
          <div className="bg-text-light-color dark:bg-text-dark-color rounded-full p-2">
            <FaCheck className="text-secondary-light-color dark:text-secondary-color" />
          </div>
        ) : (
          <div className="bg-error-light-color dark:bg-error rounded-full p-2">
            <FaXmark className="text-secondary-light-color dark:text-secondary-color" />
          </div>
        )}
      </Table.Cell>
      <Table.Cell>
        <ShowOrder selectedOrderId={order.id} />
      </Table.Cell>
    </Table.Row>
  );
}
