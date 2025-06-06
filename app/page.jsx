import axiosInstance from "./lib/axios"
import TicketCard from "./{components}/TicketCard"
import { Analytics } from "@vercel/analytics/next"

const getTickets = async () => {
  try{
    const res = await axiosInstance.get("/Tickets")
    return res.data
  }
  catch(error){
    console.log("Failed to get Tickets", error)
  }

}

const Dashboard = async () => {
  const data  = await getTickets()
  const tickets = data?.tickets

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];
  return (
    <div className="p-5">
      <Analytics/>
      <div>
        {tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex} className="mb-4">
              <h2>{uniqueCategory}</h2>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4 ">
                {tickets.filter((ticket) => ticket.category === uniqueCategory).map((filteredTicket, _index) => (
                    <TicketCard id={_index} key={_index} ticket={filteredTicket}/>
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Dashboard;