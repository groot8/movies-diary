import React, { useState } from "react";
import { getFirebase } from "../firebase";

const Movie = ({ match }) => {
  const slug = match.params.slug;
  const [loading, setLoading] = useState(true);
  const [currentMovie, setCurrentMovie] = useState();
  console.log(currentMovie)

if (loading & !currentMovie) {
  getFirebase()
  .database()
  .ref()
  .child(`/movies/${slug}`)
  .once("value")
  .then(snapshot => {
    if (snapshot.val()) {
      setCurrentMovie(snapshot.val());
    }
    setLoading(false);
  });
}

  return (
    <>
    {loading? <h1>Loading...</h1>: 
    <>
    <img src={currentMovie.coverImage} alt={currentMovie.coverImageAlt} style={{width:'50rem',height:'auto'}} />
    <h1>{currentMovie.title}</h1>
    <em>{currentMovie.directedBy}</em>
    <p dangerouslySetInnerHTML={{ __html: currentMovie.content }}></p>
    </>
    }
  
    </>
  );
};

export default Movie;
