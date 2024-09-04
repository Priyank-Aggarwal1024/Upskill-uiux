import { useEffect, useState } from "react"
import '../../styles/Dashboard.css'
import { Coin, Days, Icon3d, maindash, Podium, S3, S4, S5, S563 } from "../../assets"
function Dashboard() {
    const [dashStr, setDashStr] = useState("Track your learning in ")
    window.addEventListener('resize', () => {
        if (window.innerWidth < 980) {
            setDashStr("Key features of")
        } else {
            setDashStr("Track your learning in ")
        }
    })
    useEffect(() => {
        if (window.innerWidth < 980) {
            setDashStr("Key features of")
        } else {
            setDashStr("Track your learning in ")
        }
    }, [])
    return (
        <div className="dashboard ">
            <h2 className="dashboard-heading section-heading relative inline-block ">{dashStr} <span className="text-gradient"> student’s dashboard</span></h2>
            <div className="img-dashboard">
                <img src={maindash} alt="Dashboard" className='dbimg relative' loading='lazy' />
            </div>
            <div className="dashboard-bottom">
                <div className="dashboard-bottom-card dashboard-bottom-card-1">
                    <div className="streak-1">
                        <img src={Days} alt="Streak 12 Days" />
                    </div>
                    <div className="streak-2">
                        <img src={S563} alt="Streak 563 Days" />
                    </div>
                </div>
                <div className="dashboard-bottom-card dashboard-bottom-card-2 relative">
                    <div className="streak-3">
                        <img src={S3} alt="Leaderboaard" />
                    </div>
                    <div className="streak-4">
                        <img src={S4} alt="Experience Points" />
                    </div>
                </div>
                <div className="dashboard-bottom-card dashboard-bottom-card-3">
                    <div className="streak-5">
                        <img src={S4} alt="Experience Points" />
                    </div>
                    <div className="streak-6">
                        <img src={S5} alt="Experience Points 2" />
                    </div>
                </div>
                <div className="dashboard-bottom-card dashboard-bottom-card-4">
                    <div className="dashboard-param-card">
                        <div className="param-card-top">
                            <img src={Icon3d} alt="3D Icon" />
                            <h3 className="param-card-heading">Streaks </h3>
                        </div>
                        <p className="param-card-bottom">Streaks for maintaining your learning consistency</p>
                    </div>
                </div>
                <div className="dashboard-bottom-card dashboard-bottom-card-5 relative">
                    <div className="dashboard-param-card">
                        <div className="param-card-top">
                            <img src={Podium} alt="Podium" />
                            <h3 className="param-card-heading">Leaderboard</h3>
                        </div>
                        <p className="param-card-bottom">A leaderboard in coding fosters motivation, healthy competition, and progress tracking among peers</p>
                    </div>
                </div>
                <div className="dashboard-bottom-card dashboard-bottom-card-6">
                    <div className="dashboard-param-card">
                        <div className="param-card-top">
                            <img src={Coin} alt="Coin" />
                            <h3 className="param-card-heading">Earn Points</h3>
                        </div>
                        <p className="param-card-bottom">Earn XPS by doing task and push your rank on the leaderboard</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;