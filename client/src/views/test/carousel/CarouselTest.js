import sliderImage2 from '@src/assets/images/slider/08.jpg';
import sliderImage1 from '@src/assets/images/slider/09.jpg';
import sliderImage3 from '@src/assets/images/slider/10.jpg';
import '@src/assets/scss/mechandising/carousel-hover.scss';
import { useState } from 'react';
import { CheckCircle, Trash2 } from 'react-feather';
import { Button, ButtonGroup, Carousel, CarouselControl, CarouselIndicators, CarouselItem } from 'reactstrap';


const photos = [
    {
        src: sliderImage1,
        id: 1,
        header: 'Slide 1',
        caption:
            'Donut jujubes I love topping I love sweet. Jujubes I love brownie gummi bears I love donut sweet chocolate. Tart chocolate marshmallow.Tart carrot cake muffin.'
    },
    {
        src: sliderImage2,
        id: 2,
        header: 'Slide 2',
        caption:
            'Tart macaroon marzipan I love soufflé apple pie wafer. Chocolate bar jelly caramels jujubes chocolate cake gummies. Cupcake cake I love cake danish carrot cake.'
    },
    {
        src: sliderImage3,
        id: 3,
        header: 'Slide 3',
        caption:
            'Pudding sweet pie gummies. Chocolate bar sweet tiramisu cheesecake chocolate cotton candy pastry muffin Marshmallow cake powder icing.'
    }
];

const CarouselCaptions = () => {
    const [activeIndex, setActiveIndex] = useState( 0 );
    const [animating, setAnimating] = useState( 0 );

    const onExiting = () => {
        setAnimating( true );
    };

    const onExited = () => {
        setAnimating( false );
    };

    const next = () => {
        if ( animating ) return;
        const nextIndex = activeIndex === photos.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex( nextIndex );
    };

    const previous = () => {
        if ( animating ) return;
        const nextIndex = activeIndex === 0 ? photos.length - 1 : activeIndex - 1;
        setActiveIndex( nextIndex );
    };

    const goToIndex = newIndex => {
        if ( animating ) return;
        setActiveIndex( newIndex );
    };

    const slides = photos?.map( item => {
        return (
            <CarouselItem onExiting={onExiting} onExited={onExited} key={item.id}>
                {/* <img src={item.src} className='img-fluid' alt={item.id} /> */}
                <div className="image-main-div" >
                    <img src={item.src} alt={item.id} className='image-carousel' />
                    <div className="middle">
                        <ButtonGroup className='mb-1 action-btn'>
                            <Button.Ripple onClick={( e ) => { e.preventDefault(); }} className='btn-icon' color='flat-success'>
                                <CheckCircle size={16} />
                            </Button.Ripple>
                            <Button.Ripple onClick={( e ) => { e.preventDefault(); }} className='btn-icon' color='flat-danger'>
                                <Trash2 size={16} />
                            </Button.Ripple>

                        </ButtonGroup>
                    </div>
                </div>
            </CarouselItem>
        );
    } );
    return (
        <Carousel interval={false} slide={false} activeIndex={activeIndex} next={next} previous={previous} keyboard={true}>
            <CarouselIndicators items={photos} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction='prev' directionText='Previous' onClickHandler={previous} />
            <CarouselControl direction='next' directionText='Next' onClickHandler={next} />
        </Carousel>
    );
};

export default CarouselCaptions;
