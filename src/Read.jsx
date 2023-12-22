import axios from "axios";
import { useEffect, useState } from "react"

const Read = () => {
    const [data, setData] = useState([]);
    const [editedTask, setEditedTask] = useState("");
    const [selectedId, setSelectedId] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:4000/read");
                setData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error.message);
            }
        };

        fetchData();
    }, []);

    const deleteData = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:4000/${id}`);
            console.log(response.data);
            const updatedData = await axios.get("http://localhost:4000/read");
            setData(updatedData.data);
        } catch (err) {
            console.log(err)
        }
    }

    const openUpdateModal = (id) => {
        setSelectedId(id);
        // You can show a modal or navigate to an update page here
    };

    const updateData = async () => {
        try {
            const response = await axios.put(`http://localhost:4000/${selectedId}`, {
                task: editedTask,
            });
            console.log(response.data);
            const updatedData = await axios.get("http://localhost:4000/read");
            setData(updatedData.data);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div>
            <h1>Read</h1>
            {data.map((val) => (
                <div key={val._id} >
                    <p>{val.task}</p>
                    <button onClick={() => deleteData(val.id)}>delete</button>
                    <button onClick={() => openUpdateModal(val._id)}>Update</button>
                </div>
            ))}

            {selectedId && (
                <div>
                    <input
                        type="text"
                        value={editedTask}
                        onChange={(e) => setEditedTask(e.target.value)}
                    />
                    <button onClick={updateData}>Update</button>
                </div>
            )}
        </div>
    )
}
export default Read