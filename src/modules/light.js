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

/**
 *
 * @param {vector3} hitPoint
 * @param {vector3} hitNormal recommand normalize
 * @param {Array} lights array of ligh object
 */
export function computeLighting(hitPoint, hitNormal, lights) {
  let i = 0;
  for (const light of lights) {
    console.log(light);
    if (light.type == "ambient") {
      i += light.intensity;
    } else {
      let lightVector;
      if (light.type == "point") {
        lightVector = light.position.sub(hitPoint);
      } else if (light.type == "directional") {
        lightVector = light.direction;
      }

      const normalDotLight = dot(hitNormal, lightVector);
      if (normalDotLight > 0) {
        i +=
          (light.intensity * normalDotLight) /
          (hitNormal.length() * lightVector.length());
      }
    }
  }

  return i;
}
