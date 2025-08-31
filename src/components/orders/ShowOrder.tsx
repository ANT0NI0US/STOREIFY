import { TbListDetails } from "react-icons/tb";
import OrderDetails from "./OrderDetails";
import { Button, Modal } from "@/ui";

interface OrderDetailsProps {
  selectedOrderId: string | undefined;
}

export default function ShowOrder({ selectedOrderId }: OrderDetailsProps) {
  return (
    <Modal>
      <Modal.Open opens="orderDetails">
        <Button
          aria-label="show order"
          title="show order"
          variation="secondary"
          size="actions"
        >
          <TbListDetails />
        </Button>
      </Modal.Open>
      <Modal.Window name="orderDetails">
        <OrderDetails selectedOrderId={selectedOrderId} />
      </Modal.Window>
    </Modal>
  );
}
