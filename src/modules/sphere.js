export class Sphere {
  /**
   *
   * @param {vector3} center
   * @param {float} radius
   * @param {vector3} color
   * @param {float} shine
   * @param {float} reflective
   */
  constructor(center, radius, color, shine, reflective) {
    this.center = center;
    this.radius = radius;
    this.color = color;
    this.shine = shine;
    this.reflective = reflective;
  }
  translate(v) {
    this.center = this.center.add(v);
  }
  setCenter(v) {
    this.center = v;
  }
}
