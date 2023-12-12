import About from "./Shared/About";
import Banner from "./Shared/Banner";
import Contact from "./Shared/Contact";
import Education from "./Shared/Education";
import Experience from "./Shared/Experience";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";
import Portfolio from "./Shared/Portfolio";
import Skills from "./Shared/Skills";


const Home = () => {
    return (
        <>
        <div className="">
            <Navbar/>
        </div>
        <div>
            <Banner/>
        </div>
        <div id="about" className="max-w-5xl mx-auto pt-16">
            <h1 className="text-4xl font-bold underline ">About Me</h1>
            <About/>
        </div>
        <div id="portfolio" className="max-w-5xl mx-auto pt-16">
            <h1 className="text-4xl font-bold underline mb-3">Portfolio</h1>
            <Portfolio/>
        </div>
        <div id="skills" className="max-w-5xl mx-auto mb-24 pt-20">
            <h1 className="text-4xl font-bold underline mb-3">Skills</h1>
            <Skills/>
        </div>
        <div id="contact" className="max-w-5xl mx-auto mb-24 pt-16">
            <h1 className="text-4xl font-bold underline mb-3">Contact & Send Message</h1>
            <Contact/>
        </div>
        <div id="education" className="max-w-5xl mx-auto my-24">
            <h1 className="text-4xl font-bold underline mb-3">Education & Experience</h1>
            <div className="md:grid grid-cols-2">
            <div><Experience/></div>
            <div className="col-span-1"><Education/></div>
            </div>
        </div>
        <div>
            <Footer/>
        </div>
        </>
    );
};

export default Home;