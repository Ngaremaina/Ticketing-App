"use client"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faX} from "@fortawesome/free-solid-svg-icons"
import {useRouter} from "next/navigation"
import axiosInstance from "../lib/axios"

const DeleteBlock = ({id}) => {
    const router = useRouter()

    const deleteTicket = async () => {
        const response = await axiosInstance.delete(`${id}`)
        if (response.ok){
            router.refresh()
        }
    
    }
    return(
        <FontAwesomeIcon icon={faX} className = "text-red-400 hover:cursor-pointer hover:text-red-200" onClick = {deleteTicket}/>
    )

}

export default DeleteBlock
