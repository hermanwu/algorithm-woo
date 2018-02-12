import React, { Component } from 'react';
import './ImageList.scss';

class ImageList extends Component {
    render() {
        return (
            <div className="image-list">
                <h2>See all results</h2>
                <ul>
                    {this.state.images.map((image) => {
                        return <li key={image.id}>
                            <img src={image.images.fixed_height.url}
                                 alt={image.images.fixed_height.url} />
                        </li>
                    })}
                </ul>
            </div>
        );
    }
}

export default ImageList;