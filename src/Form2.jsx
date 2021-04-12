import { useState } from 'react'

const Form2 = () => {

    const [formname, setFormName] = useState('');
    const [formpassword, setFormPassword] = useState('');
    const [formemail, setFormEmail] = useState('');

    const [allEntry, setAllEntry] = useState([]);

    const formSubmit = (e) => {
        e.preventDefault();
        if (formname && formemail && formpassword) {
            //storing all the form input data into newEntry object
            const newEntry = {
                id: new Date().getTime().toString(),
                name: formname,
                pass: formpassword,
                email: formemail
            }

            //adding all the for input to allEntry using useState 
            //need to convert it into array to run loops while printing
            setAllEntry([...allEntry, newEntry]);

            //emtying input box once data is submitted
            setFormName("")
            setFormPassword("")
            setFormEmail("")
        }
        else {
            alert("please fill all the data")
        }
    }
    return (
        <>
            <div id="container">
                <form onSubmit={formSubmit}>
                    <label>Enter name</label>
                    <input type="text" id="name" value={formname} name="fname"
                        onChange=
                        {
                            (e) => {
                                return setFormName(e.target.value)
                            }
                        } />
                    <br />
                    <label>Enter pass</label>
                    <input type="password" id="pass" value={formpassword} name="pass"
                        onChange={(e) => setFormPassword(e.target.value)} />
                    <br />
                    <label>Enter email</label>
                    <input type="email" id="email" value={formemail} name="email"
                        onChange={(e) => setFormEmail(e.target.value)} />
                    <br />
                    <button type="submit">Submit</button>
                </form>
                <table border="1">
                    <tr>
                        <th>name</th>
                        <th>pass</th>
                        <th>email</th>
                    </tr>
                    {
                        allEntry.map((currEle) => {
                            return (
                                <tr key={currEle.id}>
                                    <td>{currEle.name}</td>
                                    <td>{currEle.pass}</td>
                                    <td>{currEle.email}</td>
                                </tr>
                            )
                        })
                    }

                </table>
            </div>
        </>
    )
}

export default Form2