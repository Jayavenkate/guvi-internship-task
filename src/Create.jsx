import axios from "axios";
import { useState } from "react"

const Create = () => {
    const [task, setTask] = useState("");
    const [show, setShow] = useState(false)
    const handlecreate = async () => {
        console.log('taskname:', task);
        try {
            const response = await axios.post("https://guvi-intership-node.vercel.app/create", { task });
            console.log(response.data)
        } catch (err) {
            console.log(err.message)
        }
        setTask('')
    }
    const handleShow = () => {
        setShow(true);
    }
    return (
        <div>
            <button onClick={handleShow}>Create a Task</button>
            {show &&
                <div style={{ margin: "30px 0px 0px 0px" }}>
                    <input type="text" placeholder="create daily Task " value={task} onChange={(e) => setTask(e.target.value)} />
                    <button onClick={handlecreate}>create Task</button>
                </div>
            }
        </div >
    )
}

export default Create