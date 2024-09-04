import { useState } from 'react';
import '../../styles/testimonials.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Star from '../../components/reusable/Star';
import PrevArrow from '../../components/reusable/PrevArrow';
import NextArrow from '../../components/reusable/NextArrow';
const testimonial = [
    {
        name: 'Kartik sharma',
        iconStyle: {
            background: "rgba(183, 168, 131, 1)",
            color: "#000"
        },
        star: Array(5).fill(1),
        message: "I have very good experience with them while learning MERN. The explanation of each topic is very clear and easy to understand. I am very happy with the services they provide. Thanks Upskill Mafia "
    },
    {
        name: 'Bhavya',
        iconStyle: {
            background: "rgba(126, 169, 124, 1)",
            color: "#000"
        },
        star: Array(5).fill(1),
        message: "The platform offers excellent support whenever assistance is needed, making the learning process smooth and enjoyable. 👍 I highly recommend Upskill Mafia and wish them continued success! 🌟"
    },
    {
        name: 'Kartik sharma',
        iconStyle: {
            background: "rgba(183, 168, 131, 1)",
            color: "#000"
        },
        star: Array(5).fill(1),
        message: "I have very good experience with them while learning MERN. The explanation of each topic is very clear and easy to understand. I am very happy with the services they provide. Thanks Upskill Mafia "
    },
    {
        name: 'Bhavya',
        iconStyle: {
            background: "rgba(126, 169, 124, 1)",
            color: "#000"
        },
        star: Array(5).fill(1),
        message: "The platform offers excellent support whenever assistance is needed, making the learning process smooth and enjoyable. 👍 I highly recommend Upskill Mafia and wish them continued success! 🌟"
    },


]
function Testimonials() {
    const [wid, setWid] = useState(window.innerWidth);
    window.addEventListener('resize', () => {
        if (window.innerWidth < 880 && wid >= 880) {
            setWid(window.innerWidth)
        }
        else if (window.innerWidth >= 880 && wid < 880) {
            setWid(window.innerWidth)
        }
    })
    const settings = {
        dots: window.innerWidth < 780 ? true : false,
        infinite: true,
        speed: 500,
        slidesToShow: wid < 880 ? 1 : 2,
        slidesToScroll: 1,
        prevArrow: window.innerWidth >= 780 ? <PrevArrow /> : <></>,
        nextArrow: window.innerWidth >= 780 ? <NextArrow /> : <></>,
        autoplay: true,
        autoplaySpeed: 3000

    };
    return (
        <section className="carousel-section carousel-section-testimonial">
            <h2 className="testimonials-heading">
                Reviews From{" "}
                <span className="text-gradient">
                    Satisfied Students
                </span>
            </h2>
            <div className="testimonial-para testimonial-para-large">Lorem ipsum dolor sit amet consectetur. Nec volutpat tincidunt facilisi leo id suscipit posuere. Amet mauris quis sit vulputate</div>
            <div className="testimonial-para testimonial-para-small">Lorem ipsum dolor sit amet consectetur. Nec volutpat tincidunt facilisi late</div>
            <div className="carousel-slider-container relative">
                <Slider {...settings}>
                    {
                        testimonial.map((item, idx) => {
                            return (
                                <div className="carousel-outer-testimonial-card relative" key={idx}>
                                    <div className="carousel-testimonial-card">
                                        <div className="carousel-testimonial-card-top">
                                            <div className="carousel-tct-l">
                                                <div className="carousel-tct-icon" style={item.iconStyle}>
                                                    {item.name.charAt(0)}
                                                </div>
                                                <div className="carousel-tct-about">
                                                    <div className="carousel-tct-name">{item.name}</div>
                                                    <div className="carousel-tct-post">student</div>
                                                    <Star count={item.star} />
                                                </div>
                                            </div>
                                            <div className="carousel-tct-r">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="95" height="94" viewBox="0 0 95 94" fill="none">
                                                    <g opacity="0.2">
                                                        <path d="M79.8304 24.7929C74.3673 18.8703 66.1007 15.8682 55.2641 15.8682H51.3703V26.8449L54.5009 27.4718C59.8355 28.5388 63.5463 30.6375 65.5322 33.7176C66.5684 35.3769 67.156 37.2767 67.2377 39.2313H55.2641C54.2314 39.2313 53.241 39.6415 52.5107 40.3717C51.7805 41.102 51.3703 42.0924 51.3703 43.1251V70.3821C51.3703 74.677 54.863 78.1698 59.158 78.1698H82.5211C83.5538 78.1698 84.5442 77.7595 85.2744 77.0293C86.0047 76.299 86.4149 75.3086 86.4149 74.2759V54.8067L86.4032 43.4405C86.4383 43.0083 87.1781 32.7675 79.8304 24.7929ZM16.3256 78.1698H39.6887C40.7214 78.1698 41.7118 77.7595 42.4421 77.0293C43.1723 76.299 43.5826 75.3086 43.5826 74.2759V54.8067L43.5709 43.4405C43.6059 43.0083 44.3457 32.7675 36.9981 24.7929C31.535 18.8703 23.2683 15.8682 12.4317 15.8682H8.5379V26.8449L11.6686 27.4718C17.0031 28.5388 20.714 30.6375 22.6998 33.7176C23.736 35.3769 24.3237 37.2767 24.4053 39.2313H12.4317C11.399 39.2313 10.4086 39.6415 9.67838 40.3717C8.94814 41.102 8.5379 42.0924 8.5379 43.1251V70.3821C8.5379 74.677 12.0307 78.1698 16.3256 78.1698Z" fill="url(#paint0_linear_1_4086)" />
                                                    </g>
                                                    <defs>
                                                        <linearGradient id="paint0_linear_1_4086" x1="90.5392" y1="15.8682" x2="-7.36287" y2="10.1462" gradientUnits="userSpaceOnUse">
                                                            <stop stopColor="#49D043" />
                                                            <stop offset="1" stopColor="#FFB912" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="carousel-testimonial-card-bottom">
                                            {item.message}
                                        </div>
                                    </div>
                                </div>

                            )
                        })
                    }
                </Slider>
            </div>
        </section>
    );
}

export default Testimonials;