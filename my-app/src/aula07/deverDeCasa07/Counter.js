import React from "react";
import { useSelector } from "react-redux";

export const Counter = () => {
  const count = useSelector((state) => state.count);
  return (
    <div>
      <h2>Contagem de Visualizações: {count}</h2>
    </div>
  );
};

export default Counter;
