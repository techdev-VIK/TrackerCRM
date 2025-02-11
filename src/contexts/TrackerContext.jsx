import axios from "axios";
import { createContext, useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";

const TrackerContext = createContext();



export const TrackerProvider = ({children}) => {

    const {data: leads, loading: leadsLoading, error: leadsError} = useAxios(`https://tracker-backend-alpha.vercel.app/allLeads`);


    const {data: agents, loading: agentsLoading, error: agentsError} = useAxios(`https://tracker-backend-alpha.vercel.app/allAgents`)

    const {data: tags} = useAxios(`https://tracker-backend-alpha.vercel.app/allTags`)

    const tagOptions = tags.map((tag) => ({value: tag.name, label: tag.name}));

    return(
        <TrackerContext.Provider value={{leads, agents, tagOptions}}>
            {children}
        </TrackerContext.Provider>
    )
}


export default TrackerContext;
