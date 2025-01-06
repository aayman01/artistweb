import { connectDB } from "@/lib/mongodb";

export async function POST(req, res) {
  const db = await connectDB();
  const collection = db.collection("works");
  const data = await req.body();
  await collection.insertOne(data);
  return res.json({ message: "Work added successfully" });
}
