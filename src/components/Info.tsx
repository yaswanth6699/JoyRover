import { useState } from "react";
import { BsChatLeftTextFill } from "react-icons/bs";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { StyledInfo } from "../GlobalStyles";

const Info = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <StyledInfo>
      <BsChatLeftTextFill onClick={toggleDrawer} />
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="bottom"
        className="info-drawer"
      >
        <ul>
          <h4>Welcome to JoyRover</h4>
          <li>
            The site is still in development mode, your feedback is appreciated.
          </li>{" "}
          <li>
            {" "}
            Stay tuned for exciting additions such as customizable themes,
            background music options, and new games.
          </li>
          <li>
            Have an idea or interested in collaborating on fresh game concepts?
            Reach out to me at ykandimalla@gmail.com.
          </li>
          <li>Crafted with React, Typescript, Zustand.</li>
        </ul>
      </Drawer>
    </StyledInfo>
  );
};

export default Info;
