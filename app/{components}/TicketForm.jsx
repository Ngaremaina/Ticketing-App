"use client"
import { useRouter } from "next/navigation"
import React, { useState } from "react"

const TicketForm = () => {
    const router = useRouter()
    const [form, setForm] = useState({
        title:"",
        description:"",
        priority:1,
        progress:0,
        status:"not started",
        category:"Hardware Problem"
    })

    const handleSubmit = async (event) => {
        event.preventDefault()
        const res = await fetch("/api/Tickets", {
            method:"POST",
            header:{"Content-type":"application/json"},
            body: JSON.stringify({form})

        })
        if (!res.ok){
            throw new Error("Failed to create Ticket")
        }

        router.refresh()
        router.push("/")

    }

    function handleChange(event){
        const input = event.target.name;
        const value = event.target.value;

        setForm(prev => {return {...prev, [input]:value}})

    }
    return(
        <div className = "flex justify-center">
            <form className="flex flex-col gap-3 w-1/2" method="post" onSubmit={handleSubmit}>
                <h3>Create Your Ticket</h3>
                <label>Ticket</label>
                <input id = "title" name = "title" value = {form.title} type = "text" onChange = {handleChange} required={true}/>
                <textarea id = "description" name = "description" value = {form.description} type = "text" onChange = {handleChange} required={true} rows = "5"/>
                <label>Category</label>
                <select name = "category" value = {form.category} onChange = {handleChange}>
                    <option value = "Hardware Problem">Hardware Problem</option>
                    <option value = "Software Problem">Software Problem</option>
                    <option value = "Project">Project</option>
                </select>
                <label>Priority</label>
                <div>
                    <input id = "priority-1" name = "priority" type = "radio" onChange = {handleChange} value = {1} checked = {form.priority == 1}/>
                    <label>1</label>
                    <input id = "priority-2" name = "priority" type = "radio" onChange = {handleChange} value = {2} checked = {form.priority == 2}/>
                    <label>2</label>
                    <input id = "priority-3" name = "priority" type = "radio" onChange = {handleChange} value = {3} checked = {form.priority == 3}/>
                    <label>3</label>
                    <input id = "priority-4" name = "priority" type = "radio" onChange = {handleChange} value = {4} checked = {form.priority == 4}/>
                    <label>4</label>
                    <input id = "priority-5" name = "priority" type = "radio" onChange = {handleChange} value = {5} checked = {form.priority == 5}/>
                    <label>5</label>
                </div>
                <label>Progress</label>
                <input type="range" id = "progress" name = "progress" value = {form.progress} min = "0" max = "100" onChange={handleChange}/>
                <label>Status</label>
                <select name = "status" value = {form.status} onChange = {handleChange}>
                    <option value = "Not Started">Not Started</option>
                    <option value = "Started">Started</option>
                    <option value = "Done">Done</option>
                </select>
                <button type="submit" className = "btn max-w-xs">Create Ticket</button>
            </form>
        </div>
    )

}

export default TicketForm