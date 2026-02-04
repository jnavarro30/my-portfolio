import { useState } from "react";
import { Briefcase } from "tabler-icons-react";
import useScrollPosition from "../../utils/custom-hooks";
// components
import ProjectList from "./project-list";
import Drawer from "../ui/Drawer";
import IconButton from "../ui/IconButton";

function PortfolioDrawer() {
  const [opened, setOpened] = useState(false);
  const scrollPosition = useScrollPosition();

  const handleOnClose = () => {
    setOpened(false);
    setTimeout(() => window.scrollTo(0, scrollPosition), 21);
  };

  return (
    <>
      <Drawer
        className="font-montserrat"
        open={opened}
        onClose={handleOnClose}
        title="PROJECTS"
        size="lg"
        lockScroll={false}
      >
        <ProjectList />
      </Drawer>

      <div className="flex justify-center">
        <IconButton size={40} ariaLabel="Open projects" onClick={() => setOpened(true)}>
          <Briefcase style={{ color: "#a0522d" }} size={40} />
        </IconButton>
      </div>
    </>
  );
}

export default PortfolioDrawer;
