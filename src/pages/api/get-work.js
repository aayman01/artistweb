import { connectDB } from "@/lib/mongodb";


export default async function handler(req, res) {
  const db = await connectDB();
  console.log(db)
  if (req.method === "GET") {
    try {
      const data = await db.collection("works").find().toArray(); // Get all data from the "data" collection
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch data" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}