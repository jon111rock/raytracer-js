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

/**
 *
 * @param {vector3} hitPoint
 * @param {vector3} hitNormal recommand normalize
 * @param {Light}
 */
export function computeLighting(hitPoint, hitNormal, light) {
  let i = 0;
  // single light
  // todo: multiLight
  if (light.type == "ambient") {
    i += light.intensity;
  }

  return i;
}
