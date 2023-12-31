import { useEffect } from "react";
import useKeyboard from "../hook/useKeyboard.js";
import { useStore } from "../hook/useStore.js";
import * as images from "../images/image.js";
import { useState } from "react";

export const TextureSelector = () => {
  const [visible, setVisible] = useState(true);
  const [texture, setTexture] = useStore((state) => [
    state.texture,
    state.setTexture,
  ]);

  const { dirt, grass, glass, wood, log } = useKeyboard();

  useEffect(() => {
    const options = {
      dirt,
      grass,
      glass,
      wood,
      log,
    };

    const selectedTexture = Object.entries(options).find(
      ([texture, isEnabled]) => isEnabled
    );

    if (selectedTexture) {
      const [textureName] = selectedTexture;
      setTexture(textureName);
    }
  }, [setTexture, dirt, grass, glass, wood, log]);

  useEffect(() => {
    const visibilityTimeout = setTimeout(() => {
      setVisible(false);
    }, 1000);

    setVisible(true);

    return () => {
      clearTimeout(visibilityTimeout);
    };
  }, [texture]);

  return (
    visible && (
      <div className="texture-selector">
        {Object.entries(images).map(([imgKey, img]) => {
          return (
            <img
              className={
                texture === imgKey.replace("Img", "") ? "selected" : ""
              }
              key={imgKey}
              src={img}
              alt={imgKey}
            />
          );
        })}
      </div>
    )
  );
};
