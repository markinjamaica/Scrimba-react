import Navbar from './Navbar';
import Main from './Main';
import Gallery from './Gallery';
import '../styles/Application.css';

export default function Application() {
    return (
        <>
            <Navbar />
            <Gallery />
            <Main />
        </>
    );
}
