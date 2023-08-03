import { TextureLoader } from "three";
import { grassImg, glassImg, dirtImg, logImg, woodImg } from "./image";
import { RepeatWrapping } from "three";
import { NearestFilter } from "three";

const grassTexture = new TextureLoader().load(grassImg);
const glassTexture = new TextureLoader().load(glassImg);
const dirtTexture = new TextureLoader().load(dirtImg);
const logTexture = new TextureLoader().load(logImg);
const woodTexture = new TextureLoader().load(woodImg);

const groundTexture = new TextureLoader().load(grassImg);

groundTexture.wrapS = RepeatWrapping;
groundTexture.wrapT = RepeatWrapping;

groundTexture.magFilter = NearestFilter;
grassTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
dirtTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;

export {
  grassTexture,
  glassTexture,
  dirtTexture,
  logTexture,
  woodTexture,
  groundTexture,
};
