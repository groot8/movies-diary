import React,{useState} from 'react'
import { getFirebase } from "../firebase";
import { useHistory } from "react-router-dom";


const labelStyles = {
    display: "block",
    marginBottom: 4
  };
  
  const inputStyles = {
    width: "100%",
    height: "2rem",
    lineHeight: "2rem",
    verticalAlign: "middle",
    fontSize: "1rem",
    marginBottom: "1.5rem",
    padding: "0 0.25rem"
  };


export const Log = () => {
    const history = useHistory();
    const [title, setTitle] = useState("");
    const [directedBy, setDirector] = useState("");
    const [releaseDate, setyear] = useState("");
    const [slug, setSlug] = useState("");
    const [coverImage, setCoverImage] = useState("");
    const [coverImageAlt, setCoverImageAlt] = useState("");
    const [content, setContent] = useState("");


  
    const logMovie = () => {
        const newMovie = {
          title,
          directedBy,
          releaseDate,
          slug,
          coverImage,
          coverImageAlt,
          content
        };
        getFirebase()
          .database()
          .ref()
          .child(`movies/${slug}`)
          .set(newMovie)
          .then(() => history.push(`/`));
    };
    return (
<>
      <h1>Create a new post</h1>
      <section style={{ margin: "2rem 0" }}>
        <label style={labelStyles} htmlFor="title-field">
          Title
        </label>
        <input
          style={inputStyles}
          id="title-field"
          type="text"
          value={title}
          onChange={({ target: { value } }) => {
            setTitle(value);
          }}
        />
        <label style={labelStyles} htmlFor="director-field">
          Director
        </label>
        <input
          style={inputStyles}
          id="director-field"
          type="text"
          value={directedBy}
          onChange={({ target: { value } }) => {
            setDirector(value);
          }}
        />
        <label style={labelStyles} htmlFor="year-field">
          Release Year
        </label>
        <input
          style={inputStyles}
          id="year-field"
          type="text"
          value={releaseDate}
          onChange={({ target: { value } }) => {
            setyear(value);
          }}
        />

        <label style={labelStyles} htmlFor="slug-field">
          Slug
        </label>
        <input
          style={inputStyles}
          id="slug-field"
          type="text"
          value={slug}
          onChange={({ target: { value } }) => {
            setSlug(value);
          }}
        />

        <label style={labelStyles} htmlFor="cover-image-field">
          Cover image
        </label>
        <input
          style={inputStyles}
          id="cover-image-field"
          type="text"
          value={coverImage}
          onChange={({ target: { value } }) => {
            setCoverImage(value);
          }}
        />

        <label style={labelStyles} htmlFor="cover-image-alt-field">
          Cover image alt
        </label>
        <input
          style={inputStyles}
          id="cover-image-alt-field"
          type="text"
          value={coverImageAlt}
          onChange={({ target: { value } }) => {
            setCoverImageAlt(value);
          }}
        />

        <label style={labelStyles} htmlFor="content-field">
          Content
        </label>
        <textarea
          style={{ ...inputStyles, height: 200, verticalAlign: "top" }}
          id="content"
          type="text"
          value={content}
          onChange={({ target: { value } }) => {
            setContent(value);
          }}
        />
        <div style={{ textAlign: "right" }}>
          <button
            style={{
              border: "none",
              color: "#fff",
              backgroundColor: "#039be5",
              borderRadius: "4px",
              padding: "8px 12px",
              fontSize: "0.9rem"
            }}
            onClick={logMovie}
          >
            Create
          </button>
        </div>
      </section>
    </>
    )
}
