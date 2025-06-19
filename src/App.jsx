import Header from './components/header';
import About from './components/about';
import Home from './pages/home';
import Projects from './components/projects';
import Contact from './components/contact';
import Skills from './components/skills'
import Footer from "./components/footer";

export default function App() {
  return (
    <>
      <Header />
      <About />
      <Projects/>
      <Contact/>
      <Skills/>
      <Footer/>
    </>
  );
}
