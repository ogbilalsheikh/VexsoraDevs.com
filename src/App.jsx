import AboutPort from "./components/AboutPort";
import ContactPort from "./components/ContactPort";
import FooterPort from "./components/FooterPort";
import Header from "./components/Header";
import HeroPort from "./components/HeroPort";
import ProjectPort from "./components/ProjectPort";
import ServicePort from "./components/ServicePort";

function App() {
  return (
    <>
      <Header />
      <HeroPort />
      <ServicePort />
      <ProjectPort />
      <AboutPort />
      <ContactPort />
      <FooterPort />
    </>
  );
}

export default App;