import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getFirebase } from "../firebase";

const Home = () => {

const [loading, setLoading] = useState(true);
const [movies, setMovies] = useState([]);

if (loading && !movies.length) {
  getFirebase()
    .database()
    .ref("/movies")
    .orderByChild("releaseDate")
    .once("value")
    .then(snapshot => {
      let movies = [];
      const snapshotVal = snapshot.val();
      for (let slug in snapshotVal) {
        movies.push(snapshotVal[slug]);
      }

      // const newestFirst = posts.reverse();
      setMovies(movies);
      setLoading(false);
    });
}

if (loading) {
  return <h1>Loading...</h1>;
}


  return (
    <>
      <h1>Your Movies</h1>
      
      {movies.map(movie => (
        <section key={movie.slug} className="card">
          <img src={movie.coverImage} alt={movie.coverImageAlt} />
          <div className="card-content">
            <h2>
              {movie.title} &mdash;{" "}
              <span style={{ color: "#5e5e5e" }}>{movie.directedBy}</span>
            </h2>
            <p
              dangerouslySetInnerHTML={{
                __html: `${movie.content.substring(0, 200)}...`
              }}
            ></p>
            <Link to={`/${movie.slug}`}>Continue reading...</Link>
          </div>
        </section>
      ))}
    </>
  );
};

export default Home;
