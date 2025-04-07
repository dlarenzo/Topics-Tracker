import EditTopicForm from "@/components/EditTopicForm";
import React from "react";

const EditTopic = async ({ params }) => {
  // Function to get topic by id
  const getTopicById = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "GET",
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error("Failed to fetch topic");
      }
      return res.json();
    } catch (error) {
      console.error("Error fetching topic:", error);
    }
  };

  const { id } = await params;
  // call function to get topic by id
  const topic = await getTopicById(id);
  console.log("id", id);
  const { title, description } = topic.topic;
  // pass id to the form
  return <EditTopicForm id={id} title={title} description={description} />;
};

export default EditTopic;
