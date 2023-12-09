import { BrowserRouter} from "react-router-dom";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Service from "./components/Service";

function App() {
  return (
    <div className="w-full h-screen">
      <BrowserRouter>
      <Navbar/>
      <Hero/>
      <Service/>
      <Contact/>
      </BrowserRouter>
    </div>
  );
}

export default App;
