import { UserContext } from '../../context/userContext'
import { useContext } from 'react';
import NavBar from '../Navbar/NavBar';
import Header from '../Header/Header';
import Portfolio from '../Portfolio/Portfolio';
import AboutSection from '../AboutSection/AboutSection';
import ContactSection from '../ContactSection/ContactSection';
import Footer from '../Footer/Footer';
import Loading from '../Loading/Loading';

export default function AllComponent() {

    const { user } = useContext(UserContext)

    if (!user) {
        return <Loading width={'10rem'} height={'10rem'} position={'90vh'} />
    }

    return (
        <>
            <NavBar />
            <Header user={user} />
            <Portfolio />
            <AboutSection user={user} />
            <ContactSection />
            <Footer user={user} />
        </>
    )

}