import React from 'react';
import '../../styles/star.css'

function Star({ count }) {
    return (
        <div className='paid-carousel-star-div'>
            {
                count.map((item, idx) => {
                    return (
                        <div className="paid-carousel-star" key={idx}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <rect width="24.9206" height="24.9206" transform="translate(0.839272 0.471497)" fill="#FFB912" />
                                <path d="M6.88815 23.3156L8.57548 16.0211L2.91642 11.1148L10.3926 10.4659L13.3 3.58673L16.2074 10.4659L23.6836 11.1148L18.0246 16.0211L19.7119 23.3156L13.3 19.4477L6.88815 23.3156Z" fill="white" />
                            </svg>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default Star;
