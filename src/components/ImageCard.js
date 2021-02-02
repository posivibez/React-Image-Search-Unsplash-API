import React from 'react';
import './ImageList.css';

class ImageCard extends React.Component {

    render() {

        const { urls } = this.props.image;

        return(
            <div className='image-card' style={{ backgroundImage: `url(${urls.small})` }}></div>
        );
    }
}

export default ImageCard;