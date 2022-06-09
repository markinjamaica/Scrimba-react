import Facebook from '../images/Facebook.png';
import GitHub from '../images/GitHub.png';
import Twitter from '../images/Twitter.png';
import Instagram from '../images/Instagram.png';

export default function Footer() {
    return (
        <footer>
            <img src={Facebook} alt="Facebook Icon" />
            <img src={GitHub} alt="GitHub Icon" />
            <img src={Twitter} alt="Twitter Icon" />
            <img src={Instagram} alt="Instagram Icon" />
        </footer>
    );
}
