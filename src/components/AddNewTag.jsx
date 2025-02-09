import { useState } from "react"
import { useParams } from "react-router-dom";

const AddNewTag = ({onAddTag}) => {


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
            <form onSubmit={tagSubmit}>
                <input type="text" placeholder="Add a tag" onChange={(e) => setTagName(e.target.value)}/>

                <button>
                    Submit
                </button>
            </form>

        </>
    )
}

export default AddNewTag