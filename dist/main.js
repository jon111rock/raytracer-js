/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_vec3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/vec3 */ \"./src/modules/vec3.js\");\n/* harmony import */ var _modules_draw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/draw */ \"./src/modules/draw.js\");\n/* harmony import */ var _modules_ray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/ray */ \"./src/modules/ray.js\");\n/* harmony import */ var _modules_light__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/light */ \"./src/modules/light.js\");\n/* harmony import */ var _modules_sphere__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/sphere */ \"./src/modules/sphere.js\");\n/* harmony import */ var _modules_scene__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/scene */ \"./src/modules/scene.js\");\n/* harmony import */ var _modules_camera__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/camera */ \"./src/modules/camera.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\n\n\n\n\n\nvar canvas = document.getElementById(\"canvas\"); // Image\n\nvar aspectRatio = 16 / 9;\nvar imageWidth = 600;\nvar imageHeight = parseInt(imageWidth / aspectRatio);\nvar pixels = new Uint8ClampedArray(4 * imageWidth * imageHeight); // Camera and Viewport\n\nvar camera = new _modules_camera__WEBPACK_IMPORTED_MODULE_6__.Camera(new _modules_vec3__WEBPACK_IMPORTED_MODULE_0__.Vector3(1, 0.5, 4), new _modules_vec3__WEBPACK_IMPORTED_MODULE_0__.Vector3(0.5, 0, -1), new _modules_vec3__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 1, 0), 20, aspectRatio); // Light\n\nvar ambientLight = new _modules_light__WEBPACK_IMPORTED_MODULE_3__.Light.ambient(0.3);\nvar pointLight = new _modules_light__WEBPACK_IMPORTED_MODULE_3__.Light.point(0.5, new _modules_vec3__WEBPACK_IMPORTED_MODULE_0__.Vector3(1, 1, 0));\nvar directionalLight = new _modules_light__WEBPACK_IMPORTED_MODULE_3__.Light.directional(0.2, new _modules_vec3__WEBPACK_IMPORTED_MODULE_0__.Vector3(1, 4, 4));\nvar lights = [ambientLight, pointLight, directionalLight]; // Sphere\n\nvar sphereLeft = new _modules_sphere__WEBPACK_IMPORTED_MODULE_4__.Sphere(new _modules_vec3__WEBPACK_IMPORTED_MODULE_0__.Vector3(-0.3, 0.1, -1), 0.5, new _modules_vec3__WEBPACK_IMPORTED_MODULE_0__.Vector3(0.8, 0.7, 0.5), 65, 0);\nvar sphereMiddle = new _modules_sphere__WEBPACK_IMPORTED_MODULE_4__.Sphere(new _modules_vec3__WEBPACK_IMPORTED_MODULE_0__.Vector3(0.7, 0.1, -1), 0.4, new _modules_vec3__WEBPACK_IMPORTED_MODULE_0__.Vector3(0.5, 0.3, 0.2), 0.3, 0.4);\nvar sphereRight = new _modules_sphere__WEBPACK_IMPORTED_MODULE_4__.Sphere(new _modules_vec3__WEBPACK_IMPORTED_MODULE_0__.Vector3(1.5, 0, -0.75), 0.25, new _modules_vec3__WEBPACK_IMPORTED_MODULE_0__.Vector3(0.5, 0.4, 0.5), 65, 0.1);\nvar plane = new _modules_sphere__WEBPACK_IMPORTED_MODULE_4__.Sphere(new _modules_vec3__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, -100.5, -1), 100, new _modules_vec3__WEBPACK_IMPORTED_MODULE_0__.Vector3(0.1, 0.9, 0.1), 65, 0);\nvar spheres = [sphereLeft, sphereMiddle, sphereRight, plane]; //Scene\n\nvar tMin = 0.001;\nvar tMax = Infinity;\nvar scene = new _modules_scene__WEBPACK_IMPORTED_MODULE_5__.Scene(spheres, lights, tMin, tMax); // Iterate through every pixel\n\nfor (var j = imageWidth - 1; j >= 0; j--) {\n  for (var i = 0; i < imageWidth; i++) {\n    var u = i / (imageWidth - 1);\n    var v = j / (imageHeight - 1);\n    var r = new _modules_ray__WEBPACK_IMPORTED_MODULE_2__.Ray(camera.origin, camera.lowerLeftCorner.add(camera.horizontal.multiplyScalar(u)).add(camera.vertical.multiplyScalar(v)).sub(camera.origin)); // const pixelColor = rayColor(r, lights, s);\n\n    var pixelColor = rayTrace(r, scene, 3);\n    (0,_modules_draw__WEBPACK_IMPORTED_MODULE_1__.drawColorToArray)(pixels, i, j, pixelColor, imageWidth, imageHeight);\n  }\n}\n\n(0,_modules_draw__WEBPACK_IMPORTED_MODULE_1__.drawPixelsToCanva)(canvas, pixels, imageWidth, imageHeight); // ray-sphere intersection test\n\nfunction sphereRayIntersection(sphere, ray) {\n  var oc = ray.origin.sub(sphere.center);\n  var a = (0,_modules_vec3__WEBPACK_IMPORTED_MODULE_0__.dot)(ray.direction, ray.direction);\n  var b = 2 * (0,_modules_vec3__WEBPACK_IMPORTED_MODULE_0__.dot)(oc, ray.direction);\n  var c = (0,_modules_vec3__WEBPACK_IMPORTED_MODULE_0__.dot)(oc, oc) - sphere.radius * sphere.radius;\n  var discriminant = b * b - 4 * a * c;\n\n  if (discriminant < 0) {\n    return -1;\n  } else {\n    var r1 = (-b - Math.sqrt(discriminant)) / (2 * a);\n    var r2 = (-b + Math.sqrt(discriminant)) / (2 * a);\n    return [r1, r2];\n  }\n}\n\nfunction findClosestShpere(ray, scene) {\n  var tMin = scene.tMin,\n      tMax = scene.tMax,\n      spheres = scene.spheres;\n  var tClosest = Infinity;\n  var closestSphere = null;\n\n  var _iterator = _createForOfIteratorHelper(spheres),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var sphere = _step.value;\n      var ts = sphereRayIntersection(sphere, ray);\n\n      if (ts[0] < tClosest && ts[0] <= tMax && ts[0] >= tMin) {\n        tClosest = ts[0];\n        closestSphere = sphere;\n      }\n\n      if (ts[1] < tClosest && ts[1] <= tMax && ts[1] >= tMin) {\n        tClosest = ts[1];\n        closestSphere = sphere;\n      }\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  return {\n    tClosest: tClosest,\n    closestSphere: closestSphere\n  };\n} // too many para !\n\n\nfunction computeLighting(hitPoint, hitNormal, view, lights, sphere, scene) {\n  var i = 0;\n\n  var _iterator2 = _createForOfIteratorHelper(lights),\n      _step2;\n\n  try {\n    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n      var light = _step2.value;\n\n      if (light.type == \"ambient\") {\n        i += light.intensity;\n      } else {\n        var lightVector = void 0;\n\n        if (light.type == \"point\") {\n          lightVector = light.position.sub(hitPoint);\n        } else if (light.type == \"directional\") {\n          lightVector = light.direction;\n        } //Shadow\n\n\n        var shadowRay = new _modules_ray__WEBPACK_IMPORTED_MODULE_2__.Ray(hitPoint, (0,_modules_vec3__WEBPACK_IMPORTED_MODULE_0__.normalize)(lightVector.sub(hitPoint)));\n\n        var _findClosestShpere = findClosestShpere(shadowRay, scene),\n            closestSphere = _findClosestShpere.closestSphere;\n\n        if (closestSphere != null) {\n          continue;\n        } // Diffuse\n\n\n        var normalDotLight = (0,_modules_vec3__WEBPACK_IMPORTED_MODULE_0__.dot)(hitNormal, lightVector);\n\n        if (normalDotLight > 0) {\n          i += light.intensity * normalDotLight / (hitNormal.length() * lightVector.length());\n        } //Specular\n\n\n        if (sphere.shine != undefined) {\n          var reflectVector = hitNormal.multiplyScalar(2).multiplyScalar((0,_modules_vec3__WEBPACK_IMPORTED_MODULE_0__.dot)(hitNormal, lightVector)).sub(lightVector);\n          var reflectDotView = (0,_modules_vec3__WEBPACK_IMPORTED_MODULE_0__.dot)(reflectVector, view);\n\n          if (reflectDotView > 0) {\n            i += light.intensity * Math.pow(reflectDotView / (reflectVector.length() * view.length()), sphere.shine);\n          }\n        }\n      }\n    }\n  } catch (err) {\n    _iterator2.e(err);\n  } finally {\n    _iterator2.f();\n  }\n\n  return i;\n}\n\nfunction rayTrace(ray, scene, depth) {\n  var lights = scene.lights;\n\n  var _findClosestShpere2 = findClosestShpere(ray, scene),\n      tClosest = _findClosestShpere2.tClosest,\n      closestSphere = _findClosestShpere2.closestSphere;\n\n  if (closestSphere != null) {\n    var hitPoint = ray.at(tClosest);\n    var hitNormal = (0,_modules_vec3__WEBPACK_IMPORTED_MODULE_0__.normalize)(hitPoint.sub(closestSphere.center));\n    var sphereColor = closestSphere.color;\n    var view = ray.direction.multiplyScalar(-1);\n    var lighting = computeLighting(hitPoint, hitNormal, view, lights, closestSphere, scene);\n    var localColor = sphereColor.multiplyScalar(lighting);\n    var _r = closestSphere.reflective;\n\n    if (depth <= 0 || _r <= 0) {\n      return localColor;\n    }\n\n    var reflectVector = (0,_modules_vec3__WEBPACK_IMPORTED_MODULE_0__.reflect)(ray.direction, hitNormal);\n    var reflectRay = new _modules_ray__WEBPACK_IMPORTED_MODULE_2__.Ray(hitPoint, reflectVector);\n    var reflectColor = rayTrace(reflectRay, scene, depth - 1);\n    return localColor.multiplyScalar(1 - _r).add(reflectColor.multiplyScalar(_r));\n  }\n\n  var unitDirection = (0,_modules_vec3__WEBPACK_IMPORTED_MODULE_0__.normalize)(ray.direction);\n  var a = 0.5 * (unitDirection.y + 1.0);\n  var backgroundColor = new _modules_vec3__WEBPACK_IMPORTED_MODULE_0__.Vector3(1, 1, 1).multiplyScalar(1 - a).add(new _modules_vec3__WEBPACK_IMPORTED_MODULE_0__.Vector3(0.5, 0.7, 1).multiplyScalar(a));\n  return backgroundColor;\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/camera.js":
/*!*******************************!*\
  !*** ./src/modules/camera.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Camera\": () => (/* binding */ Camera)\n/* harmony export */ });\n/* harmony import */ var _vec3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vec3 */ \"./src/modules/vec3.js\");\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n\nvar Camera = /*#__PURE__*/_createClass(function Camera(lookfrom, lookat, vup, vfov, aspectRatio) {\n  _classCallCheck(this, Camera);\n\n  this.look = lookfrom;\n  this.lookat = lookat;\n  this.vup = vup;\n  this.vfov = vfov;\n  this.aspectRatio = aspectRatio;\n  var theta = degrees_to_radians(vfov);\n  var h = Math.tan(theta / 2);\n  var viewportHeight = 2 * h;\n  var viewportWidth = aspectRatio * viewportHeight;\n  var w = (0,_vec3__WEBPACK_IMPORTED_MODULE_0__.normalize)(lookfrom.sub(lookat));\n  var u = (0,_vec3__WEBPACK_IMPORTED_MODULE_0__.normalize)((0,_vec3__WEBPACK_IMPORTED_MODULE_0__.cross)(vup, w));\n  var v = (0,_vec3__WEBPACK_IMPORTED_MODULE_0__.cross)(w, u);\n  this.origin = lookfrom;\n  this.horizontal = u.multiplyScalar(viewportWidth);\n  this.vertical = v.multiplyScalar(viewportHeight);\n  this.lowerLeftCorner = this.origin.sub(this.horizontal.divideScalar(2)).sub(this.vertical.divideScalar(2)).sub(w);\n});\n\nfunction degrees_to_radians(degrees) {\n  var pi = Math.PI;\n  return degrees * (pi / 180);\n}\n/*\nlass camera {\n    public:\n        camera(\n            point3 lookfrom,\n            point3 lookat,\n            vec3   vup,\n            double vfov, // vertical field-of-view in degrees\n            double aspect_ratio\n        ) {\n            auto theta = degrees_to_radians(vfov);\n            auto h = tan(theta/2);\n            auto viewport_height = 2.0 * h;\n            auto viewport_width = aspect_ratio * viewport_height;\n\n            auto w = unit_vector(lookfrom - lookat);\n            auto u = unit_vector(cross(vup, w));\n            auto v = cross(w, u);\n\n            origin = lookfrom;\n            horizontal = viewport_width * u;\n            vertical = viewport_height * v;\n            lower_left_corner = origin - horizontal/2 - vertical/2 - w;\n        }\n\n        ray get_ray(double s, double t) const {\n            return ray(origin, lower_left_corner + s*horizontal + t*vertical - origin);\n        }\n\n    private:\n        point3 origin;\n        point3 lower_left_corner;\n        vec3 horizontal;\n        vec3 vertical;\n};\n*/\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/camera.js?");

