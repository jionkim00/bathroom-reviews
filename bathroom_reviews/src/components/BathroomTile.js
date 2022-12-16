import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const BathroomTile = (props) => {
    const bathroom = props.bathroom;

    return(
        <div className="card-container">
            <img src="" alt="" />
            <div className="desc">
                <h2>
                    <Link to={`/show-bathroom/${bathroom._id}`}>
                        { bathroom.name }
                    </Link>
                </h2>
                <h3>{bathroom.location}</h3>
                <p>{bathroom.description} {bathroom.rating}/5</p>
            </div>
        </div>
    )
};

export default BathroomTile;