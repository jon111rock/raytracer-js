import { Vector3, dot } from "./vec3";

export class Light {
  /**
   *
   * @param {float} intensity float
   * @constant  type "ambient" (string)
   */
  static ambient(intensity) {
    this.type = "ambient";
    this.intensity = intensity;
  }

  /**
   *
   * @param {float} intensity float
   * @param {vector3} position vector3
   * @constant  type "point" (string)
   */
  static point(intensity, position) {
    this.type = "point";
    this.intensity = intensity;
    this.position = position;
  }

  /**
   *
   * @param {float} intensity float
   * @param {vector3} direction vector3
   * @constant  type "directional" (string)
   */
  static directional(intensity, direction) {
    this.type = "directional";
    this.intensity = intensity;
    this.direction = direction;
  }
}
