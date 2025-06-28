import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderItems from "./OrderItems";
import OrderDetailsInfo from "./OrderDetailsInfo";
import Spinner from "@/ui/spinner/Spinner";
import { orderState } from "@/utils/types";
import { AppDispatch } from "@/store";
import { getOrderById } from "@/store/service/ordersService";
import Empty from "@/ui/Empty";
import Button from "@/ui/Button";

interface OrderDetailsProps {
  selectedOrderId: string | undefined;
  onCloseModal?: () => void;
}

export default function OrderDetails({
  selectedOrderId,
  onCloseModal,
}: OrderDetailsProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { isCertainOrderLoading, order } = useSelector(
    (state: orderState) => state.order,
  );

  useEffect(() => {
    if (selectedOrderId) {
      dispatch(getOrderById(selectedOrderId));
    }
  }, [dispatch, selectedOrderId]);

  if (!order) return <Empty title="No Orders have been found" />;

  return (
    <>
      <h1 className="bg-secondary-light-color dark:bg-secondary-dark-color rounded-tl-lg rounded-tr-lg border-b py-4 ps-4 text-xl font-bold tracking-widest uppercase shadow-xs sm:text-3xl">
        Order Details
      </h1>
      {isCertainOrderLoading ? (
        <Spinner height="h-[50vh]" />
      ) : (
        <div className="bg-primary-light-color flex max-h-[calc(80vh-125px)] flex-col gap-3.5 overflow-auto p-3.5 md:gap-5 md:p-5">
          <OrderItems order={order} />

          <OrderDetailsInfo order={order} />
        </div>
      )}

      <div className="bg-secondary-light-color dark:bg-secondary-dark-color rounded-br-lg rounded-bl-lg border-t px-4 py-6">
        <div className="ms-auto w-full sm:w-[30%]">
          <Button ArialLabel="Close" variation="danger" onClick={onCloseModal}>
            Close
          </Button>
        </div>
      </div>
    </>
  );
}
