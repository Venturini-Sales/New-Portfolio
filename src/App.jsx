import React, { useRef } from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Header } from "./components/Header/Header";
import { Home } from './components/Home/Home';
import { AboutMe } from './components/AboutMe/AboutMe';
import { Projects } from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

function App() {
    const homeRef = useRef(null);
    const aboutMeRef = useRef(null);
    const projectsRef = useRef(null);
    const contactRef = useRef(null);

    return (
        <>
            <Header homeRef={homeRef} aboutMeRef={aboutMeRef} projectsRef={projectsRef}contactRef={contactRef}/>
            <main>
                <section ref={homeRef}><Home /></section>
                <section ref={aboutMeRef}><AboutMe /></section>
                <section ref={projectsRef}><Projects /></section>
                <section ref={contactRef}><Contact /></section>
            </main>
            <Footer />
            <ToastContainer />
        </>
    );
}

export default App;
