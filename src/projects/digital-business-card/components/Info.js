import email from '../images/Mail.png';
import linkedin from '../images/linkedin.png';

export default function Info() {
    return (
        <>
            <div className="info-container">
                <h1 className="name">Mark in Jamaica</h1>
                <p className="job">CTO of many important companies</p>
                <p className="website">github.com/markinjamaica</p>
            </div>
            <div className="btn-container">
                <button className="btn">
                    <img src={email} alt="" />
                    Email
                </button>
                <button className="btn btn-linkedin">
                    <img src={linkedin} alt="" />
                    LinkedIn
                </button>
            </div>
        </>
    );
}
