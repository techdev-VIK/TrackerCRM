import { useContext, useState } from "react"
import TrackerContext from "../contexts/TrackerContext";

const ReassignAgent = ({onAddAgent, onClose}) => {

    const { agents } = useContext(TrackerContext);

    const [agentId, setAgentId] = useState('');

    const agentSubmit = (e) => {
        e.preventDefault();

        if(agentId.trim() === '') return;

        try {
            onAddAgent(agentId);
            setAgentId('')
        } catch (error) {
            console.error(error);
        }
    }

    return (

        <>
            <div className="modal-overlay">
            <div className="card shadow p-3 w-25">
                <div className="card-body">
                <h5 className="card-title text-center">Reassign Agent</h5>
                <form onSubmit={agentSubmit}>

                    <select onChange={(e) => setAgentId(e.target.value)} className="form-select mt-4">
                        <option value="">-- Select --</option>
                            {agents.map((agent) => (
                                <option key={agent._id} value={agent._id}>{agent.name}</option>
                            ))}
                    </select>

                    <div className="d-flex justify-content-between mt-4">

                    <button className="btn btn-sm btn-danger" onClick={onClose}>
                        Cancel
                    </button>

                    <button className="btn btn-sm btn-primary">
                        Submit
                    </button>

                    </div>
                </form>
                </div>
            </div>
            </div>
            
        </>
    )
}

export default ReassignAgent