import ReactLogo from '../images/reactjs-icon.png';

export default function Navbar() {
    return (
        <nav className="nav">
            <img src={ReactLogo} alt="React Logo" />
            <p>ReactFacts</p>
            <p>React Course - Project 1</p>
        </nav>
    );
}
