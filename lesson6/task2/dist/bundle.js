/* eslint-disable no-unused-vars */
!(function (c) {
  var n = {};
  function e(s) {
    if (n[s]) return n[s].exports;
    var F = (n[s] = { i: s, l: !1, exports: {} });
    return c[s].call(F.exports, F, F.exports, e), (F.l = !0), F.exports;
  }
  (e.m = c),
    (e.c = n),
    (e.d = function (c, n, s) {
      e.o(c, n) || Object.defineProperty(c, n, { enumerable: !0, get: s });
    }),
    (e.r = function (c) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(c, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(c, "__esModule", { value: !0 });
    }),
    (e.t = function (c, n) {
      if ((1 & n && (c = e(c)), 8 & n)) return c;
      if (4 & n && "object" == typeof c && c && c.__esModule) return c;
      var s = Object.create(null);
      if (
        (e.r(s),
        Object.defineProperty(s, "default", { enumerable: !0, value: c }),
        2 & n && "string" != typeof c)
      )
        for (var F in c)
          e.d(
            s,
            F,
            function (n) {
              return c[n];
            }.bind(null, F)
          );
      return s;
    }),
    (e.n = function (c) {
      var n =
        c && c.__esModule
          ? function () {
              return c.default;
            }
          : function () {
              return c;
            };
      return e.d(n, "a", n), n;
    }),
    (e.o = function (c, n) {
      return Object.prototype.hasOwnProperty.call(c, n);
    }),
    (e.p = ""),
    e((e.s = 0));
})([
  function (module, __webpack_exports__, __webpack_require__) {
    "use strict";
    eval(
      '// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// CONCATENATED MODULE: ./src/profile.js\n// file path: src/profile.js\nconst printProfile = profileData => {\n  const {\n    name,\n    company\n  } = profileData;\n  console.log(`${name} from ${company}`);\n};\n// CONCATENATED MODULE: ./src/index.js\n// file path: src/index.js\n\nconst userData = {\n  name: "Tom",\n  age: 17\n};\nconst profile = { ...userData,\n  company: "Gromcode"\n};\nprintProfile(profile);\nconst data = [1, 2, [3, 4, [5, 6]]];\nconst result = data.flat(2);\nconsole.log(result);\nPromise.resolve().finally();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcHJvZmlsZS5qcz82ZTE1Iiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sIm5hbWVzIjpbInByaW50UHJvZmlsZSIsInByb2ZpbGVEYXRhIiwibmFtZSIsImNvbXBhbnkiLCJjb25zb2xlIiwibG9nIiwidXNlckRhdGEiLCJhZ2UiLCJwcm9maWxlIiwiZGF0YSIsInJlc3VsdCIsImZsYXQiLCJQcm9taXNlIiwicmVzb2x2ZSIsImZpbmFsbHkiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUVPLE1BQU1BLFlBQVksR0FBSUMsV0FBRCxJQUFpQjtFQUMzQyxNQUFNO0lBQUVDLElBQUY7SUFBUUM7RUFBUixJQUFvQkYsV0FBMUI7RUFDQUcsT0FBTyxDQUFDQyxHQUFSLENBQWEsR0FBRUgsSUFBSyxTQUFRQyxPQUFRLEVBQXBDO0FBQ0QsQ0FITSxDOztBQ0ZQO0FBRUE7QUFFQSxNQUFNRyxRQUFRLEdBQUc7RUFDZkosSUFBSSxFQUFFLEtBRFM7RUFFZkssR0FBRyxFQUFFO0FBRlUsQ0FBakI7QUFLQSxNQUFNQyxPQUFPLEdBQUcsRUFDZCxHQUFHRixRQURXO0VBRWRILE9BQU8sRUFBRTtBQUZLLENBQWhCO0FBS0FILFlBQVksQ0FBQ1EsT0FBRCxDQUFaO0FBRUEsTUFBTUMsSUFBSSxHQUFHLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFQLENBQVAsQ0FBYjtBQUVBLE1BQU1DLE1BQU0sR0FBR0QsSUFBSSxDQUFDRSxJQUFMLENBQVUsQ0FBVixDQUFmO0FBQ0FQLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSyxNQUFaO0FBRUFFLE9BQU8sQ0FBQ0MsT0FBUixHQUFrQkMsT0FBbEIiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGZpbGUgcGF0aDogc3JjL3Byb2ZpbGUuanNcclxuXHJcbmV4cG9ydCBjb25zdCBwcmludFByb2ZpbGUgPSAocHJvZmlsZURhdGEpID0+IHtcclxuICBjb25zdCB7IG5hbWUsIGNvbXBhbnkgfSA9IHByb2ZpbGVEYXRhO1xyXG4gIGNvbnNvbGUubG9nKGAke25hbWV9IGZyb20gJHtjb21wYW55fWApO1xyXG59O1xyXG4iLCIvLyBmaWxlIHBhdGg6IHNyYy9pbmRleC5qc1xyXG5cclxuaW1wb3J0IHsgcHJpbnRQcm9maWxlIH0gZnJvbSBcIi4vcHJvZmlsZVwiO1xyXG5cclxuY29uc3QgdXNlckRhdGEgPSB7XHJcbiAgbmFtZTogXCJUb21cIixcclxuICBhZ2U6IDE3LFxyXG59O1xyXG5cclxuY29uc3QgcHJvZmlsZSA9IHtcclxuICAuLi51c2VyRGF0YSxcclxuICBjb21wYW55OiBcIkdyb21jb2RlXCIsXHJcbn07XHJcblxyXG5wcmludFByb2ZpbGUocHJvZmlsZSk7XHJcblxyXG5jb25zdCBkYXRhID0gWzEsIDIsIFszLCA0LCBbNSwgNl1dXTtcclxuXHJcbmNvbnN0IHJlc3VsdCA9IGRhdGEuZmxhdCgyKTtcclxuY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcblByb21pc2UucmVzb2x2ZSgpLmZpbmFsbHkoKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n'
    );
  },
]);
