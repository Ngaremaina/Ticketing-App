import Ticket from "@/app/{models}/Ticket"
import {NextResponse} from "next/server"
import dbConnect from "@/app/lib/dbConnect"
import { runCors } from "@/app/lib/cors";

export async function GET(request, {params}){
    try{
        await runCors(request, NextResponse);
        await dbConnect();
        const {id} = params

        const findTicket = await Ticket.findOne({_id:id})
        return NextResponse.json(findTicket, {status: 200})

    }
    catch(error){
        return NextResponse.json({message: "Error", error}, {status: 500})
    }
    
}
export async function DELETE(request, {params}){
    try{
        await runCors(request, NextResponse);
        await dbConnect();
        const {id} = params
        await Ticket.findByIdAndDelete(id)

        return NextResponse.json({message:"Ticket Deleted"}, {status: 200})

    }
    catch(error){
        return NextResponse.json({message: "Error", error}, {status: 500})
    }
}

export async function PUT(request, {params}){
    try{
        await dbConnect();
        const {id} = params
        const body = await request.json()
        const ticketData = body.form

        const updateTicketData = await Ticket.findByIdAndUpdate(id, {
            ...ticketData
        })

        return NextResponse.json({message:"Ticket Updated"}, {status: 200})

    }
    catch(error){
        return NextResponse.json({message: "Error", error}, {status: 500})
    }
}
