import { useEffect, useMemo } from "react";
import OrdersTable from "@/components/orders/OrdersTable";
import { CommonSection, Container } from "@/ui";
import { getOrders } from "@/store/service/ordersService";
import useAuth from "@/hooks/useAuth";
import useHelmet from "@/hooks/useHelmet";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";

interface CurrentUser {
  uid: string;
}

export default function Orders() {
  useHelmet("Orders");

  const dispatch = useAppDispatch();
  const { isLoading, allOrders } = useAppSelector((state) => state.order);
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
