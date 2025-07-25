import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrdersTable from "@/components/orders/OrdersTable";
import CommonSection from "@/ui/CommonSection";
import Container from "@/ui/Container";
import { orderState } from "@/utils/types";
import { getOrders } from "@/store/service/ordersService";
import { AppDispatch } from "@/store";
import useAuth from "@/hooks/useAuth";
import useHelmet from "@/hooks/useHelmet";

interface CurrentUser {
  uid: string;
}

export default function Orders() {
  useHelmet("Orders");

  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, allOrders } = useSelector(
    (state: orderState) => state.order,
  );
  const currentUser = useAuth() as CurrentUser | null;
  const filteredOrders = useMemo(
    () => allOrders?.filter((order) => order.userId === currentUser?.uid),
    [allOrders, currentUser?.uid],
  );

  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);
  return (
    <>
      <CommonSection title="Orders" />
      <section className="py-[40px] md:py-[80px]">
        <Container>
          <OrdersTable orders={filteredOrders} loading={isLoading} />
        </Container>
      </section>
    </>
  );
}
