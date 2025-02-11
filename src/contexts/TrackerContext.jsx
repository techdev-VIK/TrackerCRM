import axios from "axios";
import { createContext, useEffect, useState } from "react";

const TrackerContext = createContext();



export const TrackerProvider = ({children}) => {

    const [leads, setLeads] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:3000/allLeads")
        .then((response) => {
            // console.log("Fetched leads:", response.data)
            setLeads(response.data)
        })
        .catch((error) => console.error("Error fetching leads:", error))
    }, []);


    return(
        <TrackerContext.Provider value={{leads}}>
            {children}
        </TrackerContext.Provider>
    )
}


export default TrackerContext;


export const tagOptions = [
  { value: "High Value", label: "High Value" },
  { value: "Follow-up", label: "Follow-up" },
  { value: "Urgent", label: "Urgent" },
  { value: "Interested", label: "Interested" },
  { value: "Potential Client", label: "Potential Client" },
  { value: "Negotiation", label: "Negotiation" },
  { value: "Needs More Info", label: "Needs More Info" },
  { value: "Successful Deal", label: "Successful Deal" },
  { value: "VIP Client", label: "VIP Client" }
];
