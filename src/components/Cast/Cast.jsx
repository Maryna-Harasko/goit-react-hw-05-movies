import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCast } from 'Services/fetch';
import { ActorsList } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState([]);
  const defaultImage =
    'https://banffventureforum.com/wp-content/uploads/2019/08/No-Image.png';

  useEffect(() => {
    getMoviesCast(movieId)
      .then(res => setCasts([...res.cast]))
      .catch(error => {
        console.error(error.message);
      });
  }, [movieId]);

  return (
    <ActorsList>
      {casts &&
        casts.map(({ id, name, character, profile_path }) => {
          return (
            <li key={id}>
              <img
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/original${profile_path}`
                    : defaultImage
                }
                alt="name"
                width="200"
                height="300"
              />
              <div>
                <p>
                  <b>Name:</b> {name}
                </p>
                <p>
                  <b>Character:</b> {character}
                </p>
              </div>
            </li>
          );
        })}
    </ActorsList>
  );
};

export default Cast;
