import '../../styles/Curriculum.css'
function Curriculum() {
    const curriculumList = [
        "Task 1 :   Sketching ",
        "Task 2 :   User research ",
        "Task 3 :   User Persona ",
        "Task 4 :   User flow  ",
        "Task 5 :   Information Architecture ",
        "Task 6 :   Empathy Mapping",
        "Task 7 :   Low Fidelity",
        "Task 8 :   Brand Color  ",
        "Task 9 :   Typography ",
        "Task 10 :   Iconography ",
        "Task 11 :   High Fidelity ",
        "Task 12 :   UX writing ",
        "Task 13 :   Prototyping "
    ]
    return (
        <>
            <div className="curriculum">
                <div className="curriculum-main">
                    <h2 className="text-white curriculum-heading">Course <span className="text-gradient">Curriculum</span></h2>
                    <div className="curriculum-list-box">

                        {
                            curriculumList.map((item, idx) => <div className="curriculum-list" key={idx}>{item}</div>)
                        }
                        <div className="curriculum-list curriculum-casestudy">
                            <div className="curriculum-cs-left">

                            </div>
                            <span>Case Study 1</span>
                        </div>
                        <div className="curriculum-list curriculum-casestudy">
                            <div className="curriculum-cs-left">

                            </div>
                            <span>Case Study 2</span>
                        </div>
                        <div className="curriculum-list curriculum-casestudy">
                            <div className="curriculum-cs-left">

                            </div>
                            <span>Case Study 3</span>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Curriculum;