import { useEffect, useState } from "react"
import "./userQueries.css"
import { toast } from "react-toastify"
import { deleteQuery, fetchUserQueries, updateQueryStatus } from "../../../api"
import { Button } from "@mui/material"
import { parsePhoneNumber } from "libphonenumber-js/min"

const UserQueries = () => {
    const [queries, setQueries] = useState([])

    useEffect(() => {
        const fetchQueries = async() => {
            try {
                const response = await fetchUserQueries();
                setQueries(response.data)
            } catch (error) {
                console.error("Error fetching queries: ", error)
                toast.error(error.response.data.message)
            }
        }

        fetchQueries();
    }, [])

    const formatPhoneNumber = (phone) => {
        try {
            const parsedNumber = parsePhoneNumber(phone);
            return `+${parsedNumber.countryCallingCode}  ${parsedNumber.nationalNumber}`
        } catch (error) {
            console.error("Error formatting phone number: ", error);
            return phone
        }
    }

    const handleDelete = async(id) => {
        try {
            const response = await deleteQuery(id);
            setQueries(queries.filter(query => query._id !== id))
            toast.success(response.data.message)
        } catch (error) {
            console.error("Error deleting query", error)
            toast.error(error.response.data.message)
        }
    }

    const handleUpdateStatus = async(id, status) => {
        try {
            const response = await updateQueryStatus(id, status);
            setQueries(queries.map((query) => 
            query._id === id ? {...query, status: response.data.status} : query))
            console.log(response)
            toast.success("Query status updated")
        } catch (error) {
            console.error("Error updating status: ", error)
            toast.error(error.response.data.message)
        }
    }
    
  return (
    <div className="userQueries">
        {queries.length>0 ? (queries.map((query) => (
            <div key={query._id} className="queryCard">
                <div className="queryCardContent">
                    <p><strong>Name:</strong>{query.name}</p>
                    <p><strong>Email:</strong>{query.email}</p>
                    <p><strong>Phone:</strong>{formatPhoneNumber(query.phone)}</p>
                    <p><strong>Message:</strong>{query.message}</p>
                    <p><strong>Status:</strong>{query.status || "Pending"}</p>
                </div>
                <div className="queryCardBtns">
                    <Button className="updateBtn" variant="contained"
                        onClick={() => handleUpdateStatus(query._id, "Resolved")}
                    >
                        Update Status
                    </Button>
                    <Button className="deleteBtn" variant="contained" 
                        color="error" onClick={() => handleDelete(query._id)}
                    >
                        Delete
                    </Button>
                </div>
            </div>
        ))
    ) : (
        <p className="noQuery">No queries found.</p>
    )}
    </div>
  )
}

export default UserQueries