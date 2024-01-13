import React, { Children } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./ui";
import { Menu, loader as menuLoader } from "./features/menu/";
import { Cart } from "./features/cart";
import { CreateOrder, Order } from "./features/order";
import AppLayout from "./ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader
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
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
