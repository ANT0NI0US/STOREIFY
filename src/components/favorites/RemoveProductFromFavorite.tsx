import { useDispatch } from "react-redux";
import { RiDeleteBin5Line } from "react-icons/ri";
import ConfirmMessage from "@/ui/ConfirmMessage";
import Modal from "@/ui/Modal";
import Button from "@/ui/Button";
import { Item } from "@/utils/types";
import { cartActions } from "@/store/slice/cartSlice";
import { AppDispatch } from "@/store";

interface RemoveProductFromFavoriteProps {
  product: Item;
}

export default function RemoveProductFromFavorite({
  product,
}: RemoveProductFromFavoriteProps) {
  const dispatch = useDispatch<AppDispatch>();

  const removeFromFavorite = () => {
    dispatch(
      cartActions.removeFavoriteItem({
        id: product.id,
        productName: product.productName,
      }),
    );
  };
  return (
    <Modal>
      <Modal.Open opens="RemoveProductFromFavorite">
        <Button
          AriaLabel="Remove From Favorite"
          variation="secondary"
          size="actions"
          Font="!w-10"
        >
          <RiDeleteBin5Line />
        </Button>
      </Modal.Open>
      <Modal.Window name="RemoveProductFromFavorite">
        <ConfirmMessage
          message={`Are you sure you wanna to remove "${product?.productName}" from favorites?`}
          onConfirm={removeFromFavorite}
        />
      </Modal.Window>
    </Modal>
  );
}
