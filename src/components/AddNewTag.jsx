import { useState } from "react"
import { useParams } from "react-router-dom";

const AddNewTag = ({onAddTag, onClose}) => {


    const [tagName, setTagName] = useState('');

    const tagSubmit = (e) => {
        e.preventDefault();

        if(tagName.trim() === '') return;

        try {
            onAddTag(tagName);  // Trigger the function from the parent
            setTagName('')
        } catch (error) {
            console.error(error);
        }
    }

    return (

        <>
            <div className="modal-overlay">
            <div className="card shadow p-3 w-25">
                <div className="card-body">
                <h5 className="card-title text-center">Add New Tag</h5>
                <form onSubmit={tagSubmit}>
                    <input type="text" placeholder="Add a tag" onChange={(e) => setTagName(e.target.value)} className="form-control mt-4" />

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

export default AddNewTag