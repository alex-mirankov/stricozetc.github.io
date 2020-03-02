function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\r\n<div class=\"main\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<div class=\"footer\"></div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/button/button.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/button/button.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsButtonButtonComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<button class=\"button\"\n        (click)=\"onButtonClick($event)\">\n      {{caption}}\n</button>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"header\">\n  <div class=\"header-content\">\n    <div class=\"header-content-search-control\" (clickOutside)=\"close()\">\n      <app-input (inputChange)=\"search($event)\"\n                  (inputFocus)=\"focusEvent()\"></app-input>\n      <app-search-list *ngIf=\"isSearchListShown\"\n                        [options]=\"searchedMovies\">\n      </app-search-list>\n    </div>\n    <app-button caption=\"Movies\"\n                (buttonClick)=\"goToMovies()\"></app-button>\n    <div class=\"header-content-favorites\">\n      <div class=\"header-content-favorites__counter\">\n        {{counterFavoriteMovies}}\n      </div>\n      <app-button caption=\"Favorites\"\n                  (buttonClick)=\"goToFavorites()\"></app-button>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/input/input.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/input/input.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsInputInputComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"input\">\n  <input class=\"input__control\"\n          (focus)=\"onInputFocus()\"\n          [formControl]=\"movieFilm\"\n          placeholder=\"Search...\"/>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie-card/movie-card.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie-card/movie-card.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMovieCardMovieCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"movie-card\" (click)=\"goToFilmDetails(movieId)\"\n  [ngStyle]=\"{'background': getPosterUrl()}\">\n  <div class=\"movie-card__title\">{{movieTitle}}</div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie-info/movie-info.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie-info/movie-info.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMovieInfoMovieInfoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"movie-info\">\n  <div class=\"movie-info__banner\"\n        [ngStyle]=\"{'background': getPosterUrl()}\">\n  </div>\n  <div class=\"movie-info-information\">\n    <div class=\"movie-info-information__title\">Title: {{title}}</div>\n    <div class=\"movie-info-information__description\">Overview: {{description}}</div>\n    <div class=\"movie-info-information__rate\">Total Rating: {{rate}}</div>\n    <app-button *ngIf=\"!isMovieInFavorites.value\"\n                caption=\"Add to Favorites\"\n                (buttonClick)=\"addToFavorites()\">\n    </app-button>\n    <app-button *ngIf=\"isMovieInFavorites.value\"\n                caption=\"Remove from Favorites\"\n                (buttonClick)=\"removeFromFavorites()\">\n    </app-button>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie-list/movie-list.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie-list/movie-list.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMovieListMovieListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"movie-list\">\n  <div>\n    <app-movie-card *ngFor=\"let card of cards\"\n                    [movieTitle]=\"card.title\"\n                    [backgroundPath]=\"card.poster_path\"\n                    [movieId]=\"card.id\">\n    </app-movie-card>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-list/search-list.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-list/search-list.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSearchListSearchListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"search-list\">\n  <div class=\"search-list__option\"\n        *ngFor=\"let option of options\"\n        (click)=\"goToFilmDetails(option.id)\">\n    <div class=\"search-list__option-poster\"\n          [ngStyle]=\"{'background': getPosterUrl(option.poster_path)}\">\n    </div>\n    <div class=\"search-list__option-title\">\n      {{option.title}}\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favorite-page/favorite-page.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favorite-page/favorite-page.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesFavoritePageFavoritePageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"favorite-page\">\n  <div>\n    <app-movie-card *ngFor=\"let card of cards\"\n                    [movieTitle]=\"card.title\"\n                    [backgroundPath]=\"card.poster_path\"\n                    [movieId]=\"card.id\">\n    </app-movie-card>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/movie-page/movie-page.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/movie-page/movie-page.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMoviePageMoviePageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"movie-page\">\n  <app-movie-info [title]=\"title\"\n                  [description]=\"overview\"\n                  [posterPath]=\"posterPath\"\n                  [rate]=\"rate\">\n  </app-movie-info>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/movies-page/movies-page.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/movies-page/movies-page.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMoviesPageMoviesPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-movie-list></app-movie-list>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _pages_movies_page_movies_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/movies-page/movies-page.component */
    "./src/app/pages/movies-page/movies-page.component.ts");
    /* harmony import */


    var _pages_movie_page_movie_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/movie-page/movie-page.component */
    "./src/app/pages/movie-page/movie-page.component.ts");
    /* harmony import */


    var _pages_favorite_page_favorite_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/favorite-page/favorite-page.component */
    "./src/app/pages/favorite-page/favorite-page.component.ts");

    var routes = [{
      path: '',
      component: _pages_movies_page_movies_page_component__WEBPACK_IMPORTED_MODULE_3__["MoviesPageComponent"]
    }, {
      path: 'movie/:id',
      component: _pages_movie_page_movie_page_component__WEBPACK_IMPORTED_MODULE_4__["MoviePageComponent"]
    }, {
      path: 'favorites',
      component: _pages_favorite_page_favorite_page_component__WEBPACK_IMPORTED_MODULE_5__["FavoritePageComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".footer {\n  height: 10px;\n  -webkit-box-flex: 0;\n          flex: 0 0 auto;\n  background-color: rgba(4, 4, 24, 0.849);\n}\n\n.main {\n  -webkit-box-flex: 1;\n          flex: 1 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxBbGlha3NhbmRyX01pcmFua291XFxEb2N1bWVudHNcXFNTUFxcU1NQL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0M6XFxVc2Vyc1xcQWxpYWtzYW5kcl9NaXJhbmtvdVxcRG9jdW1lbnRzXFxTU1BcXFNTUC9zcmNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7VUFBQSxjQUFBO0VBQ0EsdUNDSW9CO0FDTHRCOztBRklBO0VBQ0UsbUJBQUE7VUFBQSxjQUFBO0FFREYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4uZm9vdGVyIHtcclxuICBoZWlnaHQ6IDEwcHg7XHJcbiAgZmxleDogMCAwIGF1dG87XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1vdmllTGlzdEJhY2tncm91bmQ7XHJcbn1cclxuXHJcbi5tYWluIHtcclxuICBmbGV4OiAxIDAgYXV0bztcclxufVxyXG4iLCIkYmFzZVdoaXRlOiAjZmZmO1xyXG4kYmFzZUJsYWNrOiAjMDAwO1xyXG4kbGlnaHRHcmF5OiAjZGJkM2QzO1xyXG5cclxuJGJhc2VGb250U2l6ZTogMTZweDtcclxuJGJhc2VGb250RmFtaWx5OiAnQXJpYWwnO1xyXG5cclxuJGhlYWRlckJhY2tncm91bmQ6IHJnYigxMTksIDUsIDExOSk7XHJcbiRoZWFkZXJDb3VudGVyQmFja2dyb3VuZDogcmdiKDIyOCwgMTEsIDExKTtcclxuJG1vdmllTGlzdEJhY2tncm91bmQ6IHJnYmEoNCwgNCwgMjQsIDAuODQ5KTtcclxuJGJvcmRlckJ1dHRvbkNvbG9yOiByZ2IoMjE4LCAxNDUsIDkpO1xyXG4iLCIuZm9vdGVyIHtcbiAgaGVpZ2h0OiAxMHB4O1xuICBmbGV4OiAwIDAgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0LCA0LCAyNCwgMC44NDkpO1xufVxuXG4ubWFpbiB7XG4gIGZsZXg6IDEgMCBhdXRvO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'SSP';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/movie-list/movie-list.component */
    "./src/app/components/movie-list/movie-list.component.ts");
    /* harmony import */


    var _components_movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/movie-card/movie-card.component */
    "./src/app/components/movie-card/movie-card.component.ts");
    /* harmony import */


    var _components_movie_info_movie_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/movie-info/movie-info.component */
    "./src/app/components/movie-info/movie-info.component.ts");
    /* harmony import */


    var _pages_movies_page_movies_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/movies-page/movies-page.component */
    "./src/app/pages/movies-page/movies-page.component.ts");
    /* harmony import */


    var _pages_movie_page_movie_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/movie-page/movie-page.component */
    "./src/app/pages/movie-page/movie-page.component.ts");
    /* harmony import */


    var _components_button_button_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/button/button.component */
    "./src/app/components/button/button.component.ts");
    /* harmony import */


    var _components_input_input_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/input/input.component */
    "./src/app/components/input/input.component.ts");
    /* harmony import */


    var _components_search_list_search_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/search-list/search-list.component */
    "./src/app/components/search-list/search-list.component.ts");
    /* harmony import */


    var _directives_click_outside_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./directives/click-outside.directive */
    "./src/app/directives/click-outside.directive.ts");
    /* harmony import */


    var _pages_favorite_page_favorite_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./pages/favorite-page/favorite-page.component */
    "./src/app/pages/favorite-page/favorite-page.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _components_movie_list_movie_list_component__WEBPACK_IMPORTED_MODULE_8__["MovieListComponent"], _components_movie_card_movie_card_component__WEBPACK_IMPORTED_MODULE_9__["MovieCardComponent"], _components_movie_info_movie_info_component__WEBPACK_IMPORTED_MODULE_10__["MovieInfoComponent"], _pages_movies_page_movies_page_component__WEBPACK_IMPORTED_MODULE_11__["MoviesPageComponent"], _pages_movie_page_movie_page_component__WEBPACK_IMPORTED_MODULE_12__["MoviePageComponent"], _components_button_button_component__WEBPACK_IMPORTED_MODULE_13__["ButtonComponent"], _components_input_input_component__WEBPACK_IMPORTED_MODULE_14__["InputComponent"], _components_search_list_search_list_component__WEBPACK_IMPORTED_MODULE_15__["SearchListComponent"], _directives_click_outside_directive__WEBPACK_IMPORTED_MODULE_16__["ClickOutsideDirective"], _pages_favorite_page_favorite_page_component__WEBPACK_IMPORTED_MODULE_17__["FavoritePageComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/button/button.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/button/button.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsButtonButtonComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".button {\n  color: #fff;\n  outline: none;\n  border: none;\n  border: 2px solid #da9109;\n  font-size: 21px;\n  font-family: \"Arial\";\n  background-color: inherit;\n  border-radius: 5px;\n  cursor: pointer;\n  padding: 5px;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n}\n.button:hover {\n  color: #000;\n  background-color: #da9109;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9idXR0b24vQzpcXFVzZXJzXFxBbGlha3NhbmRyX01pcmFua291XFxEb2N1bWVudHNcXFNTUFxcU1NQL3NyY1xcYXBwXFxjb21wb25lbnRzXFxidXR0b25cXGJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9idXR0b24vQzpcXFVzZXJzXFxBbGlha3NhbmRyX01pcmFua291XFxEb2N1bWVudHNcXFNTUFxcU1NQL3NyY1xcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFdDSFU7RURJVixhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQ0hlO0VESWYseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFBQSxvQkFBQTtBRURGO0FGR0U7RUFDRSxXQ2ZRO0VEZ0JSLHlCQ1BnQjtBQ01wQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi92YXJpYWJsZXMuc2Nzc1wiO1xyXG5cclxuLmJ1dHRvbiB7XHJcbiAgY29sb3I6ICRiYXNlV2hpdGU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyOiAycHggc29saWQgJGJvcmRlckJ1dHRvbkNvbG9yO1xyXG4gIGZvbnQtc2l6ZTogJGJhc2VGb250U2l6ZSArIDU7XHJcbiAgZm9udC1mYW1pbHk6ICRiYXNlRm9udEZhbWlseTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAkYmFzZUJsYWNrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJvcmRlckJ1dHRvbkNvbG9yO1xyXG4gIH1cclxufVxyXG4iLCIkYmFzZVdoaXRlOiAjZmZmO1xyXG4kYmFzZUJsYWNrOiAjMDAwO1xyXG4kbGlnaHRHcmF5OiAjZGJkM2QzO1xyXG5cclxuJGJhc2VGb250U2l6ZTogMTZweDtcclxuJGJhc2VGb250RmFtaWx5OiAnQXJpYWwnO1xyXG5cclxuJGhlYWRlckJhY2tncm91bmQ6IHJnYigxMTksIDUsIDExOSk7XHJcbiRoZWFkZXJDb3VudGVyQmFja2dyb3VuZDogcmdiKDIyOCwgMTEsIDExKTtcclxuJG1vdmllTGlzdEJhY2tncm91bmQ6IHJnYmEoNCwgNCwgMjQsIDAuODQ5KTtcclxuJGJvcmRlckJ1dHRvbkNvbG9yOiByZ2IoMjE4LCAxNDUsIDkpO1xyXG4iLCIuYnV0dG9uIHtcbiAgY29sb3I6ICNmZmY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgI2RhOTEwOTtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbn1cbi5idXR0b246aG92ZXIge1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RhOTEwOTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/button/button.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/button/button.component.ts ***!
    \*******************************************************/

  /*! exports provided: ButtonComponent */

  /***/
  function srcAppComponentsButtonButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ButtonComponent", function () {
      return ButtonComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ButtonComponent =
    /*#__PURE__*/
    function () {
      function ButtonComponent() {
        _classCallCheck(this, ButtonComponent);

        this.caption = '';
        this.buttonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ButtonComponent, [{
        key: "onButtonClick",
        value: function onButtonClick(event) {
          this.buttonClick.emit(event);
        }
      }]);

      return ButtonComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ButtonComponent.prototype, "caption", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ButtonComponent.prototype, "buttonClick", void 0);
    ButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-button',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./button.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/button/button.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./button.component.scss */
      "./src/app/components/button/button.component.scss")).default]
    })], ButtonComponent);
    /***/
  },

  /***/
  "./src/app/components/header/header.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/header/header.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header {\n  background-color: #770577;\n  height: 40px;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  padding: 10px 0;\n}\n.header-content {\n  width: 90%;\n  margin: 0 auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.header-content-search-control {\n  position: relative;\n}\n.header-content-favorites {\n  position: relative;\n}\n.header-content-favorites__counter {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background-color: #e40b0b;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  color: #fff;\n  font-family: \"Arial\";\n  padding: 2px;\n  position: absolute;\n  right: 0;\n  top: -10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXFVzZXJzXFxBbGlha3NhbmRyX01pcmFua291XFxEb2N1bWVudHNcXFNTUFxcU1NQL3NyY1xcYXBwXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXFVzZXJzXFxBbGlha3NhbmRyX01pcmFua291XFxEb2N1bWVudHNcXFNTUFxcU1NQL3NyY1xcdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHlCQ0lpQjtFREhqQixZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7QUVERjtBRkdFO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtBRURKO0FGR0k7RUFDRSxrQkFBQTtBRUROO0FGSUk7RUFDRSxrQkFBQTtBRUZOO0FGSU07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJDbkJrQjtFRG9CbEIsb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxXQy9CSTtFRGdDSixvQkMzQlM7RUQ0QlQsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QUVGUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi5oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRoZWFkZXJCYWNrZ3JvdW5kO1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxuXHJcbiAgJi1jb250ZW50IHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICYtc2VhcmNoLWNvbnRyb2wge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgJi1mYXZvcml0ZXMge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAmX19jb3VudGVyIHtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRoZWFkZXJDb3VudGVyQmFja2dyb3VuZDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICRiYXNlV2hpdGU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICRiYXNlRm9udEZhbWlseTtcclxuICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHRvcDogLTEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiJGJhc2VXaGl0ZTogI2ZmZjtcclxuJGJhc2VCbGFjazogIzAwMDtcclxuJGxpZ2h0R3JheTogI2RiZDNkMztcclxuXHJcbiRiYXNlRm9udFNpemU6IDE2cHg7XHJcbiRiYXNlRm9udEZhbWlseTogJ0FyaWFsJztcclxuXHJcbiRoZWFkZXJCYWNrZ3JvdW5kOiByZ2IoMTE5LCA1LCAxMTkpO1xyXG4kaGVhZGVyQ291bnRlckJhY2tncm91bmQ6IHJnYigyMjgsIDExLCAxMSk7XHJcbiRtb3ZpZUxpc3RCYWNrZ3JvdW5kOiByZ2JhKDQsIDQsIDI0LCAwLjg0OSk7XHJcbiRib3JkZXJCdXR0b25Db2xvcjogcmdiKDIxOCwgMTQ1LCA5KTtcclxuIiwiLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3NzA1Nzc7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDEwcHggMDtcbn1cbi5oZWFkZXItY29udGVudCB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uaGVhZGVyLWNvbnRlbnQtc2VhcmNoLWNvbnRyb2wge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaGVhZGVyLWNvbnRlbnQtZmF2b3JpdGVzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmhlYWRlci1jb250ZW50LWZhdm9yaXRlc19fY291bnRlciB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0MGIwYjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xuICBwYWRkaW5nOiAycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogLTEwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/movies.service */
    "./src/app/services/movies.service.ts");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(router, movieService) {
        _classCallCheck(this, HeaderComponent);

        this.router = router;
        this.movieService = movieService;
        this.searchedMovies = [];
        this.isSearchListShown = false;
        this.counterFavoriteMovies = 0;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.movieService.countFavoriteMovies.subscribe(function (value) {
            console.log(value);
            _this.counterFavoriteMovies = _this.movieService.countFavoriteMovies.value;
          });
        }
      }, {
        key: "goToMovies",
        value: function goToMovies() {
          this.router.navigate(['/']);
        }
      }, {
        key: "goToFavorites",
        value: function goToFavorites() {
          this.router.navigate(['/favorites']);
        }
      }, {
        key: "close",
        value: function close() {
          this.isSearchListShown = false;
        }
      }, {
        key: "focusEvent",
        value: function focusEvent() {
          this.isSearchListShown = true;
        }
      }, {
        key: "search",
        value: function search(searchString) {
          var _this2 = this;

          this.searchedMovies = [];
          this.movieService.searchMovie(searchString).subscribe(function (item) {
            item.results.forEach(function (element) {
              _this2.searchedMovies.push(element);
            });
          });
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_3__["MoviesService"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/components/header/header.component.scss")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/components/input/input.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/components/input/input.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsInputInputComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".input__control {\n  outline: none;\n  font-size: 16px;\n  font-family: \"Arial\";\n  padding: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9pbnB1dC9DOlxcVXNlcnNcXEFsaWFrc2FuZHJfTWlyYW5rb3VcXERvY3VtZW50c1xcU1NQXFxTU1Avc3JjXFxhcHBcXGNvbXBvbmVudHNcXGlucHV0XFxpbnB1dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9pbnB1dC9DOlxcVXNlcnNcXEFsaWFrc2FuZHJfTWlyYW5rb3VcXERvY3VtZW50c1xcU1NQXFxTU1Avc3JjXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9pbnB1dC9pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJRTtFQUNFLGFBQUE7RUFDQSxlQ0ZXO0VER1gsb0JDRmE7RURHYixZQUFBO0FFSEoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2lucHV0L2lucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLmlucHV0IHtcclxuXHJcbiAgJl9fY29udHJvbCB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAkYmFzZUZvbnRTaXplO1xyXG4gICAgZm9udC1mYW1pbHk6ICRiYXNlRm9udEZhbWlseTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcbn1cclxuIiwiJGJhc2VXaGl0ZTogI2ZmZjtcclxuJGJhc2VCbGFjazogIzAwMDtcclxuJGxpZ2h0R3JheTogI2RiZDNkMztcclxuXHJcbiRiYXNlRm9udFNpemU6IDE2cHg7XHJcbiRiYXNlRm9udEZhbWlseTogJ0FyaWFsJztcclxuXHJcbiRoZWFkZXJCYWNrZ3JvdW5kOiByZ2IoMTE5LCA1LCAxMTkpO1xyXG4kaGVhZGVyQ291bnRlckJhY2tncm91bmQ6IHJnYigyMjgsIDExLCAxMSk7XHJcbiRtb3ZpZUxpc3RCYWNrZ3JvdW5kOiByZ2JhKDQsIDQsIDI0LCAwLjg0OSk7XHJcbiRib3JkZXJCdXR0b25Db2xvcjogcmdiKDIxOCwgMTQ1LCA5KTtcclxuIiwiLmlucHV0X19jb250cm9sIHtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xuICBwYWRkaW5nOiA1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/input/input.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/input/input.component.ts ***!
    \*****************************************************/

  /*! exports provided: InputComponent */

  /***/
  function srcAppComponentsInputInputComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InputComponent", function () {
      return InputComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var InputComponent =
    /*#__PURE__*/
    function () {
      function InputComponent() {
        _classCallCheck(this, InputComponent);

        this.inputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.inputFocus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.inputBlur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.movieFilm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
      }

      _createClass(InputComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.movieFilm.valueChanges.subscribe(function (value) {
            return _this3.inputChange.emit(value);
          });
        }
      }, {
        key: "onInputFocus",
        value: function onInputFocus() {
          this.inputFocus.emit();
        }
      }]);

      return InputComponent;
    }();

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], InputComponent.prototype, "inputChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], InputComponent.prototype, "inputFocus", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], InputComponent.prototype, "inputBlur", void 0);
    InputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-input',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./input.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/input/input.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./input.component.scss */
      "./src/app/components/input/input.component.scss")).default]
    })], InputComponent);
    /***/
  },

  /***/
  "./src/app/components/movie-card/movie-card.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/components/movie-card/movie-card.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMovieCardMovieCardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".movie-card {\n  width: 300px;\n  min-width: 300px;\n  max-width: 100%;\n  height: 450px;\n  margin: 10px;\n  -webkit-transition: all 1s;\n  transition: all 1s;\n  cursor: pointer;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  flex-wrap: wrap;\n}\n.movie-card:hover {\n  opacity: 0.8;\n  background-color: #000;\n}\n.movie-card__title {\n  color: #fff;\n  font-size: 21px;\n  font-family: \"Arial\";\n  font-weight: bold;\n  opacity: 0;\n  visibility: hidden;\n  text-align: center;\n  padding: 5px;\n  -webkit-transition: opacity 0.3s, visibility 0s linear 0.3s;\n  transition: opacity 0.3s, visibility 0s linear 0.3s;\n}\n.movie-card:hover .movie-card__title {\n  opacity: 1;\n  visibility: visible;\n  -webkit-transition-delay: 0s;\n          transition-delay: 0s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZS1jYXJkL0M6XFxVc2Vyc1xcQWxpYWtzYW5kcl9NaXJhbmtvdVxcRG9jdW1lbnRzXFxTU1BcXFNTUC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbW92aWUtY2FyZFxcbW92aWUtY2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZS1jYXJkL21vdmllLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbW92aWUtY2FyZC9DOlxcVXNlcnNcXEFsaWFrc2FuZHJfTWlyYW5rb3VcXERvY3VtZW50c1xcU1NQXFxTU1Avc3JjXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQUEsa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxlQUFBO0FDREY7QURHRTtFQUNFLFlBQUE7RUFDQSxzQkVoQlE7QURlWjtBRElFO0VBQ0UsV0VyQlE7RUZzQlIsZUFBQTtFQUNBLG9CRWxCYTtFRm1CYixpQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDJEQUFBO0VBQUEsbURBQUE7QUNGSjtBREtFO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsNEJBQUE7VUFBQSxvQkFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZS1jYXJkL21vdmllLWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbi5tb3ZpZS1jYXJkIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0NTBweDtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYXNlQmxhY2s7XHJcbiAgfVxyXG5cclxuICAmX190aXRsZSB7XHJcbiAgICBjb2xvcjogJGJhc2VXaGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogJGJhc2VGb250U2l6ZSArIDU7XHJcbiAgICBmb250LWZhbWlseTogJGJhc2VGb250RmFtaWx5O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzLCB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjNzO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciAmX190aXRsZSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xyXG4gIH1cclxufVxyXG4iLCIubW92aWUtY2FyZCB7XG4gIHdpZHRoOiAzMDBweDtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ1MHB4O1xuICBtYXJnaW46IDEwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAxcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLm1vdmllLWNhcmQ6aG92ZXIge1xuICBvcGFjaXR5OiAwLjg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XG59XG4ubW92aWUtY2FyZF9fdGl0bGUge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDVweDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzLCB2aXNpYmlsaXR5IDBzIGxpbmVhciAwLjNzO1xufVxuLm1vdmllLWNhcmQ6aG92ZXIgLm1vdmllLWNhcmRfX3RpdGxlIHtcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgdHJhbnNpdGlvbi1kZWxheTogMHM7XG59IiwiJGJhc2VXaGl0ZTogI2ZmZjtcclxuJGJhc2VCbGFjazogIzAwMDtcclxuJGxpZ2h0R3JheTogI2RiZDNkMztcclxuXHJcbiRiYXNlRm9udFNpemU6IDE2cHg7XHJcbiRiYXNlRm9udEZhbWlseTogJ0FyaWFsJztcclxuXHJcbiRoZWFkZXJCYWNrZ3JvdW5kOiByZ2IoMTE5LCA1LCAxMTkpO1xyXG4kaGVhZGVyQ291bnRlckJhY2tncm91bmQ6IHJnYigyMjgsIDExLCAxMSk7XHJcbiRtb3ZpZUxpc3RCYWNrZ3JvdW5kOiByZ2JhKDQsIDQsIDI0LCAwLjg0OSk7XHJcbiRib3JkZXJCdXR0b25Db2xvcjogcmdiKDIxOCwgMTQ1LCA5KTtcclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/movie-card/movie-card.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/movie-card/movie-card.component.ts ***!
    \***************************************************************/

  /*! exports provided: MovieCardComponent */

  /***/
  function srcAppComponentsMovieCardMovieCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovieCardComponent", function () {
      return MovieCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var MovieCardComponent =
    /*#__PURE__*/
    function () {
      function MovieCardComponent(router) {
        _classCallCheck(this, MovieCardComponent);

        this.router = router;
        this.movieTitle = '';
        this.backgroundPath = '';
      }

      _createClass(MovieCardComponent, [{
        key: "getPosterUrl",
        value: function getPosterUrl() {
          return "url(https://image.tmdb.org/t/p/w300/".concat(this.backgroundPath, ") no-repeat");
        }
      }, {
        key: "goToFilmDetails",
        value: function goToFilmDetails(id) {
          this.router.navigate(["/movie/".concat(id)]);
        }
      }]);

      return MovieCardComponent;
    }();

    MovieCardComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MovieCardComponent.prototype, "movieTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MovieCardComponent.prototype, "backgroundPath", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MovieCardComponent.prototype, "movieId", void 0);
    MovieCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-movie-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./movie-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie-card/movie-card.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./movie-card.component.scss */
      "./src/app/components/movie-card/movie-card.component.scss")).default]
    })], MovieCardComponent);
    /***/
  },

  /***/
  "./src/app/components/movie-info/movie-info.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/components/movie-info/movie-info.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMovieInfoMovieInfoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".movie-info {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.movie-info__banner {\n  width: 300px;\n  height: 450px;\n}\n.movie-info-information {\n  width: 50%;\n  margin-left: 20px;\n  font-family: \"Arial\";\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  justify-content: space-around;\n}\n.movie-info-information__title, .movie-info-information__description, .movie-info-information__rate {\n  color: #fff;\n  margin-bottom: 20px;\n}\n.movie-info-information__title {\n  font-size: 26px;\n}\n.movie-info-information__description {\n  font-size: 22px;\n}\n.movie-info-information__rate {\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZS1pbmZvL0M6XFxVc2Vyc1xcQWxpYWtzYW5kcl9NaXJhbmtvdVxcRG9jdW1lbnRzXFxTU1BcXFNTUC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbW92aWUtaW5mb1xcbW92aWUtaW5mby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZS1pbmZvL21vdmllLWluZm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbW92aWUtaW5mby9DOlxcVXNlcnNcXEFsaWFrc2FuZHJfTWlyYW5rb3VcXERvY3VtZW50c1xcU1NQXFxTU1Avc3JjXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7QUNERjtBREdFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNESjtBREdFO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JFUmE7RUZTYixvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSw2QkFBQTtBQ0RKO0FER0k7RUFHRSxXRXJCTTtFRnNCTixtQkFBQTtBQ0hOO0FETUk7RUFDRSxlQUFBO0FDSk47QURPSTtFQUNFLGVBQUE7QUNMTjtBRFFJO0VBQ0UsZUFBQTtBQ05OIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZS1pbmZvL21vdmllLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4ubW92aWUtaW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgJl9fYmFubmVyIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogNDUwcHg7XHJcbiAgfVxyXG4gICYtaW5mb3JtYXRpb24ge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICRiYXNlRm9udEZhbWlseTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgXHJcbiAgICAmX190aXRsZSxcclxuICAgICZfX2Rlc2NyaXB0aW9uLFxyXG4gICAgJl9fcmF0ZSB7XHJcbiAgICAgIGNvbG9yOiAkYmFzZVdoaXRlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICZfX3RpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAkYmFzZUZvbnRTaXplICsgMTA7XHJcbiAgICB9XHJcblxyXG4gICAgJl9fZGVzY3JpcHRpb24ge1xyXG4gICAgICBmb250LXNpemU6ICRiYXNlRm9udFNpemUgKyA2O1xyXG4gICAgfVxyXG5cclxuICAgICZfX3JhdGUge1xyXG4gICAgICBmb250LXNpemU6ICRiYXNlRm9udFNpemUgKyA4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIiwiLm1vdmllLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5tb3ZpZS1pbmZvX19iYW5uZXIge1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogNDUwcHg7XG59XG4ubW92aWUtaW5mby1pbmZvcm1hdGlvbiB7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cbi5tb3ZpZS1pbmZvLWluZm9ybWF0aW9uX190aXRsZSwgLm1vdmllLWluZm8taW5mb3JtYXRpb25fX2Rlc2NyaXB0aW9uLCAubW92aWUtaW5mby1pbmZvcm1hdGlvbl9fcmF0ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLm1vdmllLWluZm8taW5mb3JtYXRpb25fX3RpdGxlIHtcbiAgZm9udC1zaXplOiAyNnB4O1xufVxuLm1vdmllLWluZm8taW5mb3JtYXRpb25fX2Rlc2NyaXB0aW9uIHtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuLm1vdmllLWluZm8taW5mb3JtYXRpb25fX3JhdGUge1xuICBmb250LXNpemU6IDI0cHg7XG59IiwiJGJhc2VXaGl0ZTogI2ZmZjtcclxuJGJhc2VCbGFjazogIzAwMDtcclxuJGxpZ2h0R3JheTogI2RiZDNkMztcclxuXHJcbiRiYXNlRm9udFNpemU6IDE2cHg7XHJcbiRiYXNlRm9udEZhbWlseTogJ0FyaWFsJztcclxuXHJcbiRoZWFkZXJCYWNrZ3JvdW5kOiByZ2IoMTE5LCA1LCAxMTkpO1xyXG4kaGVhZGVyQ291bnRlckJhY2tncm91bmQ6IHJnYigyMjgsIDExLCAxMSk7XHJcbiRtb3ZpZUxpc3RCYWNrZ3JvdW5kOiByZ2JhKDQsIDQsIDI0LCAwLjg0OSk7XHJcbiRib3JkZXJCdXR0b25Db2xvcjogcmdiKDIxOCwgMTQ1LCA5KTtcclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/movie-info/movie-info.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/movie-info/movie-info.component.ts ***!
    \***************************************************************/

  /*! exports provided: MovieInfoComponent */

  /***/
  function srcAppComponentsMovieInfoMovieInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovieInfoComponent", function () {
      return MovieInfoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/movies.service */
    "./src/app/services/movies.service.ts");

    var MovieInfoComponent =
    /*#__PURE__*/
    function () {
      function MovieInfoComponent(route, movieService) {
        var _this4 = this;

        _classCallCheck(this, MovieInfoComponent);

        this.route = route;
        this.movieService = movieService;
        this.title = '';
        this.description = '';
        this.posterPath = '';
        this.isMovieInFavorites = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.route.params.subscribe(function (params) {
          _this4.movieId = params.id;
        });
      }

      _createClass(MovieInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.checkMovieInDB();
        }
      }, {
        key: "checkMovieInDB",
        value: function checkMovieInDB() {
          var _this5 = this;

          var movieArray = JSON.parse(localStorage.getItem('movieArray'));
          this.isMovieInFavorites.subscribe();

          if (movieArray && movieArray.length !== 0) {
            var isMovieExist = movieArray.findIndex(function (element) {
              return element.id === _this5.movieId;
            });

            if (isMovieExist !== -1) {
              this.isMovieInFavorites.next(true);
            } else {
              this.isMovieInFavorites.next(false);
            }
          } else {
            this.isMovieInFavorites.next(false);
          }
        }
      }, {
        key: "getPosterUrl",
        value: function getPosterUrl() {
          return "url(https://image.tmdb.org/t/p/w300".concat(this.posterPath, ") no-repeat");
        }
      }, {
        key: "addToFavorites",
        value: function addToFavorites() {
          var movieCard = {
            title: this.title,
            description: this.description,
            poster_path: this.posterPath,
            id: this.movieId
          };
          var movieArrayFormLS = JSON.parse(localStorage.getItem('movieArray'));

          if (!movieArrayFormLS) {
            localStorage.setItem('movieArray', JSON.stringify([]));
          }

          var newArr = JSON.parse(localStorage.getItem('movieArray'));
          newArr.push(movieCard);
          localStorage.setItem('movieArray', JSON.stringify(newArr));
          this.checkMovieInDB();
          this.movieService.incrementCounterFavoriteMovies();
        }
      }, {
        key: "removeFromFavorites",
        value: function removeFromFavorites() {
          var movieArray = JSON.parse(localStorage.getItem('movieArray'));

          function removeElementByName(arr, id) {
            return arr.filter(function (e) {
              return e.id !== id;
            });
          }

          movieArray = removeElementByName(movieArray, this.movieId);
          localStorage.setItem('movieArray', JSON.stringify(movieArray));
          this.checkMovieInDB();
          this.movieService.decrementCounterFavoriteMovies();
        }
      }]);

      return MovieInfoComponent;
    }();

    MovieInfoComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_4__["MoviesService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MovieInfoComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MovieInfoComponent.prototype, "description", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MovieInfoComponent.prototype, "posterPath", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MovieInfoComponent.prototype, "rate", void 0);
    MovieInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-movie-info',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./movie-info.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie-info/movie-info.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./movie-info.component.scss */
      "./src/app/components/movie-info/movie-info.component.scss")).default]
    })], MovieInfoComponent);
    /***/
  },

  /***/
  "./src/app/components/movie-list/movie-list.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/components/movie-list/movie-list.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMovieListMovieListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".movie-list {\n  background-color: rgba(4, 4, 24, 0.849);\n}\n.movie-list > div {\n  margin: 0 auto;\n  width: 90%;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZS1saXN0L0M6XFxVc2Vyc1xcQWxpYWtzYW5kcl9NaXJhbmtvdVxcRG9jdW1lbnRzXFxTU1BcXFNTUC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbW92aWUtbGlzdFxcbW92aWUtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZS1saXN0L0M6XFxVc2Vyc1xcQWxpYWtzYW5kcl9NaXJhbmtvdVxcRG9jdW1lbnRzXFxTU1BcXFNTUC9zcmNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21vdmllLWxpc3QvbW92aWUtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHVDQ01vQjtBQ1B0QjtBRkdFO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7VUFBQSw2QkFBQTtBRURKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb3ZpZS1saXN0L21vdmllLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vdmFyaWFibGVzLnNjc3NcIjtcclxuXHJcbi5tb3ZpZS1saXN0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbW92aWVMaXN0QmFja2dyb3VuZDtcclxuXHJcbiAgJiA+IGRpdiB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgfVxyXG59XHJcbiIsIiRiYXNlV2hpdGU6ICNmZmY7XHJcbiRiYXNlQmxhY2s6ICMwMDA7XHJcbiRsaWdodEdyYXk6ICNkYmQzZDM7XHJcblxyXG4kYmFzZUZvbnRTaXplOiAxNnB4O1xyXG4kYmFzZUZvbnRGYW1pbHk6ICdBcmlhbCc7XHJcblxyXG4kaGVhZGVyQmFja2dyb3VuZDogcmdiKDExOSwgNSwgMTE5KTtcclxuJGhlYWRlckNvdW50ZXJCYWNrZ3JvdW5kOiByZ2IoMjI4LCAxMSwgMTEpO1xyXG4kbW92aWVMaXN0QmFja2dyb3VuZDogcmdiYSg0LCA0LCAyNCwgMC44NDkpO1xyXG4kYm9yZGVyQnV0dG9uQ29sb3I6IHJnYigyMTgsIDE0NSwgOSk7XHJcbiIsIi5tb3ZpZS1saXN0IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0LCA0LCAyNCwgMC44NDkpO1xufVxuLm1vdmllLWxpc3QgPiBkaXYge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDkwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/movie-list/movie-list.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/movie-list/movie-list.component.ts ***!
    \***************************************************************/

  /*! exports provided: MovieListComponent */

  /***/
  function srcAppComponentsMovieListMovieListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MovieListComponent", function () {
      return MovieListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/movies.service */
    "./src/app/services/movies.service.ts");

    var MovieListComponent =
    /*#__PURE__*/
    function () {
      function MovieListComponent(movieService) {
        _classCallCheck(this, MovieListComponent);

        this.movieService = movieService;
        this.cards = [];
        this.currentPage = 1;
      }

      _createClass(MovieListComponent, [{
        key: "onWindowScroll",
        value: function onWindowScroll() {
          var scrollHeight = document.documentElement.scrollHeight;
          var clientHeight = document.documentElement.clientHeight;
          var height = scrollHeight - clientHeight;
          var scrollTop = window.pageYOffset;

          if (height === scrollTop) {
            this.currentPage++;
            this.getMovies(this.currentPage);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getMovies(1);
        }
      }, {
        key: "getMovies",
        value: function getMovies(page) {
          var _this6 = this;

          this.movieService.getMovieList(page).subscribe(function (item) {
            item.results.forEach(function (element) {
              _this6.cards.push(element);
            });
          });
        }
      }]);

      return MovieListComponent;
    }();

    MovieListComponent.ctorParameters = function () {
      return [{
        type: src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_2__["MoviesService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', [])], MovieListComponent.prototype, "onWindowScroll", null);
    MovieListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-movie-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./movie-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/movie-list/movie-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./movie-list.component.scss */
      "./src/app/components/movie-list/movie-list.component.scss")).default]
    })], MovieListComponent);
    /***/
  },

  /***/
  "./src/app/components/search-list/search-list.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/components/search-list/search-list.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSearchListSearchListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".search-list {\n  position: absolute;\n  top: 40px;\n  left: 0;\n  width: 270px;\n  height: 200px;\n  background-color: #fff;\n  overflow-y: scroll;\n  border-radius: 5px;\n  z-index: 1;\n}\n.search-list__option {\n  padding: 5px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  cursor: pointer;\n  -webkit-transition: all 1s;\n  transition: all 1s;\n}\n.search-list__option:hover {\n  background-color: #dbd3d3;\n}\n.search-list__option-poster {\n  min-width: 92px;\n  height: 138px;\n}\n.search-list__option-title {\n  font-size: 16px;\n  font-family: \"Arial\";\n  margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtbGlzdC9DOlxcVXNlcnNcXEFsaWFrc2FuZHJfTWlyYW5rb3VcXERvY3VtZW50c1xcU1NQXFxTU1Avc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNlYXJjaC1saXN0XFxzZWFyY2gtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtbGlzdC9DOlxcVXNlcnNcXEFsaWFrc2FuZHJfTWlyYW5rb3VcXERvY3VtZW50c1xcU1NQXFxTU1Avc3JjXFx2YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtbGlzdC9zZWFyY2gtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQ1JVO0VEU1Ysa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUVERjtBRkdFO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFBQSxrQkFBQTtBRURKO0FGR0k7RUFDRSx5QkNuQk07QUNrQlo7QUZJSTtFQUNFLGVBQUE7RUFDQSxhQUFBO0FFRk47QUZLSTtFQUNFLGVDMUJTO0VEMkJULG9CQzFCVztFRDJCWCxpQkFBQTtBRUhOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gtbGlzdC9zZWFyY2gtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbi5zZWFyY2gtbGlzdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNDBweDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAyNzBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYXNlV2hpdGU7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB6LWluZGV4OiAxO1xyXG5cclxuICAmX19vcHRpb24ge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRsaWdodEdyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgJi1wb3N0ZXIge1xyXG4gICAgICBtaW4td2lkdGg6IDkycHg7XHJcbiAgICAgIGhlaWdodDogMTM4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi10aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogJGJhc2VGb250U2l6ZTtcclxuICAgICAgZm9udC1mYW1pbHk6ICRiYXNlRm9udEZhbWlseTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCIkYmFzZVdoaXRlOiAjZmZmO1xyXG4kYmFzZUJsYWNrOiAjMDAwO1xyXG4kbGlnaHRHcmF5OiAjZGJkM2QzO1xyXG5cclxuJGJhc2VGb250U2l6ZTogMTZweDtcclxuJGJhc2VGb250RmFtaWx5OiAnQXJpYWwnO1xyXG5cclxuJGhlYWRlckJhY2tncm91bmQ6IHJnYigxMTksIDUsIDExOSk7XHJcbiRoZWFkZXJDb3VudGVyQmFja2dyb3VuZDogcmdiKDIyOCwgMTEsIDExKTtcclxuJG1vdmllTGlzdEJhY2tncm91bmQ6IHJnYmEoNCwgNCwgMjQsIDAuODQ5KTtcclxuJGJvcmRlckJ1dHRvbkNvbG9yOiByZ2IoMjE4LCAxNDUsIDkpO1xyXG4iLCIuc2VhcmNoLWxpc3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDBweDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDI3MHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgei1pbmRleDogMTtcbn1cbi5zZWFyY2gtbGlzdF9fb3B0aW9uIHtcbiAgcGFkZGluZzogNXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAxcztcbn1cbi5zZWFyY2gtbGlzdF9fb3B0aW9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZDNkMztcbn1cbi5zZWFyY2gtbGlzdF9fb3B0aW9uLXBvc3RlciB7XG4gIG1pbi13aWR0aDogOTJweDtcbiAgaGVpZ2h0OiAxMzhweDtcbn1cbi5zZWFyY2gtbGlzdF9fb3B0aW9uLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogXCJBcmlhbFwiO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/search-list/search-list.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/search-list/search-list.component.ts ***!
    \*****************************************************************/

  /*! exports provided: SearchListComponent */

  /***/
  function srcAppComponentsSearchListSearchListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchListComponent", function () {
      return SearchListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var SearchListComponent =
    /*#__PURE__*/
    function () {
      function SearchListComponent(router) {
        _classCallCheck(this, SearchListComponent);

        this.router = router;
        this.options = [];
      }

      _createClass(SearchListComponent, [{
        key: "getPosterUrl",
        value: function getPosterUrl(posterPath) {
          return "url(https://image.tmdb.org/t/p/w92".concat(posterPath, ") no-repeat");
        }
      }, {
        key: "goToFilmDetails",
        value: function goToFilmDetails(id) {
          this.router.navigate(["/movie/".concat(id)]);
        }
      }]);

      return SearchListComponent;
    }();

    SearchListComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SearchListComponent.prototype, "options", void 0);
    SearchListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-search-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./search-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search-list/search-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./search-list.component.scss */
      "./src/app/components/search-list/search-list.component.scss")).default]
    })], SearchListComponent);
    /***/
  },

  /***/
  "./src/app/directives/click-outside.directive.ts":
  /*!*******************************************************!*\
    !*** ./src/app/directives/click-outside.directive.ts ***!
    \*******************************************************/

  /*! exports provided: ClickOutsideDirective */

  /***/
  function srcAppDirectivesClickOutsideDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClickOutsideDirective", function () {
      return ClickOutsideDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ClickOutsideDirective =
    /*#__PURE__*/
    function () {
      function ClickOutsideDirective(elementRef) {
        _classCallCheck(this, ClickOutsideDirective);

        this.elementRef = elementRef;
        this.clickOutside = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(ClickOutsideDirective, [{
        key: "onClick",
        value: function onClick(event, targetElement) {
          if (!targetElement) {
            return;
          }

          var clickedInside = this.elementRef.nativeElement.contains(targetElement);

          if (!clickedInside) {
            this.clickOutside.emit(event);
          }
        }
      }]);

      return ClickOutsideDirective;
    }();

    ClickOutsideDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ClickOutsideDirective.prototype, "clickOutside", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event', '$event.target'])], ClickOutsideDirective.prototype, "onClick", null);
    ClickOutsideDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[clickOutside]'
    })], ClickOutsideDirective);
    /***/
  },

  /***/
  "./src/app/pages/favorite-page/favorite-page.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/pages/favorite-page/favorite-page.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesFavoritePageFavoritePageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".favorite-page {\n  background-color: rgba(4, 4, 24, 0.849);\n  height: 100%;\n}\n.favorite-page > div {\n  margin: 0 auto;\n  width: 90%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmF2b3JpdGUtcGFnZS9DOlxcVXNlcnNcXEFsaWFrc2FuZHJfTWlyYW5rb3VcXERvY3VtZW50c1xcU1NQXFxTU1Avc3JjXFxhcHBcXHBhZ2VzXFxmYXZvcml0ZS1wYWdlXFxmYXZvcml0ZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9mYXZvcml0ZS1wYWdlL0M6XFxVc2Vyc1xcQWxpYWtzYW5kcl9NaXJhbmtvdVxcRG9jdW1lbnRzXFxTU1BcXFNTUC9zcmNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9wYWdlcy9mYXZvcml0ZS1wYWdlL2Zhdm9yaXRlLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSx1Q0NNb0I7RURMcEIsWUFBQTtBRURGO0FGR0U7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsOEJBQUE7VUFBQSw2QkFBQTtBRURKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZmF2b3JpdGUtcGFnZS9mYXZvcml0ZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3ZhcmlhYmxlcy5zY3NzXCI7XHJcblxyXG4uZmF2b3JpdGUtcGFnZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1vdmllTGlzdEJhY2tncm91bmQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAmID4gZGl2IHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICB9XHJcbn1cclxuIiwiJGJhc2VXaGl0ZTogI2ZmZjtcclxuJGJhc2VCbGFjazogIzAwMDtcclxuJGxpZ2h0R3JheTogI2RiZDNkMztcclxuXHJcbiRiYXNlRm9udFNpemU6IDE2cHg7XHJcbiRiYXNlRm9udEZhbWlseTogJ0FyaWFsJztcclxuXHJcbiRoZWFkZXJCYWNrZ3JvdW5kOiByZ2IoMTE5LCA1LCAxMTkpO1xyXG4kaGVhZGVyQ291bnRlckJhY2tncm91bmQ6IHJnYigyMjgsIDExLCAxMSk7XHJcbiRtb3ZpZUxpc3RCYWNrZ3JvdW5kOiByZ2JhKDQsIDQsIDI0LCAwLjg0OSk7XHJcbiRib3JkZXJCdXR0b25Db2xvcjogcmdiKDIxOCwgMTQ1LCA5KTtcclxuIiwiLmZhdm9yaXRlLXBhZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQsIDQsIDI0LCAwLjg0OSk7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5mYXZvcml0ZS1wYWdlID4gZGl2IHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/favorite-page/favorite-page.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/pages/favorite-page/favorite-page.component.ts ***!
    \****************************************************************/

  /*! exports provided: FavoritePageComponent */

  /***/
  function srcAppPagesFavoritePageFavoritePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FavoritePageComponent", function () {
      return FavoritePageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FavoritePageComponent =
    /*#__PURE__*/
    function () {
      function FavoritePageComponent() {
        _classCallCheck(this, FavoritePageComponent);

        this.cards = [];
      }

      _createClass(FavoritePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getMoviesFormLS();
        }
      }, {
        key: "getMoviesFormLS",
        value: function getMoviesFormLS() {
          this.cards = JSON.parse(localStorage.getItem('movieArray'));
        }
      }]);

      return FavoritePageComponent;
    }();

    FavoritePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-favorite-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./favorite-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/favorite-page/favorite-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./favorite-page.component.scss */
      "./src/app/pages/favorite-page/favorite-page.component.scss")).default]
    })], FavoritePageComponent);
    /***/
  },

  /***/
  "./src/app/pages/movie-page/movie-page.component.scss":
  /*!************************************************************!*\
    !*** ./src/app/pages/movie-page/movie-page.component.scss ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMoviePageMoviePageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".movie-page {\n  background-color: rgba(4, 4, 24, 0.849);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-flex: 1;\n          flex: 1 0 auto;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbW92aWUtcGFnZS9DOlxcVXNlcnNcXEFsaWFrc2FuZHJfTWlyYW5rb3VcXERvY3VtZW50c1xcU1NQXFxTU1Avc3JjXFxhcHBcXHBhZ2VzXFxtb3ZpZS1wYWdlXFxtb3ZpZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9tb3ZpZS1wYWdlL0M6XFxVc2Vyc1xcQWxpYWtzYW5kcl9NaXJhbmtvdVxcRG9jdW1lbnRzXFxTU1BcXFNTUC9zcmNcXHZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9wYWdlcy9tb3ZpZS1wYWdlL21vdmllLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSx1Q0NNb0I7RURMcEIsb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxtQkFBQTtVQUFBLGNBQUE7RUFFQSxXQUFBO0VBQ0EsWUFBQTtBRUZGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbW92aWUtcGFnZS9tb3ZpZS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLm1vdmllLXBhZ2Uge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRtb3ZpZUxpc3RCYWNrZ3JvdW5kO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4OiAxIDAgYXV0bztcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiIsIiRiYXNlV2hpdGU6ICNmZmY7XHJcbiRiYXNlQmxhY2s6ICMwMDA7XHJcbiRsaWdodEdyYXk6ICNkYmQzZDM7XHJcblxyXG4kYmFzZUZvbnRTaXplOiAxNnB4O1xyXG4kYmFzZUZvbnRGYW1pbHk6ICdBcmlhbCc7XHJcblxyXG4kaGVhZGVyQmFja2dyb3VuZDogcmdiKDExOSwgNSwgMTE5KTtcclxuJGhlYWRlckNvdW50ZXJCYWNrZ3JvdW5kOiByZ2IoMjI4LCAxMSwgMTEpO1xyXG4kbW92aWVMaXN0QmFja2dyb3VuZDogcmdiYSg0LCA0LCAyNCwgMC44NDkpO1xyXG4kYm9yZGVyQnV0dG9uQ29sb3I6IHJnYigyMTgsIDE0NSwgOSk7XHJcbiIsIi5tb3ZpZS1wYWdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0LCA0LCAyNCwgMC44NDkpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleDogMSAwIGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/movie-page/movie-page.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/pages/movie-page/movie-page.component.ts ***!
    \**********************************************************/

  /*! exports provided: MoviePageComponent */

  /***/
  function srcAppPagesMoviePageMoviePageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoviePageComponent", function () {
      return MoviePageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/movies.service */
    "./src/app/services/movies.service.ts");

    var MoviePageComponent =
    /*#__PURE__*/
    function () {
      function MoviePageComponent(movieService, route) {
        var _this7 = this;

        _classCallCheck(this, MoviePageComponent);

        this.movieService = movieService;
        this.route = route;
        this.movieSub = this.route.params.subscribe(function (params) {
          _this7.movieId = params.id;

          _this7.getMovieDetails(params.id);
        });
      }

      _createClass(MoviePageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getMovieDetails(this.movieId);
        }
      }, {
        key: "getMovieDetails",
        value: function getMovieDetails(id) {
          var _this8 = this;

          this.movieService.getMovieById(id).subscribe(function (item) {
            _this8.title = item.title;
            _this8.overview = item.overview;
            _this8.posterPath = item.poster_path;
            _this8.rate = item.vote_average;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.movieSub.unsubscribe();
        }
      }]);

      return MoviePageComponent;
    }();

    MoviePageComponent.ctorParameters = function () {
      return [{
        type: src_app_services_movies_service__WEBPACK_IMPORTED_MODULE_3__["MoviesService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    MoviePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-movie-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./movie-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/movie-page/movie-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./movie-page.component.scss */
      "./src/app/pages/movie-page/movie-page.component.scss")).default]
    })], MoviePageComponent);
    /***/
  },

  /***/
  "./src/app/pages/movies-page/movies-page.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/pages/movies-page/movies-page.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMoviesPageMoviesPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vdmllcy1wYWdlL21vdmllcy1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/movies-page/movies-page.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/movies-page/movies-page.component.ts ***!
    \************************************************************/

  /*! exports provided: MoviesPageComponent */

  /***/
  function srcAppPagesMoviesPageMoviesPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoviesPageComponent", function () {
      return MoviesPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MoviesPageComponent =
    /*#__PURE__*/
    function () {
      function MoviesPageComponent() {
        _classCallCheck(this, MoviesPageComponent);
      }

      _createClass(MoviesPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MoviesPageComponent;
    }();

    MoviesPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-movies-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./movies-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/movies-page/movies-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./movies-page.component.scss */
      "./src/app/pages/movies-page/movies-page.component.scss")).default]
    })], MoviesPageComponent);
    /***/
  },

  /***/
  "./src/app/services/movies.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/movies.service.ts ***!
    \********************************************/

  /*! exports provided: MoviesService */

  /***/
  function srcAppServicesMoviesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MoviesService", function () {
      return MoviesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var MoviesService =
    /*#__PURE__*/
    function () {
      function MoviesService(http) {
        _classCallCheck(this, MoviesService);

        this.http = http;
        this.countFavoriteMovies = this.setCounterFavoriteMoives();
      }

      _createClass(MoviesService, [{
        key: "setCounterFavoriteMoives",
        value: function setCounterFavoriteMoives() {
          if (JSON.parse(localStorage.getItem('movieArray'))) {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('movieArray')).length);
          } else {
            return new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
          }
        }
      }, {
        key: "getMovieList",
        value: function getMovieList(page) {
          return this.http.get("https://api.themoviedb.org/3/movie/popular?api_key=8499fef6a795af7cd4eafae996227a97&language=en-US&page=".concat(page));
        }
      }, {
        key: "getMovieById",
        value: function getMovieById(id) {
          return this.http.get("https://api.themoviedb.org/3/movie/".concat(id, "?api_key=8499fef6a795af7cd4eafae996227a97&language=en-US&page=1"));
        }
      }, {
        key: "searchMovie",
        value: function searchMovie(movieName) {
          return this.http.get("https://api.themoviedb.org/3/search/movie?api_key=8499fef6a795af7cd4eafae996227a97&query=".concat(movieName));
        }
      }, {
        key: "incrementCounterFavoriteMovies",
        value: function incrementCounterFavoriteMovies() {
          this.countFavoriteMovies.next(JSON.parse(localStorage.getItem('movieArray')).length++);
        }
      }, {
        key: "decrementCounterFavoriteMovies",
        value: function decrementCounterFavoriteMovies() {
          if (JSON.parse(localStorage.getItem('movieArray')).length === 0) {
            this.countFavoriteMovies.next(0);
          } else {
            this.countFavoriteMovies.next(JSON.parse(localStorage.getItem('movieArray')).length--);
          }
        }
      }]);

      return MoviesService;
    }();

    MoviesService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    MoviesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MoviesService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var environment = {
      production: false
    };
    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Aliaksandr_Mirankou\Documents\SSP\SSP\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map