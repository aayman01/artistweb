import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const client = await clientPromise;
    const db = client.db("Artist-web"); // Replace with your database name

    const works = await db.collection("works").find({}).toArray();

    return res.status(200).json(works);
  } catch (error) {
    console.error("Error fetching works:", error);
    return res.status(500).json({ error: "Failed to fetch works" });
  }
}
