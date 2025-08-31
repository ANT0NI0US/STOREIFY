import toast from "react-hot-toast";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Button, ConfirmMessage, Modal } from "@/ui";
import { CartItem } from "@/utils/types";
import { deleteItem } from "@/store/slice/cartSlice";
import { useAppDispatch } from "@/hooks/useAppDispatch";

interface DeleteButtonProps {
  item: CartItem;
}

export default function DeleteButton({ item }: DeleteButtonProps) {
  const dispatch = useAppDispatch();

  const handleDeleteItem = () => {
    dispatch(deleteItem(item?.id));
    toast.success(`${item?.productName} Has Been Deleted successfully`);
  };
  return (
    <Modal>
      <Modal.Open opens="DeleteItemForm">
        <div className="absolute top-4 right-4 w-[45px] cursor-pointer">
          <Button
            styles="rounded-full!"
            aria-label="Delete Product"
            title="Delete Product"
            variation="danger"
          >
            <RiDeleteBin5Line size={25} />
          </Button>
        </div>
      </Modal.Open>
      <Modal.Window name="DeleteItemForm">
        <ConfirmMessage
          message={`Are you sure you wanna to delete "${item?.productName}" ?`}
          onConfirm={handleDeleteItem}
        />
      </Modal.Window>
    </Modal>
  );
}
