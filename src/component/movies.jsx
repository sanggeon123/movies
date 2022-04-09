import React from "react";
import PropTypes from 'prop-types';
import '../movies.css';

function Movie({id, year, title, summary, poster}){
    return(
        <div className="movie">
            <img src={poster} alt={title}/>
            <div>
                <h5 className="movie__title">영화제목 : {title}</h5>
                <h5 className="movie__year">제작년도 : {year}</h5>
                <h5 className="movie__summary">{summary}</h5>
            </div>
        </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
}

export default Movie;