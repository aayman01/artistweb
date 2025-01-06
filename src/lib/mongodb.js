import { MongoClient, ServerApiVersion } from "mongodb";

let db;

export const connectDB = async () => {
  if (db) return db;

  try {
    const uri = process.env.MONGODB_URI;
    
    if (!uri) {
      throw new Error('MongoDB URI is not defined in environment variables');
    }

    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });

    db = client.db("Artist-web");
    console.log("📚 Connected to database:", db.databaseName);

    return db;
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    throw error; // Re-throw the error for proper error handling
  }
};
