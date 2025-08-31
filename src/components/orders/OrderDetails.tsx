import { useEffect } from "react";
import OrderItems from "./OrderItems";
import OrderDetailsInfo from "./OrderDetailsInfo";
import { Button, Empty, Spinner } from "@/ui";
import { getOrderById } from "@/store/service/ordersService";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";

interface OrderDetailsProps {
  selectedOrderId: string | undefined;
  onCloseModal?: () => void;
}

export default function OrderDetails({
  selectedOrderId,
  onCloseModal,
}: OrderDetailsProps) {
  const dispatch = useAppDispatch();
  const { isCertainOrderLoading, order } = useAppSelector(
    (state) => state.order,
  );

  useEffect(() => {
    if (selectedOrderId) {
      dispatch(getOrderById(selectedOrderId));
    }
  }, [dispatch, selectedOrderId]);

  if (!order) return <Empty title="No Orders have been found" />;

  return (
    <>
      <h1 className="bg-primary-light-color dark:bg-primary-dark-color rounded-tl-lg rounded-tr-lg border-b py-4 ps-4 text-xl font-semibold tracking-widest uppercase shadow-xs sm:text-3xl">
        Order Details
      </h1>
      {isCertainOrderLoading ? (
        <Spinner height="h-[50vh]" />
      ) : (
        <div className="bg-secondary-light-color dark:bg-secondary-dark-color flex max-h-[calc(80vh-125px)] flex-col gap-3.5 overflow-auto p-3.5 md:gap-5 md:p-5">
          <OrderItems order={order} />

          <OrderDetailsInfo order={order} />
        </div>
      )}

      <div className="bg-primary-light-color dark:bg-primary-dark-color rounded-br-lg rounded-bl-lg border-t px-4 py-6">
        <div className="ms-auto w-1/2 sm:w-[30%]">
          <Button
            aria-label="Close"
            title="Close"
            variation="danger"
            onClick={onCloseModal}
          >
            Close
          </Button>
        </div>
      </div>
    </>
  );
}
