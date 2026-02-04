import { useState } from 'react';
import "./App.css";
import "animate.css";
import myPic from "./images/profile-pic.png";
// components
import Navbar from "./components/nav-bar";
import AboutSummary from "./components/home/about-summary";
import ProjectsPage from "./components/portfolio/projects-page";
import { Bulb, BulbOff } from "tabler-icons-react";
import IconButton from "./components/ui/IconButton";

function App() {
  const [bounce, setBounce] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className={darkTheme ? "min-h-screen bg-[#1A1B1E] text-white" : "min-h-screen bg-white text-black"}>
        <Navbar setBounce={setBounce} darkTheme={darkTheme} />

        <div className="max-w-5xl mx-auto px-4">
          <div className="pt-4">
            <IconButton
              size={40}
              ariaLabel="Toggle theme"
              onClick={() => setDarkTheme(!darkTheme)}
            >
              {darkTheme ? (
                <BulbOff style={{ color: "yellow" }} size={40} />
              ) : (
                <Bulb style={{ color: "yellow" }} size={40} />
              )}
            </IconButton>
          </div>

          <div
            className="mx-auto mt-4"
            style={{ maxWidth: 300, aspectRatio: "720 / 1080" }}
          >
            <img
              className={`rounded-md w-[250px] h-[250px] object-cover mx-auto ${
                bounce ? "animate__animated animate__bounce" : ""
              }`}
              src={myPic}
              alt="Jesse Navarro"
              width={250}
              height={250}
            />
          </div>

          <AboutSummary />
          <ProjectsPage />
        </div>
      </div>
    </div>
  );
}

export default App;
