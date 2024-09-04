import React from 'react';
import '../../styles/star.css'

function NextArrow(props) {
    const { classN, style, onClick } = props;

    return (
        <div className={`paid-carousel-next-arrow ${classN}`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M8.625 19.2607L15.375 12.5107L8.625 5.76068" stroke="white" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );
}

export default NextArrow;
