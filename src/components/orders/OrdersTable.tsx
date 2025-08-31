import OrdersTableRow from "./OrdersTableRow";
import { Empty, Spinner, Table } from "@/ui";
import { ordersFireBase } from "@/utils/types";

type OrdersTableProps = {
  orders: ordersFireBase[];
  loading: boolean;
};

const tableHeadCells = [
  "Name",
  "Phone",
  "Price",
  "Order Date",
  "Delivered",
  "Actions",
];

export default function OrdersTable({ orders, loading }: OrdersTableProps) {
  if (loading) return <Spinner />;
  if (!orders || !orders.length)
    return <Empty title="No Orders Have been ordered" />;
  return (
    <Table>
      <Table.Header>
        {tableHeadCells.map((headCell, index) => (
          <Table.Cell key={index} isHeader>
            {headCell}
          </Table.Cell>
        ))}
      </Table.Header>
      <Table.Body
        data={orders}
        render={(order) => <OrdersTableRow order={order} key={order?.id} />}
      />
    </Table>
  );
}
