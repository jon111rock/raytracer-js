export class Light {
  /**
   *
   * @param {float} intensity float
   */
  static ambient(intensity) {
    this.intensity = intensity;
  }

  /**
   *
   * @param {float} intensity float
   * @param {vector3} position vector3
   */
  static point(intensity, position) {
    this.intensity = intensity;
    this.position = position;
  }

  /**
   *
   * @param {float} intensity float
   * @param {vector3} position vector3
   */
  static directional(intensity, position) {
    this.intensity = intensity;
    this.position = position;
  }
}
