import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Spinner } from "@/ui";
import { useAppSelector } from "@/hooks/useAppSelector";

export default function ProtectedRoute() {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useAppSelector((state) => state.login);

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login", { replace: true });
  }, [isAuthenticated, isLoading, navigate]);

  if (isLoading) return <Spinner />;

  if (isAuthenticated) return <Outlet />;
}
