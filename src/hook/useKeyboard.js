import { useEffect, useState } from "react";

const ACTIONS_KEYBOARD_MAP = {
  KeyW: "moveForward",
  KeyS: "moveBackward",
  KeyA: "moveLeft",
  KeyD: "moveRight",
  Space: "jump",
  Digit1: "dirt",
  Digit2: "glass",
  Digit3: "grass",
  Digit4: "log",
  Digit5: "wood",
};

const useKeyboard = () => {
  const [actions, setActions] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
    jump: false,
    dirt: false,
    grass: false,
    glass: false,
    wood: false,
    log: false,
  });
  useEffect(() => {
    const handleKeyboardDown = (event) => {
      const { code } = event;
      const action = ACTIONS_KEYBOARD_MAP[code];

      if (action) {
        /* if (actions[action])
          return */
        setActions((prevActions) => ({
          ...prevActions,
          [action]: true,
        }));
      }
    };

    const handleKeyboardUp = (event) => {
      const { code } = event;
      const action = ACTIONS_KEYBOARD_MAP[code];

      if (action) {
        /* if (!actions[action])
          return  */

        setActions((prevActions) => ({
          ...prevActions,
          [action]: false,
        }));
      }
    };

    document.addEventListener("keydown", handleKeyboardDown);
    document.addEventListener("keyup", handleKeyboardUp);
    return () => {
      document.removeEventListener("keydown", handleKeyboardDown);
      document.removeEventListener("keydown", handleKeyboardUp);
    };
  }, []);
  return actions;
};

export default useKeyboard;
