"use client";
import React from "react";
import { TfiTrash } from "react-icons/tfi";
import { useRouter } from "next/navigation";

const RemoveBtn = ({ id }) => {
  // Router instance to navigate programmatically
  const router = useRouter();
  // Function to handle the delete action
  const removeTopic = async () => {
    try {
      const confirmed = confirm("Are you sure you want to delete this topic?");
      if (confirmed) {
        const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
          method: "DELETE",
        });

        if (res.ok) {
          router.refresh();
        }
      }
    } catch (error) {
      console.error("Error deleting topic:", error);
    }
  };

  return (
    <button onClick={removeTopic} className="text-red-400">
      <TfiTrash size={24} />
    </button>
  );
};

export default RemoveBtn;
