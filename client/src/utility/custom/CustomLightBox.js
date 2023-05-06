import Proptypes from 'prop-types';
import React, { useState } from 'react';
import { Image } from 'react-feather';
import Lightbox from 'react-image-lightbox';
import "react-image-lightbox/style.css";
import { Button, Label } from 'reactstrap';

const CustomLightBox = ( { photos } ) => {
    const [image, setImage] = useState( {
        imageIndex: 0,
        isOpen: false
    } );
    return (
        <div>
            <Button.Ripple tag={Label} for="imageLightBoxId" className='btn-icon' color='flat-primary' onClick={() => setImage( { ...image, isOpen: true } )} >
                <Image id='imageLightBoxId' size={18} />
            </Button.Ripple>
            {
                image.isOpen &&
                <Lightbox
                    style={{ backgroundColor: 'green', height: '100px', width: '100px', opacity: '0.2' }}
                    mainSrc={photos[image.imageIndex]}
                    nextSrc={photos[( image.imageIndex + 1 ) % photos.length]}
                    mainSrcThumbnail={photos[( image.imageIndex + 1 ) % photos.length]}
                    prevSrc={photos[( image.imageIndex + photos.length - 1 ) % photos.length]}
                    onCloseRequest={() => setImage( { imageIndex: 0, isOpen: false } )}
                    onMovePrevRequest={() => setImage( {
                        ...image,
                        imageIndex: ( image.imageIndex + photos.length - 1 ) % photos.length
                    } )
                    }
                    onMoveNextRequest={() => setImage( {
                        ...image,
                        imageIndex: ( image.imageIndex + 1 ) % photos.length
                    } )
                    }
                    animationDisabled
                    animationDuration={600}
                    imageTitle='Image Gallery'


                />
            }
        </div >
    );
};

export default CustomLightBox;
// ** PropTypes
CustomLightBox.propTypes = {
    photos: Proptypes.any.isRequired
};