import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const [query, setQuery] = useState();
  const navigate  = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query) return;

    navigate(`order/${query}`)
    setQuery("");
  };


  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={query}
        placeholder='Search for order #'
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
}
