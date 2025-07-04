import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { MdAddShoppingCart } from "react-icons/md";
import RemoveProductFromFavorite from "./RemoveProductFromFavorite";
import Button from "@/ui/Button";
import Table from "@/ui/Table";
import { Item } from "@/utils/types";
import { AppDispatch } from "@/store";
import { cartActions } from "@/store/slice/cartSlice";

interface perfectItemProp {
  perfectItem: Item;
}

export default function FavoriteProductTableRow({
  perfectItem,
}: perfectItemProp) {
  const dispatch = useDispatch<AppDispatch>();

  const addToCart = (product: Item) => {
    dispatch(
      cartActions.addItem({
        id: product.id,
        productName: product.productName,
        price: product.price,
        imgUrl: product.imgUrl,
      }),
    );
    toast.success("Product added successfully");
  };

  return (
    <Table.Row key={perfectItem.id}>
      <Table.Cell>
        <img
          src={
            typeof perfectItem.imgUrl === "string"
              ? perfectItem.imgUrl
              : undefined
          }
          alt={perfectItem.productName}
          className="h-16 max-h-full w-16 max-w-full object-contain object-center sm:h-24 sm:w-24 lg:h-32 lg:w-32"
        />
      </Table.Cell>
      <Table.Cell>{perfectItem.productName}</Table.Cell>
      <Table.Cell>${perfectItem.price}</Table.Cell>
      <Table.Cell>
        <div className="flex gap-1">
          <Button
            ArialLabel="Add to cart"
            variation="secondary"
            size="actions"
            onClick={() => addToCart(perfectItem)}
            Font="!w-10"
          >
            <MdAddShoppingCart />
          </Button>
          <RemoveProductFromFavorite product={perfectItem} />
        </div>
      </Table.Cell>
    </Table.Row>
  );
}
