import axios from "axios";
import { createContext, useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";

const TrackerContext = createContext();



export const TrackerProvider = ({children}) => {

    const {data: leads, loading: leadsLoading, error: leadsError} = useAxios(`http://localhost:3000/allLeads`);


    const {data: agents, loading: agentsLoading, error: agentsError} = useAxios(`http://localhost:3000/allAgents`)

    const {data: tags} = useAxios(`http://localhost:3000/allTags`)

    const tagOptions = tags.map((tag) => ({value: tag.name, label: tag.name}));

    return(
        <TrackerContext.Provider value={{leads, agents, tagOptions}}>
            {children}
        </TrackerContext.Provider>
    )
}


export default TrackerContext;
