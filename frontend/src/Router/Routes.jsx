import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import Register from "../Pages/Register";
import AdminDashboard from "../Pages/AdminDashboard";
import AddProducts from "../Pages/Admin/AddProducts";
import AllUsers from "../Pages/Admin/AllUsers";
import AllProducts from "../Pages/Admin/AllProducts";
import CategoryProduct from "../Pages/CategoryProduct";
import ProductDetails from "../Pages/ProductDetails";
import Cart from "../Pages/Cart";
import Search from "../Pages/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/search",
        element: <Search></Search>,
      },
      {
        path: "product-category",
        element: <CategoryProduct></CategoryProduct>,
      },
      {
        path: "product/:id",
        element: <ProductDetails></ProductDetails>,
      },
      {
        path: "/admin-dashboard",
        element: <AdminDashboard></AdminDashboard>,
        children: [
          {
            path: "all-users",
            element: <AllUsers></AllUsers>,
          },
          {
            path: "add-products",
            element: <AddProducts></AddProducts>,
          },
          {
            path: "all-products",
            element: <AllProducts></AllProducts>,
          },
        ],
      },
    ],
  },
]);
export default router;
