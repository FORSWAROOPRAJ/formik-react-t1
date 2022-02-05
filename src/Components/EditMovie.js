import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';
import { useNavigate, useParams } from "react-router-dom";
import { Movie_URL } from '../App';
import Form from 'react-bootstrap/Form'
import axios from 'axios';

function EditMovie() {
    const { id } = useParams();
    const nav = useNavigate('');
    const [name, setname] = useState("");
    const [poster, setposter] = useState("");
    const [rating, setrating] = useState("");
    const [summary, setsummary] = useState("");

    const getMovies = async () => {
        try {
            const response = await axios.get(Movie_URL + id);
            setname(response.data.name);
            setposter(response.data.poster);
            setrating(response.data.rating);
            setsummary(response.data.summary);
        }
        catch (err) {
            alert('There is a problem, please view error in console')
            console.log(err);
        }
    };

    useEffect(getMovies, []);

    //Axios PUT
    const handleSubmit = async () => {
        try {
            await axios.put(Movie_URL + id, {
                name, poster, rating, summary
            })
            nav("/movies")
        }
        catch (err) {
            alert('There is a problem, please view error in console')
            console.log(err);
        }
    }
    return <>
        <h2>Edit Movie</h2>
        <hr />
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" value={name} onChange={(e) => setname(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Poster</Form.Label>
                <Form.Control type="text" placeholder="Poster Link" value={poster} onChange={(e) => setposter(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Rating</Form.Label>
                <Form.Control type="text" placeholder="Rating" value={rating} onChange={(e) => setrating(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Summary </Form.Label>
                <Form.Control type="text" placeholder="Summary" value={summary} onChange={(e) => setsummary(e.target.value)} />
            </Form.Group><br />
            <Button variant="primary" onClick={handleSubmit} style={{ backgroundColor: "green", color: "white" }}>Update Movie</Button>
        </Form>
    </>;
}

export default EditMovie;
