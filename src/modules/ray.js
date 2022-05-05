import { Vector3 } from "three";

export class Ray {
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
