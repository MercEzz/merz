/* eslint-disable import/no-anonymous-default-export */
import connectDB from "../../config/dbConnect";
import FormSchema from "../../models/Form";

connectDB();

export const formData = async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const frmdt = await FormSchema.find({});

        res.status(200).json({ success: true, data: frmdt });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const frmdt = await FormSchema.create(req.body);

        res.status(201).json({ success: true, data: frmdt });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
