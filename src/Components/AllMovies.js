import React, { useState, useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Movie_URL } from '../App';
import { Link } from 'react-router-dom'

function AllMovies() {
  const [movie, setMovie] = useState([]);

  const getMovies = async () => {
    let mov = await axios.get(Movie_URL);
    setMovie(mov.data);
  };

  useEffect(getMovies, []);
  return <>
    <h2>All Movies</h2>
    <hr />
    <div className="movie-div">
      {movie.map(({ id, poster, name, rating, summary }) => (
        <MovieCards id={id} poster={poster} name={name} rating={rating} summary={summary} deleteOp={
          <IconButton aria-label="delete" onClick={async () => {
            let deletedMovie = await axios.delete(Movie_URL + id);
            getMovies(); console.log(deletedMovie)
          }
          }>
            <DeleteForeverOutlinedIcon style={{ color: "red" }} />
          </IconButton>} />
      ))}
    </div>
  </>
}

function MovieCards({ id, poster, name, rating, summary, deleteOp }) {
  const nav = useNavigate('');
  return (
    <div className="movie-div" >
      <Card style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }}>
        <div className="movie-detail">
          <CardActionArea>
            <CardMedia className="poster"
              component="img"
              alt="Poster"
              image={poster}
              title="Poster"
            />
            <CardContent>
              <div className="movie-info">
                <Typography component="h6">
                  <b> {name}</b> &nbsp; - &nbsp;{rating}⭐
                </Typography>
                <div>
                <Link to={`/edit-movie/${id}`}>
                  <IconButton >
                    <EditOutlinedIcon style={{ color: "blue" }} />
                  </IconButton>
                  </Link>
                  {deleteOp}
                </div>
              </div>
              <p className="summary">{summary}</p>
            </CardContent>
          </CardActionArea>
        </div>
      </Card>
    </div>

  );
}

export default AllMovies;
