"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";

const EditTopicForm = ({ id, title, description }) => {
  // USE STATE
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  // USE ROUTER
  const router = useRouter();

  // SUBMIT HANDLER
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update topic");
      }
      router.push("/");
    } catch (error) {
      console.error("Error updating topic:", error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        // onChange will show the new value we are changing to
        onChange={(e) => setNewTitle(e.target.value)}
        // shows the value of the input pulled from the database when page loads
        value={newTitle}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
      />
      <input
        // onChange will show the new value we are changing to
        onChange={(e) => setNewDescription(e.target.value)}
        // shows the value of the input pulled from the database when page loads
        value={newDescription}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
      />

      <button className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Update Topic
      </button>
    </form>
  );
};

export default EditTopicForm;
