import React, { useState } from "react";

import "./movieList.css";

const MovieList = ({ movies, icon, whatToDoOnIconClick }) => {
  const Icon = icon;
  const [color, setColor] = useState("white");
  return (
    <>
      <div className="moviesContainer">
        {movies.map((movie, idx) => {
          return (
            <div className="movieList" key={idx}>
              <div
                style={{
                  // border: "2px solid red",
                  height: "200px",
                  width: "80%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <img src={movie.Poster} alt="" />
                <div
                  onClick={(ele) => {
                    console.log(ele.target);
                    whatToDoOnIconClick()
                    const selectedMovie = movies.find((ele) => {
                      console.log(ele.imdbID === movie.imdbID);
                      if (ele.imdbID === movie.imdbID) {
                        return ele;
                      }
                    });
                    console.log(selectedMovie);

                  }}
                >
                  <Icon color={color} />
                </div>
              </div>
              <div
                style={{
                  height: "30%",
                  border: "2px solid red",
                  width: "90%",

                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                }}
              >
                <h2 style={{ textAlign: "center", color: "white" }}>
                  {movie.Title}
                </h2>
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  <p
                    style={{
                      color: "lime",
                      boxShadow:
                        "inset 2px 2px 3px black, inset 3px 3px 5px black",
                      padding: ".3rem .8rem",
                      borderRadius: "5px",
                    }}
                  >
                    {movie.Type}
                  </p>
                  <p
                    style={{
                      color: "orangered",
                      boxShadow:
                        "inset 2px 2px 3px black, inset 3px 3px 5px black",
                      padding: ".3rem .8rem",
                      borderRadius: "5px",
                    }}
                  >
                    {movie.Year}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MovieList;
