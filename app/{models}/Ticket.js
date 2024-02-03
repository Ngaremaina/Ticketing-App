import mongoose, {Schema} from "mongoose"

mongoose.connect("mongodb+srv://ngaremaina4:4NJgOigQregJbkTK@cluster0.0lxkfbz.mongodb.net/TicketDB");
mongoose.Promise = global.Promise

const ticketSchema = new Schema(
    {
        title:String,
        description:String,
        category:String,
        priority:Number,
        progress:Number,
        status:String,
        active:Boolean
    },
    {
        timestamps:true,
    }
)

const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema)
export default Ticket