/***/ }),

/***/ "./src/modules/draw.js":
/*!*****************************!*\
  !*** ./src/modules/draw.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawColorToArray\": () => (/* binding */ drawColorToArray),\n/* harmony export */   \"drawPixelsToCanva\": () => (/* binding */ drawPixelsToCanva)\n/* harmony export */ });\nfunction drawPixelsToCanva(canvas, pixels, width, height) {\n  canvas.setAttribute(\"width\", width);\n  canvas.setAttribute(\"height\", height);\n  var ctx = canvas.getContext(\"2d\"); // Initialize a new ImageData object\n\n  var imageData = new ImageData(pixels, width, height); // Draw image data to the canvas\n\n  ctx.putImageData(imageData, 0, 0);\n}\nfunction drawColorToArray(ary, x, y, colorVec, width, height) {\n  var r = parseInt(255.99 * colorVec.x);\n  var g = parseInt(255.99 * colorVec.y);\n  var b = parseInt(255.99 * colorVec.z);\n  var index = ((height - 1 - y) * width + x) * 4;\n  ary[index + 0] = r; // R value\n\n  ary[index + 1] = g; // G value\n\n  ary[index + 2] = b; // B value\n\n  ary[index + 3] = 255; // A value\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/draw.js?");

/***/ }),

