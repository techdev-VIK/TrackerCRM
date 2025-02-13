import { useEffect, useState } from "react"
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import axios from "axios";


const AddSalesAgent = () => {

    const location = useLocation();

    const backendUrl = "https://tracker-backend-alpha.vercel.app";

    const agentValues = location.state?.agentValues;

    const [name, setName] = useState(agentValues?.name || '');

    const [email, setEmail] = useState(agentValues?.email || '');
    


    const formHandler = async (e) => {
        e.preventDefault();

        const agentData = {
            name,
            email
        }

        try {
            let response;

            if(agentValues){
                response = await axios.post(`${backendUrl}/agent/update/${agentValues._id}`, agentData);
            }else{
                response = await axios.post(`${backendUrl}/agent`, agentData);
            }
            

            if(response.status === 200){
                setName('');
                setEmail('')
            }
        } catch (error) {
            console.error(error)
        }

    }


    return(
        <>
        <Header />
            <div className="d-flex justify-content-center align-items-center main-content my-5">
                <div className="card shadow p-4" style={{maxWidth: "30rem", width: "100%"}}>
                    <h3 className="text-center mb-3 title-text">{agentValues ? "Update":"Add"} Sales Agent</h3>
                    <hr />

                    <form onSubmit={formHandler}>
                        <div className="mb-3">
                            <label htmlFor="agentName" className="form-label">Agent Name: </label>
                            <input type="text" id="agentName" className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Address: </label>
                            <input type="email" id="email" className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                        <div className="mb-3 text-center">
                            <button type="submit" className="btn btn-primary">{agentValues ? "Update":"Add"} Agent</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}


export default AddSalesAgent;