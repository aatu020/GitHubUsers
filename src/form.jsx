import { useState } from "react"

const FormData = () => {
    const [data, setData] = useState({
        fname: "",
        pass: "",
        email: ""
    })
    const inputEvent = (e) => {

        const value = e.target.value
        const nameattr = e.target.name

        setData((prevData) => {
            console.log(prevData);
            return {
                ...prevData,
                [nameattr]: value,
            }
        })
    }
    const formSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <div id = "container">
            <form onSubmit={formSubmit}>
                <label>Enter name</label>
                <input type="text" id="name" value={data.fname} name="fname"
                    onChange={inputEvent} />
                <br />
                <label>Enter pass</label>
                <input type="password" id="pass" value={data.pass} name="pass"
                    onChange={inputEvent} />
                <br />
                <label>Enter email</label>
                <input type="email" id="email" value={data.email} name="email"
                    onChange={inputEvent} />
                <br />
                <button type="submit">Submit</button>
            </form>
            <table>
                <tr>
                    <th>name</th>
                    <th>pass</th>
                    <th>email</th>
                </tr>
                <tr>
                    <td>{data.fname}</td>
                    <td>{data.pass}</td>
                    <td>{data.email}</td>
                </tr>
            </table>
        </div>
    )
}

export default FormData