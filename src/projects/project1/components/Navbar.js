import ReactLogo from '../images/reactjs-icon.png';

export default function Navbar() {
    return (
        <nav className="nav">
            <img className="nav-logo" src={ReactLogo} alt="React Logo" />
            <p className="nav-title">ReactFacts</p>
            <p className="nav-project">React Course - Project 1</p>
        </nav>
    );
}
