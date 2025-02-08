import { useEffect, useState } from "react"
import Header from "../components/Header";
import { useLocation } from "react-router-dom";


const AddSalesAgent = () => {

    const location = useLocation();

    const agentValues = location.state?.agentValues;

    const [name, setName] = useState(agentValues?.name || '');

    const [email, setEmail] = useState(agentValues?.email || '');



    // useEffect(() => {
    //     if(agentValues){
    //         setName(agentValues.name);
    //         setEmail(agentValues.email);
    //     }else{
    //         setName('');
    //         setEmail('');
    //     }
    // }, [agentValues]);
    


    const formHandler = (e) => {
        e.preventDefault();

        const agentData = {
            name,
            email
        }
    }


    return(
        <>
        <Header />
            <div className="d-flex justify-content-center align-items-center main-content my-5">
                <div className="card shadow p-4" style={{maxWidth: "30rem", width: "100%"}}>
                    <h3 className="text-center mb-3">Add Sales Agent</h3>
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