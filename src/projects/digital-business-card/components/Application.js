import About from './About';
import Info from './Info';
import Interest from './Interest';
import Footer from './Footer';
import Profile from './Profile';

import '../styles/Application.css';

export default function Application() {
    return (
        <main>
            <Profile />
            <div className="content">
                <Info />
                <About />
                <Interest />
            </div>
            <Footer />
        </main>
    );
}
