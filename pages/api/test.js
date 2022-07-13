import connectDB from "../../config/dbConnect";

connectDB();

export default function async(req, res) {
  res.json({ test: "test" });
}