/***/ "./src/modules/light.js":
/*!******************************!*\
  !*** ./src/modules/light.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Light\": () => (/* binding */ Light)\n/* harmony export */ });\n/* harmony import */ var _vec3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vec3 */ \"./src/modules/vec3.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\nvar Light = /*#__PURE__*/function () {\n  function Light() {\n    _classCallCheck(this, Light);\n  }\n\n  _createClass(Light, null, [{\n    key: \"ambient\",\n    value:\n    /**\n     *\n     * @param {float} intensity float\n     * @constant  type \"ambient\" (string)\n     */\n    function ambient(intensity) {\n      this.type = \"ambient\";\n      this.intensity = intensity;\n    }\n    /**\n     *\n     * @param {float} intensity float\n     * @param {vector3} position vector3\n     * @constant  type \"point\" (string)\n     */\n\n  }, {\n    key: \"point\",\n    value: function point(intensity, position) {\n      this.type = \"point\";\n      this.intensity = intensity;\n      this.position = position;\n    }\n    /**\n     *\n     * @param {float} intensity float\n     * @param {vector3} direction vector3\n     * @constant  type \"directional\" (string)\n     */\n\n  }, {\n    key: \"directional\",\n    value: function directional(intensity, direction) {\n      this.type = \"directional\";\n      this.intensity = intensity;\n      this.direction = direction;\n    }\n  }]);\n\n  return Light;\n}();\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/light.js?");

