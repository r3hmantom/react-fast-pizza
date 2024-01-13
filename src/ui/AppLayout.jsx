import React from "react";
import Header from "./Header";
import { Outlet, useNavigation } from "react-router-dom";
import { CartOverview } from "../features/cart";
import Loader from "./Loader";

export default function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className='layout'>
      <Header />

      {isLoading && <Loader />}

      <main>
        <h1>Content</h1>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}
