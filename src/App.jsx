import { useState } from 'react';
import "./App.css";
import "animate.css";
import { Container, AspectRatio, Image } from "@mantine/core";
import myPic from "./images/profile-pic.png";
// components
import Navbar from "./components/nav-bar";
import AboutSummary from "./components/home/about-summary";
import ProjectsPage from "./components/portfolio/projects-page";
import { MantineProvider } from '@mantine/core';
import { ActionIcon } from "@mantine/core";
import { Bulb, BulbOff } from "tabler-icons-react";

function App() {
  const [bounce, setBounce] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <MantineProvider theme={{ colorScheme: darkTheme ? 'dark' : 'light' }} withGlobalStyles withNormalizeCSS>
      <Navbar setBounce={setBounce} darkTheme={darkTheme} />
      <Container>
      <ActionIcon size={40} onClick={() => setDarkTheme(!darkTheme)}>
        {
          darkTheme ? <BulbOff style={{color: "yellow"}} size={40} />
            : <Bulb style={{color: "yellow"}} size={40} />
        }
      </ActionIcon>
        <AspectRatio ratio={720 / 1080} sx={{ maxWidth: 300 }} mx="auto">
          <Image
            className={ bounce ? "animate__animated animate__bounce" : "" }
            src={myPic}
            alt="picture of myself"
            radius="md"
            width={250}
            height={250}
          />
        </AspectRatio>
        <AboutSummary />
        <ProjectsPage />
      </Container>
    </MantineProvider>
  );
}

export default App;
