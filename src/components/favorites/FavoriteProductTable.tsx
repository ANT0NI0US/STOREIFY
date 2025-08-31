import FavoriteProductTableRow from "./FavoriteProductTableRow";
import { Empty, Table } from "@/ui";
import { Item } from "@/utils/types";

const tableHeadCells = ["Image", "Product Name", "Price", "actions"];

interface FavoriteTableProps {
  perfectItems: Item[];
}

export default function FavoriteProductTable({
  perfectItems,
}: FavoriteTableProps) {
  if (!perfectItems || !perfectItems.length)
    return <Empty title="No items Added To The Favorites" />;
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
        data={perfectItems}
        render={(perfectItem) => (
          <FavoriteProductTableRow
            key={perfectItem?.id}
            perfectItem={perfectItem}
          />
        )}
      />
    </Table>
  );
}
