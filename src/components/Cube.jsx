import { useBox } from "@react-three/cannon";
import * as textures from "../images/texture";
import { useState } from "react";
import { useStore } from "../hook/useStore";

const Cube = ({ position, texture, id }) => {
  const [isHovered, setIsHovered] = useState(false);

  const [ref] = useBox(() => ({
    type: "static",
    position,
  }));

  const activeTexture = textures[texture + "Texture"];

  const [removeCube] = useStore((state) => [state.removeCube]);
  return (
    <mesh
      onPointerMove={(e) => {
        e.stopPropagation();
        setIsHovered(true);
      }}
      onPointerOut={(e) => {
        e.stopPropagation();
        setIsHovered(false);
      }}
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();
        if (e.altKey) {
          removeCube(id);
        }
      }}
    >
      <boxGeometry attach={"geometry"} />
      <meshStandardMaterial
        color={isHovered ? "grey" : "white"}
        map={activeTexture}
        attach={"material"}
      />
    </mesh>
  );
};

export default Cube;
