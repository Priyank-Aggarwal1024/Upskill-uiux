import React from 'react';
import '../../styles/star.css'

function PrevArrow(props) {
    const { classN, style, onClick } = props;

    return (
        <div className={`paid-carousel-previous-arrow ${classN}`}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M15.375 5.76068L8.625 12.5107L15.375 19.2607" stroke="#646060" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </div>
    );
}

export default PrevArrow;
