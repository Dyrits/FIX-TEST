import Footer from '../../components/Footer/Footer';
import Form from '../../components/Form/Form';
import Nav from '../../components/Nav/Nav';
import Presentation from '../../components/Presentation/Presentation';
import Projects from '../../components/Projects/Projects';
import './Home.scss';

import backgrounds from '../../data/backgrounds.json';

export default function Home() {
    
    const path = backgrounds[0].path; 

    return (
        <div className="home-container" style={{ backgroundImage: `url(${path})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <Nav>
                <ul className='links'>
                    <li><a className='link' href='/cv-dev.pdf' target='_blank'>CV</a></li>
                    <li><a className='link' href='#mes-projets'>Projets</a></li>
                    <li><a className='link' href="#contact">Contact</a></li>
                </ul>
            </Nav>
            <main >
                <Presentation />
                <section className="projects" id='mes-projets'>
                    <Projects />
                    <Form />
                </section>
            </main>
            <Footer />
        </div>
    )
}