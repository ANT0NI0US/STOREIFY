import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import PageNotFound from "./PageNotFound";
import Spinner from "@/ui/spinner/Spinner";
import AuthLayout from "@/layout/AuthLayout";
import AppLayout from "@/layout/AppLayout";

const HomeLayout = lazy(() => import("@/layout/HomeLayout"));
const Login = lazy(() => import("@/features/auth/Login"));
const SignUp = lazy(() => import("@/features/auth/SignUp"));
const ForgetPassword = lazy(() => import("@/features/auth/ForgetPassword"));

// USER
const Home = lazy(() => import("@/features/home/pages/Home"));
const Shop = lazy(() => import("@/features/shop/pages/Shop"));
const ProductDetails = lazy(
  () => import("@/features/productDetails/pages/ProductDetails"),
);
const Orders = lazy(() => import("@/features/orders/pages/Orders"));
const About = lazy(() => import("@/features/about/page/About"));
const Contact = lazy(() => import("@/features/Contact/page/Contact"));
const Favorites = lazy(() => import("@/features/favorites/pages/Favorites"));
const Cart = lazy(() => import("@/features/cart/pages/Cart"));
const CheckOut = lazy(() => import("@/features/checkOut/pages/CheckOut"));

export default function Navigation() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="forget-password" element={<ForgetPassword />} />
        </Route>

        <Route element={<HomeLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route element={<AppLayout />}>
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:id" element={<ProductDetails />} />

          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="favorites" element={<Favorites />} />

          <Route element={<ProtectedRoute />}>
            <Route path="orders" element={<Orders />} />
            <Route path="checkout" element={<CheckOut />} />
          </Route>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
}
