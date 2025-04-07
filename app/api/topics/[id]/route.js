// UPDATE POSTS TOPICS BY ID
// This function handles PUT requests to the /api/topics/[id] endpoint.

import connectMongoDB from "@/db/mongodb";
import Topic from "@/db/models/topic";
import { NextResponse } from "next/server";

// CREATE ASYNC FUNCTION PUT AND PASS IN THE REQUEST AND PARAMS
export async function PUT(req, { params }) {
  // DESTRUCTURE THE ID FROM THE PARAMS
  const { id } = params;
  // GET THE DATA FROM THE REQUEST
  const { newTitle: title, newDescription: description } = await req.json();
  // CONNECT TO MONGODB
  await connectMongoDB();
  // FIND THE TOPIC BY ID AND UPDATE IT
  await Topic.findByIdAndUpdate(id, { title, description });
  // RETURN A RESPONSE
  return NextResponse.json({ message: "Topic Updated" }, { status: 200 });
}
// READ TOPICS BY ID
// This function handles GET requests to the /api/topics/[id] endpoint.
export async function GET(req, { params }) {
  // DESTRUCTURE THE ID FROM THE PARAMS
  const { id } = await params;
  // CONNECT TO MONGODB
  await connectMongoDB();
  // FIND THE TOPIC BY ID
  const topic = await Topic.findOne({ _id: id });
  // RETURN A RESPONSE
  return NextResponse.json({ topic }, { status: 200 });
}
