import { useState } from 'react';
import '../../styles/faq.css'
function Faq() {
    const [faqList, setFaqList] = useState([
        {
            checked: true,
            ques: "How do I join Upskill Mafia?",
            ans: "Joining Upskill Mafia is easy! Simply sign up for an account on our website and start exploring our range of courses and communities."
        },
        {
            checked: false,
            ques: "Are there any prerequisites for enrolling in courses?",
            ans: "Joining Upskill Mafia is easy! Simply sign up for an account on our website and start exploring our range of courses and communities."
        },
        {
            checked: false,
            ques: "Can I collaborate with other learners on projects?",
            ans: "Joining Upskill Mafia is easy! Simply sign up for an account on our website and start exploring our range of courses and communities."
        },
        {
            checked: false,
            ques: "How can I get help if I have questions or issues?",
            ans: "Joining Upskill Mafia is easy! Simply sign up for an account on our website and start exploring our range of courses and communities."
        }
    ])
    const faqCb = (idx) => {
        const temp = faqList.map((item, index) => {
            if (index == idx) {
                item.checked = !item.checked;
            } else {
                item.checked = false
            }
            return item;
        });
        setFaqList(temp)

    }
    return (
        <section className="main-section faq">
            <h2 className="faq-heading section-heading">
                Frequently <span className="text-gradient">asked questions</span>
            </h2>
            <div className="faq-grid relative">
                <div className="faq-left">
                    {
                        faqList.map((item, idx) => {
                            return (
                                <div className={`faq-item ${item.checked && "faq-open"}`} key={idx}>
                                    <input type="checkbox" value={item.checked} name={`faq-li-${idx}`} className='faq-checkbox' />
                                    <label className='faq-ques' htmlFor={`faq-li-${idx}`} onClick={() => faqCb(idx)}>
                                        <p>{item.ques}</p>
                                        <div className="faq-icon">
                                            {
                                                !item.checked ? <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36" fill="none">
                                                    <path d="M11.3474 12.5091C10.6949 11.8341 9.61493 11.8341 8.96243 12.4866C8.28743 13.1616 8.28743 14.2191 8.96243 14.8716L16.7699 22.7241C17.0849 23.0391 17.5124 23.2191 17.9624 23.2191C18.4124 23.2191 18.8399 23.0391 19.1549 22.7241L26.9624 14.8716C27.2999 14.5566 27.4574 14.1291 27.4574 13.7016C27.4574 13.2516 27.2999 12.8241 26.9624 12.4866C26.2874 11.8341 25.2299 11.8341 24.5774 12.5091L17.9624 19.1466L11.3474 12.5091Z" fill="white" />
                                                </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="36" height="37" viewBox="0 0 36 37" fill="none">
                                                    <path d="M24.1088 22.8913C24.7613 23.5663 25.8413 23.5663 26.4938 22.9138C27.1687 22.2388 27.1687 21.1813 26.4938 20.5288L18.6863 12.6763C18.3713 12.3613 17.9438 12.1813 17.4938 12.1813C17.0438 12.1813 16.6163 12.3613 16.3013 12.6763L8.49378 20.5288C8.15628 20.8438 7.99878 21.2713 7.99878 21.6988C7.99878 22.1488 8.15628 22.5763 8.49378 22.9138C9.16878 23.5663 10.2263 23.5663 10.8788 22.8913L17.4938 16.2538L24.1088 22.8913Z" fill="black" />
                                                    <path d="M24.1088 22.8913C24.7613 23.5663 25.8413 23.5663 26.4938 22.9138C27.1687 22.2388 27.1687 21.1813 26.4938 20.5288L18.6863 12.6763C18.3713 12.3613 17.9438 12.1813 17.4938 12.1813C17.0438 12.1813 16.6163 12.3613 16.3013 12.6763L8.49378 20.5288C8.15628 20.8438 7.99878 21.2713 7.99878 21.6988C7.99878 22.1488 8.15628 22.5763 8.49378 22.9138C9.16878 23.5663 10.2263 23.5663 10.8788 22.8913L17.4938 16.2538L24.1088 22.8913Z" fill="black" />
                                                </svg>
                                            }
                                        </div>
                                    </label>
                                    <div className="faq-ans" style={{ display: item.checked ? "block" : "none" }}>
                                        {
                                            item.ans
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
}

export default Faq;