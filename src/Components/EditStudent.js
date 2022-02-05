import React from 'react'
import { useState, useEffect } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { URL } from '../App';
import axios from 'axios';

function EditStudent() {

    const params = useParams();
    const nav = useNavigate('');
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [mobile, setmobile] = useState("");
    const [cls, setcls] = useState("");

    useEffect(() => {
        getData();
    }, [])

 
    const getData = async () => {
        try {
            const response = await axios.get(URL + params.id);
            setname(response.data.name);
            setemail(response.data.email);
            setmobile(response.data.mobile);
            setcls(response.data.cls);
        }
        catch (err) { console.log(err); }
    }

    //Axios PUT
    const handleSubmit = async () => {
        try {
            await axios.put(URL + params.id, {
                name, mobile, email, cls
            })
            nav("/all-students")
        }
        catch (err) {
            alert('There is a problem, please view error in console')
            console.log(err);
        }
    }

    return <>  Edit Student
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setname(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Mobile No.</Form.Label>
                <Form.Control type="text" placeholder="Mobile" value={mobile} onChange={(e) => setmobile(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" placeholder="Email" value={email} onChange={(e) => setemail(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Batch </Form.Label>
                <Form.Control type="text" placeholder="Batch" value={cls} onChange={(e) => setcls(e.target.value)} />
            </Form.Group><br />
            <Button variant="success" onClick={handleSubmit}>Update Student</Button>
        </Form>

    </>
}

export default EditStudent
