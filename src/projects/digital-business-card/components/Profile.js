import primate from '../images/primate.jpg';

export default function Profile() {
    return (
        <img
            className="profile-img"
            src={primate}
            alt="photograph of a primate"
        />
    );
}
