import axiosInstance from "@/app/lib/axios"
import TicketForm from "@/app/{components}/TicketForm"

const getTicketById = async (id) => {
  try {
    const res = await axiosInstance.get(`/Tickets/${id}`);
    return res.data;  // this is the JSON payload
  } catch (error) {
    throw new Error("Failed to get Ticket: " + (error.response?.data?.message || error.message));
  }
};

const TicketPage = async ({ params }) =>{
    const EDITMODE = params.id === "new" ? false : true
    let updateTicketData = {}

    if (EDITMODE){
        updateTicketData = await getTicketById(params.id)
    }
    else{
        updateTicketData = {
            _id:"new"
        }
    }
    return <TicketForm ticket = {updateTicketData}/>
        
}

export default TicketPage