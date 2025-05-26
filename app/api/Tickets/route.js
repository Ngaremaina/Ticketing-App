import Ticket from "@/app/{models}/Ticket"
import { NextResponse } from "next/server"
import dbConnect from "@/app/lib/dbConnect"
import { runCors } from "@/app/lib/cors";

export async function POST(request) {
    try{
        await runCors(request, NextResponse);
        await dbConnect();
        const body = await request.json()
        const ticketData = body.form
        await Ticket.create(ticketData)

        return NextResponse.json({message: "Ticket Created"}, { status:201 })

    }
    catch(error){
        return NextResponse.json({message:"Error", error}, {status: 500})
    }
}


export async function GET(request){
    try{
        await runCors(request, NextResponse);
        await dbConnect();
        const tickets = await Ticket.find()
        return NextResponse.json({tickets}, { status:200 })

    }
    catch(error){
        return NextResponse.json({message:"Error", error}, {status: 500})
    }
}