/***/ }),

/***/ "./src/modules/ray.js":
/*!****************************!*\
  !*** ./src/modules/ray.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ray\": () => (/* binding */ Ray)\n/* harmony export */ });\n/* harmony import */ var _vec3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vec3 */ \"./src/modules/vec3.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\nvar Ray = /*#__PURE__*/function () {\n  /**\n   *\n   * @param {vector3} origin\n   * @param {vector3} direction\n   */\n  function Ray(origin, direction) {\n    _classCallCheck(this, Ray);\n\n    this.origin = origin;\n    this.direction = direction;\n  }\n\n  _createClass(Ray, [{\n    key: \"origin\",\n    value: function origin() {\n      return this.origin;\n    }\n  }, {\n    key: \"direction\",\n    value: function direction() {\n      return this.direction;\n    }\n    /**\n     *\n     * @param {*} t(float)\n     * @returns origin + t * direction (vector)\n     */\n\n  }, {\n    key: \"at\",\n    value: function at(t) {\n      return this.origin.add(this.direction.multiplyScalar(t));\n    }\n  }]);\n\n  return Ray;\n}();\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/ray.js?");

/***/ }),

/***/ "./src/modules/scene.js":
/*!******************************!*\
  !*** ./src/modules/scene.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Scene\": () => (/* binding */ Scene)\n/* harmony export */ });\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Scene = /*#__PURE__*/_createClass(function Scene(spheres, lights, tMin, tMax) {\n  _classCallCheck(this, Scene);\n\n  this.spheres = spheres;\n  this.lights = lights;\n  this.tMin = tMin;\n  this.tMax = tMax;\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/scene.js?");

/***/ }),

