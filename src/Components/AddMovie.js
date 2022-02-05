import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Movie_URL } from '../App';

function AddMovie() {
  const nav = useNavigate('');
  const formValidation = Yup.object({
    poster: Yup.string().url("Required valid poster link")
      .required("Poster required"),

    name: Yup.string().required("Name required"),

    rating: Yup.number()
      .min(1, "Enter Rating between 1 to 10").max(10, "Enter Rating between 1 to 10").required("Rating required"),

    summary: Yup.string().min(20, "Required longer summary")
      .required("Name required")

  });

  let { handleSubmit, values, handleChange, handleBlur, errors, touched } = useFormik({
    initialValues: {
      poster: "",
      name: "",
      rating: "",
      summary: ""
    },
    validationSchema: formValidation,
    onSubmit: (vals) => {
      console.log("onSubmit", vals);
      addmov(vals);
    }
  });

  const addmov = async (movieobj) => {
    try {
      let res = await axios.post(Movie_URL, movieobj)
      console.log(res);
      nav("/movies");
    }
    catch (err) { 
      alert('There is a problem, please view error in console');
      console.log(err); }
  }
  return (<form onSubmit={handleSubmit} className="form-div">
    <h2>Add a new Movie!</h2>
    <TextField id="name"
      name="name"
      label="Movie Name"
      variant="filled"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.name}
      error={errors.name && touched.name}
      helperText={errors.name && touched.name ? errors.name : ""} />
    <TextField id="rating"
      name="rating"
      label="Movie Rating"
      type="Number"
      variant="filled"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.rating}
      error={errors.rating && touched.rating}
      helperText={errors.rating && touched.rating ? errors.rating : ""} />
    <TextField id="poster"
      name="poster"
      variant="filled"
      label="Poster Link"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.poster}
      error={errors.poster && touched.poster}
      helperText={errors.poster && touched.poster ? errors.poster : ""} />
    <TextField id="summary"
      name="summary"
      label="Movie Summary"
      variant="filled"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.summary}
      error={errors.summary && touched.summary}
      helperText={errors.summary && touched.summary ? errors.summary : ""} />
    <Button variant="contained" type="submit">Add Movie</Button>
  </form>);
}

export default AddMovie;