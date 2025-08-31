import { RiDeleteBin5Line } from "react-icons/ri";
import { Button, ConfirmMessage, Modal } from "@/ui";
import { Item } from "@/utils/types";
import { removeFavoriteItem } from "@/store/slice/cartSlice";
import { useAppDispatch } from "@/hooks/useAppDispatch";

interface RemoveProductFromFavoriteProps {
  product: Item;
}

export default function RemoveProductFromFavorite({
  product,
}: RemoveProductFromFavoriteProps) {
  const dispatch = useAppDispatch();

  const removeFromFavorite = () => {
    dispatch(
      removeFavoriteItem({
        id: product.id,
        productName: product.productName,
      }),
    );
  };
  return (
    <Modal>
      <Modal.Open opens="RemoveProductFromFavorite">
        <Button
          aria-label="Remove From Favorite"
          title="Remove From Favorite"
          variation="secondary"
          size="actions"
          styles="!w-10"
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
