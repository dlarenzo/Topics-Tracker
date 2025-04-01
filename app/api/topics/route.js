import Topic from "@/db/models/topic";
import connectMongoDB from "@/db/mongodb";
import { NextResponse } from "next/server";

// CREATE TOPICS
export async function POST(req) {
  const { title, description } = await req.json();
  await connectMongoDB();
  await Topic.create({
    title,
    description,
  });
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}

// READ TOPICS
// This function handles GET requests to the /api/topics endpoint.

export async function GET() {
  await connectMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}

// DELETE TOPICS
export async function DELETE(req) {
  // Use ID as the search parameter
  const id = req.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ message: "Topic Deleted" }, { status: 200 });
}

// UPDATE TOPICS
export async function PUT(req) {
  const { id, title, description } = await req.json();
  await connectMongoDB();
  await Topic.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Topic Updated" }, { status: 200 });
}
