import React from 'react';
import GiphyImage from './GiphyImage';
import './ImageList.scss';

const ImageList = props => {

    const images = props.images.map((image) => (
        <li key={image.id}>
            <GiphyImage url={image.images.fixed_height.url} />
        </li>
    ));

    return (
        <div className="image-list">
            <h2>All Results</h2>
            <ul>
                {images}
            </ul>
        </div>
    );
}

export default ImageList;