import  { useEffect, useState } from "react";
import "./home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "../../components/moviList/movieList";
const Home =()=>{
    const[popularMovie, setPopularMovies]=useState([])
     useEffect(() =>{
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=f8db5e2a07dec28de094bb86603f427b")
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
    },[])
    return(
        <>
      <div className="poster">
        <Carousel 
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showArrows={false}
        >
            {
                        popularMovie.map(movie => (
                            <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average :""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
        </Carousel> 
        <MovieList/>
      </div>
        </>
    )
}
export default Home;