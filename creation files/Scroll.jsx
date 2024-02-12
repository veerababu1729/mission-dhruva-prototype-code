import React, { useRef } from "react";
import ScrollCarousel from 'scroll-carousel-react';
import './Scroll.css';
const Scroll = () => {

    return (
        <>
        <div className="exter">
            <ScrollCarousel autoplay autoplaySpeed={7} speed={7} onReady={() => console.log('I am ready')} >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                    <div key={item} className='carousel-item'>
                        <div className='inner'>
                            <div className='center-box'>Content 1 for item {item}</div>
                        </div>
                    </div>
                ))}
            </ScrollCarousel>
            <div className="boxx">
                <div className="Top"><h1>vdskjvbdsbkjv</h1></div>
                <div className="Bottom"><h1>xjhvdsjv</h1></div>
            </div>
        </div>
        

        </>
    )
}
export default Scroll;