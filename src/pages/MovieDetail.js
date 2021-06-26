import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";
//useHistory ofera informatii despre ruta la care ne aflam, ca de exemplu adresa URL
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

function MovieDetail() {
  const history = useHistory();
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  //useEffect ruleaza cand movies sau url se schimba
  useEffect(() => {
    const currentMovie = movies.filter((x) => x.url === url);
    setMovie(currentMovie);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <StyleDetails
          variants={pageAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
        >
          <StyleHeadline>
            <h2>{movie[0].title}</h2>
            <img src={movie[0].mainImg} alt="movieImg"></img>
          </StyleHeadline>
          <StyleAwards>
            {movie[0].awards.map((a) => (
              <Award
                title={a.title}
                description={a.description}
                key={a.title}
              />
            ))}
          </StyleAwards>
          <StyleImageDisplay>
            <img src={movie[0].secondaryImg}></img>
          </StyleImageDisplay>
        </StyleDetails>
      )}
    </>
  );
}

const StyleDetails = styled(motion.div)`
  color: white;
`;

const StyleHeadline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const StyleAwards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;
const StyleAward = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 50%;
    background: #23d997;
    height: 0.3rem;
    margin: 1rem 0rem;
  }
`;
const StyleImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const Award = ({ title, description }) => {
  return (
    <StyleAward>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </StyleAward>
  );
};

export default MovieDetail;
