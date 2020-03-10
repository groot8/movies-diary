import React, { useCallback, useContext,useState } from "react";
import { withRouter, Redirect } from "react-router";
import { getFirebase } from "../firebase";
import { AuthContext } from "./auth.js";

const labelStyles = {
    display: "block",
    marginBottom: 4,
  };
  
  const inputStyles = {
    width: "100%",
    height: "2rem",
    lineHeight: "2rem",
    verticalAlign: "middle",
    fontSize: "1rem",
    marginBottom: "1.5rem",
    padding: "0 0.25rem",
    marginTop:'0.5rem'
  };




 const Login = ({history}) => {
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('')
    const handleLogin = () =>{
      try {
        getFirebase()
        .auth()
        .signInWithEmailAndPassword(email,password);
        history.push("/log");
        } 
      catch (error) {
        alert(error);
        }
      }
    const { currentUser } = useContext(AuthContext);

    if (currentUser) {
        return <Redirect to="/log" />;
    }
    return (
        <div>
        <h1>Login to Dashboard</h1>
         <section style={{ margin: "2rem 0",height:'50vh' }}>
         <form onSubmit={handleLogin}>

        <label style={labelStyles} htmlFor="title-field">
          Email
        </label>
        <input
          style={inputStyles}
          id="title-field"
          type="email"
          value={email}
          onChange={({ target: { value } }) => {
            setEmail(value);
          }}
        />
        <label style={labelStyles} htmlFor="director-field">
          Password
        </label>
        <input
          style={inputStyles}
          id="director-field"
          type="password"
          value={password}
          onChange={({ target: { value } }) => {
            setPassword(value);
          }}
        />
            <button
            style={{
              border: "none",
              color: "#fff",
              backgroundColor: "#039be5",
              borderRadius: "4px",
              padding: "8px 12px",
              fontSize: "0.9rem",
              cursor:'pointer'
            }}
            type='submit'
          >
            Login
          </button>
          </form>
        </section>
        </div>
    )
}
export default withRouter(Login);