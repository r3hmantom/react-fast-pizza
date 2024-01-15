import React from "react";
import { Link } from "react-router-dom";

export default function Button({ children, disabled, to, type }) {
  const base =
    "hover:b-yellow-300 inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed ";

  const styles = {
    primary: base + "px-4 py-3 md:px-6 md :py-4",
    small: base + "px-4 text-xs py-2 md:px-5 md:py-2.5 ",
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}{" "}
      </Link>
    );
  return (
    <Button disabled={disabled} className={styles[type]}>
      {children}
    </Button>
  );
}
