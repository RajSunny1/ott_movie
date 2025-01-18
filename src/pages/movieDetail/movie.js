import React, { useEffect, useState } from "react";
import "./movie.css";
import { useParams } from "react-router-dom";

const Movie = () => {
  const [currentMovieDetail, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getData();
    window.scrollTo(0, 0);
  }, []);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=f8db5e2a07dec28de094bb86603f427b&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data))
      .catch((err) => console.error("Failed to fetch movie details:", err));
  };

  return (
    <div className="movie">
      <div className="movie_intro">
        <img
          className="movie_backdrop"
          src={`https://image.tmdb.org/t/p/original${
            currentMovieDetail ? currentMovieDetail.backdrop_path : ""
          }`}
          alt={currentMovieDetail ? currentMovieDetail.original_title : "Movie Poster"}
        />
      </div>
      <div className="movie_detail">
        <div className="movie_detailLeft">
          <div className="movie_posterBox">
            <img
              className="movie_poster"
              src={`https://image.tmdb.org/t/p/original${
                currentMovieDetail ? currentMovieDetail.poster_path : ""
              }`}
              alt={currentMovieDetail ? currentMovieDetail.original_title : "Movie Poster"}
            />
          </div>
        </div>
        <div className="movie_detailRight">
          <div className="movie_detailRightTop">
            <div className="movie_name">
              {currentMovieDetail ? currentMovieDetail.original_title : ""}
            </div>
            <div className="movie_tagline">
              {currentMovieDetail ? currentMovieDetail.tagline : ""}
            </div>
            <div className="movie_rating">
              {currentMovieDetail ? currentMovieDetail.vote_average : ""}{" "}
              <i className="fas fa-star" />
              <span className="movie_voteCount">
                {currentMovieDetail
                  ? ` (${currentMovieDetail.vote_count} votes)`
                  : ""}
              </span>
            </div>
            <div className="movie_runtime">
              {currentMovieDetail ? `${currentMovieDetail.runtime} min` : ""}
            </div>
            <div className="movie_releaseDate">
              {currentMovieDetail
                ? `Release date: ${currentMovieDetail.release_date}`
                : ""}
            </div>
            <div className="movie_genres">
              {currentMovieDetail && currentMovieDetail.genres
                ? currentMovieDetail.genres.map((genre) => (
                    <span className="movie_genre" key={genre.id}>
                      {genre.name}
                    </span>
                  ))
                : ""}
            </div>
          </div>
          <div className="movie_detailRightBottom">
            <div className="synopsisText">Synopsis</div>
            <div>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
          </div>
        </div>
      </div>
      <div className="movie_links">
        <div className="movie_heading">Useful Links</div>
        {currentMovieDetail && currentMovieDetail.homepage && (
          <a
            href={currentMovieDetail.homepage}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="movie_homebutton movie_Button">
                HomePage <i className="newTab fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )}
        {currentMovieDetail && currentMovieDetail.imdb_id && (
          <a
            href={`http://www.imdb.com/title/${currentMovieDetail.imdb_id}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <p>
              <span className="movie_imdbbutton movie_Button">
                IMDB <i className="newTab fas fa-external-link-alt"></i>
              </span>
            </p>
          </a>
        )}
      </div>
    </div>
  );
};

export default Movie;