/***/ "./src/modules/sphere.js":
/*!*******************************!*\
  !*** ./src/modules/sphere.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Sphere\": () => (/* binding */ Sphere)\n/* harmony export */ });\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Sphere = /*#__PURE__*/_createClass(\n/**\n *\n * @param {vector3} center\n * @param {float} radius\n * @param {vector3} color\n * @param {float} shine\n * @param {float} reflective\n */\nfunction Sphere(center, radius, color, shine, reflective) {\n  _classCallCheck(this, Sphere);\n\n  this.center = center;\n  this.radius = radius;\n  this.color = color;\n  this.shine = shine;\n  this.reflective = reflective;\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/sphere.js?");

/***/ }),

/***/ "./src/modules/vec3.js":
/*!*****************************!*\
  !*** ./src/modules/vec3.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Vector3\": () => (/* binding */ Vector3),\n/* harmony export */   \"cross\": () => (/* binding */ cross),\n/* harmony export */   \"dot\": () => (/* binding */ dot),\n/* harmony export */   \"normalize\": () => (/* binding */ normalize),\n/* harmony export */   \"reflect\": () => (/* binding */ reflect)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Vector3 = /*#__PURE__*/function () {\n  function Vector3() {\n    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n    var z = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n\n    _classCallCheck(this, Vector3);\n\n    _defineProperty(this, \"x\", 0);\n\n    _defineProperty(this, \"y\", 0);\n\n    _defineProperty(this, \"z\", 0);\n\n    this.x = x;\n    this.y = y;\n    this.z = z;\n  }\n\n  _createClass(Vector3, [{\n    key: \"sub\",\n    value: function sub(v) {\n      return new Vector3(this.x - v.x, this.y - v.y, this.z - v.z);\n    }\n  }, {\n    key: \"add\",\n    value: function add(v) {\n      return new Vector3(this.x + v.x, this.y + v.y, this.z + v.z);\n    }\n  }, {\n    key: \"multiplyScalar\",\n    value: function multiplyScalar(s) {\n      return new Vector3(this.x * s, this.y * s, this.z * s);\n    }\n  }, {\n    key: \"divideScalar\",\n    value: function divideScalar(s) {\n      return new Vector3(this.x / s, this.y / s, this.z / s);\n    }\n  }, {\n    key: \"lengthSquared\",\n    value: function lengthSquared() {\n      return this.x * this.x + this.y * this.y + this.z * this.z;\n    }\n  }, {\n    key: \"length\",\n    value: function length() {\n      return Math.sqrt(this.lengthSquared());\n    }\n  }]);\n\n  return Vector3;\n}();\nfunction dot(v1, v2) {\n  return v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;\n}\nfunction cross(v1, v2) {\n  return new Vector3(v1.y * v2.z - v1.z * v2.y, v1.z * v2.x - v1.x * v2.z, v1.x * v2.y - v1.y * v2.x);\n}\nfunction normalize(v) {\n  return v.divideScalar(v.length());\n}\nfunction reflect(v, n) {\n  return v.sub(n.multiplyScalar(2 * dot(v, n)));\n}\n\n//# sourceURL=webpack://my-webpack-project/./src/modules/vec3.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;