import axios from "axios";
import { createContext, useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";

const TrackerContext = createContext();



export const TrackerProvider = ({children}) => {

    const {data: leads, loading: leadsLoading, error: leadsError} = useAxios(`http://localhost:3000/allLeads`);


    const {data: agents, loading: agentsLoading, error: agentsError} = useAxios(`http://localhost:3000/allAgents`)


    return(
        <TrackerContext.Provider value={{leads, agents}}>
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
