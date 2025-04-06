/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "@mikro-orm/core":
/*!**********************************!*\
  !*** external "@mikro-orm/core" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@mikro-orm/core");

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
/*!************************************************!*\
  !*** ./libs/libs/entities/user/user.entity.ts ***!
  \************************************************/

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
Object.defineProperty(exports, "User", ({
    enumerable: true,
    get: function() {
        return User;
    }
}));
const _core = __webpack_require__(/*! @mikro-orm/core */ "@mikro-orm/core");
function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
let User = class User {
    constructor(){
        this.isActive = true;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
};
_ts_decorate([
    (0, _core.PrimaryKey)(),
    _ts_metadata("design:type", Number)
], User.prototype, "id", void 0);
_ts_decorate([
    (0, _core.Property)(),
    _ts_metadata("design:type", String)
], User.prototype, "firstName", void 0);
_ts_decorate([
    (0, _core.Property)(),
    _ts_metadata("design:type", String)
], User.prototype, "lastName", void 0);
_ts_decorate([
    (0, _core.Property)({
        unique: true
    }),
    _ts_metadata("design:type", String)
], User.prototype, "email", void 0);
_ts_decorate([
    (0, _core.Property)(),
    _ts_metadata("design:type", String)
], User.prototype, "password", void 0);
_ts_decorate([
    (0, _core.Property)({
        default: true
    }),
    _ts_metadata("design:type", Boolean)
], User.prototype, "isActive", void 0);
_ts_decorate([
    (0, _core.Property)({
        onCreate: ()=>new Date()
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], User.prototype, "createdAt", void 0);
_ts_decorate([
    (0, _core.Property)({
        onUpdate: ()=>new Date()
    }),
    _ts_metadata("design:type", typeof Date === "undefined" ? Object : Date)
], User.prototype, "updatedAt", void 0);
User = _ts_decorate([
    (0, _core.Entity)()
], User);

})();

module.exports = __webpack_exports__;
/******/ })()
;