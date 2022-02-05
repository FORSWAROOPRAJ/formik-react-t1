import React, { useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { URL } from '../App';
import axios from 'axios';

function AllStudents() {

    const [stu, setStu] = useState([]);
    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        try {
            const response = await axios.get(URL);
            setStu(response.data); // data key holds the api data.
        }
        catch (err) { 
            alert('There is a problem, please view error in console');
            console.log(err); }
    }

    //axios DELETE
    const handleDelete = async (id) => {
        try {
            await axios.delete(URL + id);
            getData();
        }
        catch (err) {
                         alert('There is a problem, please view error in console');
        console.log(err); }
    }

    return (
        <div>
            <h2>All Student Records</h2>
            <hr />
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th> Name</th>
                        <th>Email
                        </th>
                        <th>Mobile</th>
                        <th>Batch</th>
                        <th>Edit/Delete record</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        stu.map((e) => {
                            return <tr key={e.id}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.email}</td>
                                <td>{e.mobile}</td>
                                <td>{e.cls}</td>
                                <td><Button variant="danger" onClick={() => handleDelete(e.id)}>Delete</Button>
                                    <Link to={`/edit-students/${e.id}`}> &nbsp;&nbsp;
                                        <Button variant='primary'>Edit</Button>
                                    </Link>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default AllStudents
