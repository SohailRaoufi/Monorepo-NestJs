/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./libs/libs/common/shared/shared.module.ts":
/*!**************************************************!*\
  !*** ./libs/libs/common/shared/shared.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "SharedModule", ({
    enumerable: true,
    get: function() {
        return SharedModule;
    }
}));
const _nestjs = __webpack_require__(/*! @mikro-orm/nestjs */ "@mikro-orm/nestjs");
const _common = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const _libs = __webpack_require__(/*! @app/libs */ "./libs/libs/index.ts");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
let SharedModule = class SharedModule {
};
SharedModule = _ts_decorate([
    (0, _common.Global)(),
    (0, _common.Module)({
        imports: [
            _nestjs.MikroOrmModule.forRoot(_libs.databaseConfig)
        ]
    })
], SharedModule);


/***/ }),

/***/ "./libs/libs/configs/databse.config.ts":
/*!*********************************************!*\
  !*** ./libs/libs/configs/databse.config.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "databaseConfig", ({
    enumerable: true,
    get: function() {
        return databaseConfig;
    }
}));
__webpack_require__(/*! dotenv/config */ "dotenv/config");
const _postgresql = __webpack_require__(/*! @mikro-orm/postgresql */ "@mikro-orm/postgresql");
console.log(__dirname);
const databaseConfig = {
    autoLoadEntities: true,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
    debug: process.env.DATABASE_DEBUG === 'true',
    metadataProvider: _postgresql.ReflectMetadataProvider,
    driver: _postgresql.PostgreSqlDriver,
    timezone: '+04:30'
};


/***/ }),

/***/ "./libs/libs/index.ts":
/*!****************************!*\
  !*** ./libs/libs/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
_export_star(__webpack_require__(/*! ./configs/databse.config */ "./libs/libs/configs/databse.config.ts"), exports);
_export_star(__webpack_require__(/*! ./common/shared/shared.module */ "./libs/libs/common/shared/shared.module.ts"), exports);
function _export_star(from, to) {
    Object.keys(from).forEach(function(k) {
        if (k !== "default" && !Object.prototype.hasOwnProperty.call(to, k)) {
            Object.defineProperty(to, k, {
                enumerable: true,
                get: function() {
                    return from[k];
                }
            });
        }
    });
    return from;
}


/***/ }),

/***/ "@mikro-orm/nestjs":
/*!************************************!*\
  !*** external "@mikro-orm/nestjs" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@mikro-orm/nestjs");

/***/ }),

/***/ "@mikro-orm/postgresql":
/*!****************************************!*\
  !*** external "@mikro-orm/postgresql" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@mikro-orm/postgresql");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "dotenv/config":
/*!********************************!*\
  !*** external "dotenv/config" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("dotenv/config");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./libs/libs/index.ts");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;