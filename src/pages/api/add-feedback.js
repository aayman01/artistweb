import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("Artist-web");
    const courseCollection = db.collection("reviews");

    if (req.method === "POST") {
      const review = req.body;
      await courseCollection.insertOne(review);
      return res
        .status(201)
        .json({ success: true, message: "successfully inserted!" });
    } else {
      return res
        .status(405)
        .json({ success: false, message: "Method Not Allowed" });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
}
