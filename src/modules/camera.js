import { normalize, cross } from "./vec3";

export class Camera {
  constructor(lookfrom, lookat, vup, vfov, aspectRatio) {
    this.look = lookfrom;
    this.lookat = lookat;
    this.vup = vup;
    this.vfov = vfov;
    this.aspectRatio = aspectRatio;

    const theta = degrees_to_radians(vfov);
    const h = Math.tan(theta / 2);
    const viewportHeight = 2 * h;
    const viewportWidth = aspectRatio * viewportHeight;

    const w = normalize(lookfrom.sub(lookat));
    const u = normalize(cross(vup, w));
    const v = cross(w, u);

    this.origin = lookfrom;
    this.horizontal = u.multiplyScalar(viewportWidth);
    this.vertical = v.multiplyScalar(viewportHeight);
    this.lowerLeftCorner = this.origin
      .sub(this.horizontal.divideScalar(2))
      .sub(this.vertical.divideScalar(2))
      .sub(w);
  }
}

function degrees_to_radians(degrees) {
  var pi = Math.PI;
  return degrees * (pi / 180);
}

/*
lass camera {
    public:
        camera(
            point3 lookfrom,
            point3 lookat,
            vec3   vup,
            double vfov, // vertical field-of-view in degrees
            double aspect_ratio
        ) {
            auto theta = degrees_to_radians(vfov);
            auto h = tan(theta/2);
            auto viewport_height = 2.0 * h;
            auto viewport_width = aspect_ratio * viewport_height;

            auto w = unit_vector(lookfrom - lookat);
            auto u = unit_vector(cross(vup, w));
            auto v = cross(w, u);

            origin = lookfrom;
            horizontal = viewport_width * u;
            vertical = viewport_height * v;
            lower_left_corner = origin - horizontal/2 - vertical/2 - w;
        }

        ray get_ray(double s, double t) const {
            return ray(origin, lower_left_corner + s*horizontal + t*vertical - origin);
        }

    private:
        point3 origin;
        point3 lower_left_corner;
        vec3 horizontal;
        vec3 vertical;
};
*/
