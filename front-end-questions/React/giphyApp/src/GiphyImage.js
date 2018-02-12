import React from 'react';
import './GiphyImage.scss';

const GiphyImage = props => {
    const {url, slug} = props;

    return (
        <div className="giphy-image">
            <img src={url}
                 alt={slug}/>
        </div>
    );
}

export default GiphyImage;