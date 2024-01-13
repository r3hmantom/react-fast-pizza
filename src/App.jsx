import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./ui";
import { Menu } from "./features/menu/";
import { Cart } from "./features/cart";
import { CreateOrder, Order } from "./features/order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/order/new",
    element: <CreateOrder />,
  },
  {
    path: "/order/:orderId",
    element: <Order />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
