import React from "react";
import { Container } from "react-bootstrap";
import "./App.css";

const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_PORT}&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state`;

export default function Login() {
  return (
    <div className="background">
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh" }}
      >
        <a
          className="btn btn-success btn-lg"
          href={AUTH_URL}
          style={{ borderRadius: "300px" }}
        >
          Login With Spotify
        </a>
      </Container>
    </div>
  );
}
