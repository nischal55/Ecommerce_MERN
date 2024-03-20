import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetails from "./ProductDetails.jsx";
import SearchResult from "./SearchResult.jsx";
import UserLogin from "./components/UserLogin.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Categories from "./Categories.jsx";
import ShoppingCart from "./ShoppingCart.jsx";
import Payment from "./components/Payment.jsx";
import OrderSave from "./components/OrderSave.jsx";
import CashPay from "./components/CashPay.jsx";
import ShowOrder from "./ShowOrder.jsx";
import AdminDash from "./admin/AdminDash.jsx";
import ProductListAdmin from "./admin/ProductListAdmin.jsx";
import OrderTableAdmin from "./admin/OrderTableAdmin.jsx";
import UserSign from "./UserSign.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/product/:id",
    element: <ProductDetails />,
  },
  {
    path: "/search/:search",
    element: <SearchResult />,
  },
  {
    path: "/userLogin",
    element: <UserLogin />,
  },
  {
    path: "/categories/:category",
    element: <Categories />,
  },
  {
    path: "/Cart",
    element: <ShoppingCart />,
  },
  {
    path: "/payment/:total",
    element: <Payment />,
  },
  {
    path: "/orderSave",
    element: <OrderSave />,
  },
  {
    path: "/cashPay",
    element: <CashPay />,
  },
  {
    path: "/orders",
    element: <ShowOrder />,
  },
  {
    path: "/admin",
    element: <AdminDash />,
  },
  {
    path: "/AdminProducts",
    element: <ProductListAdmin />,
  },
  {
    path: "/OrderDetailsAdmin",
    element: <OrderTableAdmin />,
  },
  {
    path: "/UserSign",
    element: <UserSign/>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ToastContainer />
    <RouterProvider router={router} />
  </>
);
