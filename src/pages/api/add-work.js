import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const client = await clientPromise;
    const db = client.db("Artist-web");
    const collection = db.collection("works");

    // Validate required fields
    if (!body.title || !body.imageUrl) {
      return NextResponse.json(
        { success: false, message: "Title and image URL are required" },
        { status: 400 }
      );
    }

    // Create work document
    const workDocument = {
      title: body.title,
      imageUrl: body.imageUrl,
      tags: body.tags || [],
      isLatest: body.isLatest || false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await collection.insertOne(workDocument);

    return NextResponse.json(
      {
        success: true,
        message: "Work added successfully",
        data: {
          _id: result.insertedId,
          ...workDocument,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to add work", error: error.message },
      { status: 500 }
    );
  }
}

// Get all works
export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("Artist-web");
    const collection = db.collection("works");

    const works = await collection.find({}).sort({ createdAt: -1 }).toArray();

    return NextResponse.json({
      success: true,
      data: works,
    });
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch works",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
