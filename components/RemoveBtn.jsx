import React from "react";
import { TfiTrash } from "react-icons/tfi";

const RemoveBtn = () => {
  return (
    <button className="text-red-400">
      <TfiTrash size={24} />
    </button>
  );
};

export default RemoveBtn;
