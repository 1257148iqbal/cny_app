import React from 'react';
import './Loader5.scss';
const Loader5 = () => {

    // // Gsap 3 version
    // const preloadDot = $( ".preloader__container__preload__dot" );
    // const tl = gsap.timeline( { repeat: 3 } );
    // tl
    //     .to( preloadDot, 0.3, { delay: 0.3, scale: 1.4, stagger: 0.1 } )
    //     .to( preloadDot, 0.3, {
    //         scale: 1,
    //         stagger: {
    //             amount: 0.35,
    //             from: "start"
    //         }
    //     } );

    // let counter = 0;
    // const loaderTimer = setInterval( function () {
    //     counter++;
    //     $( ".preloader__container__percent" ).text( `${counter}%` );
    //     if ( counter === 100 ) {
    //         clearInterval( loaderTimer );
    //         // eslint-disable-next-line no-undef
    //         gsap.to( ".preloader", 0.3, { delay: 0.5, y: "-100%" } );
    //     }
    // }, 55 );

    return (
        <>
            <div className="preloader">
                <div className="preloader__container">
                    <h1 className="preloader__container__percent"></h1>
                    <div className="preloader__container__preload">
                        <div className="preloader__container__preload__dot">         </div>
                        <div className="preloader__container__preload__dot">         </div>
                        <div className="preloader__container__preload__dot">         </div>
                        <div className="preloader__container__preload__dot">         </div>
                    </div>
                </div>
            </div>
            <main>
                <div className="container">
                    <a href="https://codepen.io/duboloms" className="container__col" target="_blank" rel="noreferrer">
                        <i className="fab fa-codepen container__col__ico"></i>
                        <h3 className="container__col__title">Author of this pen</h3>
                    </a>
                    <a href="https://cdpn.io/duboloms/debug/PoPKLzq/GnAnbOJXwaDA" className="container__col">
                        <i className="fas fa-redo-alt container__col__ico"></i>
                        <h3 className="container__col__title">Rerun this pen</h3>
                    </a>
                </div>

            </main >
        </>


    );
};

export default Loader5;
