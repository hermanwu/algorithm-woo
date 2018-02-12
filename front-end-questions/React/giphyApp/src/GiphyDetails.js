import React from 'react';
import GiphyImage from './GiphyImage';
import './GiphyDetails.scss';

const GiphyDetails = props => {
    const {details} = props;

    return (
        <div className="giphy-details">
            <GiphyImage url={details.images.original.url} />

            <div className="giphy-content">
                <h3 className="giphy-title">{details.title}</h3>
                <h4>Source</h4>
                <p>{details.source}</p>
                <h4>Url</h4>
                <p>{details.url}</p>
            </div>
        </div>
    );
}

export default GiphyDetails;