import mongoose from "mongoose";

const TicketSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  priority: Number,
  progress: Number,
  status: String,
  active: Boolean,
}, { timestamps: true });

export default mongoose.models.Ticket || mongoose.model("Ticket", TicketSchema);
