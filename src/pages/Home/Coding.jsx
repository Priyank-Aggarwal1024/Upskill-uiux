import { useState } from "react";
import "../../styles/Coding.css";
import { checked, unchecked } from "../../assets";
function Coding() {
    const [toggle, setToggle] = useState(false);
    const data = [
        {
            price: "99",
            str: "Month",
        },
        {
            price: "249",
            str: "Quarter",
        },
    ];
    // console.log(String(data[0].str).slice())
    return (
        <section className="coding ">
            <h2 className="coding-heading section-heading relative">
                Supercharge Your Design Skills –
                <span className="text-gradient">
                    {" "}
                    Just Rs{" "}
                    {toggle
                        ? `${data[1].price} / ${data[1].str}`
                        : `${data[0].price} / ${data[0].str}`}
                    !
                </span>
            </h2>
            <p className="coding-para">
                Transform your coding skills and career prospects with our Web Development Pro Pack, designed to provide comprehensive training and support for aspiring developers.
            </p>
            <div className="coding-card">
                <div className="coding-left">
                    <div className="coding-left-top">
                        <div className="coding-top-heading text-gradient">
                            {toggle ? data[1].str : data[0].str}ly Payment Plan
                        </div>
                        <div className="pay-toggle-div">
                            <div className="money-saver">Money saver</div>

                            <p
                                className={`pay-monthly pay-para-toggle ${toggle ? "" : "gradient"
                                    }`}
                                onClick={() => setToggle(false)}
                            >
                                {toggle ? (
                                    <img
                                        src={checked}
                                        className="image-check"
                                        alt="Unchecked Img"
                                    />
                                ) : (
                                    <img
                                        src={unchecked}
                                        className="image-check"
                                        alt="Checked Img"
                                    />
                                )}
                                {"Monthly"}
                            </p>

                            <div className="pay-toggle-vertical"></div>
                            <p
                                className={`pay-quaterly pay-para-toggle ${toggle ? "gradient" : ""
                                    }`}
                                onClick={() => setToggle(true)}
                            >
                                {!toggle ? (
                                    <img
                                        src={checked}
                                        className="image-check"
                                        alt="Unchecked Img"
                                    />
                                ) : (
                                    <img
                                        src={unchecked}
                                        className="image-check"
                                        alt="Checked Img"
                                    />
                                )}
                                <span>{"Quarterly"} </span>
                                <span className="mon3">(3months)</span>
                            </p>
                        </div>
                        <div className="coding-medium-div">
                            <div className="price">
                                <span className="199 text-gradient">
                                    ₹{toggle ? `${data[1].price}` : `${data[0].price}`}{" "}
                                </span>
                                <span className="p1000">₹{!toggle ? `1000` : `3000`}</span>
                                <p className="per-month">
                                    per{" "}
                                    {toggle
                                        ? data[1].str.toLowerCase()
                                        : data[0].str.toLowerCase()}
                                </p>
                            </div>
                        </div>
                        <p className="coding-bottom-p">Learn more about this plan -&gt; </p>
                    </div>
                    <div className="coding-left-bottom">
                        {/* <NavLink to="/payment"> */}
                        <div className="hero-start-learning">
                            Get Now for ₹{toggle ? data[1].price : data[0].price}
                        </div>
                        {/* </NavLink> */}
                    </div>
                </div>
                <div className="coding-right">
                    <div className="coding-right-top">{`What you will get : `}</div>
                    <div className="coding-right-middle text-gradient">
                        UI UX Design Pack Starting at Rs99 Per month only.

                    </div>
                    <div className="coding-right-bottom">
                        <div className="coding-tick-line">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="21"
                                viewBox="0 0 20 21"
                                fill="none"
                            >
                                <path
                                    d="M8.21591 15.7376C8.10165 15.7372 7.98868 15.7133 7.88403 15.6675C7.77938 15.6216 7.68528 15.5547 7.60758 15.4709L3.55758 11.1626C3.40619 11.0012 3.32508 10.7863 3.33212 10.5652C3.33915 10.3441 3.43374 10.1348 3.59508 9.98339C3.75642 9.832 3.97129 9.75089 4.19243 9.75793C4.41357 9.76496 4.62285 9.85955 4.77425 10.0209L8.20758 13.6792L15.2159 6.01256C15.287 5.92399 15.3755 5.8509 15.4759 5.79778C15.5763 5.74465 15.6865 5.71261 15.7997 5.70362C15.913 5.69464 16.0268 5.70889 16.1344 5.74552C16.2419 5.78214 16.3408 5.84036 16.425 5.91659C16.5092 5.99283 16.5769 6.08548 16.624 6.18884C16.6711 6.29221 16.6966 6.40411 16.6988 6.51767C16.7011 6.63124 16.6801 6.74407 16.6372 6.84923C16.5943 6.9544 16.5303 7.04968 16.4492 7.12922L8.83258 15.4626C8.75562 15.5479 8.66184 15.6163 8.55716 15.6636C8.45247 15.711 8.33913 15.7361 8.22425 15.7376H8.21591Z"
                                    fill="url(#paint0_linear_1_4428)"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_1_4428"
                                        x1="2.6282"
                                        y1="5.70101"
                                        x2="19.4198"
                                        y2="4.65567"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#49D043" />
                                        <stop offset="1" stopColor="#FFB912" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <p className="coding-tick-line-para">
                                World class interactive Virtual College campus
                            </p>
                        </div>
                        <div className="coding-tick-line">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="21"
                                viewBox="0 0 20 21"
                                fill="none"
                            >
                                <path
                                    d="M8.21591 15.7376C8.10165 15.7372 7.98868 15.7133 7.88403 15.6675C7.77938 15.6216 7.68528 15.5547 7.60758 15.4709L3.55758 11.1626C3.40619 11.0012 3.32508 10.7863 3.33212 10.5652C3.33915 10.3441 3.43374 10.1348 3.59508 9.98339C3.75642 9.832 3.97129 9.75089 4.19243 9.75793C4.41357 9.76496 4.62285 9.85955 4.77425 10.0209L8.20758 13.6792L15.2159 6.01256C15.287 5.92399 15.3755 5.8509 15.4759 5.79778C15.5763 5.74465 15.6865 5.71261 15.7997 5.70362C15.913 5.69464 16.0268 5.70889 16.1344 5.74552C16.2419 5.78214 16.3408 5.84036 16.425 5.91659C16.5092 5.99283 16.5769 6.08548 16.624 6.18884C16.6711 6.29221 16.6966 6.40411 16.6988 6.51767C16.7011 6.63124 16.6801 6.74407 16.6372 6.84923C16.5943 6.9544 16.5303 7.04968 16.4492 7.12922L8.83258 15.4626C8.75562 15.5479 8.66184 15.6163 8.55716 15.6636C8.45247 15.711 8.33913 15.7361 8.22425 15.7376H8.21591Z"
                                    fill="url(#paint0_linear_1_4428)"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_1_4428"
                                        x1="2.6282"
                                        y1="5.70101"
                                        x2="19.4198"
                                        y2="4.65567"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#49D043" />
                                        <stop offset="1" stopColor="#FFB912" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <p className="coding-tick-line-para">
                                Unlimited Design challenges
                            </p>
                        </div>
                        <div className="coding-tick-line">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="21"
                                viewBox="0 0 20 21"
                                fill="none"
                            >
                                <path
                                    d="M8.21591 15.7376C8.10165 15.7372 7.98868 15.7133 7.88403 15.6675C7.77938 15.6216 7.68528 15.5547 7.60758 15.4709L3.55758 11.1626C3.40619 11.0012 3.32508 10.7863 3.33212 10.5652C3.33915 10.3441 3.43374 10.1348 3.59508 9.98339C3.75642 9.832 3.97129 9.75089 4.19243 9.75793C4.41357 9.76496 4.62285 9.85955 4.77425 10.0209L8.20758 13.6792L15.2159 6.01256C15.287 5.92399 15.3755 5.8509 15.4759 5.79778C15.5763 5.74465 15.6865 5.71261 15.7997 5.70362C15.913 5.69464 16.0268 5.70889 16.1344 5.74552C16.2419 5.78214 16.3408 5.84036 16.425 5.91659C16.5092 5.99283 16.5769 6.08548 16.624 6.18884C16.6711 6.29221 16.6966 6.40411 16.6988 6.51767C16.7011 6.63124 16.6801 6.74407 16.6372 6.84923C16.5943 6.9544 16.5303 7.04968 16.4492 7.12922L8.83258 15.4626C8.75562 15.5479 8.66184 15.6163 8.55716 15.6636C8.45247 15.711 8.33913 15.7361 8.22425 15.7376H8.21591Z"
                                    fill="url(#paint0_linear_1_4428)"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_1_4428"
                                        x1="2.6282"
                                        y1="5.70101"
                                        x2="19.4198"
                                        y2="4.65567"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#49D043" />
                                        <stop offset="1" stopColor="#FFB912" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <p className="coding-tick-line-para">
                                3+ Real Design projects
                            </p>
                        </div>
                        <div className="coding-tick-line">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="21"
                                viewBox="0 0 20 21"
                                fill="none"
                            >
                                <path
                                    d="M8.21591 15.7376C8.10165 15.7372 7.98868 15.7133 7.88403 15.6675C7.77938 15.6216 7.68528 15.5547 7.60758 15.4709L3.55758 11.1626C3.40619 11.0012 3.32508 10.7863 3.33212 10.5652C3.33915 10.3441 3.43374 10.1348 3.59508 9.98339C3.75642 9.832 3.97129 9.75089 4.19243 9.75793C4.41357 9.76496 4.62285 9.85955 4.77425 10.0209L8.20758 13.6792L15.2159 6.01256C15.287 5.92399 15.3755 5.8509 15.4759 5.79778C15.5763 5.74465 15.6865 5.71261 15.7997 5.70362C15.913 5.69464 16.0268 5.70889 16.1344 5.74552C16.2419 5.78214 16.3408 5.84036 16.425 5.91659C16.5092 5.99283 16.5769 6.08548 16.624 6.18884C16.6711 6.29221 16.6966 6.40411 16.6988 6.51767C16.7011 6.63124 16.6801 6.74407 16.6372 6.84923C16.5943 6.9544 16.5303 7.04968 16.4492 7.12922L8.83258 15.4626C8.75562 15.5479 8.66184 15.6163 8.55716 15.6636C8.45247 15.711 8.33913 15.7361 8.22425 15.7376H8.21591Z"
                                    fill="url(#paint0_linear_1_4428)"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_1_4428"
                                        x1="2.6282"
                                        y1="5.70101"
                                        x2="19.4198"
                                        y2="4.65567"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#49D043" />
                                        <stop offset="1" stopColor="#FFB912" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <p className="coding-tick-line-para">
                                Live 1:1 Mentorship (8:00 to 11:00 pm Daily)
                            </p>
                        </div>
                        <div className="coding-tick-line">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="21"
                                viewBox="0 0 20 21"
                                fill="none"
                            >
                                <path
                                    d="M8.21591 15.7376C8.10165 15.7372 7.98868 15.7133 7.88403 15.6675C7.77938 15.6216 7.68528 15.5547 7.60758 15.4709L3.55758 11.1626C3.40619 11.0012 3.32508 10.7863 3.33212 10.5652C3.33915 10.3441 3.43374 10.1348 3.59508 9.98339C3.75642 9.832 3.97129 9.75089 4.19243 9.75793C4.41357 9.76496 4.62285 9.85955 4.77425 10.0209L8.20758 13.6792L15.2159 6.01256C15.287 5.92399 15.3755 5.8509 15.4759 5.79778C15.5763 5.74465 15.6865 5.71261 15.7997 5.70362C15.913 5.69464 16.0268 5.70889 16.1344 5.74552C16.2419 5.78214 16.3408 5.84036 16.425 5.91659C16.5092 5.99283 16.5769 6.08548 16.624 6.18884C16.6711 6.29221 16.6966 6.40411 16.6988 6.51767C16.7011 6.63124 16.6801 6.74407 16.6372 6.84923C16.5943 6.9544 16.5303 7.04968 16.4492 7.12922L8.83258 15.4626C8.75562 15.5479 8.66184 15.6163 8.55716 15.6636C8.45247 15.711 8.33913 15.7361 8.22425 15.7376H8.21591Z"
                                    fill="url(#paint0_linear_1_4428)"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_1_4428"
                                        x1="2.6282"
                                        y1="5.70101"
                                        x2="19.4198"
                                        y2="4.65567"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#49D043" />
                                        <stop offset="1" stopColor="#FFB912" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <p className="coding-tick-line-para">
                                Participate in Exclusive hackathons
                            </p>
                        </div>
                        <div className="coding-tick-line">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="21"
                                viewBox="0 0 20 21"
                                fill="none"
                            >
                                <path
                                    d="M8.21591 15.7376C8.10165 15.7372 7.98868 15.7133 7.88403 15.6675C7.77938 15.6216 7.68528 15.5547 7.60758 15.4709L3.55758 11.1626C3.40619 11.0012 3.32508 10.7863 3.33212 10.5652C3.33915 10.3441 3.43374 10.1348 3.59508 9.98339C3.75642 9.832 3.97129 9.75089 4.19243 9.75793C4.41357 9.76496 4.62285 9.85955 4.77425 10.0209L8.20758 13.6792L15.2159 6.01256C15.287 5.92399 15.3755 5.8509 15.4759 5.79778C15.5763 5.74465 15.6865 5.71261 15.7997 5.70362C15.913 5.69464 16.0268 5.70889 16.1344 5.74552C16.2419 5.78214 16.3408 5.84036 16.425 5.91659C16.5092 5.99283 16.5769 6.08548 16.624 6.18884C16.6711 6.29221 16.6966 6.40411 16.6988 6.51767C16.7011 6.63124 16.6801 6.74407 16.6372 6.84923C16.5943 6.9544 16.5303 7.04968 16.4492 7.12922L8.83258 15.4626C8.75562 15.5479 8.66184 15.6163 8.55716 15.6636C8.45247 15.711 8.33913 15.7361 8.22425 15.7376H8.21591Z"
                                    fill="url(#paint0_linear_1_4428)"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_1_4428"
                                        x1="2.6282"
                                        y1="5.70101"
                                        x2="19.4198"
                                        y2="4.65567"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#49D043" />
                                        <stop offset="1" stopColor="#FFB912" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <p className="coding-tick-line-para">
                                100% Internship and Job Assistance
                            </p>
                        </div>
                        <div className="coding-tick-line">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="21"
                                viewBox="0 0 20 21"
                                fill="none"
                            >
                                <path
                                    d="M8.21591 15.7376C8.10165 15.7372 7.98868 15.7133 7.88403 15.6675C7.77938 15.6216 7.68528 15.5547 7.60758 15.4709L3.55758 11.1626C3.40619 11.0012 3.32508 10.7863 3.33212 10.5652C3.33915 10.3441 3.43374 10.1348 3.59508 9.98339C3.75642 9.832 3.97129 9.75089 4.19243 9.75793C4.41357 9.76496 4.62285 9.85955 4.77425 10.0209L8.20758 13.6792L15.2159 6.01256C15.287 5.92399 15.3755 5.8509 15.4759 5.79778C15.5763 5.74465 15.6865 5.71261 15.7997 5.70362C15.913 5.69464 16.0268 5.70889 16.1344 5.74552C16.2419 5.78214 16.3408 5.84036 16.425 5.91659C16.5092 5.99283 16.5769 6.08548 16.624 6.18884C16.6711 6.29221 16.6966 6.40411 16.6988 6.51767C16.7011 6.63124 16.6801 6.74407 16.6372 6.84923C16.5943 6.9544 16.5303 7.04968 16.4492 7.12922L8.83258 15.4626C8.75562 15.5479 8.66184 15.6163 8.55716 15.6636C8.45247 15.711 8.33913 15.7361 8.22425 15.7376H8.21591Z"
                                    fill="url(#paint0_linear_1_4428)"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_1_4428"
                                        x1="2.6282"
                                        y1="5.70101"
                                        x2="19.4198"
                                        y2="4.65567"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#49D043" />
                                        <stop offset="1" stopColor="#FFB912" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <p className="coding-tick-line-para">
                                Resume Building with Experts
                            </p>
                        </div>
                        <div className="coding-tick-line">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="21"
                                viewBox="0 0 20 21"
                                fill="none"
                            >
                                <path
                                    d="M8.21591 15.7376C8.10165 15.7372 7.98868 15.7133 7.88403 15.6675C7.77938 15.6216 7.68528 15.5547 7.60758 15.4709L3.55758 11.1626C3.40619 11.0012 3.32508 10.7863 3.33212 10.5652C3.33915 10.3441 3.43374 10.1348 3.59508 9.98339C3.75642 9.832 3.97129 9.75089 4.19243 9.75793C4.41357 9.76496 4.62285 9.85955 4.77425 10.0209L8.20758 13.6792L15.2159 6.01256C15.287 5.92399 15.3755 5.8509 15.4759 5.79778C15.5763 5.74465 15.6865 5.71261 15.7997 5.70362C15.913 5.69464 16.0268 5.70889 16.1344 5.74552C16.2419 5.78214 16.3408 5.84036 16.425 5.91659C16.5092 5.99283 16.5769 6.08548 16.624 6.18884C16.6711 6.29221 16.6966 6.40411 16.6988 6.51767C16.7011 6.63124 16.6801 6.74407 16.6372 6.84923C16.5943 6.9544 16.5303 7.04968 16.4492 7.12922L8.83258 15.4626C8.75562 15.5479 8.66184 15.6163 8.55716 15.6636C8.45247 15.711 8.33913 15.7361 8.22425 15.7376H8.21591Z"
                                    fill="url(#paint0_linear_1_4428)"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_1_4428"
                                        x1="2.6282"
                                        y1="5.70101"
                                        x2="19.4198"
                                        y2="4.65567"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#49D043" />
                                        <stop offset="1" stopColor="#FFB912" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <p className="coding-tick-line-para">
                                Practise mock interviews with peers and mentors
                            </p>
                        </div>
                        <div className="coding-tick-line">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="21"
                                viewBox="0 0 20 21"
                                fill="none"
                            >
                                <path
                                    d="M8.21591 15.7376C8.10165 15.7372 7.98868 15.7133 7.88403 15.6675C7.77938 15.6216 7.68528 15.5547 7.60758 15.4709L3.55758 11.1626C3.40619 11.0012 3.32508 10.7863 3.33212 10.5652C3.33915 10.3441 3.43374 10.1348 3.59508 9.98339C3.75642 9.832 3.97129 9.75089 4.19243 9.75793C4.41357 9.76496 4.62285 9.85955 4.77425 10.0209L8.20758 13.6792L15.2159 6.01256C15.287 5.92399 15.3755 5.8509 15.4759 5.79778C15.5763 5.74465 15.6865 5.71261 15.7997 5.70362C15.913 5.69464 16.0268 5.70889 16.1344 5.74552C16.2419 5.78214 16.3408 5.84036 16.425 5.91659C16.5092 5.99283 16.5769 6.08548 16.624 6.18884C16.6711 6.29221 16.6966 6.40411 16.6988 6.51767C16.7011 6.63124 16.6801 6.74407 16.6372 6.84923C16.5943 6.9544 16.5303 7.04968 16.4492 7.12922L8.83258 15.4626C8.75562 15.5479 8.66184 15.6163 8.55716 15.6636C8.45247 15.711 8.33913 15.7361 8.22425 15.7376H8.21591Z"
                                    fill="url(#paint0_linear_1_4428)"
                                />
                                <defs>
                                    <linearGradient
                                        id="paint0_linear_1_4428"
                                        x1="2.6282"
                                        y1="5.70101"
                                        x2="19.4198"
                                        y2="4.65567"
                                        gradientUnits="userSpaceOnUse"
                                    >
                                        <stop stopColor="#49D043" />
                                        <stop offset="1" stopColor="#FFB912" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <p className="coding-tick-line-para">
                                Get course completion certificate.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Coding;
