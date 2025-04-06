/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@mikro-orm/postgresql":
/*!****************************************!*\
  !*** external "@mikro-orm/postgresql" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@mikro-orm/postgresql");

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
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*********************************************!*\
  !*** ./libs/libs/configs/databse.config.ts ***!
  \*********************************************/

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

})();

module.exports = __webpack_exports__;
/******/ })()
;