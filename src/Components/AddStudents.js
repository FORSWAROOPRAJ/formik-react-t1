import React from 'react'
import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { URL } from '../App';
import axios from 'axios';
import * as Yup from 'yup';
import { useFormik } from "formik";

function AddStudents() {
    const nav = useNavigate('');

    const formValidation = Yup.object({

        name: Yup.string().required("Name required"),

        email: Yup.string().email('Invalid Email').
            required('Email Required'),

        mobile: Yup.string().matches(/^\d{10}$/, "Mobile number not valid")
            .required(' Mobile Required'),

        cls: Yup.string()
    });

    let { handleSubmit, values, handleChange, handleBlur, errors, touched } = useFormik({
        initialValues: {
            name: "",
            email: "",
            mobile: "",
            cls: ""
        },
        validationSchema: formValidation,
        onSubmit: (vals) => {
            handleSubmit(vals);
        }
    });

    handleSubmit = async () => {
        try {
            await axios.post(URL, values)
            nav("/all-students")
        }
        catch (err) {
            alert('There is a problem, please view error in console');
            console.log(err);
        }
    }

    return (
        <div>
            <h2>AddStudents</h2>
            <hr />
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control id="name"
                        name="name"
                        type="text" placeholder="Enter Name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name} />
                    {touched.name && errors.name ? <div style={{ color: 'red' }}>{errors.name}</div> : null}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Mobile No.</Form.Label>
                    <Form.Control id="mobile"
                        name="mobile"
                        type="text" placeholder="Enter Mobile"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.mobile} />
                    {touched.mobile && errors.mobile ? <div style={{ color: 'red' }}>{errors.mobile}</div> : null}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        id="email"
                        name="email"
                        type="text" placeholder="Enter Email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email} />
                    {touched.email && errors.email ? <div style={{ color: 'red' }}>{errors.email}</div> : null}
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Batch </Form.Label>
                    <Form.Control id="cls"
                        name="cls"
                        type="text" placeholder="Batch"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.cls} />
                    {touched.cls && errors.cls ? <div style={{ color: 'red' }}>{errors.cls}</div> : null}
                </Form.Group><br />
                <Button variant="success" onClick={handleSubmit}>Add Student</Button>
            </Form>
        </div>
    )
}

export default AddStudents
