import React from 'react';
import { Section } from 'components/Section/Section';
import PropTypes from 'prop-types';

export const MoviesInfo = ({
  title,
  genres,
  vote_average,
  overview,
  poster_path,
  release_date,
}) => {
  const IMAGES_BASE_URL = 'https://image.tmdb.org/t/p/w200/';
  const userScore = Math.round(vote_average * 10).toFixed(0);
  const releaseDate = new Date(release_date).getFullYear();


  return (
    <Section>
      <img src={IMAGES_BASE_URL + poster_path} alt="title" />
      <h1>{title} {release_date && '('+ releaseDate +')'}</h1>
      <h3>User Score: {vote_average && userScore}%</h3>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Genres</h2>
      <p>{genres && genres.map(genre => genre.name).join('  ')} </p>
    </Section>
  );
};

MoviesInfo.propTypes = {
  title: PropTypes.string,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
    })),
  vote_average: PropTypes.number,
  overview: PropTypes.string,
  poster_path: PropTypes.string,
  release_date: PropTypes.string,
};
