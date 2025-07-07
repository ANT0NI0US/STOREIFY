import { TbListDetails } from "react-icons/tb";
import OrderDetails from "./OrderDetails";
import Modal from "@/ui/Modal";
import Button from "@/ui/Button";

interface orderDetailsProps {
  selectedOrderId: string | undefined;
}

export default function ShowOrder({ selectedOrderId }: orderDetailsProps) {
  return (
    <Modal>
      <Modal.Open opens="orderDetails">
        <Button AriaLabel="show order" variation="secondary" size="actions">
          <TbListDetails />
        </Button>
      </Modal.Open>
      <Modal.Window name="orderDetails">
        <OrderDetails selectedOrderId={selectedOrderId} />
      </Modal.Window>
    </Modal>
  );
}
