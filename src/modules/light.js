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
   * @param {vector3} position vector3
   * @constant  type "directional" (string)
   */
  static directional(intensity, position) {
    this.type = "directional";
    this.intensity = intensity;
    this.position = position;
  }
}
