import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import PageNotFound from "./PageNotFound";
import { Spinner } from "@/ui";
import AuthLayout from "@/layout/AuthLayout";
import AppLayout from "@/layout/AppLayout";

const HomeLayout = lazy(() => import("@/layout/HomeLayout"));
const Login = lazy(() => import("@/pages/Login"));
const SignUp = lazy(() => import("@/pages/SignUp"));
const ForgetPassword = lazy(() => import("@/pages/ForgetPassword"));

// USER
const Home = lazy(() => import("@/pages/Home"));
const Shop = lazy(() => import("@/pages/Shop"));
const ProductDetails = lazy(() => import("@/pages/ProductDetails"));
const Orders = lazy(() => import("@/pages/Orders"));
const About = lazy(() => import("@/pages/About"));
const Contact = lazy(() => import("@/pages/Contact"));
const Favorites = lazy(() => import("@/pages/Favorites"));
const Cart = lazy(() => import("@/pages/Cart"));
const CheckOut = lazy(() => import("@/pages/CheckOut"));

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
