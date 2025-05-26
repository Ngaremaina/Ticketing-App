import Ticket from "@/app/{models}/Ticket";
import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/dbConnect";
import { setCorsHeaders } from "@/app/lib/cors";

export async function GET(request) {
  try {
    const origin = request.headers.get("origin");
    await dbConnect();

    const tickets = await Ticket.find();
    const response = NextResponse.json({ tickets }, { status: 200 });
    return setCorsHeaders(response, origin);
  } catch (error) {
    console.error("GET /api/Tickets error:", error);
    const response = NextResponse.json({ message: "Error", error: error.message }, { status: 500 });
    return setCorsHeaders(response, request.headers.get("origin"));
  }
}

export async function POST(request) {
  const origin = request.headers.get("origin");

  try {
    await dbConnect();

    const body = await request.json();
    const ticketData = body.form;

    console.log("Creating ticket with data:", ticketData);

    if (!ticketData?.title) {
      return setCorsHeaders(
        NextResponse.json({ message: "Title is required" }, { status: 400 }),
        origin
      );
    }

    const createdTicket = await Ticket.create(ticketData);

    const response = NextResponse.json(
      { message: "Ticket Created", ticket: createdTicket },
      { status: 201 }
    );

    return setCorsHeaders(response, origin);
  } catch (error) {
    console.error("POST /api/Tickets error:", error);
    const response = NextResponse.json(
      { message: "Error", error: error.message },
      { status: 500 }
    );
    return setCorsHeaders(response, origin);
  }
}