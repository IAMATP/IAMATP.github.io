import {
  Project,
  Sprite,
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Controller from "./Controller/Controller.js";
import Textures from "./Textures/Textures.js";
import LightSources from "./LightSources/LightSources.js";
import Objects from "./Objects/Objects.js";
import Collisions from "./Collisions/Collisions.js";
import Sounds from "./Sounds/Sounds.js";
import Camera from "./Camera/Camera.js";
import RenderSettings from "./RenderSettings/RenderSettings.js";
import Runtime from "./Runtime/Runtime.js";
import Renderer from "./Renderer/Renderer.js";
import OptionsDialog from "./OptionsDialog/OptionsDialog.js";
import Messages from "./Messages/Messages.js";
import Overlay from "./Overlay/Overlay.js";

const stage = new Stage({ costumeNumber: 2 });

const sprites = {
  Controller: new Controller({
    x: 6,
    y: 29,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 4,
  }),
  Textures: new Textures({
    x: 45,
    y: 30,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 7,
  }),
  LightSources: new LightSources({
    x: -21,
    y: -17,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 9,
  }),
  Objects: new Objects({
    x: 46,
    y: 35,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 1,
  }),
  Collisions: new Collisions({
    x: 95,
    y: -39,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 8,
  }),
  Sounds: new Sounds({
    x: -76,
    y: -15,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 12,
  }),
  Camera: new Camera({
    x: -10,
    y: 41,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 2,
  }),
  RenderSettings: new RenderSettings({
    x: -192,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 6,
  }),
  Runtime: new Runtime({
    x: -30,
    y: 17,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 10,
  }),
  Renderer: new Renderer({
    x: -42.46153846153846,
    y: 26.53846153846154,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.DONT_ROTATE,
    costumeNumber: 2,
    size: 54000,
    visible: false,
    layerOrder: 3,
  }),
  OptionsDialog: new OptionsDialog({
    x: -96,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 5,
    size: 100,
    visible: false,
    layerOrder: 11,
  }),
  Messages: new Messages({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 5,
  }),
  Overlay: new Overlay({
    x: 0,
    y: 0,
    direction: 90,
    rotationStyle: Sprite.RotationStyle.ALL_AROUND,
    costumeNumber: 1,
    size: 100,
    visible: false,
    layerOrder: 13,
  }),
};

const project = new Project(stage, sprites, {
  frameRate: 30, // Set to 60 to make your project run faster
});
export default project;
