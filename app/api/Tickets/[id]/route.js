import Ticket from "@/app/{models}/Ticket";
import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/dbConnect";
import { setCorsHeaders } from "@/app/lib/cors";

// GET a ticket by ID
export async function GET(request, { params }) {
  const origin = request.headers.get("origin");

  try {
    await dbConnect();
    const { id } = params;
    const ticket = await Ticket.findOne({ _id: id });

    const response = NextResponse.json(ticket, { status: 200 });
    return setCorsHeaders(response, origin);
  } catch (error) {
    console.error("GET /Tickets/[id] error:", error);
    const response = NextResponse.json({ message: "Error", error: error.message }, { status: 500 });
    return setCorsHeaders(response, origin);
  }
}

// DELETE a ticket by ID
export async function DELETE(request, { params }) {
  const origin = request.headers.get("origin");

  try {
    await dbConnect();
    const { id } = params;
    await Ticket.findByIdAndDelete(id);

    const response = NextResponse.json({ message: "Ticket Deleted" }, { status: 200 });
    return setCorsHeaders(response, origin);
  } catch (error) {
    console.error("DELETE /Tickets/[id] error:", error);
    const response = NextResponse.json({ message: "Error", error: error.message }, { status: 500 });
    return setCorsHeaders(response, origin);
  }
}

// PUT (update) a ticket by ID
export async function PUT(request, { params }) {
  const origin = request.headers.get("origin");

  try {
    await dbConnect();
    const { id } = params;
    const body = await request.json();
    const ticketData = body.form;

    await Ticket.findByIdAndUpdate(id, { ...ticketData });

    const response = NextResponse.json({ message: "Ticket Updated" }, { status: 200 });
    return setCorsHeaders(response, origin);
  } catch (error) {
    console.error("PUT /Tickets/[id] error:", error);
    const response = NextResponse.json({ message: "Error", error: error.message }, { status: 500 });
    return setCorsHeaders(response, origin);
  }
}

export { OPTIONS } from "@/app/lib/cors";
