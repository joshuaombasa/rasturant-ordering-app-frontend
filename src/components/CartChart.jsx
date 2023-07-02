import React, { useContext } from "react";
import { Menucontext } from "../Menucontext";
import { PieChart, Pie, Cell, Legend } from "recharts";

const CartChart = () => {
  const { itemsInCart } = useContext(Menucontext);

  const data = [
    { name: "Cart Items", value: itemsInCart.length },
    { name: "Remaining Items", value: 4 - itemsInCart.length },
  ];

  const COLORS = ["#0088FE", "#888888"];

  return (
    <div>
      <h2>Cart Items Chart</h2>
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    </div>
  );
};

export default CartChart;
