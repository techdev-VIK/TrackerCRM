import { useState } from "react"
import Header from "../components/Header";


const AddSalesAgent = () => {


    const [name, setName] = useState('');

    const [email, setEmail] = useState('');


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
                            <input type="text" id="agentName" className="form-control" onChange={(e) => setName(e.target.value)}/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Address: </label>
                            <input type="email" id="email" className="form-control" onChange={(e) => setEmail(e.target.value)}/>
                        </div>

                        <div className="mb-3 text-center">
                            <button type="submit" className="btn btn-primary">Add Agent</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}


export default AddSalesAgent;