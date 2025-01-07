import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const client = await clientPromise;
    const db = client.db("Artist-web");
    const collection = db.collection("works");

    const works = await collection.find({}).toArray();

    return res.status(200).json({
      success: true,
      data: works
    });
    
  } catch (error) {
    console.error("Error fetching works:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch works",
      error: error.message
    });
  }
}
