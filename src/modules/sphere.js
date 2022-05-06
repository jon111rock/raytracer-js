export class Sphere {
  /**
   *
   * @param {vector3} center
   * @param {float} radius
   * @param {vector3} color
   * @param {float} shine
   */
  constructor(center, radius, color, shine) {
    this.center = center;
    this.radius = radius;
    this.color = color;
    this.shine = shine;
  }
}

// todo: 一道光線打到多個球形成多個交點，要找到離相機最近的交點才能著色
// sphereList  (一堆球的集合)
// closestSphere (ray打到最近的球)
