import { useState } from "react"

const SignUp = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [place, setPlace] = useState("");

    const handleSubmit = () => {
        const newdata = {
            name: name,
            age: age,
            gender: gender,
            place: place

        }
        console.log(newdata)
    }
    return (
        <div>
            <h1>SignUp</h1>
            <div style={{ display: "flex", flexDirection: "column", maxWidth: "350px", gap: "20px" }}>
                <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                <input type="number" placeholder="age" value={age} onChange={(e) => setAge(e.target.value)} />
                <input type="text" placeholder="gender" value={gender} onChange={(e) => setGender(e.target.value)} />
                <input type="text" placeholder="place" value={place} onChange={(e) => setPlace(e.target.value)} />
                <button type="submit" onClick={handleSubmit}>SignUp</button>
            </div>
        </div>
    )
}
export default SignUp