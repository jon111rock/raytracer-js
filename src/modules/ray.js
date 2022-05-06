import { Vector3 } from "./vec3";

export class Ray {
  /**
   *
   * @param {vector3} origin
   * @param {vector3} direction
   */
  constructor(origin, direction) {
    this.origin = origin;
    this.direction = direction;
  }

  origin() {
    return this.origin;
  }

  direction() {
    return this.direction;
  }
  /**
   *
   * @param {*} t(float)
   * @returns origin + t * direction (vector)
   */
  at(t) {
    return this.origin.add(this.direction.multiplyScalar(t));
  }
}
