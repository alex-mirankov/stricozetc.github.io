(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/person/person.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/person/person.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"person\">\r\n  <dod-person-indicator indicatorName=\"Health\"\r\n                        [indicatorValue]=\"person._value.character_health\">\r\n  </dod-person-indicator>\r\n\r\n  <dod-person-indicator indicatorName=\"Stamina\"\r\n                        [indicatorValue]=\"person._value.character_stamina\">\r\n  </dod-person-indicator>\r\n\r\n  <div class=\"person-inventory\">\r\n    <dod-button type=\"inventory\"\r\n                [tooltipMessage]=\"'inventory'\"\r\n                (buttonClick)=\"openInventory()\">\r\n    </dod-button>\r\n  </div>\r\n</div>\r\n\r\n<dod-playground-loader [isLoaderShown]=\"isLoaderShown\"></dod-playground-loader>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/playground/playground.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/playground/playground.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dod-playground\">\r\n\t<div *ngFor=\"let step of steps\">\r\n\t\t<dod-button [type]=\"step.type\"\r\n\t\t\t\t\t\t\t\t[id]=\"step.id\"\r\n\t\t\t\t\t\t\t\t[positionTop]=\"step.top\"\r\n\t\t\t\t\t\t\t\t[positionLeft]=\"step.left\"\r\n\t\t\t\t\t\t\t\t[isDisabled]=\"step.disabled\"\r\n\t\t\t\t\t\t\t\t[isActive]=\"step.isActive\"\r\n\t\t\t\t\t\t\t\t(buttonClick)=\"activePoints(step.id)\">\r\n\t\t</dod-button>\r\n\t</div>\r\n\t<div *ngFor=\"let location of renderLocations\">\r\n\t\t<dod-button [type]=\"location.type\"\r\n\t\t\t\t\t\t\t\t[id]=\"location.id_slot\"\r\n\t\t\t\t\t\t\t\t[name]=\"location.part_name\"\r\n\t\t\t\t\t\t\t\t[positionTop]=\"location.top\"\r\n\t\t\t\t\t\t\t\t[positionLeft]=\"location.left\"\r\n\t\t\t\t\t\t\t\t[isDisabled]=\"location.disabled\"\r\n\t\t\t\t\t\t\t\t[isActive]=\"location.isActive\"\r\n\t\t\t\t\t\t\t\t[tooltipMessage]=\"location.part_name\"\r\n\t\t\t\t\t\t\t\t(buttonClick)=\"activeLocation(location.part_name)\">\r\n\t\t</dod-button>\r\n\t</div>\r\n\t<div *ngFor=\"let transitionalArrow of transitionalArrows\">\r\n\t\t<dod-button [type]=\"transitionalArrow.type\"\r\n\t\t\t\t\t\t\t\t[id]=\"transitionalArrow.id\"\r\n\t\t\t\t\t\t\t\t[name]=\"transitionalArrow.name\"\r\n\t\t\t\t\t\t\t\t[positionTop]=\"transitionalArrow.top\"\r\n\t\t\t\t\t\t\t\t[positionLeft]=\"transitionalArrow.left\"\r\n\t\t\t\t\t\t\t\t[isDisabled]=\"transitionalArrow.disabled\"\r\n\t\t\t\t\t\t\t\t[isActive]=\"transitionalArrow.isActive\"\r\n\t\t\t\t\t\t\t\t[tooltipMessage]=\"transitionalArrow.name\"\r\n\t\t\t\t\t\t\t\t(buttonClick)=\"activeTransition(transitionalArrow.name)\">\r\n\t\t</dod-button>\r\n\t</div>\r\n</div>\r\n\r\n<dod-person></dod-person>\r\n<dod-playground-loader [isLoaderShown]=\"isLoaderShown\"></dod-playground-loader>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/button/button.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/button/button.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dod-button-{{type}}{{name}}\"\r\n      (click)=\"onButtonClick($event)\"\r\n      [style.top]=\"positionTop\"\r\n      [style.left]=\"positionLeft\"\r\n      [ngClass]=\"{\r\n        'dod-button-disabled': isDisabled,\r\n        'dod-button-active': isActive,\r\n        'dod-button-location-available': !isDisabled && type === 'location',\r\n        'dod-button-arrow-available': !isDisabled && type === 'arrow',\r\n        'dod-button-perk-available': !isDisabled && type === 'perk',\r\n        'dod-button-available': !isDisabled\r\n      }\"\r\n      [matTooltip]=\"tooltipMessage\"\r\n      matTooltipClass=\"dod-button__tooltip-message\"\r\n      matTooltipPosition=\"above\">\r\n  <button [type]=\"type\"\r\n          [id]=\"id\"\r\n          [disabled]=\"isDisabled\"\r\n          class=\"dod-button__control\"\r\n          value=\"type\">\r\n    {{caption}}\r\n  </button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/modal/modal.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/modal/modal.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 mat-dialog-title class=\"modal-header\">{{data.header}}</h1>\r\n<div mat-dialog-content class=\"modal-content-{{classSelector}}\"></div>\r\n<mat-dialog-actions [ngClass]=\"{\r\n                      'modal-actions__inventory' : inventory,\r\n                      'modal-actions' : eventActions,\r\n                      'modal-actions__game-over' : gameOver,\r\n                      'modal-actions__location-events' : locationEvents\r\n                    }\">\r\n  <div *ngFor=\"let choice of eventActions\"\r\n        class=\"modal-actions__btn\">\r\n    <dod-button [type]=\"'choice'\"\r\n                [caption]=\"choice.descriptions\"\r\n                [tooltipMessage]=\"choice.action\"\r\n                (buttonClick)=\"doChoice(choice.action)\">\r\n    </dod-button>\r\n  </div>\r\n  <div *ngFor=\"let inventoryItem of inventory; index as i\"\r\n        class=\"modal-actions__inventory\">\r\n    <dod-button [type]=\"'item-inventory'\"\r\n                [name]=\"inventoryItem\"\r\n                (buttonClick)=\"useItemFromInventory(i)\">\r\n    </dod-button>\r\n  </div>\r\n  <div *ngFor=\"let endGame of gameOver\">\r\n    <dod-button [caption]=\"endGame.description\"\r\n                (buttonClick)=\"redirectToMain()\">\r\n    </dod-button>\r\n  </div>\r\n  <div *ngFor=\"let locationEvent of locationEvents\"\r\n        class=\"modal-actions__location-events\">\r\n    <dod-button [caption]=\"locationEvent.description\"\r\n                (buttonClick)=\"locationEventHandler(locationEvent.action)\">\r\n    </dod-button>\r\n  </div>\r\n  <div *ngIf=\"transferDescription\">\r\n    {{transferDescription}}\r\n  </div>\r\n</mat-dialog-actions>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/person-indicator/person-indicator.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/person-indicator/person-indicator.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"person-indicator\">\r\n  <div class=\"person-indicator__name-{{indicatorName.toLowerCase()}}\">\r\n    {{indicatorName}} ({{indicatorValue}})\r\n  </div>\r\n  <mat-progress-bar mode=\"determinate\"\r\n                    [value]=\"indicatorValue\">\r\n  </mat-progress-bar>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/playground-loader/playground-loader.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/playground-loader/playground-loader.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"playground-loader\" *ngIf=\"isLoaderShown\">\r\n  <div class=\"playground-loader__image\"></div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/developers-page/developers-page.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/developers-page/developers-page.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"developer-page\">\r\n  <div class=\"developer-page__main\">\r\n    <div class=\"developer-page__creators-head\">DEVELOPERS</div>\r\n    <div class=\"developer-page__cards\">\r\n      <div class=\"developer-page__developer\" *ngFor=\"let developer of developers\">\r\n        <div class=\"developer-page__developer-info\">\r\n          <img src=\"../../../assets/images/name.png\"\r\n            class=\"developer-page__developer-info-icon\" />\r\n          <div class=\"developer-page__developer-info-text\">\r\n            {{developer.name}}\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"developer-page__developer-info\">\r\n          <img src=\"../../../assets/images/github.png\"\r\n                class=\"developer-page__developer-info-icon\" />\r\n            <a class=\"developer-page__developer-info-text\"\r\n                [href]=\"developer.githubUrl\">\r\n                {{developer.githubUrl}}\r\n            </a>\r\n        </div>\r\n\r\n        <div class=\"developer-page__developer-info\">\r\n          <img src=\"../../../assets/images/mail.png\"\r\n                class=\"developer-page__developer-info-icon\" />\r\n          <div class=\"developer-page__developer-info-text\">\r\n              {{developer.mail}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login-page/login-page.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login-page/login-page.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [formGroup]=\"profileLogin\" class=\"login-page\">\r\n  <div class=\"login-page__main\">\r\n    <div class=\"login-page__field\">\r\n      <div class=\"login-page__field-text\">Email</div>\r\n      <input type=\"text\"\r\n              formControlName=\"email\"\r\n              class=\"login-page__control\" />\r\n      <div class=\"validation-error\"\r\n            *ngIf=\"profileLogin.controls['email'].invalid\r\n                    && profileLogin.controls['email'].touched\">\r\n          Email is Invalid\r\n      </div>\r\n    </div>\r\n    <div class=\"login-page__field\">\r\n      <div class=\"login-page__field-text\">Password</div>\r\n      <input type=\"password\"\r\n              formControlName=\"password\"\r\n              class=\"login-page__control\" />\r\n      <div class=\"validation-error\"\r\n            *ngIf=\"profileLogin.controls['password'].invalid\r\n                    && profileLogin.controls['password'].touched\">\r\n        Password is Invalid\r\n      </div>\r\n    </div>\r\n    <dod-button caption=\"Login\"\r\n                [isDisabled]=\"profileLogin.invalid\"\r\n                (buttonClick)=\"login()\">\r\n    </dod-button>\r\n    <div class=\"login-page__back-to-main-btn\">\r\n      <dod-button caption=\"Back to Main\"\r\n                  (buttonClick)=\"router.navigate(['/']);\">\r\n      </dod-button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<dod-playground-loader [isLoaderShown]=\"isLoaderShown\"></dod-playground-loader>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu-page/menu-page.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu-page/menu-page.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"menu\">\r\n  <div class=\"menu__logo\">\r\n    <div class=\"menu__logo-image\"></div>\r\n  </div>\r\n  <div class=\"menu__buttons\">\r\n    <div>\r\n      <dod-button [caption]=\"'Играть'\"\r\n                  (buttonClick)=\"playGame()\"\r\n                  [isDisabled]=\"!isLogged._value\"></dod-button>\r\n      <dod-button [caption]=\"'Развитие навыков'\"\r\n                  (buttonClick)=\"perk()\"></dod-button>\r\n      <dod-button [caption]=\"'Войти'\"\r\n                  (buttonClick)=\"signIn()\"\r\n                  [isDisabled]=\"isLogged._value\"></dod-button>\r\n      <dod-button [caption]=\"'Регистрация'\"\r\n                  (buttonClick)=\"signUp()\"\r\n                  [isDisabled]=\"isLogged._value\"></dod-button>\r\n      <dod-button [caption]=\"'Создать нового персонажа'\"\r\n                  [isDisabled]=\"isCharacterCreate._value || !isLogged._value\"\r\n                  (buttonClick)=\"createNewCharacter()\"></dod-button>\r\n      <a routerLink=\"/about-us\">\r\n        <dod-button [caption]=\"'Разработчики'\"></dod-button>\r\n      </a>\r\n      <a routerLink=\"/settings\">\r\n        <dod-button [caption]=\"'Настройки'\"></dod-button>\r\n      </a>\r\n      <dod-button [caption]=\"'Выход'\"\r\n                  (buttonClick)=\"exitGame()\"\r\n                  [isDisabled]=\"!isLogged._value\"></dod-button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<dod-playground-loader [isLoaderShown]=\"isLoaderShown\"></dod-playground-loader>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perks-page/perks-page.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perks-page/perks-page.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"perks-page\">\r\n  <div class=\"perks-page__available-points\">Доступные очки развития: {{availablePoints}}</div>\r\n\r\n  <div *ngFor=\"let perks of perksOption\">\r\n    <dod-button [type]=\"perks.type\"\r\n                [id]=\"perks.id\"\r\n                [positionTop]=\"perks.top\"\r\n\t\t\t\t\t\t\t\t[positionLeft]=\"perks.left\"\r\n                [caption]=\"perks.perk_name\"\r\n                [tooltipMessage]=\"perks.tooltipMessage\"\r\n                (buttonClick)=\"activePerks(perks.definition)\"></dod-button>\r\n  </div>\r\n  <div class=\"perks-page__level perks-page__survivor\">\r\n    Уровень: {{perks.survivor}}\r\n  </div>\r\n  <div class=\"perks-page__level perks-page__armor\">\r\n    Уровень: {{perks.armor}}\r\n  </div>\r\n  <div class=\"perks-page__level perks-page__pioneer\">\r\n    Уровень: {{perks.pioneer}}\r\n  </div>\r\n  <div class=\"perks-page__level perks-page__stamina\">\r\n    Уровень: {{perks.stamina}}\r\n  </div>\r\n</div>\r\n<dod-playground-loader [isLoaderShown]=\"isLoaderShown\"></dod-playground-loader>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registration-page/registration-page.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registration-page/registration-page.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [formGroup]=\"profileRegistration\" class=\"registration-page\">\r\n  <div class=\"registration-page__main\">\r\n    <div class=\"registration-page__field\">\r\n      <div class=\"registration-page__field-text\">Email</div>\r\n      <input type=\"text\"\r\n              formControlName=\"email\"\r\n              class=\"registration-page__control\" />\r\n      <div class=\"validation-error\"\r\n            *ngIf=\"profileRegistration.controls['email'].invalid\r\n                    && profileRegistration.controls['email'].touched\">\r\n        Email is Invalid\r\n      </div>\r\n    </div>\r\n    <div class=\"registration-page__field\">\r\n      <div class=\"registration-page__field-text\">Nickname</div>\r\n      <input type=\"text\"\r\n              formControlName=\"nickname\"\r\n              class=\"registration-page__control\" />\r\n      <div class=\"validation-error\"\r\n            *ngIf=\"profileRegistration.controls['nickname'].invalid\r\n                    && profileRegistration.controls['nickname'].touched\">\r\n        Nickname is Invalid\r\n      </div>\r\n    </div>\r\n    <div class=\"registration-page__field\">\r\n      <div class=\"registration-page__field-text\">Password</div>\r\n      <input type=\"password\"\r\n              formControlName=\"password\"\r\n              class=\"registration-page__control\" />\r\n      <div class=\"validation-error\"\r\n            *ngIf=\"profileRegistration.controls['password'].invalid\r\n                    && profileRegistration.controls['password'].touched\">\r\n        Password is Invalid\r\n      </div>\r\n    </div>\r\n    <div class=\"registration-page__field\">\r\n      <div class=\"registration-page__field-text\">Confirm Password</div>\r\n      <input type=\"password\"\r\n              formControlName=\"password_confirm\"\r\n              class=\"registration-page__control\" />\r\n      <div class=\"validation-error\"\r\n            *ngIf=\"profileRegistration.controls['password'].touched\r\n                    && profileRegistration.controls['password'].value !== profileRegistration.controls['password_confirm'].value\">\r\n        Confirm Password is Invalid\r\n      </div>\r\n    </div>\r\n    <dod-button caption=\"Register\"\r\n                [isDisabled]=\"profileRegistration.invalid\"\r\n                (buttonClick)=\"registration()\"></dod-button>\r\n  </div>\r\n</div>\r\n\r\n<dod-playground-loader [isLoaderShown]=\"isLoaderShown\"></dod-playground-loader>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings-page/settings-page.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings-page/settings-page.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"settings\">\r\n  <div class=\"settings__buttons\">\r\n    <dod-button [caption]=\"'Звук: ' + isSongPlay\"\r\n                (buttonClick)=\"toggleSong()\"></dod-button>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
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

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ "./src/app/services/index.ts");



let AppComponent = class AppComponent {
    constructor(soundtrackService) {
        this.soundtrackService = soundtrackService;
        this.title = 'DOODI';
        this.soundConfig = {
            songUrl: 'assets/soundtracks/main_soundtrack.mp3',
            loop: true,
            volume: 0.3
        };
    }
    ngOnInit() {
        this.soundtrackService.playSoundtrack(this.soundConfig);
    }
};
AppComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["SoundtrackService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dod-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["SoundtrackService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components */ "./src/app/components/index.ts");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages */ "./src/app/pages/index.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");













const routes = [
    { path: '', component: _pages__WEBPACK_IMPORTED_MODULE_9__["MenuPageComponent"] },
    { path: 'playground-map', component: _components__WEBPACK_IMPORTED_MODULE_8__["PlaygroundComponent"] },
    { path: 'about-us', component: _pages__WEBPACK_IMPORTED_MODULE_9__["DevelopersPageComponent"] },
    { path: 'settings', component: _pages__WEBPACK_IMPORTED_MODULE_9__["SettingsPageComponent"] },
    { path: 'registration', component: _pages__WEBPACK_IMPORTED_MODULE_9__["RegistrationPageComponent"] },
    { path: 'login', component: _pages__WEBPACK_IMPORTED_MODULE_9__["LoginPageComponent"] },
    { path: 'perks', component: _pages__WEBPACK_IMPORTED_MODULE_9__["PerksPageComponent"] },
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _components__WEBPACK_IMPORTED_MODULE_8__["ButtonComponent"],
            _components__WEBPACK_IMPORTED_MODULE_8__["PlaygroundComponent"],
            _pages__WEBPACK_IMPORTED_MODULE_9__["MenuPageComponent"],
            _pages__WEBPACK_IMPORTED_MODULE_9__["DevelopersPageComponent"],
            _components__WEBPACK_IMPORTED_MODULE_8__["PlaygroundLoaderComponent"],
            _components__WEBPACK_IMPORTED_MODULE_8__["PersonComponent"],
            _components__WEBPACK_IMPORTED_MODULE_8__["PersonIndicatorComponent"],
            _components__WEBPACK_IMPORTED_MODULE_8__["ModalComponent"],
            _pages__WEBPACK_IMPORTED_MODULE_9__["SettingsPageComponent"],
            _pages__WEBPACK_IMPORTED_MODULE_9__["RegistrationPageComponent"],
            _pages__WEBPACK_IMPORTED_MODULE_9__["LoginPageComponent"],
            _pages__WEBPACK_IMPORTED_MODULE_9__["PerksPageComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(routes),
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production }),
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [_components__WEBPACK_IMPORTED_MODULE_8__["ModalComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/index.ts":
/*!*************************************!*\
  !*** ./src/app/components/index.ts ***!
  \*************************************/
/*! exports provided: PlaygroundComponent, PersonComponent, ButtonType, ButtonComponent, PlaygroundLoaderComponent, PersonIndicatorComponent, ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _playground_playground_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playground/playground.component */ "./src/app/components/playground/playground.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlaygroundComponent", function() { return _playground_playground_component__WEBPACK_IMPORTED_MODULE_1__["PlaygroundComponent"]; });

/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/index */ "./src/app/components/shared/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonType", function() { return _shared_index__WEBPACK_IMPORTED_MODULE_2__["ButtonType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return _shared_index__WEBPACK_IMPORTED_MODULE_2__["ButtonComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlaygroundLoaderComponent", function() { return _shared_index__WEBPACK_IMPORTED_MODULE_2__["PlaygroundLoaderComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PersonIndicatorComponent", function() { return _shared_index__WEBPACK_IMPORTED_MODULE_2__["PersonIndicatorComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return _shared_index__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"]; });

/* harmony import */ var _person_person_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./person/person.component */ "./src/app/components/person/person.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PersonComponent", function() { return _person_person_component__WEBPACK_IMPORTED_MODULE_3__["PersonComponent"]; });







/***/ }),

/***/ "./src/app/components/person/person.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/person/person.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*------ button colors ------*/\n/*------ indicator colors ------*/\n/*------ alert colors ------*/\n/*------ perks colors ------*/\n.person {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  width: 200px;\n  height: 200px;\n  padding: 20px;\n}\n.person-health, .person-inventory {\n  margin-top: 20px;\n  display: flex;\n  align-items: center;\n}\n.person-health__image, .person-inventory__image {\n  width: 64px;\n  height: 64px;\n}\n.person-health__value, .person-inventory__value {\n  color: #ffffff;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wZXJzb24vQzpcXFVzZXJzXFxBbGlha3NhbmRyX01pcmFua291XFxEb2N1bWVudHNcXEQuTy5PLkQuSVxcRE9PREkvc3JjXFxzdHlsZXNcXGNvbnN0YW50cy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3BlcnNvbi9DOlxcVXNlcnNcXEFsaWFrc2FuZHJfTWlyYW5rb3VcXERvY3VtZW50c1xcRC5PLk8uRC5JXFxET09ESS9zcmNcXGFwcFxcY29tcG9uZW50c1xccGVyc29uXFxwZXJzb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcGVyc29uL3BlcnNvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSw4QkFBQTtBQVVBLGlDQUFBO0FBTUEsNkJBQUE7QUFJQSw2QkFBQTtBQ3JCQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQ0dGO0FEREU7RUFFRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0VKO0FEQUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0VOO0FEQ0k7RUFDRSxjRHRCTTtFQ3VCTixpQkFBQTtBQ0NOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9wZXJzb24vcGVyc29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJhc2VXaGl0ZTogI2ZmZmZmZjtcclxuJGJhc2VCbGFjazogIzAwMDAwMDtcclxuXHJcbi8qLS0tLS0tIGJ1dHRvbiBjb2xvcnMgLS0tLS0tKi9cclxuJGJ1dHRvbkJhY2tncm91bmRBY3RpdmU6ICNkYzM1NDU7XHJcbiRidXR0b25Cb3JkZXJBY3RpdmU6ICNkYzM1NDU7XHJcblxyXG4kYnV0dG9uQmFja2dyb3VuZEF2YWlsYWJsZTogIzAwN2JmZjtcclxuJGJ1dHRvbkJvcmRlckF2YWlsYWJsZTogIzAzNWRiZDtcclxuXHJcbiRidXR0b25CYWNrZ3JvdW5kRGlzYWJsZWQ6ICM2Yzc1N2Q7XHJcbiRidXR0b25Cb3JkZXJEaXNhYmxlZDogIzU1NTY1NztcclxuXHJcbi8qLS0tLS0tIGluZGljYXRvciBjb2xvcnMgLS0tLS0tKi9cclxuJGluZGljYXRvckN1cnJlbnRIZWFsaHRDb2xvcjogIzNhY2MxNTtcclxuJGluZGljYXRvckFsbEhlYWxodENvbG9yOiAjMmU5YzEyO1xyXG4kaW5kaWNhdG9yQ3VycmVudFN0YW1pbmFDb2xvcjogIzBjN2ZlYjtcclxuJGluZGljYXRvckFsbFN0YW1pbmFDb2xvcjogIzA0NTZhMztcclxuXHJcbi8qLS0tLS0tIGFsZXJ0IGNvbG9ycyAtLS0tLS0qL1xyXG4kdmFsaWRhdGlvbkVycm9yQm9yZGVyOiByZ2IoMjA2LCAyMCwgMjApO1xyXG4kdmFsaWRhdGlvbkVycm9yQmFja2dyb3VuZDogcmdiKDIyNiwgMjUsIDI1KTtcclxuXHJcbi8qLS0tLS0tIHBlcmtzIGNvbG9ycyAtLS0tLS0qL1xyXG4kYmFzZVBlcmtDb2xvcjogcmdiKDMzLCAxNTksIDIzMyk7XHJcbiIsIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9jb25zdGFudHMuc2Nzcyc7XHJcblxyXG4ucGVyc29uIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuXHJcbiAgJi1oZWFsdGgsXHJcbiAgJi1pbnZlbnRvcnkge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICZfX2ltYWdlIHtcclxuICAgICAgd2lkdGg6IDY0cHg7XHJcbiAgICAgIGhlaWdodDogNjRweDtcclxuICAgIH1cclxuXHJcbiAgICAmX192YWx1ZSB7XHJcbiAgICAgIGNvbG9yOiAkYmFzZVdoaXRlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiIsIi8qLS0tLS0tIGJ1dHRvbiBjb2xvcnMgLS0tLS0tKi9cbi8qLS0tLS0tIGluZGljYXRvciBjb2xvcnMgLS0tLS0tKi9cbi8qLS0tLS0tIGFsZXJ0IGNvbG9ycyAtLS0tLS0qL1xuLyotLS0tLS0gcGVya3MgY29sb3JzIC0tLS0tLSovXG4ucGVyc29uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5wZXJzb24taGVhbHRoLCAucGVyc29uLWludmVudG9yeSB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucGVyc29uLWhlYWx0aF9faW1hZ2UsIC5wZXJzb24taW52ZW50b3J5X19pbWFnZSB7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG59XG4ucGVyc29uLWhlYWx0aF9fdmFsdWUsIC5wZXJzb24taW52ZW50b3J5X192YWx1ZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/person/person.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/person/person.component.ts ***!
  \*******************************************************/
/*! exports provided: PersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonComponent", function() { return PersonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared */ "./src/app/components/shared/index.ts");





let PersonComponent = class PersonComponent {
    constructor(personService, dialog) {
        this.personService = personService;
        this.dialog = dialog;
        this.person = this.personService.getPersonState();
        this.isLoaderShown = false;
    }
    ngOnInit() {
        this.getPersonStats();
    }
    getPersonStats() {
        this.personService.getPersonInfo().subscribe((person) => {
            this.personService.updatePersonStats(person);
        });
    }
    openInventory() {
        const openDialog = this.dialog.open(_shared__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"], {
            height: '700px',
            width: '700px',
            data: {
                header: 'Inventory',
                inventory: this.person,
            },
        });
        openDialog.componentInstance.useItemFromInventoryAction.subscribe((item) => {
            this.isLoaderShown = true;
            this.personService.useItemFromInventory(item).subscribe(() => {
                this.getPersonStats();
                this.dialog.closeAll();
                this.isLoaderShown = false;
            });
        });
    }
};
PersonComponent.ctorParameters = () => [
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_3__["PersonService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
PersonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dod-person',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./person.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/person/person.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./person.component.scss */ "./src/app/components/person/person.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services__WEBPACK_IMPORTED_MODULE_3__["PersonService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
], PersonComponent);



/***/ }),

/***/ "./src/app/components/playground/playground.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/playground/playground.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dod-playground {\n  background: url('city_map_black.png') no-repeat;\n  width: 1920px;\n  height: 1080px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wbGF5Z3JvdW5kL0M6XFxVc2Vyc1xcQWxpYWtzYW5kcl9NaXJhbmtvdVxcRG9jdW1lbnRzXFxELk8uTy5ELklcXERPT0RJL3NyY1xcYXBwXFxjb21wb25lbnRzXFxwbGF5Z3JvdW5kXFxwbGF5Z3JvdW5kLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3BsYXlncm91bmQvcGxheWdyb3VuZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtDQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGxheWdyb3VuZC9wbGF5Z3JvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRvZC1wbGF5Z3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvY2l0eV9tYXBfYmxhY2sucG5nJykgbm8tcmVwZWF0O1xyXG4gIHdpZHRoOiAxOTIwcHg7XHJcbiAgaGVpZ2h0OiAxMDgwcHg7XHJcbn1cclxuIiwiLmRvZC1wbGF5Z3JvdW5kIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9jaXR5X21hcF9ibGFjay5wbmdcIikgbm8tcmVwZWF0O1xuICB3aWR0aDogMTkyMHB4O1xuICBoZWlnaHQ6IDEwODBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/playground/playground.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/playground/playground.component.ts ***!
  \***************************************************************/
/*! exports provided: PlaygroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaygroundComponent", function() { return PlaygroundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../options */ "./src/app/options/index.ts");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared */ "./src/app/components/shared/index.ts");







let PlaygroundComponent = class PlaygroundComponent {
    constructor(locationService, dialog, eventService, personService, router) {
        this.locationService = locationService;
        this.dialog = dialog;
        this.eventService = eventService;
        this.personService = personService;
        this.router = router;
        this.steps = _options__WEBPACK_IMPORTED_MODULE_4__["steps"];
        this.renderLocations = [];
        this.isLoaderShown = false;
        this.transitionalArrows = _options__WEBPACK_IMPORTED_MODULE_4__["transitionArrowsOption"];
    }
    ngOnInit() {
        this.getLocations();
        this.handleUserDeath();
    }
    getLocations() {
        this.isLoaderShown = true;
        this.locationService.getLocations()
            .subscribe((data) => {
            this.transformLocations(data);
            this.isLoaderShown = false;
        });
    }
    handleUserDeath() {
        this.personService.getPersonInfo().subscribe((person) => {
            if (person.character_health <= 0 || person.character_stamina <= 0) {
                const openedDialog = this.dialog.open(_shared__WEBPACK_IMPORTED_MODULE_6__["ModalComponent"], {
                    height: '300px',
                    width: '300px',
                    data: {
                        header: 'You are died',
                        gameOver: [
                            {
                                action: 'redirectToMain',
                                description: 'Play Again'
                            }
                        ]
                    },
                    disableClose: true,
                });
                openedDialog.componentInstance.redirectToMainAction.subscribe(_ => {
                    this.router.navigate(['/']);
                    openedDialog.close();
                });
            }
        });
    }
    getValueFromEvent(event, actionName) {
        let value = 0;
        event.forEach(item => {
            if (item.action === actionName) {
                value = item.value;
            }
        });
        return value;
    }
    createEventModal(item) {
        if (item.event_name) {
            const openedDialog = this.dialog.open(_shared__WEBPACK_IMPORTED_MODULE_6__["ModalComponent"], {
                height: '700px',
                width: '700px',
                data: {
                    header: item.event_name,
                    actions: item.event
                },
                disableClose: true
            });
            openedDialog.componentInstance.doChoiceAction.subscribe((data) => {
                switch (data) {
                    case '-Stamina': {
                        const value = this.getValueFromEvent(item.event, '-Stamina');
                        this.eventService.changeStamina(-value).subscribe(() => {
                            this.personService.getPersonInfo().subscribe((person) => {
                                this.personService.updatePersonStats(person);
                            });
                            this.dialog.closeAll();
                        });
                        break;
                    }
                    case '+Stamina': {
                        const value = this.getValueFromEvent(item.event, '+Stamina');
                        this.eventService.changeStamina(value).subscribe(() => {
                            this.personService.getPersonInfo().subscribe((person) => {
                                this.personService.updatePersonStats(person);
                            });
                            this.dialog.closeAll();
                        });
                        break;
                    }
                    case '-HP': {
                        const value = this.getValueFromEvent(item.event, '-HP');
                        this.eventService.changeHP(-value).subscribe(() => {
                            this.personService.getPersonInfo().subscribe((person) => {
                                this.personService.updatePersonStats(person);
                                this.handleUserDeath();
                            });
                            this.dialog.closeAll();
                        });
                        break;
                    }
                    case '+HP': {
                        const value = this.getValueFromEvent(item.event, '+HP');
                        this.eventService.changeHP(value).subscribe(() => {
                            this.personService.getPersonInfo().subscribe((person) => {
                                this.personService.updatePersonStats(person);
                            });
                            this.dialog.closeAll();
                        });
                        break;
                    }
                    case 'food': {
                        this.eventService.foundItem('food').subscribe(() => {
                            this.eventService.changeStamina(-5).subscribe(() => {
                                this.personService.getPersonInfo().subscribe((person) => {
                                    this.personService.updatePersonStats(person);
                                });
                                this.dialog.closeAll();
                            });
                        });
                        break;
                    }
                    case 'med': {
                        this.eventService.foundItem('med').subscribe(() => {
                            this.eventService.changeStamina(-5).subscribe(() => {
                                this.personService.getPersonInfo().subscribe((person) => {
                                    this.personService.updatePersonStats(person);
                                });
                                this.dialog.closeAll();
                            });
                        });
                        break;
                    }
                    case '+HP+Stamina': {
                        const value = this.getValueFromEvent(item.event, '+HP+Stamina');
                        this.eventService.changeStamina(value).subscribe(() => {
                            this.eventService.changeHP(value).subscribe(() => {
                                this.personService.getPersonInfo().subscribe((person) => {
                                    this.personService.updatePersonStats(person);
                                });
                                this.dialog.closeAll();
                            });
                        });
                        break;
                    }
                    case '-HP-Stamina': {
                        const value = this.getValueFromEvent(item.event, '-HP-Stamina');
                        this.eventService.changeStamina(-value).subscribe(() => {
                            this.eventService.changeHP(-value).subscribe(() => {
                                this.personService.getPersonInfo().subscribe((person) => {
                                    this.personService.updatePersonStats(person);
                                    this.handleUserDeath();
                                });
                                this.dialog.closeAll();
                            });
                        });
                        break;
                    }
                    case 'nothing': {
                        this.dialog.closeAll();
                        break;
                    }
                }
            });
        }
    }
    generateEvent() {
        this.locationService.getEvent().subscribe(item => {
            this.createEventModal(item);
        });
    }
    activePoints(id) {
        const stepId = document.getElementById(id).id;
        this.stepsLogic(id);
        this.locationService.locationEngine(stepId, this.renderLocations);
        this.locationService.transitionEngine(stepId, this.transitionalArrows);
        this.generateEvent();
    }
    activeLocation(locationName) {
        const openedDialog = this.dialog.open(_shared__WEBPACK_IMPORTED_MODULE_6__["ModalComponent"], {
            height: '300px',
            width: '300px',
            data: {
                header: locationName,
                locationEvents: [
                    {
                        action: 'getOut',
                        description: 'Уйти'
                    },
                    {
                        action: 'search',
                        description: 'Искать'
                    },
                ]
            },
            disableClose: true,
        });
        openedDialog.componentInstance.locationEventHandlerAction.subscribe((data) => {
            switch (data) {
                case 'getOut': {
                    this.dialog.closeAll();
                    break;
                }
                case 'search': {
                    this.isLoaderShown = true;
                    this.locationService.getLocationEvent(locationName).subscribe((data) => {
                        if (data === 'exp') {
                            this.dialog.open(_shared__WEBPACK_IMPORTED_MODULE_6__["ModalComponent"], {
                                height: '220px',
                                width: '300px',
                                data: {
                                    header: 'D.O.O.D.I',
                                    text: 'Вы нашли очко опыта! Его можно потратить на развитие персонажа в разделе "Развитие навыков"'
                                },
                            });
                        }
                        else if (data) {
                            this.createEventModal(data);
                        }
                        this.isLoaderShown = false;
                    });
                    break;
                }
            }
        });
    }
    activeTransition(name) {
        const transferData = 'Переходы на новые локации будут добавлены в следующих обновлениях';
        this.dialog.open(_shared__WEBPACK_IMPORTED_MODULE_6__["ModalComponent"], {
            height: '250px',
            width: '400px',
            data: {
                header: `Переход на новую локацию ${name}`,
                text: transferData,
            },
        });
    }
    stepsLogic(id) {
        this.steps.forEach((itemFirst) => {
            if (itemFirst.id === id) {
                itemFirst.isActive = true;
                itemFirst.disabled = false;
                this.currentItemLinks = itemFirst.links;
            }
            else {
                itemFirst.isActive = false;
                itemFirst.disabled = true;
            }
        });
        this.currentItemLinks.forEach((currentLink) => {
            this.steps.forEach((itemSecond) => {
                if (itemSecond.id === currentLink) {
                    itemSecond.disabled = false;
                }
            });
        });
    }
    transformLocations(data) {
        this.renderLocations = _options__WEBPACK_IMPORTED_MODULE_4__["locations"].filter((locationItem) => {
            return data.some((dataItem) => {
                if (locationItem.id_slot === dataItem.id_slot) {
                    return locationItem.part_name = dataItem.part_name;
                }
            });
        });
    }
};
PlaygroundComponent.ctorParameters = () => [
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_5__["LocationService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_5__["EventService"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_5__["PersonService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
PlaygroundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dod-playground',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./playground.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/playground/playground.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./playground.component.scss */ "./src/app/components/playground/playground.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services__WEBPACK_IMPORTED_MODULE_5__["LocationService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        src_app_services__WEBPACK_IMPORTED_MODULE_5__["EventService"],
        src_app_services__WEBPACK_IMPORTED_MODULE_5__["PersonService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], PlaygroundComponent);



/***/ }),

/***/ "./src/app/components/shared/button/button.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/button/button.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*------ button colors ------*/\n/*------ indicator colors ------*/\n/*------ alert colors ------*/\n/*------ perks colors ------*/\n.dod-button-primary, .dod-button-choosen {\n  cursor: pointer;\n  transition: all 0.2s;\n  border-radius: 5px;\n  width: 200px;\n  height: 40px;\n}\n.dod-button__control {\n  border: none;\n  outline: none;\n  padding: 5px 10px;\n  background: transparent;\n  cursor: pointer;\n  color: #ffffff;\n  font-size: 16px;\n  width: 100%;\n  height: 100%;\n}\n.dod-button-point {\n  border-radius: 50%;\n  width: 20px;\n  height: 20px;\n  border: 2px solid;\n  background: #ffffff;\n  position: absolute;\n}\n.dod-button-health, .dod-button-inventory {\n  border: none;\n  width: 64px;\n  height: 64px;\n}\n::ng-deep .dod-button__tooltip-message {\n  font-size: 14px;\n  color: #ffffff;\n}\n.dod-button-choice {\n  border-radius: 10px;\n  padding: 10px;\n}\n.dod-button-location, .dod-button-locationapartment, .dod-button-locationbunker, .dod-button-locationcar, .dod-button-locationcemetery, .dod-button-locationchurch, .dod-button-locationgarage, .dod-button-locationhospital, .dod-button-locationobservatory, .dod-button-locationschool, .dod-button-locationsubway, .dod-button-locationsupermarket, .dod-button-locationsewerage {\n  cursor: pointer;\n  position: absolute;\n  width: 70px;\n  height: 70px;\n  padding: 3px;\n  border: none;\n  border-radius: 50%;\n  border-color: transparent;\n  background: #ffffff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.dod-button-locationapartment {\n  background: url('apartment.png') no-repeat center center !important;\n}\n.dod-button-locationbunker {\n  background: url('bunker.png') no-repeat center center !important;\n}\n.dod-button-locationcemetery {\n  background: url('cemetery.png') no-repeat center center !important;\n}\n.dod-button-locationchurch {\n  background: url('church.png') no-repeat center center !important;\n}\n.dod-button-locationgarage {\n  background: url('garage.png') no-repeat center center !important;\n}\n.dod-button-locationhospital {\n  background: url('hospital.png') no-repeat center center !important;\n}\n.dod-button-locationobservatory {\n  background: url('observatory.png') no-repeat center center !important;\n}\n.dod-button-locationschool {\n  background: url('school.png') no-repeat center center !important;\n}\n.dod-button-locationsubway {\n  background: url('subway.png') no-repeat center center !important;\n}\n.dod-button-locationsupermarket {\n  background: url('supermarket.png') no-repeat center center !important;\n}\n.dod-button-locationsewerage {\n  background: url('sewage.png') no-repeat center center !important;\n}\n.dod-button-health {\n  background: url('count_medkit.png') no-repeat center center !important;\n}\n.dod-button-item-inventoryfood, .dod-button-item-inventorymed {\n  width: 64px;\n  height: 64px;\n  margin: 10px;\n}\n.dod-button-item-inventoryfood {\n  background: url('food.png') center center no-repeat !important;\n}\n.dod-button-item-inventorymed {\n  background: url('medkit.png') center center no-repeat !important;\n}\n.dod-button-inventory {\n  background: url('inventory-backpack.png') no-repeat center center !important;\n}\n.dod-button-arrowfirst, .dod-button-arrowsecond, .dod-button-arrowthird, .dod-button-arrowfourth, .dod-button-arrowfifth, .dod-button-arrowsixth, .dod-button-arrowseventh, .dod-button-arroweight, .dod-button-arrownineth {\n  cursor: pointer;\n  position: absolute;\n  width: 30px;\n  height: 30px;\n  border: none;\n  border-radius: 50%;\n  background: url('arrow.png') no-repeat center center !important;\n}\n.dod-button-arrowfirst {\n  transform: rotate(300deg);\n}\n.dod-button-arrowsecond {\n  transform: rotate(270deg);\n}\n.dod-button-arrowthird {\n  transform: rotate(250deg);\n}\n.dod-button-arrowfourth {\n  transform: rotate(310deg);\n}\n.dod-button-arrowfifth {\n  transform: rotate(10deg);\n}\n.dod-button-arrowsixth {\n  transform: rotate(50deg);\n}\n.dod-button-arrowseventh {\n  transform: rotate(100deg);\n}\n.dod-button-arroweight {\n  transform: rotate(120deg);\n}\n.dod-button-arrownineth {\n  transform: rotate(140deg);\n}\n.dod-button-perk {\n  cursor: pointer;\n  position: absolute;\n  background: #219fe9 !important;\n  width: 150px;\n  height: 70px;\n  border-radius: 10px;\n}\n.dod-button-disabled {\n  background: #6c757d;\n  border-color: #555657;\n  transition: all 0.5s;\n}\n.dod-button-available {\n  background: #007bff;\n  border-color: #035dbd;\n  transition: all 1s;\n}\n.dod-button-location-available,\n.dod-button-arrow-available,\n.dod-button-perk-available {\n  -webkit-animation: radial-pulse-available-place 1.5s infinite;\n          animation: radial-pulse-available-place 1.5s infinite;\n  background: #007bff;\n  border-color: #035dbd;\n  transition: all 1s;\n}\n.dod-button-active {\n  -webkit-animation: radial-pulse-current-place 1.5s infinite;\n          animation: radial-pulse-current-place 1.5s infinite;\n  background: #dc3545;\n  border-color: #dc3545;\n  transition: all 1s;\n}\n@-webkit-keyframes radial-pulse-current-place {\n  0% {\n    box-shadow: 0 0 0 0px rgba(255, 0, 0, 0.781);\n  }\n  100% {\n    box-shadow: 0 0 0 15px rgba(0, 0, 0, 0);\n  }\n}\n@keyframes radial-pulse-current-place {\n  0% {\n    box-shadow: 0 0 0 0px rgba(255, 0, 0, 0.781);\n  }\n  100% {\n    box-shadow: 0 0 0 15px rgba(0, 0, 0, 0);\n  }\n}\n@-webkit-keyframes radial-pulse-available-place {\n  0% {\n    box-shadow: 0 0 0 0px rgba(16, 231, 27, 0.781);\n  }\n  100% {\n    box-shadow: 0 0 0 15px rgba(0, 0, 0, 0);\n  }\n}\n@keyframes radial-pulse-available-place {\n  0% {\n    box-shadow: 0 0 0 0px rgba(16, 231, 27, 0.781);\n  }\n  100% {\n    box-shadow: 0 0 0 15px rgba(0, 0, 0, 0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvYnV0dG9uL0M6XFxVc2Vyc1xcQWxpYWtzYW5kcl9NaXJhbmtvdVxcRG9jdW1lbnRzXFxELk8uTy5ELklcXERPT0RJL3NyY1xcc3R5bGVzXFxjb25zdGFudHMuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvYnV0dG9uL0M6XFxVc2Vyc1xcQWxpYWtzYW5kcl9NaXJhbmtvdVxcRG9jdW1lbnRzXFxELk8uTy5ELklcXERPT0RJL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzaGFyZWRcXGJ1dHRvblxcYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLDhCQUFBO0FBVUEsaUNBQUE7QUFNQSw2QkFBQTtBQUlBLDZCQUFBO0FDcEJFO0VBRUUsZUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0NKO0FERUU7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0RsQlE7RUNtQlIsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQUo7QURHRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLG1CRDdCUTtFQzhCUixrQkFBQTtBQ0RKO0FESUU7RUFFRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNISjtBRE1FO0VBQ0UsZUFBQTtFQUNBLGNEMUNRO0FFc0NaO0FET0U7RUFDRSxtQkFBQTtFQUNBLGFBQUE7QUNMSjtBRFFFO0VBYUUsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkR2RVE7RUN3RVIsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNsQko7QURxQkU7RUFDRSxtRUFBQTtBQ25CSjtBRHNCRTtFQUNFLGdFQUFBO0FDcEJKO0FEdUJFO0VBQ0Usa0VBQUE7QUNyQko7QUR3QkU7RUFDRSxnRUFBQTtBQ3RCSjtBRHlCRTtFQUNFLGdFQUFBO0FDdkJKO0FEMEJFO0VBQ0Usa0VBQUE7QUN4Qko7QUQyQkU7RUFDRSxxRUFBQTtBQ3pCSjtBRDRCRTtFQUNFLGdFQUFBO0FDMUJKO0FENkJFO0VBQ0UsZ0VBQUE7QUMzQko7QUQ4QkU7RUFDRSxxRUFBQTtBQzVCSjtBRCtCRTtFQUNFLGdFQUFBO0FDN0JKO0FEZ0NFO0VBQ0Usc0VBQUE7QUM5Qko7QURpQ0U7RUFFRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNoQ0o7QURtQ0U7RUFDRSw4REFBQTtBQ2pDSjtBRG9DRTtFQUNFLGdFQUFBO0FDbENKO0FEcUNFO0VBQ0UsNEVBQUE7QUNuQ0o7QURzQ0U7RUFTRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLCtEQUFBO0FDNUNKO0FEK0NFO0VBQ0UseUJBQUE7QUM3Q0o7QURnREU7RUFDRSx5QkFBQTtBQzlDSjtBRGlERTtFQUNFLHlCQUFBO0FDL0NKO0FEa0RFO0VBQ0UseUJBQUE7QUNoREo7QURtREU7RUFDRSx3QkFBQTtBQ2pESjtBRG9ERTtFQUNFLHdCQUFBO0FDbERKO0FEcURFO0VBQ0UseUJBQUE7QUNuREo7QURzREU7RUFDRSx5QkFBQTtBQ3BESjtBRHVERTtFQUNFLHlCQUFBO0FDckRKO0FEd0RFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDdERKO0FEMkRBO0VBQ0UsbUJEeE15QjtFQ3lNekIscUJEeE1xQjtFQ3lNckIsb0JBQUE7QUN4REY7QUQyREE7RUFDRSxtQkRqTjBCO0VDa04xQixxQkRqTnNCO0VDa050QixrQkFBQTtBQ3hERjtBRDJEQTs7O0VBR0UsNkRBQUE7VUFBQSxxREFBQTtFQUNBLG1CRDFOMEI7RUMyTjFCLHFCRDFOc0I7RUMyTnRCLGtCQUFBO0FDeERGO0FEMkRBO0VBQ0UsMkRBQUE7VUFBQSxtREFBQTtFQUNBLG1CRHBPdUI7RUNxT3ZCLHFCRHBPbUI7RUNxT25CLGtCQUFBO0FDeERGO0FEMkRBO0VBQ0U7SUFDRSw0Q0FBQTtFQ3hERjtFRDJEQTtJQUNFLHVDQUFBO0VDekRGO0FBQ0Y7QURrREE7RUFDRTtJQUNFLDRDQUFBO0VDeERGO0VEMkRBO0lBQ0UsdUNBQUE7RUN6REY7QUFDRjtBRDREQTtFQUNFO0lBQ0UsOENBQUE7RUMxREY7RUQ2REE7SUFDRSx1Q0FBQTtFQzNERjtBQUNGO0FEb0RBO0VBQ0U7SUFDRSw4Q0FBQTtFQzFERjtFRDZEQTtJQUNFLHVDQUFBO0VDM0RGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9idXR0b24vYnV0dG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJhc2VXaGl0ZTogI2ZmZmZmZjtcclxuJGJhc2VCbGFjazogIzAwMDAwMDtcclxuXHJcbi8qLS0tLS0tIGJ1dHRvbiBjb2xvcnMgLS0tLS0tKi9cclxuJGJ1dHRvbkJhY2tncm91bmRBY3RpdmU6ICNkYzM1NDU7XHJcbiRidXR0b25Cb3JkZXJBY3RpdmU6ICNkYzM1NDU7XHJcblxyXG4kYnV0dG9uQmFja2dyb3VuZEF2YWlsYWJsZTogIzAwN2JmZjtcclxuJGJ1dHRvbkJvcmRlckF2YWlsYWJsZTogIzAzNWRiZDtcclxuXHJcbiRidXR0b25CYWNrZ3JvdW5kRGlzYWJsZWQ6ICM2Yzc1N2Q7XHJcbiRidXR0b25Cb3JkZXJEaXNhYmxlZDogIzU1NTY1NztcclxuXHJcbi8qLS0tLS0tIGluZGljYXRvciBjb2xvcnMgLS0tLS0tKi9cclxuJGluZGljYXRvckN1cnJlbnRIZWFsaHRDb2xvcjogIzNhY2MxNTtcclxuJGluZGljYXRvckFsbEhlYWxodENvbG9yOiAjMmU5YzEyO1xyXG4kaW5kaWNhdG9yQ3VycmVudFN0YW1pbmFDb2xvcjogIzBjN2ZlYjtcclxuJGluZGljYXRvckFsbFN0YW1pbmFDb2xvcjogIzA0NTZhMztcclxuXHJcbi8qLS0tLS0tIGFsZXJ0IGNvbG9ycyAtLS0tLS0qL1xyXG4kdmFsaWRhdGlvbkVycm9yQm9yZGVyOiByZ2IoMjA2LCAyMCwgMjApO1xyXG4kdmFsaWRhdGlvbkVycm9yQmFja2dyb3VuZDogcmdiKDIyNiwgMjUsIDI1KTtcclxuXHJcbi8qLS0tLS0tIHBlcmtzIGNvbG9ycyAtLS0tLS0qL1xyXG4kYmFzZVBlcmtDb2xvcjogcmdiKDMzLCAxNTksIDIzMyk7XHJcbiIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3N0eWxlcy9jb25zdGFudHMuc2Nzcyc7XHJcblxyXG4uZG9kLWJ1dHRvbiB7XHJcbiAgJi1wcmltYXJ5LFxyXG4gICYtY2hvb3NlbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICB9XHJcblxyXG4gICZfX2NvbnRyb2wge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogJGJhc2VXaGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJi1wb2ludCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkO1xyXG4gICAgYmFja2dyb3VuZDogJGJhc2VXaGl0ZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcblxyXG4gICYtaGVhbHRoLFxyXG4gICYtaW52ZW50b3J5IHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiA2NHB4O1xyXG4gICAgaGVpZ2h0OiA2NHB4O1xyXG4gIH1cclxuXHJcbiAgOjpuZy1kZWVwICZfX3Rvb2x0aXAtbWVzc2FnZSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogJGJhc2VXaGl0ZTtcclxuICB9XHJcblxyXG4gICYtY2hvaWNlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgJi1sb2NhdGlvbixcclxuICAmLWxvY2F0aW9uYXBhcnRtZW50LFxyXG4gICYtbG9jYXRpb25idW5rZXIsXHJcbiAgJi1sb2NhdGlvbmNhcixcclxuICAmLWxvY2F0aW9uY2VtZXRlcnksXHJcbiAgJi1sb2NhdGlvbmNodXJjaCxcclxuICAmLWxvY2F0aW9uZ2FyYWdlLFxyXG4gICYtbG9jYXRpb25ob3NwaXRhbCxcclxuICAmLWxvY2F0aW9ub2JzZXJ2YXRvcnksXHJcbiAgJi1sb2NhdGlvbnNjaG9vbCxcclxuICAmLWxvY2F0aW9uc3Vid2F5LFxyXG4gICYtbG9jYXRpb25zdXBlcm1hcmtldCxcclxuICAmLWxvY2F0aW9uc2V3ZXJhZ2Uge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZDogJGJhc2VXaGl0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAmLWxvY2F0aW9uYXBhcnRtZW50IHtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9hcGFydG1lbnQucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAmLWxvY2F0aW9uYnVua2VyIHtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9idW5rZXIucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAmLWxvY2F0aW9uY2VtZXRlcnkge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ljb25zL2NlbWV0ZXJ5LnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgJi1sb2NhdGlvbmNodXJjaCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaWNvbnMvY2h1cmNoLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgJi1sb2NhdGlvbmdhcmFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaWNvbnMvZ2FyYWdlLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgJi1sb2NhdGlvbmhvc3BpdGFsIHtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9ob3NwaXRhbC5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICYtbG9jYXRpb25vYnNlcnZhdG9yeSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaWNvbnMvb2JzZXJ2YXRvcnkucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAmLWxvY2F0aW9uc2Nob29sIHtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9zY2hvb2wucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAmLWxvY2F0aW9uc3Vid2F5IHtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9zdWJ3YXkucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAmLWxvY2F0aW9uc3VwZXJtYXJrZXQge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ljb25zL3N1cGVybWFya2V0LnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgJi1sb2NhdGlvbnNld2VyYWdlIHtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9zZXdhZ2UucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAmLWhlYWx0aCB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaWNvbnMvY291bnRfbWVka2l0LnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgJi1pdGVtLWludmVudG9yeWZvb2QsXHJcbiAgJi1pdGVtLWludmVudG9yeW1lZCB7XHJcbiAgICB3aWR0aDogNjRweDtcclxuICAgIGhlaWdodDogNjRweDtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICB9XHJcblxyXG4gICYtaXRlbS1pbnZlbnRvcnlmb29kIHtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2ljb25zL2Zvb2QucG5nJykgY2VudGVyIGNlbnRlciBuby1yZXBlYXQgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICYtaXRlbS1pbnZlbnRvcnltZWQge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvaWNvbnMvbWVka2l0LnBuZycpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAmLWludmVudG9yeSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2ludmVudG9yeS1iYWNrcGFjay5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICYtYXJyb3dmaXJzdCxcclxuICAmLWFycm93c2Vjb25kLFxyXG4gICYtYXJyb3d0aGlyZCxcclxuICAmLWFycm93Zm91cnRoLFxyXG4gICYtYXJyb3dmaWZ0aCxcclxuICAmLWFycm93c2l4dGgsXHJcbiAgJi1hcnJvd3NldmVudGgsXHJcbiAgJi1hcnJvd2VpZ2h0LFxyXG4gICYtYXJyb3duaW5ldGgge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaWNvbnMvYXJyb3cucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAmLWFycm93Zmlyc3Qge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzAwZGVnKTtcclxuICB9XHJcblxyXG4gICYtYXJyb3dzZWNvbmQge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKTtcclxuICB9XHJcblxyXG4gICYtYXJyb3d0aGlyZCB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNTBkZWcpO1xyXG4gIH1cclxuXHJcbiAgJi1hcnJvd2ZvdXJ0aCB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzMTBkZWcpO1xyXG4gIH1cclxuXHJcbiAgJi1hcnJvd2ZpZnRoIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDEwZGVnKTtcclxuICB9XHJcblxyXG4gICYtYXJyb3dzaXh0aCB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg1MGRlZyk7XHJcbiAgfVxyXG5cclxuICAmLWFycm93c2V2ZW50aCB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMDBkZWcpO1xyXG4gIH1cclxuXHJcbiAgJi1hcnJvd2VpZ2h0IHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDEyMGRlZyk7XHJcbiAgfVxyXG5cclxuICAmLWFycm93bmluZXRoIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE0MGRlZyk7XHJcbiAgfVxyXG5cclxuICAmLXBlcmsge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDogJGJhc2VQZXJrQ29sb3IgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLmRvZC1idXR0b24tZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQ6ICRidXR0b25CYWNrZ3JvdW5kRGlzYWJsZWQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAkYnV0dG9uQm9yZGVyRGlzYWJsZWQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbn1cclxuXHJcbi5kb2QtYnV0dG9uLWF2YWlsYWJsZSB7XHJcbiAgYmFja2dyb3VuZDogJGJ1dHRvbkJhY2tncm91bmRBdmFpbGFibGU7XHJcbiAgYm9yZGVyLWNvbG9yOiAkYnV0dG9uQm9yZGVyQXZhaWxhYmxlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAxcztcclxufVxyXG5cclxuLmRvZC1idXR0b24tbG9jYXRpb24tYXZhaWxhYmxlLFxyXG4uZG9kLWJ1dHRvbi1hcnJvdy1hdmFpbGFibGUsXHJcbi5kb2QtYnV0dG9uLXBlcmstYXZhaWxhYmxlIHtcclxuICBhbmltYXRpb246IHJhZGlhbC1wdWxzZS1hdmFpbGFibGUtcGxhY2UgMS41cyBpbmZpbml0ZTtcclxuICBiYWNrZ3JvdW5kOiAkYnV0dG9uQmFja2dyb3VuZEF2YWlsYWJsZTtcclxuICBib3JkZXItY29sb3I6ICRidXR0b25Cb3JkZXJBdmFpbGFibGU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xyXG59XHJcblxyXG4uZG9kLWJ1dHRvbi1hY3RpdmUge1xyXG4gIGFuaW1hdGlvbjogcmFkaWFsLXB1bHNlLWN1cnJlbnQtcGxhY2UgMS41cyBpbmZpbml0ZTtcclxuICBiYWNrZ3JvdW5kOiAkYnV0dG9uQmFja2dyb3VuZEFjdGl2ZTtcclxuICBib3JkZXItY29sb3I6ICRidXR0b25Cb3JkZXJBY3RpdmU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDFzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHJhZGlhbC1wdWxzZS1jdXJyZW50LXBsYWNlIHtcclxuICAwJSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwcHggcmdiYSgyNTUsIDAsIDAsIDAuNzgxKTtcclxuICB9XHJcbiBcclxuICAxMDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDE1cHggcmdiYSgwLCAwLCAwLCAwKTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgcmFkaWFsLXB1bHNlLWF2YWlsYWJsZS1wbGFjZSB7XHJcbiAgMCUge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMHB4IHJnYmEoMTYsIDIzMSwgMjcsIDAuNzgxKTtcclxuICB9XHJcbiBcclxuICAxMDAlIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDE1cHggcmdiYSgwLCAwLCAwLCAwKTtcclxuICB9XHJcbn1cclxuIiwiLyotLS0tLS0gYnV0dG9uIGNvbG9ycyAtLS0tLS0qL1xuLyotLS0tLS0gaW5kaWNhdG9yIGNvbG9ycyAtLS0tLS0qL1xuLyotLS0tLS0gYWxlcnQgY29sb3JzIC0tLS0tLSovXG4vKi0tLS0tLSBwZXJrcyBjb2xvcnMgLS0tLS0tKi9cbi5kb2QtYnV0dG9uLXByaW1hcnksIC5kb2QtYnV0dG9uLWNob29zZW4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuLmRvZC1idXR0b25fX2NvbnRyb2wge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmRvZC1idXR0b24tcG9pbnQge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uZG9kLWJ1dHRvbi1oZWFsdGgsIC5kb2QtYnV0dG9uLWludmVudG9yeSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbn1cbjo6bmctZGVlcCAuZG9kLWJ1dHRvbl9fdG9vbHRpcC1tZXNzYWdlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cbi5kb2QtYnV0dG9uLWNob2ljZSB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uZG9kLWJ1dHRvbi1sb2NhdGlvbiwgLmRvZC1idXR0b24tbG9jYXRpb25hcGFydG1lbnQsIC5kb2QtYnV0dG9uLWxvY2F0aW9uYnVua2VyLCAuZG9kLWJ1dHRvbi1sb2NhdGlvbmNhciwgLmRvZC1idXR0b24tbG9jYXRpb25jZW1ldGVyeSwgLmRvZC1idXR0b24tbG9jYXRpb25jaHVyY2gsIC5kb2QtYnV0dG9uLWxvY2F0aW9uZ2FyYWdlLCAuZG9kLWJ1dHRvbi1sb2NhdGlvbmhvc3BpdGFsLCAuZG9kLWJ1dHRvbi1sb2NhdGlvbm9ic2VydmF0b3J5LCAuZG9kLWJ1dHRvbi1sb2NhdGlvbnNjaG9vbCwgLmRvZC1idXR0b24tbG9jYXRpb25zdWJ3YXksIC5kb2QtYnV0dG9uLWxvY2F0aW9uc3VwZXJtYXJrZXQsIC5kb2QtYnV0dG9uLWxvY2F0aW9uc2V3ZXJhZ2Uge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDcwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgcGFkZGluZzogM3B4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZG9kLWJ1dHRvbi1sb2NhdGlvbmFwYXJ0bWVudCB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9hcGFydG1lbnQucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyICFpbXBvcnRhbnQ7XG59XG4uZG9kLWJ1dHRvbi1sb2NhdGlvbmJ1bmtlciB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9idW5rZXIucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyICFpbXBvcnRhbnQ7XG59XG4uZG9kLWJ1dHRvbi1sb2NhdGlvbmNlbWV0ZXJ5IHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ljb25zL2NlbWV0ZXJ5LnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAhaW1wb3J0YW50O1xufVxuLmRvZC1idXR0b24tbG9jYXRpb25jaHVyY2gge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaWNvbnMvY2h1cmNoLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAhaW1wb3J0YW50O1xufVxuLmRvZC1idXR0b24tbG9jYXRpb25nYXJhZ2Uge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaWNvbnMvZ2FyYWdlLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAhaW1wb3J0YW50O1xufVxuLmRvZC1idXR0b24tbG9jYXRpb25ob3NwaXRhbCB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9ob3NwaXRhbC5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgIWltcG9ydGFudDtcbn1cbi5kb2QtYnV0dG9uLWxvY2F0aW9ub2JzZXJ2YXRvcnkge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaWNvbnMvb2JzZXJ2YXRvcnkucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyICFpbXBvcnRhbnQ7XG59XG4uZG9kLWJ1dHRvbi1sb2NhdGlvbnNjaG9vbCB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9zY2hvb2wucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyICFpbXBvcnRhbnQ7XG59XG4uZG9kLWJ1dHRvbi1sb2NhdGlvbnN1YndheSB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9zdWJ3YXkucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyICFpbXBvcnRhbnQ7XG59XG4uZG9kLWJ1dHRvbi1sb2NhdGlvbnN1cGVybWFya2V0IHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ljb25zL3N1cGVybWFya2V0LnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAhaW1wb3J0YW50O1xufVxuLmRvZC1idXR0b24tbG9jYXRpb25zZXdlcmFnZSB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9zZXdhZ2UucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyICFpbXBvcnRhbnQ7XG59XG4uZG9kLWJ1dHRvbi1oZWFsdGgge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaWNvbnMvY291bnRfbWVka2l0LnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlciAhaW1wb3J0YW50O1xufVxuLmRvZC1idXR0b24taXRlbS1pbnZlbnRvcnlmb29kLCAuZG9kLWJ1dHRvbi1pdGVtLWludmVudG9yeW1lZCB7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG4gIG1hcmdpbjogMTBweDtcbn1cbi5kb2QtYnV0dG9uLWl0ZW0taW52ZW50b3J5Zm9vZCB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9mb29kLnBuZ1wiKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdCAhaW1wb3J0YW50O1xufVxuLmRvZC1idXR0b24taXRlbS1pbnZlbnRvcnltZWQge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaWNvbnMvbWVka2l0LnBuZ1wiKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdCAhaW1wb3J0YW50O1xufVxuLmRvZC1idXR0b24taW52ZW50b3J5IHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9pbnZlbnRvcnktYmFja3BhY2sucG5nXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyICFpbXBvcnRhbnQ7XG59XG4uZG9kLWJ1dHRvbi1hcnJvd2ZpcnN0LCAuZG9kLWJ1dHRvbi1hcnJvd3NlY29uZCwgLmRvZC1idXR0b24tYXJyb3d0aGlyZCwgLmRvZC1idXR0b24tYXJyb3dmb3VydGgsIC5kb2QtYnV0dG9uLWFycm93ZmlmdGgsIC5kb2QtYnV0dG9uLWFycm93c2l4dGgsIC5kb2QtYnV0dG9uLWFycm93c2V2ZW50aCwgLmRvZC1idXR0b24tYXJyb3dlaWdodCwgLmRvZC1idXR0b24tYXJyb3duaW5ldGgge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pY29ucy9hcnJvdy5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgIWltcG9ydGFudDtcbn1cbi5kb2QtYnV0dG9uLWFycm93Zmlyc3Qge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgzMDBkZWcpO1xufVxuLmRvZC1idXR0b24tYXJyb3dzZWNvbmQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xufVxuLmRvZC1idXR0b24tYXJyb3d0aGlyZCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDI1MGRlZyk7XG59XG4uZG9kLWJ1dHRvbi1hcnJvd2ZvdXJ0aCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDMxMGRlZyk7XG59XG4uZG9kLWJ1dHRvbi1hcnJvd2ZpZnRoIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTBkZWcpO1xufVxuLmRvZC1idXR0b24tYXJyb3dzaXh0aCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDUwZGVnKTtcbn1cbi5kb2QtYnV0dG9uLWFycm93c2V2ZW50aCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDEwMGRlZyk7XG59XG4uZG9kLWJ1dHRvbi1hcnJvd2VpZ2h0IHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTIwZGVnKTtcbn1cbi5kb2QtYnV0dG9uLWFycm93bmluZXRoIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTQwZGVnKTtcbn1cbi5kb2QtYnV0dG9uLXBlcmsge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogIzIxOWZlOSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogNzBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmRvZC1idXR0b24tZGlzYWJsZWQge1xuICBiYWNrZ3JvdW5kOiAjNmM3NTdkO1xuICBib3JkZXItY29sb3I6ICM1NTU2NTc7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xufVxuXG4uZG9kLWJ1dHRvbi1hdmFpbGFibGUge1xuICBiYWNrZ3JvdW5kOiAjMDA3YmZmO1xuICBib3JkZXItY29sb3I6ICMwMzVkYmQ7XG4gIHRyYW5zaXRpb246IGFsbCAxcztcbn1cblxuLmRvZC1idXR0b24tbG9jYXRpb24tYXZhaWxhYmxlLFxuLmRvZC1idXR0b24tYXJyb3ctYXZhaWxhYmxlLFxuLmRvZC1idXR0b24tcGVyay1hdmFpbGFibGUge1xuICBhbmltYXRpb246IHJhZGlhbC1wdWxzZS1hdmFpbGFibGUtcGxhY2UgMS41cyBpbmZpbml0ZTtcbiAgYmFja2dyb3VuZDogIzAwN2JmZjtcbiAgYm9yZGVyLWNvbG9yOiAjMDM1ZGJkO1xuICB0cmFuc2l0aW9uOiBhbGwgMXM7XG59XG5cbi5kb2QtYnV0dG9uLWFjdGl2ZSB7XG4gIGFuaW1hdGlvbjogcmFkaWFsLXB1bHNlLWN1cnJlbnQtcGxhY2UgMS41cyBpbmZpbml0ZTtcbiAgYmFja2dyb3VuZDogI2RjMzU0NTtcbiAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1O1xuICB0cmFuc2l0aW9uOiBhbGwgMXM7XG59XG5cbkBrZXlmcmFtZXMgcmFkaWFsLXB1bHNlLWN1cnJlbnQtcGxhY2Uge1xuICAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMHB4IHJnYmEoMjU1LCAwLCAwLCAwLjc4MSk7XG4gIH1cbiAgMTAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMTVweCByZ2JhKDAsIDAsIDAsIDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHJhZGlhbC1wdWxzZS1hdmFpbGFibGUtcGxhY2Uge1xuICAwJSB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMHB4IHJnYmEoMTYsIDIzMSwgMjcsIDAuNzgxKTtcbiAgfVxuICAxMDAlIHtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAxNXB4IHJnYmEoMCwgMCwgMCwgMCk7XG4gIH1cbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/shared/button/button.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/button/button.component.ts ***!
  \**************************************************************/
/*! exports provided: ButtonType, ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonType", function() { return ButtonType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


var ButtonType;
(function (ButtonType) {
    ButtonType["Primary"] = "primary";
    ButtonType["Choice"] = "choice";
    ButtonType["Point"] = "point";
    ButtonType["Location"] = "location";
    ButtonType["Health"] = "health";
    ButtonType["Inventory"] = "inventory";
    ButtonType["ItemInventory"] = "item-inventory";
    ButtonType["GameOver"] = "game-over";
    ButtonType["Arrow"] = "arrow";
    ButtonType["Perk"] = "perk";
})(ButtonType || (ButtonType = {}));
let ButtonComponent = class ButtonComponent {
    constructor() {
        this.caption = '';
        this.type = ButtonType.Primary;
        this.tooltipMessage = '';
        this.buttonClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onButtonClick(type) {
        this.buttonClick.emit(type);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ButtonComponent.prototype, "caption", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ButtonComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ButtonComponent.prototype, "positionTop", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ButtonComponent.prototype, "positionLeft", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ButtonComponent.prototype, "id", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], ButtonComponent.prototype, "isDisabled", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], ButtonComponent.prototype, "isActive", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ButtonComponent.prototype, "name", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], ButtonComponent.prototype, "tooltipMessage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
], ButtonComponent.prototype, "buttonClick", void 0);
ButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dod-button',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./button.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/button/button.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./button.component.scss */ "./src/app/components/shared/button/button.component.scss")).default]
    })
], ButtonComponent);



/***/ }),

/***/ "./src/app/components/shared/index.ts":
/*!********************************************!*\
  !*** ./src/app/components/shared/index.ts ***!
  \********************************************/
/*! exports provided: ButtonType, ButtonComponent, PlaygroundLoaderComponent, PersonIndicatorComponent, ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button/button.component */ "./src/app/components/shared/button/button.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonType", function() { return _button_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return _button_button_component__WEBPACK_IMPORTED_MODULE_1__["ButtonComponent"]; });

/* harmony import */ var _playground_loader_playground_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playground-loader/playground-loader.component */ "./src/app/components/shared/playground-loader/playground-loader.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlaygroundLoaderComponent", function() { return _playground_loader_playground_loader_component__WEBPACK_IMPORTED_MODULE_2__["PlaygroundLoaderComponent"]; });

/* harmony import */ var _person_indicator_person_indicator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./person-indicator/person-indicator.component */ "./src/app/components/shared/person-indicator/person-indicator.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PersonIndicatorComponent", function() { return _person_indicator_person_indicator_component__WEBPACK_IMPORTED_MODULE_3__["PersonIndicatorComponent"]; });

/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/components/shared/modal/modal.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return _modal_modal_component__WEBPACK_IMPORTED_MODULE_4__["ModalComponent"]; });








/***/ }),

/***/ "./src/app/components/shared/modal/modal.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/modal/modal.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*------ button colors ------*/\n/*------ indicator colors ------*/\n/*------ alert colors ------*/\n/*------ perks colors ------*/\n.modal-content-found-medkit, .modal-content-zombie-attack, .modal-content-found-food {\n  height: 400px;\n}\n.modal-content-found-medkit {\n  background: url('found-medkit.png') center center no-repeat;\n}\n.modal-content-zombie-attack {\n  background: url('zombie-attack.jpg') center center no-repeat;\n}\n.modal-content-found-food {\n  background: url('found-food.jpg') center center no-repeat;\n}\n.modal-actions {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n}\n.modal-actions__btn {\n  width: 48%;\n  margin-bottom: 15px;\n}\n.modal-actions__game-over {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.modal-actions__location-events {\n  display: flex;\n  justify-content: space-between;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvbW9kYWwvQzpcXFVzZXJzXFxBbGlha3NhbmRyX01pcmFua291XFxEb2N1bWVudHNcXEQuTy5PLkQuSVxcRE9PREkvc3JjXFxzdHlsZXNcXGNvbnN0YW50cy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9tb2RhbC9DOlxcVXNlcnNcXEFsaWFrc2FuZHJfTWlyYW5rb3VcXERvY3VtZW50c1xcRC5PLk8uRC5JXFxET09ESS9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2hhcmVkXFxtb2RhbFxcbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLDhCQUFBO0FBVUEsaUNBQUE7QUFNQSw2QkFBQTtBQUlBLDZCQUFBO0FDbEJJO0VBR0UsYUFBQTtBQ0ZOO0FES0k7RUFDRSwyREFBQTtBQ0hOO0FETUk7RUFDRSw0REFBQTtBQ0pOO0FET0k7RUFDRSx5REFBQTtBQ0xOO0FEU0U7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FDUEo7QURTSTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQ1BOO0FEVUk7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ1JOO0FEV0k7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0FDVE4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9tb2RhbC9tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRiYXNlV2hpdGU6ICNmZmZmZmY7XHJcbiRiYXNlQmxhY2s6ICMwMDAwMDA7XHJcblxyXG4vKi0tLS0tLSBidXR0b24gY29sb3JzIC0tLS0tLSovXHJcbiRidXR0b25CYWNrZ3JvdW5kQWN0aXZlOiAjZGMzNTQ1O1xyXG4kYnV0dG9uQm9yZGVyQWN0aXZlOiAjZGMzNTQ1O1xyXG5cclxuJGJ1dHRvbkJhY2tncm91bmRBdmFpbGFibGU6ICMwMDdiZmY7XHJcbiRidXR0b25Cb3JkZXJBdmFpbGFibGU6ICMwMzVkYmQ7XHJcblxyXG4kYnV0dG9uQmFja2dyb3VuZERpc2FibGVkOiAjNmM3NTdkO1xyXG4kYnV0dG9uQm9yZGVyRGlzYWJsZWQ6ICM1NTU2NTc7XHJcblxyXG4vKi0tLS0tLSBpbmRpY2F0b3IgY29sb3JzIC0tLS0tLSovXHJcbiRpbmRpY2F0b3JDdXJyZW50SGVhbGh0Q29sb3I6ICMzYWNjMTU7XHJcbiRpbmRpY2F0b3JBbGxIZWFsaHRDb2xvcjogIzJlOWMxMjtcclxuJGluZGljYXRvckN1cnJlbnRTdGFtaW5hQ29sb3I6ICMwYzdmZWI7XHJcbiRpbmRpY2F0b3JBbGxTdGFtaW5hQ29sb3I6ICMwNDU2YTM7XHJcblxyXG4vKi0tLS0tLSBhbGVydCBjb2xvcnMgLS0tLS0tKi9cclxuJHZhbGlkYXRpb25FcnJvckJvcmRlcjogcmdiKDIwNiwgMjAsIDIwKTtcclxuJHZhbGlkYXRpb25FcnJvckJhY2tncm91bmQ6IHJnYigyMjYsIDI1LCAyNSk7XHJcblxyXG4vKi0tLS0tLSBwZXJrcyBjb2xvcnMgLS0tLS0tKi9cclxuJGJhc2VQZXJrQ29sb3I6IHJnYigzMywgMTU5LCAyMzMpO1xyXG4iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi9zdHlsZXMvY29uc3RhbnRzLnNjc3MnO1xyXG5cclxuLm1vZGFsIHtcclxuICAmLWNvbnRlbnQge1xyXG5cclxuICAgICYtZm91bmQtbWVka2l0LFxyXG4gICAgJi16b21iaWUtYXR0YWNrLFxyXG4gICAgJi1mb3VuZC1mb29kIHtcclxuICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIH1cclxuXHJcbiAgICAmLWZvdW5kLW1lZGtpdCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vLi4vYXNzZXRzL2V2ZW50LWltYWdlcy9mb3VuZC1tZWRraXQucG5nJykgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XHJcbiAgICB9XHJcblxyXG4gICAgJi16b21iaWUtYXR0YWNrIHtcclxuICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvZXZlbnQtaW1hZ2VzL3pvbWJpZS1hdHRhY2suanBnJykgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XHJcbiAgICB9XHJcblxyXG4gICAgJi1mb3VuZC1mb29kIHtcclxuICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi8uLi9hc3NldHMvZXZlbnQtaW1hZ2VzL2ZvdW5kLWZvb2QuanBnJykgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmLWFjdGlvbnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICAgJl9fYnRuIHtcclxuICAgICAgd2lkdGg6IDQ4JTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAmX19nYW1lLW92ZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAmX19sb2NhdGlvbi1ldmVudHMge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCIvKi0tLS0tLSBidXR0b24gY29sb3JzIC0tLS0tLSovXG4vKi0tLS0tLSBpbmRpY2F0b3IgY29sb3JzIC0tLS0tLSovXG4vKi0tLS0tLSBhbGVydCBjb2xvcnMgLS0tLS0tKi9cbi8qLS0tLS0tIHBlcmtzIGNvbG9ycyAtLS0tLS0qL1xuLm1vZGFsLWNvbnRlbnQtZm91bmQtbWVka2l0LCAubW9kYWwtY29udGVudC16b21iaWUtYXR0YWNrLCAubW9kYWwtY29udGVudC1mb3VuZC1mb29kIHtcbiAgaGVpZ2h0OiA0MDBweDtcbn1cbi5tb2RhbC1jb250ZW50LWZvdW5kLW1lZGtpdCB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9ldmVudC1pbWFnZXMvZm91bmQtbWVka2l0LnBuZ1wiKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDtcbn1cbi5tb2RhbC1jb250ZW50LXpvbWJpZS1hdHRhY2sge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvZXZlbnQtaW1hZ2VzL3pvbWJpZS1hdHRhY2suanBnXCIpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0O1xufVxuLm1vZGFsLWNvbnRlbnQtZm91bmQtZm9vZCB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9ldmVudC1pbWFnZXMvZm91bmQtZm9vZC5qcGdcIikgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7XG59XG4ubW9kYWwtYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5tb2RhbC1hY3Rpb25zX19idG4ge1xuICB3aWR0aDogNDglO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLm1vZGFsLWFjdGlvbnNfX2dhbWUtb3ZlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm1vZGFsLWFjdGlvbnNfX2xvY2F0aW9uLWV2ZW50cyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/shared/modal/modal.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/shared/modal/modal.component.ts ***!
  \************************************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");



let ModalComponent = class ModalComponent {
    constructor(data) {
        this.data = data;
        this.doChoiceAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.useItemFromInventoryAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.redirectToMainAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.locationEventHandlerAction = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.renderEventActions();
        this.renderInventory();
        this.renderGameOver();
        this.renderLocationEvents();
        this.createModalSelector();
        this.createTransferText();
    }
    renderEventActions() {
        this.eventActions = this.data.actions;
    }
    renderGameOver() {
        this.gameOver = this.data.gameOver;
    }
    renderLocationEvents() {
        this.locationEvents = this.data.locationEvents;
    }
    renderInventory() {
        if (this.data.inventory) {
            this.inventory = this.data.inventory._value.character_inventory;
        }
    }
    createModalSelector() {
        this.classSelector = this.data.header.replace(/ /g, '-').toLowerCase();
    }
    doChoice(action) {
        this.doChoiceAction.emit(action);
    }
    useItemFromInventory(item) {
        this.useItemFromInventoryAction.emit(item);
    }
    redirectToMain() {
        this.redirectToMainAction.emit();
    }
    locationEventHandler(action) {
        this.locationEventHandlerAction.emit(action);
    }
    createTransferText() {
        if (this.data.text) {
            this.transferDescription = this.data.text;
        }
    }
};
ModalComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
];
ModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dod-modal',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/modal/modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal.component.scss */ "./src/app/components/shared/modal/modal.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
], ModalComponent);



/***/ }),

/***/ "./src/app/components/shared/person-indicator/person-indicator.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/components/shared/person-indicator/person-indicator.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*------ button colors ------*/\n/*------ indicator colors ------*/\n/*------ alert colors ------*/\n/*------ perks colors ------*/\n.person-indicator__name-health, .person-indicator__name-stamina {\n  color: #ffffff;\n  margin: 10px 0;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvcGVyc29uLWluZGljYXRvci9DOlxcVXNlcnNcXEFsaWFrc2FuZHJfTWlyYW5rb3VcXERvY3VtZW50c1xcRC5PLk8uRC5JXFxET09ESS9zcmNcXHN0eWxlc1xcY29uc3RhbnRzLnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3BlcnNvbi1pbmRpY2F0b3IvQzpcXFVzZXJzXFxBbGlha3NhbmRyX01pcmFua291XFxEb2N1bWVudHNcXEQuTy5PLkQuSVxcRE9PREkvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNoYXJlZFxccGVyc29uLWluZGljYXRvclxccGVyc29uLWluZGljYXRvci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvcGVyc29uLWluZGljYXRvci9wZXJzb24taW5kaWNhdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLDhCQUFBO0FBVUEsaUNBQUE7QUFNQSw2QkFBQTtBQUlBLDZCQUFBO0FDcEJFO0VBRUUsY0RMUTtFQ01SLGNBQUE7RUFDQSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9wZXJzb24taW5kaWNhdG9yL3BlcnNvbi1pbmRpY2F0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmFzZVdoaXRlOiAjZmZmZmZmO1xyXG4kYmFzZUJsYWNrOiAjMDAwMDAwO1xyXG5cclxuLyotLS0tLS0gYnV0dG9uIGNvbG9ycyAtLS0tLS0qL1xyXG4kYnV0dG9uQmFja2dyb3VuZEFjdGl2ZTogI2RjMzU0NTtcclxuJGJ1dHRvbkJvcmRlckFjdGl2ZTogI2RjMzU0NTtcclxuXHJcbiRidXR0b25CYWNrZ3JvdW5kQXZhaWxhYmxlOiAjMDA3YmZmO1xyXG4kYnV0dG9uQm9yZGVyQXZhaWxhYmxlOiAjMDM1ZGJkO1xyXG5cclxuJGJ1dHRvbkJhY2tncm91bmREaXNhYmxlZDogIzZjNzU3ZDtcclxuJGJ1dHRvbkJvcmRlckRpc2FibGVkOiAjNTU1NjU3O1xyXG5cclxuLyotLS0tLS0gaW5kaWNhdG9yIGNvbG9ycyAtLS0tLS0qL1xyXG4kaW5kaWNhdG9yQ3VycmVudEhlYWxodENvbG9yOiAjM2FjYzE1O1xyXG4kaW5kaWNhdG9yQWxsSGVhbGh0Q29sb3I6ICMyZTljMTI7XHJcbiRpbmRpY2F0b3JDdXJyZW50U3RhbWluYUNvbG9yOiAjMGM3ZmViO1xyXG4kaW5kaWNhdG9yQWxsU3RhbWluYUNvbG9yOiAjMDQ1NmEzO1xyXG5cclxuLyotLS0tLS0gYWxlcnQgY29sb3JzIC0tLS0tLSovXHJcbiR2YWxpZGF0aW9uRXJyb3JCb3JkZXI6IHJnYigyMDYsIDIwLCAyMCk7XHJcbiR2YWxpZGF0aW9uRXJyb3JCYWNrZ3JvdW5kOiByZ2IoMjI2LCAyNSwgMjUpO1xyXG5cclxuLyotLS0tLS0gcGVya3MgY29sb3JzIC0tLS0tLSovXHJcbiRiYXNlUGVya0NvbG9yOiByZ2IoMzMsIDE1OSwgMjMzKTtcclxuIiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vc3R5bGVzL2NvbnN0YW50cy5zY3NzJztcclxuXHJcbi5wZXJzb24taW5kaWNhdG9yIHtcclxuICAmX19uYW1lLWhlYWx0aCxcclxuICAmX19uYW1lLXN0YW1pbmEge1xyXG4gICAgY29sb3I6ICRiYXNlV2hpdGU7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcblxyXG59XHJcbiIsIi8qLS0tLS0tIGJ1dHRvbiBjb2xvcnMgLS0tLS0tKi9cbi8qLS0tLS0tIGluZGljYXRvciBjb2xvcnMgLS0tLS0tKi9cbi8qLS0tLS0tIGFsZXJ0IGNvbG9ycyAtLS0tLS0qL1xuLyotLS0tLS0gcGVya3MgY29sb3JzIC0tLS0tLSovXG4ucGVyc29uLWluZGljYXRvcl9fbmFtZS1oZWFsdGgsIC5wZXJzb24taW5kaWNhdG9yX19uYW1lLXN0YW1pbmEge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/shared/person-indicator/person-indicator.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/components/shared/person-indicator/person-indicator.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PersonIndicatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonIndicatorComponent", function() { return PersonIndicatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PersonIndicatorComponent = class PersonIndicatorComponent {
    constructor() {
        this.indicatorName = '';
        this.indicatorValue = 100;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
], PersonIndicatorComponent.prototype, "indicatorName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], PersonIndicatorComponent.prototype, "indicatorValue", void 0);
PersonIndicatorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dod-person-indicator',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./person-indicator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/person-indicator/person-indicator.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./person-indicator.component.scss */ "./src/app/components/shared/person-indicator/person-indicator.component.scss")).default]
    })
], PersonIndicatorComponent);



/***/ }),

/***/ "./src/app/components/shared/playground-loader/playground-loader.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/components/shared/playground-loader/playground-loader.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*------ button colors ------*/\n/*------ indicator colors ------*/\n/*------ alert colors ------*/\n/*------ perks colors ------*/\n.playground-loader {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: #000000;\n  opacity: 0.8;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: 1001;\n}\n.playground-loader__image {\n  width: 100px;\n  height: 100px;\n  background: url(\"/assets/images/playground-loader.svg\") no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvcGxheWdyb3VuZC1sb2FkZXIvQzpcXFVzZXJzXFxBbGlha3NhbmRyX01pcmFua291XFxEb2N1bWVudHNcXEQuTy5PLkQuSVxcRE9PREkvc3JjXFxzdHlsZXNcXGNvbnN0YW50cy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9wbGF5Z3JvdW5kLWxvYWRlci9DOlxcVXNlcnNcXEFsaWFrc2FuZHJfTWlyYW5rb3VcXERvY3VtZW50c1xcRC5PLk8uRC5JXFxET09ESS9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2hhcmVkXFxwbGF5Z3JvdW5kLWxvYWRlclxccGxheWdyb3VuZC1sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3BsYXlncm91bmQtbG9hZGVyL3BsYXlncm91bmQtbG9hZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLDhCQUFBO0FBVUEsaUNBQUE7QUFNQSw2QkFBQTtBQUlBLDZCQUFBO0FDckJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSx5QkRQVTtFQ1FWLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUNHRjtBRERFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxpRUFBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvcGxheWdyb3VuZC1sb2FkZXIvcGxheWdyb3VuZC1sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmFzZVdoaXRlOiAjZmZmZmZmO1xyXG4kYmFzZUJsYWNrOiAjMDAwMDAwO1xyXG5cclxuLyotLS0tLS0gYnV0dG9uIGNvbG9ycyAtLS0tLS0qL1xyXG4kYnV0dG9uQmFja2dyb3VuZEFjdGl2ZTogI2RjMzU0NTtcclxuJGJ1dHRvbkJvcmRlckFjdGl2ZTogI2RjMzU0NTtcclxuXHJcbiRidXR0b25CYWNrZ3JvdW5kQXZhaWxhYmxlOiAjMDA3YmZmO1xyXG4kYnV0dG9uQm9yZGVyQXZhaWxhYmxlOiAjMDM1ZGJkO1xyXG5cclxuJGJ1dHRvbkJhY2tncm91bmREaXNhYmxlZDogIzZjNzU3ZDtcclxuJGJ1dHRvbkJvcmRlckRpc2FibGVkOiAjNTU1NjU3O1xyXG5cclxuLyotLS0tLS0gaW5kaWNhdG9yIGNvbG9ycyAtLS0tLS0qL1xyXG4kaW5kaWNhdG9yQ3VycmVudEhlYWxodENvbG9yOiAjM2FjYzE1O1xyXG4kaW5kaWNhdG9yQWxsSGVhbGh0Q29sb3I6ICMyZTljMTI7XHJcbiRpbmRpY2F0b3JDdXJyZW50U3RhbWluYUNvbG9yOiAjMGM3ZmViO1xyXG4kaW5kaWNhdG9yQWxsU3RhbWluYUNvbG9yOiAjMDQ1NmEzO1xyXG5cclxuLyotLS0tLS0gYWxlcnQgY29sb3JzIC0tLS0tLSovXHJcbiR2YWxpZGF0aW9uRXJyb3JCb3JkZXI6IHJnYigyMDYsIDIwLCAyMCk7XHJcbiR2YWxpZGF0aW9uRXJyb3JCYWNrZ3JvdW5kOiByZ2IoMjI2LCAyNSwgMjUpO1xyXG5cclxuLyotLS0tLS0gcGVya3MgY29sb3JzIC0tLS0tLSovXHJcbiRiYXNlUGVya0NvbG9yOiByZ2IoMzMsIDE1OSwgMjMzKTtcclxuIiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3N0eWxlcy9jb25zdGFudHMuc2Nzc1wiO1xyXG5cclxuLnBsYXlncm91bmQtbG9hZGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYXNlQmxhY2s7XHJcbiAgb3BhY2l0eTogMC44O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB6LWluZGV4OiAxMDAxO1xyXG5cclxuICAmX19pbWFnZSB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy9wbGF5Z3JvdW5kLWxvYWRlci5zdmcnKSBuby1yZXBlYXQ7XHJcbiAgfVxyXG5cclxufVxyXG4iLCIvKi0tLS0tLSBidXR0b24gY29sb3JzIC0tLS0tLSovXG4vKi0tLS0tLSBpbmRpY2F0b3IgY29sb3JzIC0tLS0tLSovXG4vKi0tLS0tLSBhbGVydCBjb2xvcnMgLS0tLS0tKi9cbi8qLS0tLS0tIHBlcmtzIGNvbG9ycyAtLS0tLS0qL1xuLnBsYXlncm91bmQtbG9hZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gIG9wYWNpdHk6IDAuODtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDEwMDE7XG59XG4ucGxheWdyb3VuZC1sb2FkZXJfX2ltYWdlIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9wbGF5Z3JvdW5kLWxvYWRlci5zdmdcIikgbm8tcmVwZWF0O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/shared/playground-loader/playground-loader.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/shared/playground-loader/playground-loader.component.ts ***!
  \************************************************************************************/
/*! exports provided: PlaygroundLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaygroundLoaderComponent", function() { return PlaygroundLoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PlaygroundLoaderComponent = class PlaygroundLoaderComponent {
    constructor() {
        this.isLoaderShown = false;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], PlaygroundLoaderComponent.prototype, "isLoaderShown", void 0);
PlaygroundLoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dod-playground-loader',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./playground-loader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/playground-loader/playground-loader.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./playground-loader.component.scss */ "./src/app/components/shared/playground-loader/playground-loader.component.scss")).default]
    })
], PlaygroundLoaderComponent);



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm2015/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm2015/tree.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm2015/tooltip.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm2015/progress-bar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");







let MaterialModule = class MaterialModule {
};
MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        exports: [
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_2__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_3__["CdkTreeModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_5__["MatProgressBarModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
        ]
    })
], MaterialModule);



/***/ }),

/***/ "./src/app/options/index.ts":
/*!**********************************!*\
  !*** ./src/app/options/index.ts ***!
  \**********************************/
/*! exports provided: steps, locations, transitionArrowsOption, perks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _steps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./steps */ "./src/app/options/steps.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "steps", function() { return _steps__WEBPACK_IMPORTED_MODULE_1__["steps"]; });

/* harmony import */ var _locations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locations */ "./src/app/options/locations.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "locations", function() { return _locations__WEBPACK_IMPORTED_MODULE_2__["locations"]; });

/* harmony import */ var _transition_arrows__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transition-arrows */ "./src/app/options/transition-arrows.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transitionArrowsOption", function() { return _transition_arrows__WEBPACK_IMPORTED_MODULE_3__["transitionArrowsOption"]; });

/* harmony import */ var _perks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./perks */ "./src/app/options/perks.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "perks", function() { return _perks__WEBPACK_IMPORTED_MODULE_4__["perks"]; });








/***/ }),

/***/ "./src/app/options/locations.ts":
/*!**************************************!*\
  !*** ./src/app/options/locations.ts ***!
  \**************************************/
/*! exports provided: locations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locations", function() { return locations; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const locations = [
    {
        id_slot: '1',
        part_name: 'apartment',
        type: 'location',
        top: '80px',
        left: '145px',
        disabled: true,
        isActive: false,
    },
    {
        id_slot: '2',
        part_name: 'church',
        type: 'location',
        top: '510px',
        left: '190px',
        disabled: true,
        isActive: false,
    },
    {
        id_slot: '3',
        part_name: 'garage',
        type: 'location',
        top: '610px',
        left: '310px',
        disabled: true,
        isActive: false,
    },
    {
        id_slot: '4',
        part_name: 'hospital',
        type: 'location',
        top: '900px',
        left: '420px',
        disabled: true,
        isActive: false,
    },
    {
        id_slot: '5',
        part_name: 'observatory',
        type: 'location',
        top: '885px',
        left: '690px',
        disabled: true,
        isActive: false,
    },
    {
        id_slot: '6',
        part_name: 'school',
        type: 'location',
        top: '890px',
        left: '920px',
        disabled: true,
        isActive: false,
    },
    {
        id_slot: '7',
        part_name: 'sewerage',
        type: 'location',
        top: '460px',
        left: '940px',
        disabled: true,
        isActive: false,
    },
    {
        id_slot: '8',
        part_name: 'subway',
        type: 'location',
        top: '895px',
        left: '1220px',
        disabled: true,
        isActive: false,
    },
    {
        id_slot: '9',
        part_name: 'supermarket',
        type: 'location',
        top: '670px',
        left: '1480px',
        disabled: true,
        isActive: false,
    },
    {
        id_slot: '10',
        part_name: 'cemetery',
        type: 'location',
        top: '380px',
        left: '1230px',
        disabled: true,
        isActive: false,
    },
    {
        id_slot: '11',
        part_name: 'bunker',
        type: 'location',
        top: '370px',
        left: '1770px',
        disabled: true,
        isActive: false,
    },
    {
        id_slot: '16',
        part_name: 'observatory',
        type: 'location',
        top: '190px',
        left: '1160px',
        disabled: true,
        isActive: false,
    },
    {
        id_slot: '12',
        part_name: 'observatory',
        type: 'location',
        top: '230px',
        left: '890px',
        disabled: true,
        isActive: false,
    },
    {
        id_slot: '13',
        part_name: 'observatory',
        type: 'location',
        top: '40px',
        left: '550px',
        disabled: true,
        isActive: false,
    },
    {
        id_slot: '14',
        part_name: 'observatory',
        type: 'location',
        top: '430px',
        left: '590px',
        disabled: true,
        isActive: false,
    },
    {
        id_slot: '15',
        part_name: 'observatory',
        type: 'location',
        top: '310px',
        left: '410px',
        disabled: true,
        isActive: false,
    },
];


/***/ }),

/***/ "./src/app/options/perks.ts":
/*!**********************************!*\
  !*** ./src/app/options/perks.ts ***!
  \**********************************/
/*! exports provided: perks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "perks", function() { return perks; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const perks = [
    {
        id: 1,
        perk_name: 'Здоровье',
        tooltipMessage: 'Добавляет +5 к здоровью',
        type: 'perk',
        definition: 'survivor',
        top: '100px',
        left: '100px',
    },
    {
        id: 2,
        perk_name: 'Защита',
        tooltipMessage: 'Уменьшает получаемый урон',
        type: 'perk',
        definition: 'armor',
        top: '100px',
        left: '300px',
    },
    {
        id: 3,
        perk_name: 'Удача',
        tooltipMessage: 'Добавляет +5 к удаче',
        type: 'perk',
        definition: 'pioneer',
        top: '100px',
        left: '500px',
    },
    {
        id: 4,
        perk_name: 'Выносливость',
        tooltipMessage: 'Добавляет +5 к выносливости',
        type: 'perk',
        definition: 'stamina',
        top: '100px',
        left: '700px',
    }
];


/***/ }),

/***/ "./src/app/options/steps.ts":
/*!**********************************!*\
  !*** ./src/app/options/steps.ts ***!
  \**********************************/
/*! exports provided: steps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "steps", function() { return steps; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const steps = [
    {
        id: '001',
        type: 'point',
        links: ['002'],
        top: '40px',
        left: '10px',
        disabled: false,
        isActive: false,
    },
    {
        id: '002',
        type: 'point',
        links: ['001', '003'],
        top: '65px',
        left: '40px',
        disabled: true,
        isActive: false,
    },
    {
        id: '003',
        type: 'point',
        links: ['002', '004'],
        top: '95px',
        left: '70px',
        disabled: true,
        isActive: false,
    },
    {
        id: '004',
        type: 'point',
        links: ['003', '005'],
        top: '120px',
        left: '100px',
        disabled: true,
        isActive: false,
    },
    {
        id: '005',
        type: 'point',
        links: ['004', '006'],
        top: '145px',
        left: '130px',
        disabled: true,
        isActive: false,
    },
    {
        id: '006',
        type: 'point',
        links: ['005', '007', '013'],
        top: '170px',
        left: '155px',
        disabled: true,
        isActive: false,
    },
    {
        id: '007',
        type: 'point',
        links: ['006', '008', '013'],
        top: '165px',
        left: '190px',
        disabled: true,
        isActive: false,
    },
    {
        id: '008',
        type: 'point',
        links: ['007', '009'],
        top: '140px',
        left: '210px',
        disabled: true,
        isActive: false,
    },
    {
        id: '009',
        type: 'point',
        links: ['008', '010'],
        top: '110px',
        left: '235px',
        disabled: true,
        isActive: false,
    },
    {
        id: '010',
        type: 'point',
        links: ['009', '011'],
        top: '80px',
        left: '255px',
        disabled: true,
        isActive: false,
    },
    {
        id: '011',
        type: 'point',
        links: ['010', '012'],
        top: '50px',
        left: '275px',
        disabled: true,
        isActive: false,
    },
    {
        id: '012',
        type: 'point',
        links: ['011'],
        top: '15px',
        left: '300px',
        disabled: true,
        isActive: false,
    },
    {
        id: '013',
        type: 'point',
        links: ['006', '007', '014'],
        top: '205px',
        left: '173px',
        disabled: true,
        isActive: false,
    },
    {
        id: '014',
        type: 'point',
        links: ['013', '015', '055'],
        top: '235px',
        left: '190px',
        disabled: true,
        isActive: false,
    },
    {
        id: '015',
        type: 'point',
        links: ['014', '016'],
        top: '255px',
        left: '220px',
        disabled: true,
        isActive: false,
    },
    {
        id: '016',
        type: 'point',
        links: ['015', '017'],
        top: '270px',
        left: '250px',
        disabled: true,
        isActive: false,
    },
    {
        id: '017',
        type: 'point',
        links: ['016', '018'],
        top: '285px',
        left: '280px',
        disabled: true,
        isActive: false,
    },
    {
        id: '018',
        type: 'point',
        links: ['017', '019'],
        top: '300px',
        left: '310px',
        disabled: true,
        isActive: false,
    },
    {
        id: '019',
        type: 'point',
        links: ['018', '020', '054', '061'],
        top: '320px',
        left: '330px',
        disabled: true,
        isActive: false,
    },
    {
        id: '020',
        type: 'point',
        links: ['019', '021'],
        top: '290px',
        left: '355px',
        disabled: true,
        isActive: false,
    },
    {
        id: '021',
        type: 'point',
        links: ['020', '022'],
        top: '260px',
        left: '380px',
        disabled: true,
        isActive: false,
    },
    {
        id: '022',
        type: 'point',
        links: ['021', '023'],
        top: '230px',
        left: '400px',
        disabled: true,
        isActive: false,
    },
    {
        id: '023',
        type: 'point',
        links: ['022', '024'],
        top: '200px',
        left: '415px',
        disabled: true,
        isActive: false,
    },
    {
        id: '024',
        type: 'point',
        links: ['023', '025'],
        top: '170px',
        left: '430px',
        disabled: true,
        isActive: false,
    },
    {
        id: '025',
        type: 'point',
        links: ['024', '026'],
        top: '135px',
        left: '445px',
        disabled: true,
        isActive: false,
    },
    {
        id: '026',
        type: 'point',
        links: ['025', '027'],
        top: '110px',
        left: '460px',
        disabled: true,
        isActive: false,
    },
    {
        id: '027',
        type: 'point',
        links: ['026', '028'],
        top: '80px',
        left: '475px',
        disabled: true,
        isActive: false,
    },
    {
        id: '028',
        type: 'point',
        links: ['027', '029'],
        top: '50px',
        left: '490px',
        disabled: true,
        isActive: false,
    },
    {
        id: '029',
        type: 'point',
        links: ['028', '030'],
        top: '15px',
        left: '508px',
        disabled: true,
        isActive: false,
    },
    {
        id: '030',
        type: 'point',
        links: ['029', '031'],
        top: '5px',
        left: '550px',
        disabled: true,
        isActive: false,
    },
    {
        id: '031',
        type: 'point',
        links: ['030', '032', '033'],
        top: '15px',
        left: '585px',
        disabled: true,
        isActive: false,
    },
    {
        id: '032',
        type: 'point',
        links: ['031', '033'],
        top: '5px',
        left: '615px',
        disabled: true,
        isActive: false,
    },
    {
        id: '033',
        type: 'point',
        links: ['031', '032', '034'],
        top: '45px',
        left: '615px',
        disabled: true,
        isActive: false,
    },
    {
        id: '034',
        type: 'point',
        links: ['033', '035'],
        top: '80px',
        left: '615px',
        disabled: true,
        isActive: false,
    },
    {
        id: '035',
        type: 'point',
        links: ['034', '036'],
        top: '120px',
        left: '625px',
        disabled: true,
        isActive: false,
    },
    {
        id: '036',
        type: 'point',
        links: ['035', '037'],
        top: '155px',
        left: '635px',
        disabled: true,
        isActive: false,
    },
    {
        id: '037',
        type: 'point',
        links: ['036', '038'],
        top: '195px',
        left: '645px',
        disabled: true,
        isActive: false,
    },
    {
        id: '038',
        type: 'point',
        links: ['037', '039'],
        top: '230px',
        left: '655px',
        disabled: true,
        isActive: false,
    },
    {
        id: '039',
        type: 'point',
        links: ['038', '040'],
        top: '270px',
        left: '660px',
        disabled: true,
        isActive: false,
    },
    {
        id: '040',
        type: 'point',
        links: ['039', '041'],
        top: '310px',
        left: '665px',
        disabled: true,
        isActive: false,
    },
    {
        id: '041',
        type: 'point',
        links: ['040', '042'],
        top: '350px',
        left: '660px',
        disabled: true,
        isActive: false,
    },
    {
        id: '042',
        type: 'point',
        links: ['041', '043'],
        top: '390px',
        left: '658px',
        disabled: true,
        isActive: false,
    },
    {
        id: '043',
        type: 'point',
        links: ['042', '044'],
        top: '425px',
        left: '655px',
        disabled: true,
        isActive: false,
    },
    {
        id: '044',
        type: 'point',
        links: ['043', '045'],
        top: '460px',
        left: '650px',
        disabled: true,
        isActive: false,
    },
    {
        id: '045',
        type: 'point',
        links: ['044', '046', '092', '093'],
        top: '495px',
        left: '648px',
        disabled: true,
        isActive: false,
    },
    {
        id: '046',
        type: 'point',
        links: ['045', '047', '092', '093'],
        top: '510px',
        left: '620px',
        disabled: true,
        isActive: false,
    },
    {
        id: '047',
        type: 'point',
        links: ['046', '048'],
        top: '505px',
        left: '580px',
        disabled: true,
        isActive: false,
    },
    {
        id: '048',
        type: 'point',
        links: ['047', '049'],
        top: '495px',
        left: '540px',
        disabled: true,
        isActive: false,
    },
    {
        id: '049',
        type: 'point',
        links: ['048', '050', '101'],
        top: '490px',
        left: '500px',
        disabled: true,
        isActive: false,
    },
    {
        id: '050',
        type: 'point',
        links: ['049', '051', '105'],
        top: '470px',
        left: '470px',
        disabled: true,
        isActive: false,
    },
    {
        id: '051',
        type: 'point',
        links: ['050', '052', '105'],
        top: '440px',
        left: '445px',
        disabled: true,
        isActive: false,
    },
    {
        id: '052',
        type: 'point',
        links: ['051', '053'],
        top: '410px',
        left: '415px',
        disabled: true,
        isActive: false,
    },
    {
        id: '053',
        type: 'point',
        links: ['052', '054'],
        top: '375px',
        left: '387px',
        disabled: true,
        isActive: false,
    },
    {
        id: '054',
        type: 'point',
        links: ['019', '053'],
        top: '345px',
        left: '360px',
        disabled: true,
        isActive: false,
    },
    {
        id: '055',
        type: 'point',
        links: ['013', '014', '056'],
        top: '255px',
        left: '155px',
        disabled: true,
        isActive: false,
    },
    {
        id: '056',
        type: 'point',
        links: ['055', '057'],
        top: '285px',
        left: '125px',
        disabled: true,
        isActive: false,
    },
    {
        id: '057',
        type: 'point',
        links: ['056', '058'],
        top: '320px',
        left: '95px',
        disabled: true,
        isActive: false,
    },
    {
        id: '058',
        type: 'point',
        links: ['057', '059'],
        top: '350px',
        left: '65px',
        disabled: true,
        isActive: false,
    },
    {
        id: '059',
        type: 'point',
        links: ['058', '060'],
        top: '380px',
        left: '35px',
        disabled: true,
        isActive: false,
    },
    {
        id: '060',
        type: 'point',
        links: ['059'],
        top: '410px',
        left: '5px',
        disabled: true,
        isActive: false,
    },
    {
        id: '061',
        type: 'point',
        links: ['019', '062'],
        top: '350px',
        left: '305px',
        disabled: true,
        isActive: false,
    },
    {
        id: '062',
        type: 'point',
        links: ['061', '063'],
        top: '385px',
        left: '285px',
        disabled: true,
        isActive: false,
    },
    {
        id: '063',
        type: 'point',
        links: ['062', '064'],
        top: '425px',
        left: '265px',
        disabled: true,
        isActive: false,
    },
    {
        id: '064',
        type: 'point',
        links: ['063', '065'],
        top: '460px',
        left: '235px',
        disabled: true,
        isActive: false,
    },
    {
        id: '065',
        type: 'point',
        links: ['064', '066'],
        top: '485px',
        left: '205px',
        disabled: true,
        isActive: false,
    },
    {
        id: '066',
        type: 'point',
        links: ['065', '067'],
        top: '505px',
        left: '175px',
        disabled: true,
        isActive: false,
    },
    {
        id: '067',
        type: 'point',
        links: ['066', '068'],
        top: '525px',
        left: '130px',
        disabled: true,
        isActive: false,
    },
    {
        id: '068',
        type: 'point',
        links: ['067', '069'],
        top: '565px',
        left: '130px',
        disabled: true,
        isActive: false,
    },
    {
        id: '069',
        type: 'point',
        links: ['068', '070'],
        top: '575px',
        left: '165px',
        disabled: true,
        isActive: false,
    },
    {
        id: '070',
        type: 'point',
        links: ['069', '071'],
        top: '600px',
        left: '200px',
        disabled: true,
        isActive: false,
    },
    {
        id: '071',
        type: 'point',
        links: ['070', '072'],
        top: '630px',
        left: '240px',
        disabled: true,
        isActive: false,
    },
    {
        id: '072',
        type: 'point',
        links: ['071', '073'],
        top: '660px',
        left: '280px',
        disabled: true,
        isActive: false,
    },
    {
        id: '073',
        type: 'point',
        links: ['072', '074'],
        top: '680px',
        left: '315px',
        disabled: true,
        isActive: false,
    },
    {
        id: '074',
        type: 'point',
        links: ['073', '075', '108'],
        top: '690px',
        left: '350px',
        disabled: true,
        isActive: false,
    },
    {
        id: '075',
        type: 'point',
        links: ['074', '076', '108'],
        top: '695px',
        left: '385px',
        disabled: true,
        isActive: false,
    },
    {
        id: '076',
        type: 'point',
        links: ['075', '077'],
        top: '705px',
        left: '420px',
        disabled: true,
        isActive: false,
    },
    {
        id: '077',
        type: 'point',
        links: ['076', '078'],
        top: '720px',
        left: '460px',
        disabled: true,
        isActive: false,
    },
    {
        id: '078',
        type: 'point',
        links: ['077', '079', '109'],
        top: '750px',
        left: '490px',
        disabled: true,
        isActive: false,
    },
    {
        id: '079',
        type: 'point',
        links: ['078', '080', '098'],
        top: '740px',
        left: '530px',
        disabled: true,
        isActive: false,
    },
    {
        id: '080',
        type: 'point',
        links: ['079', '081', '098'],
        top: '725px',
        left: '565px',
        disabled: true,
        isActive: false,
    },
    {
        id: '081',
        type: 'point',
        links: ['080', '082'],
        top: '710px',
        left: '595px',
        disabled: true,
        isActive: false,
    },
    {
        id: '082',
        type: 'point',
        links: ['081', '083'],
        top: '690px',
        left: '630px',
        disabled: true,
        isActive: false,
    },
    {
        id: '083',
        type: 'point',
        links: ['082', '084'],
        top: '670px',
        left: '660px',
        disabled: true,
        isActive: false,
    },
    {
        id: '084',
        type: 'point',
        links: ['083', '085'],
        top: '640px',
        left: '690px',
        disabled: true,
        isActive: false,
    },
    {
        id: '085',
        type: 'point',
        links: ['084', '086'],
        top: '610px',
        left: '715px',
        disabled: true,
        isActive: false,
    },
    {
        id: '086',
        type: 'point',
        links: ['085', '087'],
        top: '580px',
        left: '745px',
        disabled: true,
        isActive: false,
    },
    {
        id: '087',
        type: 'point',
        links: ['086', '089'],
        top: '560px',
        left: '775px',
        disabled: true,
        isActive: false,
    },
    {
        id: '089',
        type: 'point',
        links: ['088', '090', '087', '151'],
        top: '530px',
        left: '785px',
        disabled: true,
        isActive: false,
    },
    {
        id: '090',
        type: 'point',
        links: ['089', '091'],
        top: '525px',
        left: '745px',
        disabled: true,
        isActive: false,
    },
    {
        id: '091',
        type: 'point',
        links: ['090', '092'],
        top: '520px',
        left: '705px',
        disabled: true,
        isActive: false,
    },
    {
        id: '092',
        type: 'point',
        links: ['091', '093', '045', '046'],
        top: '515px',
        left: '670px',
        disabled: true,
        isActive: false,
    },
    {
        id: '093',
        type: 'point',
        links: ['092', '094', '045', '046'],
        top: '535px',
        left: '640px',
        disabled: true,
        isActive: false,
    },
    {
        id: '094',
        type: 'point',
        links: ['093', '095'],
        top: '565px',
        left: '610px',
        disabled: true,
        isActive: false,
    },
    {
        id: '095',
        type: 'point',
        links: ['094', '096'],
        top: '605px',
        left: '590px',
        disabled: true,
        isActive: false,
    },
    {
        id: '096',
        type: 'point',
        links: ['095', '097'],
        top: '635px',
        left: '565px',
        disabled: true,
        isActive: false,
    },
    {
        id: '097',
        type: 'point',
        links: ['096', '098', '099'],
        top: '665px',
        left: '535px',
        disabled: true,
        isActive: false,
    },
    {
        id: '098',
        type: 'point',
        links: ['097', '080', '079'],
        top: '700px',
        left: '525px',
        disabled: true,
        isActive: false,
    },
    {
        id: '099',
        type: 'point',
        links: ['097', '100'],
        top: '630px',
        left: '510px',
        disabled: true,
        isActive: false,
    },
    {
        id: '100',
        type: 'point',
        links: ['099', '101', '102'],
        top: '585px',
        left: '490px',
        disabled: true,
        isActive: false,
    },
    {
        id: '101',
        type: 'point',
        links: ['100', '102', '049'],
        top: '530px',
        left: '485px',
        disabled: true,
        isActive: false,
    },
    {
        id: '102',
        type: 'point',
        links: ['100', '101', '103'],
        top: '560px',
        left: '445px',
        disabled: true,
        isActive: false,
    },
    {
        id: '103',
        type: 'point',
        links: ['102', '104', '107'],
        top: '550px',
        left: '405px',
        disabled: true,
        isActive: false,
    },
    {
        id: '104',
        type: 'point',
        links: ['103', '105'],
        top: '510px',
        left: '415px',
        disabled: true,
        isActive: false,
    },
    {
        id: '105',
        type: 'point',
        links: ['104', '051', '050'],
        top: '475px',
        left: '430px',
        disabled: true,
        isActive: false,
    },
    {
        id: '106',
        type: 'point',
        links: ['103', '107'],
        top: '590px',
        left: '390px',
        disabled: true,
        isActive: false,
    },
    {
        id: '107',
        type: 'point',
        links: ['103', '108'],
        top: '590px',
        left: '390px',
        disabled: true,
        isActive: false,
    },
    {
        id: '108',
        type: 'point',
        links: ['107', '075', '074'],
        top: '640px',
        left: '380px',
        disabled: true,
        isActive: false,
    },
    {
        id: '109',
        type: 'point',
        links: ['078', '110'],
        top: '790px',
        left: '470px',
        disabled: true,
        isActive: false,
    },
    {
        id: '110',
        type: 'point',
        links: ['109', '111'],
        top: '830px',
        left: '455px',
        disabled: true,
        isActive: false,
    },
    {
        id: '111',
        type: 'point',
        links: ['110', '112', '118'],
        top: '865px',
        left: '440px',
        disabled: true,
        isActive: false,
    },
    {
        id: '112',
        type: 'point',
        links: ['111', '113'],
        top: '880px',
        left: '400px',
        disabled: true,
        isActive: false,
    },
    {
        id: '113',
        type: 'point',
        links: ['112', '114'],
        top: '900px',
        left: '365px',
        disabled: true,
        isActive: false,
    },
    {
        id: '114',
        type: 'point',
        links: ['113', '115'],
        top: '930px',
        left: '325px',
        disabled: true,
        isActive: false,
    },
    {
        id: '115',
        type: 'point',
        links: ['114', '116'],
        top: '970px',
        left: '290px',
        disabled: true,
        isActive: false,
    },
    {
        id: '116',
        type: 'point',
        links: ['115', '117'],
        top: '1000px',
        left: '265px',
        disabled: true,
        isActive: false,
    },
    {
        id: '117',
        type: 'point',
        links: ['116'],
        top: '1040px',
        left: '240px',
        disabled: true,
        isActive: false,
    },
    {
        id: '118',
        type: 'point',
        links: ['111', '119'],
        top: '895px',
        left: '475px',
        disabled: true,
        isActive: false,
    },
    {
        id: '119',
        type: 'point',
        links: ['118', '120'],
        top: '915px',
        left: '510px',
        disabled: true,
        isActive: false,
    },
    {
        id: '120',
        type: 'point',
        links: ['119', '121', '144'],
        top: '940px',
        left: '555px',
        disabled: true,
        isActive: false,
    },
    {
        id: '121',
        type: 'point',
        links: ['120', '122', '144'],
        top: '955px',
        left: '595px',
        disabled: true,
        isActive: false,
    },
    {
        id: '122',
        type: 'point',
        links: ['121', '123'],
        top: '970px',
        left: '640px',
        disabled: true,
        isActive: false,
    },
    {
        id: '123',
        type: 'point',
        links: ['122', '124', '126'],
        top: '978px',
        left: '685px',
        disabled: true,
        isActive: false,
    },
    {
        id: '124',
        type: 'point',
        links: ['123', '125'],
        top: '1015px',
        left: '685px',
        disabled: true,
        isActive: false,
    },
    {
        id: '125',
        type: 'point',
        links: ['124'],
        top: '1050px',
        left: '680px',
        disabled: true,
        isActive: false,
    },
    {
        id: '126',
        type: 'point',
        links: ['123', '127'],
        top: '965px',
        left: '720px',
        disabled: true,
        isActive: false,
    },
    {
        id: '127',
        type: 'point',
        links: ['126', '128', '146'],
        top: '955px',
        left: '760px',
        disabled: true,
        isActive: false,
    },
    {
        id: '128',
        type: 'point',
        links: ['127', '129'],
        top: '940px',
        left: '800px',
        disabled: true,
        isActive: false,
    },
    {
        id: '129',
        type: 'point',
        links: ['128', '130', '170'],
        top: '940px',
        left: '840px',
        disabled: true,
        isActive: false,
    },
    {
        id: '130',
        type: 'point',
        links: ['129', '131'],
        top: '900px',
        left: '850px',
        disabled: true,
        isActive: false,
    },
    {
        id: '131',
        type: 'point',
        links: ['130', '132'],
        top: '860px',
        left: '860px',
        disabled: true,
        isActive: false,
    },
    {
        id: '132',
        type: 'point',
        links: ['131', '133'],
        top: '820px',
        left: '870px',
        disabled: true,
        isActive: false,
    },
    {
        id: '133',
        type: 'point',
        links: ['132', '134'],
        top: '780px',
        left: '880px',
        disabled: true,
        isActive: false,
    },
    {
        id: '134',
        type: 'point',
        links: ['133', '135'],
        top: '730px',
        left: '895px',
        disabled: true,
        isActive: false,
    },
    {
        id: '135',
        type: 'point',
        links: ['134', '136', '137'],
        top: '680px',
        left: '910px',
        disabled: true,
        isActive: false,
    },
    {
        id: '136',
        type: 'point',
        links: ['135', '137', '147', '189'],
        top: '640px',
        left: '940px',
        disabled: true,
        isActive: false,
    },
    {
        id: '137',
        type: 'point',
        links: ['136', '138', '135'],
        top: '660px',
        left: '880px',
        disabled: true,
        isActive: false,
    },
    {
        id: '138',
        type: 'point',
        links: ['137', '139'],
        top: '680px',
        left: '840px',
        disabled: true,
        isActive: false,
    },
    {
        id: '139',
        type: 'point',
        links: ['138', '140'],
        top: '720px',
        left: '820px',
        disabled: true,
        isActive: false,
    },
    {
        id: '140',
        type: 'point',
        links: ['139', '141'],
        top: '760px',
        left: '780px',
        disabled: true,
        isActive: false,
    },
    {
        id: '141',
        type: 'point',
        links: ['140', '142', '145'],
        top: '790px',
        left: '740px',
        disabled: true,
        isActive: false,
    },
    {
        id: '142',
        type: 'point',
        links: ['141', '143'],
        top: '820px',
        left: '690px',
        disabled: true,
        isActive: false,
    },
    {
        id: '143',
        type: 'point',
        links: ['142', '144'],
        top: '850px',
        left: '640px',
        disabled: true,
        isActive: false,
    },
    {
        id: '144',
        type: 'point',
        links: ['143', '121', '120'],
        top: '890px',
        left: '600px',
        disabled: true,
        isActive: false,
    },
    {
        id: '145',
        type: 'point',
        links: ['141', '146'],
        top: '840px',
        left: '750px',
        disabled: true,
        isActive: false,
    },
    {
        id: '146',
        type: 'point',
        links: ['145', '127'],
        top: '900px',
        left: '750px',
        disabled: true,
        isActive: false,
    },
    {
        id: '147',
        type: 'point',
        links: ['136', '148'],
        top: '600px',
        left: '950px',
        disabled: true,
        isActive: false,
    },
    {
        id: '148',
        type: 'point',
        links: ['147', '149', '150', '211', '205', '182'],
        top: '555px',
        left: '950px',
        disabled: true,
        isActive: false,
    },
    {
        id: '150',
        type: 'point',
        links: ['151', '148'],
        top: '550px',
        left: '890px',
        disabled: true,
        isActive: false,
    },
    {
        id: '151',
        type: 'point',
        links: ['150', '089'],
        top: '540px',
        left: '835px',
        disabled: true,
        isActive: false,
    },
    {
        id: '149',
        type: 'point',
        links: ['148', '152'],
        top: '550px',
        left: '990px',
        disabled: true,
        isActive: false,
    },
    {
        id: '152',
        type: 'point',
        links: ['149', '153'],
        top: '550px',
        left: '1035px',
        disabled: true,
        isActive: false,
    },
    {
        id: '153',
        type: 'point',
        links: ['152', '154'],
        top: '550px',
        left: '1080px',
        disabled: true,
        isActive: false,
    },
    {
        id: '154',
        type: 'point',
        links: ['153', '155'],
        top: '560px',
        left: '1130px',
        disabled: true,
        isActive: false,
    },
    {
        id: '155',
        type: 'point',
        links: ['154', '156'],
        top: '565px',
        left: '1180px',
        disabled: true,
        isActive: false,
    },
    {
        id: '156',
        type: 'point',
        links: ['155', '157'],
        top: '575px',
        left: '1230px',
        disabled: true,
        isActive: false,
    },
    {
        id: '157',
        type: 'point',
        links: ['156', '158'],
        top: '590px',
        left: '1280px',
        disabled: true,
        isActive: false,
    },
    {
        id: '158',
        type: 'point',
        links: ['157', '159', '194', '181'],
        top: '610px',
        left: '1330px',
        disabled: true,
        isActive: false,
    },
    {
        id: '159',
        type: 'point',
        links: ['158', '160'],
        top: '625px',
        left: '1390px',
        disabled: true,
        isActive: false,
    },
    {
        id: '160',
        type: 'point',
        links: ['159', '161'],
        top: '640px',
        left: '1450px',
        disabled: true,
        isActive: false,
    },
    {
        id: '161',
        type: 'point',
        links: ['160', '162', '238',],
        top: '640px',
        left: '1520px',
        disabled: true,
        isActive: false,
    },
    {
        id: '162',
        type: 'point',
        links: ['161', '163'],
        top: '620px',
        left: '1580px',
        disabled: true,
        isActive: false,
    },
    {
        id: '163',
        type: 'point',
        links: ['162', '164'],
        top: '600px',
        left: '1630px',
        disabled: true,
        isActive: false,
    },
    {
        id: '164',
        type: 'point',
        links: ['163', '165'],
        top: '570px',
        left: '1680px',
        disabled: true,
        isActive: false,
    },
    {
        id: '165',
        type: 'point',
        links: ['164', '166'],
        top: '530px',
        left: '1730px',
        disabled: true,
        isActive: false,
    },
    {
        id: '166',
        type: 'point',
        links: ['165', '167', '237'],
        top: '480px',
        left: '1770px',
        disabled: true,
        isActive: false,
    },
    {
        id: '167',
        type: 'point',
        links: ['166', '168'],
        top: '430px',
        left: '1810px',
        disabled: true,
        isActive: false,
    },
    {
        id: '168',
        type: 'point',
        links: ['167', '169'],
        top: '380px',
        left: '1850px',
        disabled: true,
        isActive: false,
    },
    {
        id: '169',
        type: 'point',
        links: ['168'],
        top: '330px',
        left: '1890px',
        disabled: true,
        isActive: false,
    },
    {
        id: '170',
        type: 'point',
        links: ['129', '171'],
        top: '955px',
        left: '890px',
        disabled: true,
        isActive: false,
    },
    {
        id: '171',
        type: 'point',
        links: ['170', '172'],
        top: '965px',
        left: '940px',
        disabled: true,
        isActive: false,
    },
    {
        id: '172',
        type: 'point',
        links: ['171', '173', '193'],
        top: '960px',
        left: '990px',
        disabled: true,
        isActive: false,
    },
    {
        id: '173',
        type: 'point',
        links: ['172', '174', '193'],
        top: '950px',
        left: '1040px',
        disabled: true,
        isActive: false,
    },
    {
        id: '174',
        type: 'point',
        links: ['173', '175'],
        top: '930px',
        left: '1090px',
        disabled: true,
        isActive: false,
    },
    {
        id: '175',
        type: 'point',
        links: ['174', '176'],
        top: '915px',
        left: '1140px',
        disabled: true,
        isActive: false,
    },
    {
        id: '176',
        type: 'point',
        links: ['175', '177'],
        top: '895px',
        left: '1190px',
        disabled: true,
        isActive: false,
    },
    {
        id: '177',
        type: 'point',
        links: ['176', '178'],
        top: '860px',
        left: '1240px',
        disabled: true,
        isActive: false,
    },
    {
        id: '178',
        type: 'point',
        links: ['177', '179', '245', '188'],
        top: '820px',
        left: '1270px',
        disabled: true,
        isActive: false,
    },
    {
        id: '179',
        type: 'point',
        links: ['178', '180'],
        top: '770px',
        left: '1280px',
        disabled: true,
        isActive: false,
    },
    {
        id: '180',
        type: 'point',
        links: ['179', '181'],
        top: '720px',
        left: '1305px',
        disabled: true,
        isActive: false,
    },
    {
        id: '181',
        type: 'point',
        links: ['180', '158'],
        top: '670px',
        left: '1325px',
        disabled: true,
        isActive: false,
    },
    {
        id: '182',
        type: 'point',
        links: ['148', '183'],
        top: '600px',
        left: '980px',
        disabled: true,
        isActive: false,
    },
    {
        id: '183',
        type: 'point',
        links: ['182', '184'],
        top: '640px',
        left: '1010px',
        disabled: true,
        isActive: false,
    },
    {
        id: '184',
        type: 'point',
        links: ['183', '185'],
        top: '680px',
        left: '1040px',
        disabled: true,
        isActive: false,
    },
    {
        id: '185',
        type: 'point',
        links: ['184', '186'],
        top: '710px',
        left: '1090px',
        disabled: true,
        isActive: false,
    },
    {
        id: '186',
        type: 'point',
        links: ['185', '187'],
        top: '735px',
        left: '1150px',
        disabled: true,
        isActive: false,
    },
    {
        id: '187',
        type: 'point',
        links: ['186', '188'],
        top: '765px',
        left: '1200px',
        disabled: true,
        isActive: false,
    },
    {
        id: '188',
        type: 'point',
        links: ['187', '178'],
        top: '795px',
        left: '1235px',
        disabled: true,
        isActive: false,
    },
    {
        id: '189',
        type: 'point',
        links: ['136', '190'],
        top: '675px',
        left: '960px',
        disabled: true,
        isActive: false,
    },
    {
        id: '190',
        type: 'point',
        links: ['189', '191'],
        top: '725px',
        left: '970px',
        disabled: true,
        isActive: false,
    },
    {
        id: '191',
        type: 'point',
        links: ['190', '192'],
        top: '775px',
        left: '975px',
        disabled: true,
        isActive: false,
    },
    {
        id: '192',
        type: 'point',
        links: ['191', '193'],
        top: '835px',
        left: '985px',
        disabled: true,
        isActive: false,
    },
    {
        id: '193',
        type: 'point',
        links: ['192', '172', '173'],
        top: '895px',
        left: '995px',
        disabled: true,
        isActive: false,
    },
    {
        id: '194',
        type: 'point',
        links: ['158', '195'],
        top: '550px',
        left: '1330px',
        disabled: true,
        isActive: false,
    },
    {
        id: '195',
        type: 'point',
        links: ['194', '196'],
        top: '500px',
        left: '1320px',
        disabled: true,
        isActive: false,
    },
    {
        id: '196',
        type: 'point',
        links: ['195', '197'],
        top: '440px',
        left: '1310px',
        disabled: true,
        isActive: false,
    },
    {
        id: '197',
        type: 'point',
        links: ['196', '198'],
        top: '390px',
        left: '1295px',
        disabled: true,
        isActive: false,
    },
    {
        id: '198',
        type: 'point',
        links: ['197', '199', '210', '227'],
        top: '335px',
        left: '1280px',
        disabled: true,
        isActive: false,
    },
    {
        id: '199',
        type: 'point',
        links: ['198', '200'],
        top: '285px',
        left: '1265px',
        disabled: true,
        isActive: false,
    },
    {
        id: '200',
        type: 'point',
        links: ['199', '201'],
        top: '245px',
        left: '1245px',
        disabled: true,
        isActive: false,
    },
    {
        id: '201',
        type: 'point',
        links: ['200', '202'],
        top: '200px',
        left: '1225px',
        disabled: true,
        isActive: false,
    },
    {
        id: '202',
        type: 'point',
        links: ['201', '203', '226'],
        top: '160px',
        left: '1205px',
        disabled: true,
        isActive: false,
    },
    {
        id: '203',
        type: 'point',
        links: ['202', '204', '226'],
        top: '100px',
        left: '1180px',
        disabled: true,
        isActive: false,
    },
    {
        id: '204',
        type: 'point',
        links: ['203', '9204'],
        top: '50px',
        left: '1160px',
        disabled: true,
        isActive: false,
    },
    {
        id: '9204',
        type: 'point',
        links: ['204'],
        top: '10px',
        left: '1140px',
        disabled: true,
        isActive: false,
    },
    {
        id: '205',
        type: 'point',
        links: ['148', '206'],
        top: '530px',
        left: '970px',
        disabled: true,
        isActive: false,
    },
    {
        id: '206',
        type: 'point',
        links: ['205', '207'],
        top: '500px',
        left: '1010px',
        disabled: true,
        isActive: false,
    },
    {
        id: '207',
        type: 'point',
        links: ['206', '208'],
        top: '470px',
        left: '1060px',
        disabled: true,
        isActive: false,
    },
    {
        id: '208',
        type: 'point',
        links: ['207', '209'],
        top: '440px',
        left: '1110px',
        disabled: true,
        isActive: false,
    },
    {
        id: '209',
        type: 'point',
        links: ['208', '210'],
        top: '400px',
        left: '1170px',
        disabled: true,
        isActive: false,
    },
    {
        id: '210',
        type: 'point',
        links: ['209', '198'],
        top: '365px',
        left: '1220px',
        disabled: true,
        isActive: false,
    },
    {
        id: '211',
        type: 'point',
        links: ['148', '212'],
        top: '520px',
        left: '930px',
        disabled: true,
        isActive: false,
    },
    {
        id: '212',
        type: 'point',
        links: ['211', '213'],
        top: '480px',
        left: '915px',
        disabled: true,
        isActive: false,
    },
    {
        id: '213',
        type: 'point',
        links: ['212', '214'],
        top: '430px',
        left: '925px',
        disabled: true,
        isActive: false,
    },
    {
        id: '214',
        type: 'point',
        links: ['213', '215'],
        top: '380px',
        left: '905px',
        disabled: true,
        isActive: false,
    },
    {
        id: '215',
        type: 'point',
        links: ['214', '216', '222'],
        top: '330px',
        left: '875px',
        disabled: true,
        isActive: false,
    },
    {
        id: '216',
        type: 'point',
        links: ['215', '217'],
        top: '280px',
        left: '860px',
        disabled: true,
        isActive: false,
    },
    {
        id: '217',
        type: 'point',
        links: ['216', '218'],
        top: '230px',
        left: '860px',
        disabled: true,
        isActive: false,
    },
    {
        id: '218',
        type: 'point',
        links: ['217', '219'],
        top: '180px',
        left: '860px',
        disabled: true,
        isActive: false,
    },
    {
        id: '219',
        type: 'point',
        links: ['218', '220'],
        top: '130px',
        left: '860px',
        disabled: true,
        isActive: false,
    },
    {
        id: '220',
        type: 'point',
        links: ['219', '221'],
        top: '80px',
        left: '860px',
        disabled: true,
        isActive: false,
    },
    {
        id: '221',
        type: 'point',
        links: ['220'],
        top: '30px',
        left: '865px',
        disabled: true,
        isActive: false,
    },
    {
        id: '222',
        type: 'point',
        links: ['215', '223'],
        top: '310px',
        left: '915px',
        disabled: true,
        isActive: false,
    },
    {
        id: '223',
        type: 'point',
        links: ['222', '9223'],
        top: '285px',
        left: '965px',
        disabled: true,
        isActive: false,
    },
    {
        id: '9223',
        type: 'point',
        links: ['223', '224'],
        top: '260px',
        left: '1020px',
        disabled: true,
        isActive: false,
    },
    {
        id: '224',
        type: 'point',
        links: ['9223', '225'],
        top: '230px',
        left: '1070px',
        disabled: true,
        isActive: false,
    },
    {
        id: '225',
        type: 'point',
        links: ['224', '226'],
        top: '190px',
        left: '1120px',
        disabled: true,
        isActive: false,
    },
    {
        id: '226',
        type: 'point',
        links: ['225', '202', '203'],
        top: '165px',
        left: '1160px',
        disabled: true,
        isActive: false,
    },
    {
        id: '227',
        type: 'point',
        links: ['198', '228'],
        top: '315px',
        left: '1330px',
        disabled: true,
        isActive: false,
    },
    {
        id: '228',
        type: 'point',
        links: ['227', '229'],
        top: '295px',
        left: '1390px',
        disabled: true,
        isActive: false,
    },
    {
        id: '229',
        type: 'point',
        links: ['228', '230'],
        top: '275px',
        left: '1450px',
        disabled: true,
        isActive: false,
    },
    {
        id: '230',
        type: 'point',
        links: ['229', '231'],
        top: '255px',
        left: '1500px',
        disabled: true,
        isActive: false,
    },
    {
        id: '231',
        type: 'point',
        links: ['230', '232'],
        top: '245px',
        left: '1550px',
        disabled: true,
        isActive: false,
    },
    {
        id: '232',
        type: 'point',
        links: ['231', '233'],
        top: '235px',
        left: '1610px',
        disabled: true,
        isActive: false,
    },
    {
        id: '233',
        type: 'point',
        links: ['232', '1000'],
        top: '225px',
        left: '1670px',
        disabled: true,
        isActive: false,
    },
    {
        id: '1000',
        type: 'point',
        links: ['233', '234'],
        top: '245px',
        left: '1720px',
        disabled: true,
        isActive: false,
    },
    {
        id: '234',
        type: 'point',
        links: ['1000', '235'],
        top: '295px',
        left: '1740px',
        disabled: true,
        isActive: false,
    },
    {
        id: '235',
        type: 'point',
        links: ['234', '236'],
        top: '340px',
        left: '1730px',
        disabled: true,
        isActive: false,
    },
    {
        id: '236',
        type: 'point',
        links: ['235', '237'],
        top: '390px',
        left: '1740px',
        disabled: true,
        isActive: false,
    },
    {
        id: '237',
        type: 'point',
        links: ['236', '166'],
        top: '440px',
        left: '1750px',
        disabled: true,
        isActive: false,
    },
    {
        id: '238',
        type: 'point',
        links: ['161', '239'],
        top: '680px',
        left: '1550px',
        disabled: true,
        isActive: false,
    },
    {
        id: '239',
        type: 'point',
        links: ['238', '240'],
        top: '695px',
        left: '1600px',
        disabled: true,
        isActive: false,
    },
    {
        id: '240',
        type: 'point',
        links: ['239', '241'],
        top: '715px',
        left: '1660px',
        disabled: true,
        isActive: false,
    },
    {
        id: '241',
        type: 'point',
        links: ['240', '242'],
        top: '735px',
        left: '1730px',
        disabled: true,
        isActive: false,
    },
    {
        id: '242',
        type: 'point',
        links: ['241', '243'],
        top: '755px',
        left: '1790px',
        disabled: true,
        isActive: false,
    },
    {
        id: '243',
        type: 'point',
        links: ['242', '244'],
        top: '775px',
        left: '1850px',
        disabled: true,
        isActive: false,
    },
    {
        id: '244',
        type: 'point',
        links: ['243'],
        top: '785px',
        left: '1890px',
        disabled: true,
        isActive: false,
    },
    {
        id: '245',
        type: 'point',
        links: ['178', '246'],
        top: '850px',
        left: '1300px',
        disabled: true,
        isActive: false,
    },
    {
        id: '246',
        type: 'point',
        links: ['245', '247'],
        top: '900px',
        left: '1330px',
        disabled: true,
        isActive: false,
    },
    {
        id: '247',
        type: 'point',
        links: ['246', '248'],
        top: '950px',
        left: '1350px',
        disabled: true,
        isActive: false,
    },
    {
        id: '248',
        type: 'point',
        links: ['247', '249'],
        top: '1000px',
        left: '1380px',
        disabled: true,
        isActive: false,
    },
    {
        id: '249',
        type: 'point',
        links: ['248', '250'],
        top: '1040px',
        left: '1410px',
        disabled: true,
        isActive: false,
    },
];


/***/ }),

/***/ "./src/app/options/transition-arrows.ts":
/*!**********************************************!*\
  !*** ./src/app/options/transition-arrows.ts ***!
  \**********************************************/
/*! exports provided: transitionArrowsOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transitionArrowsOption", function() { return transitionArrowsOption; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const transitionArrowsOption = [
    {
        id: 'a',
        type: 'arrow',
        name: 'first',
        top: '5px',
        left: '330px',
        disabled: true,
        isActive: false,
    },
    {
        id: 'b',
        type: 'arrow',
        name: 'second',
        top: '5px',
        left: '645px',
        disabled: true,
        isActive: false,
    },
    {
        id: 'c',
        type: 'arrow',
        name: 'third',
        top: '5px',
        left: '1170px',
        disabled: true,
        isActive: false,
    },
    {
        id: 'd',
        type: 'arrow',
        name: 'fourth',
        top: '300px',
        left: '1880px',
        disabled: true,
        isActive: false,
    },
    {
        id: 'e',
        type: 'arrow',
        name: 'fifth',
        top: '745px',
        left: '1880px',
        disabled: true,
        isActive: false,
    },
    {
        id: 'f',
        type: 'arrow',
        name: 'sixth',
        top: '1040px',
        left: '1445px',
        disabled: true,
        isActive: false,
    },
    {
        id: 'g',
        type: 'arrow',
        name: 'seventh',
        top: '1040px',
        left: '640px',
        disabled: true,
        isActive: false,
    },
    {
        id: 'h',
        type: 'arrow',
        name: 'eight',
        top: '1040px',
        left: '205px',
        disabled: true,
        isActive: false,
    },
    {
        id: 'k',
        type: 'arrow',
        name: 'nineth',
        top: '445px',
        left: '5px',
        disabled: true,
        isActive: false,
    },
];


/***/ }),

/***/ "./src/app/pages/developers-page/developers-page.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/pages/developers-page/developers-page.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*------ button colors ------*/\n/*------ indicator colors ------*/\n/*------ alert colors ------*/\n/*------ perks colors ------*/\n.developer-page {\n  background: url('doodi_background.png') repeat;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n.developer-page__creators-head {\n  text-align: center;\n  color: #ffffff;\n  font-size: 50px;\n  font-family: Verdana;\n  margin-bottom: 20px;\n}\n.developer-page__cards, .developer-page {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.developer-page__developer {\n  margin: 20px;\n  border: 3px solid #ffffff;\n  border-radius: 10px;\n  padding: 5px;\n  font-family: Verdana;\n}\n.developer-page__developer-info {\n  display: flex;\n  align-items: center;\n  margin: 10px;\n}\n.developer-page__developer-info-icon {\n  width: 50px;\n  height: 50px;\n}\n.developer-page__developer-info-text {\n  font-size: 16px;\n  color: #ffffff;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGV2ZWxvcGVycy1wYWdlL0M6XFxVc2Vyc1xcQWxpYWtzYW5kcl9NaXJhbmtvdVxcRG9jdW1lbnRzXFxELk8uTy5ELklcXERPT0RJL3NyY1xcc3R5bGVzXFxjb25zdGFudHMuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGV2ZWxvcGVycy1wYWdlL0M6XFxVc2Vyc1xcQWxpYWtzYW5kcl9NaXJhbmtvdVxcRG9jdW1lbnRzXFxELk8uTy5ELklcXERPT0RJL3NyY1xcYXBwXFxwYWdlc1xcZGV2ZWxvcGVycy1wYWdlXFxkZXZlbG9wZXJzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2RldmVsb3BlcnMtcGFnZS9kZXZlbG9wZXJzLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsOEJBQUE7QUFVQSxpQ0FBQTtBQU1BLDZCQUFBO0FBSUEsNkJBQUE7QUNyQkE7RUFDRSw4Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNHRjtBREFFO0VBQ0Usa0JBQUE7RUFDQSxjRFhRO0VDWVIsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUNFSjtBRENFO0VBRUUsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDQUo7QURHRTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDREo7QURHSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNETjtBREdNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNEUjtBRElNO0VBQ0UsZUFBQTtFQUNBLGNENUNJO0VDNkNKLGFBQUE7QUNGUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RldmVsb3BlcnMtcGFnZS9kZXZlbG9wZXJzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmFzZVdoaXRlOiAjZmZmZmZmO1xyXG4kYmFzZUJsYWNrOiAjMDAwMDAwO1xyXG5cclxuLyotLS0tLS0gYnV0dG9uIGNvbG9ycyAtLS0tLS0qL1xyXG4kYnV0dG9uQmFja2dyb3VuZEFjdGl2ZTogI2RjMzU0NTtcclxuJGJ1dHRvbkJvcmRlckFjdGl2ZTogI2RjMzU0NTtcclxuXHJcbiRidXR0b25CYWNrZ3JvdW5kQXZhaWxhYmxlOiAjMDA3YmZmO1xyXG4kYnV0dG9uQm9yZGVyQXZhaWxhYmxlOiAjMDM1ZGJkO1xyXG5cclxuJGJ1dHRvbkJhY2tncm91bmREaXNhYmxlZDogIzZjNzU3ZDtcclxuJGJ1dHRvbkJvcmRlckRpc2FibGVkOiAjNTU1NjU3O1xyXG5cclxuLyotLS0tLS0gaW5kaWNhdG9yIGNvbG9ycyAtLS0tLS0qL1xyXG4kaW5kaWNhdG9yQ3VycmVudEhlYWxodENvbG9yOiAjM2FjYzE1O1xyXG4kaW5kaWNhdG9yQWxsSGVhbGh0Q29sb3I6ICMyZTljMTI7XHJcbiRpbmRpY2F0b3JDdXJyZW50U3RhbWluYUNvbG9yOiAjMGM3ZmViO1xyXG4kaW5kaWNhdG9yQWxsU3RhbWluYUNvbG9yOiAjMDQ1NmEzO1xyXG5cclxuLyotLS0tLS0gYWxlcnQgY29sb3JzIC0tLS0tLSovXHJcbiR2YWxpZGF0aW9uRXJyb3JCb3JkZXI6IHJnYigyMDYsIDIwLCAyMCk7XHJcbiR2YWxpZGF0aW9uRXJyb3JCYWNrZ3JvdW5kOiByZ2IoMjI2LCAyNSwgMjUpO1xyXG5cclxuLyotLS0tLS0gcGVya3MgY29sb3JzIC0tLS0tLSovXHJcbiRiYXNlUGVya0NvbG9yOiByZ2IoMzMsIDE1OSwgMjMzKTtcclxuIiwiQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL2NvbnN0YW50cy5zY3NzJztcclxuXHJcbi5kZXZlbG9wZXItcGFnZSB7XHJcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Rvb2RpX2JhY2tncm91bmQucG5nJykgcmVwZWF0O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcblxyXG5cclxuICAmX19jcmVhdG9ycy1oZWFkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAkYmFzZVdoaXRlO1xyXG4gICAgZm9udC1zaXplOiA1MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgJl9fY2FyZHMsXHJcbiAgJiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIH1cclxuXHJcbiAgJl9fZGV2ZWxvcGVyIHtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICRiYXNlV2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XHJcblxyXG4gICAgJi1pbmZvIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOiAxMHB4O1xyXG5cclxuICAgICAgJi1pY29uIHtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICYtdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAkYmFzZVdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLyotLS0tLS0gYnV0dG9uIGNvbG9ycyAtLS0tLS0qL1xuLyotLS0tLS0gaW5kaWNhdG9yIGNvbG9ycyAtLS0tLS0qL1xuLyotLS0tLS0gYWxlcnQgY29sb3JzIC0tLS0tLSovXG4vKi0tLS0tLSBwZXJrcyBjb2xvcnMgLS0tLS0tKi9cbi5kZXZlbG9wZXItcGFnZSB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZG9vZGlfYmFja2dyb3VuZC5wbmdcIikgcmVwZWF0O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uZGV2ZWxvcGVyLXBhZ2VfX2NyZWF0b3JzLWhlYWQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDUwcHg7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmRldmVsb3Blci1wYWdlX19jYXJkcywgLmRldmVsb3Blci1wYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5kZXZlbG9wZXItcGFnZV9fZGV2ZWxvcGVyIHtcbiAgbWFyZ2luOiAyMHB4O1xuICBib3JkZXI6IDNweCBzb2xpZCAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hO1xufVxuLmRldmVsb3Blci1wYWdlX19kZXZlbG9wZXItaW5mbyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweDtcbn1cbi5kZXZlbG9wZXItcGFnZV9fZGV2ZWxvcGVyLWluZm8taWNvbiB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG4uZGV2ZWxvcGVyLXBhZ2VfX2RldmVsb3Blci1pbmZvLXRleHQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/developers-page/developers-page.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/developers-page/developers-page.component.ts ***!
  \********************************************************************/
/*! exports provided: DevelopersPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DevelopersPageComponent", function() { return DevelopersPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DevelopersPageComponent = class DevelopersPageComponent {
    constructor() {
        this.developers = [
            {
                name: 'Hanna Stoma (FE)',
                githubUrl: 'https://github.com/annaStoma',
                mail: 'annstoma9@gmail.com',
            },
            {
                name: 'Timofey Titov (BE)',
                githubUrl: 'https://github.com/TimTitov',
                mail: 'seppuku.no.dishonor@gmail.com',
            },
            {
                name: 'Aliaksandr Mirankou (FE)',
                githubUrl: 'https://github.com/stricozetc',
                mail: 'alexandermirankov@gmail.com',
            },
        ];
    }
};
DevelopersPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dod-developers-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./developers-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/developers-page/developers-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./developers-page.component.scss */ "./src/app/pages/developers-page/developers-page.component.scss")).default]
    })
], DevelopersPageComponent);



/***/ }),

/***/ "./src/app/pages/index.ts":
/*!********************************!*\
  !*** ./src/app/pages/index.ts ***!
  \********************************/
/*! exports provided: DevelopersPageComponent, MenuPageComponent, SettingsPageComponent, RegistrationPageComponent, LoginPageComponent, PerksPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _developers_page_developers_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./developers-page/developers-page.component */ "./src/app/pages/developers-page/developers-page.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DevelopersPageComponent", function() { return _developers_page_developers_page_component__WEBPACK_IMPORTED_MODULE_1__["DevelopersPageComponent"]; });

/* harmony import */ var _menu_page_menu_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-page/menu-page.component */ "./src/app/pages/menu-page/menu-page.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuPageComponent", function() { return _menu_page_menu_page_component__WEBPACK_IMPORTED_MODULE_2__["MenuPageComponent"]; });

/* harmony import */ var _settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings-page/settings-page.component */ "./src/app/pages/settings-page/settings-page.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SettingsPageComponent", function() { return _settings_page_settings_page_component__WEBPACK_IMPORTED_MODULE_3__["SettingsPageComponent"]; });

/* harmony import */ var _registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration-page/registration-page.component */ "./src/app/pages/registration-page/registration-page.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageComponent", function() { return _registration_page_registration_page_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationPageComponent"]; });

/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/pages/login-page/login-page.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__["LoginPageComponent"]; });

/* harmony import */ var _perks_page_perks_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./perks-page/perks-page.component */ "./src/app/pages/perks-page/perks-page.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PerksPageComponent", function() { return _perks_page_perks_page_component__WEBPACK_IMPORTED_MODULE_6__["PerksPageComponent"]; });










/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*------ button colors ------*/\n/*------ indicator colors ------*/\n/*------ alert colors ------*/\n/*------ perks colors ------*/\n.login-page {\n  background: url('doodi_background.png') repeat;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.login-page__field {\n  margin: 20px 0;\n  text-align: center;\n}\n.login-page__field-text {\n  color: #ffffff;\n  margin-bottom: 5px;\n}\n.login-page__control {\n  height: 25px;\n  border-radius: 10px;\n  font-size: 16px;\n  padding: 5px;\n  border: none;\n  outline: none;\n}\n.login-page__back-to-main-btn {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4tcGFnZS9DOlxcVXNlcnNcXEFsaWFrc2FuZHJfTWlyYW5rb3VcXERvY3VtZW50c1xcRC5PLk8uRC5JXFxET09ESS9zcmNcXHN0eWxlc1xcY29uc3RhbnRzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2xvZ2luLXBhZ2UvQzpcXFVzZXJzXFxBbGlha3NhbmRyX01pcmFua291XFxEb2N1bWVudHNcXEQuTy5PLkQuSVxcRE9PREkvc3JjXFxhcHBcXHBhZ2VzXFxsb2dpbi1wYWdlXFxsb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9sb2dpbi1wYWdlL2xvZ2luLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsOEJBQUE7QUFVQSxpQ0FBQTtBQU1BLDZCQUFBO0FBSUEsNkJBQUE7QUNyQkE7RUFDRSw4Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0VGO0FEQUU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUNFSjtBREFJO0VBQ0UsY0RqQk07RUNrQk4sa0JBQUE7QUNFTjtBREVFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0FKO0FER0U7RUFDRSxnQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4tcGFnZS9sb2dpbi1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJhc2VXaGl0ZTogI2ZmZmZmZjtcclxuJGJhc2VCbGFjazogIzAwMDAwMDtcclxuXHJcbi8qLS0tLS0tIGJ1dHRvbiBjb2xvcnMgLS0tLS0tKi9cclxuJGJ1dHRvbkJhY2tncm91bmRBY3RpdmU6ICNkYzM1NDU7XHJcbiRidXR0b25Cb3JkZXJBY3RpdmU6ICNkYzM1NDU7XHJcblxyXG4kYnV0dG9uQmFja2dyb3VuZEF2YWlsYWJsZTogIzAwN2JmZjtcclxuJGJ1dHRvbkJvcmRlckF2YWlsYWJsZTogIzAzNWRiZDtcclxuXHJcbiRidXR0b25CYWNrZ3JvdW5kRGlzYWJsZWQ6ICM2Yzc1N2Q7XHJcbiRidXR0b25Cb3JkZXJEaXNhYmxlZDogIzU1NTY1NztcclxuXHJcbi8qLS0tLS0tIGluZGljYXRvciBjb2xvcnMgLS0tLS0tKi9cclxuJGluZGljYXRvckN1cnJlbnRIZWFsaHRDb2xvcjogIzNhY2MxNTtcclxuJGluZGljYXRvckFsbEhlYWxodENvbG9yOiAjMmU5YzEyO1xyXG4kaW5kaWNhdG9yQ3VycmVudFN0YW1pbmFDb2xvcjogIzBjN2ZlYjtcclxuJGluZGljYXRvckFsbFN0YW1pbmFDb2xvcjogIzA0NTZhMztcclxuXHJcbi8qLS0tLS0tIGFsZXJ0IGNvbG9ycyAtLS0tLS0qL1xyXG4kdmFsaWRhdGlvbkVycm9yQm9yZGVyOiByZ2IoMjA2LCAyMCwgMjApO1xyXG4kdmFsaWRhdGlvbkVycm9yQmFja2dyb3VuZDogcmdiKDIyNiwgMjUsIDI1KTtcclxuXHJcbi8qLS0tLS0tIHBlcmtzIGNvbG9ycyAtLS0tLS0qL1xyXG4kYmFzZVBlcmtDb2xvcjogcmdiKDMzLCAxNTksIDIzMyk7XHJcbiIsIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9jb25zdGFudHMuc2Nzcyc7XHJcblxyXG4ubG9naW4tcGFnZSB7XHJcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Rvb2RpX2JhY2tncm91bmQucG5nJykgcmVwZWF0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgJl9fZmllbGQge1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgJi10ZXh0IHtcclxuICAgICAgY29sb3I6ICRiYXNlV2hpdGU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2NvbnRyb2wge1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmX19iYWNrLXRvLW1haW4tYnRuIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG5cclxufVxyXG4iLCIvKi0tLS0tLSBidXR0b24gY29sb3JzIC0tLS0tLSovXG4vKi0tLS0tLSBpbmRpY2F0b3IgY29sb3JzIC0tLS0tLSovXG4vKi0tLS0tLSBhbGVydCBjb2xvcnMgLS0tLS0tKi9cbi8qLS0tLS0tIHBlcmtzIGNvbG9ycyAtLS0tLS0qL1xuLmxvZ2luLXBhZ2Uge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Rvb2RpX2JhY2tncm91bmQucG5nXCIpIHJlcGVhdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5sb2dpbi1wYWdlX19maWVsZCB7XG4gIG1hcmdpbjogMjBweCAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubG9naW4tcGFnZV9fZmllbGQtdGV4dCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ubG9naW4tcGFnZV9fY29udHJvbCB7XG4gIGhlaWdodDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5sb2dpbi1wYWdlX19iYWNrLXRvLW1haW4tYnRuIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var src_app_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/components */ "./src/app/components/index.ts");







let LoginPageComponent = class LoginPageComponent {
    constructor(router, authService, dialog) {
        this.router = router;
        this.authService = authService;
        this.dialog = dialog;
        this.profileLogin = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
        this.isLoaderShown = false;
    }
    login() {
        this.isLoaderShown = true;
        this.authService.userLogin(this.profileLogin.value).subscribe({
            error: (_err) => {
                this.dialog.open(src_app_components__WEBPACK_IMPORTED_MODULE_6__["ModalComponent"], {
                    height: '200px',
                    width: '200px',
                    data: {
                        header: 'Авторизация',
                        text: 'Неправильный логин или пароль',
                    }
                });
                this.isLoaderShown = false;
            },
            next: (data) => {
                this.isLoaderShown = false;
                window.localStorage.setItem('token', data.token);
                this.router.navigate(['/']);
            }
        });
    }
};
LoginPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }
];
LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dod-login-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login-page/login-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login-page.component.scss */ "./src/app/pages/login-page/login-page.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_services__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
], LoginPageComponent);



/***/ }),

/***/ "./src/app/pages/menu-page/menu-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/menu-page/menu-page.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*------ button colors ------*/\n/*------ indicator colors ------*/\n/*------ alert colors ------*/\n/*------ perks colors ------*/\n.menu {\n  background: url('doodi_background.png') repeat;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.menu__logo {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: url('logo_background.png') repeat;\n  position: fixed;\n  z-index: 10;\n  -webkit-animation: seconds 2s forwards;\n          animation: seconds 2s forwards;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n}\n.menu__logo-image {\n  width: 600px;\n  height: 40%;\n  background: url('doodi_logo.png') no-repeat;\n  background-size: 100% auto;\n  -webkit-animation: 1s ease 0s 1 zoom;\n          animation: 1s ease 0s 1 zoom;\n}\n.menu__buttons {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: none;\n}\n.menu__buttons dod-button {\n  margin: 10px;\n}\n@-webkit-keyframes seconds {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    visibility: hidden;\n  }\n}\n@keyframes seconds {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    visibility: hidden;\n  }\n}\n@-webkit-keyframes zoom {\n  0% {\n    width: 10px;\n  }\n  100% {\n    width: 600px;\n  }\n}\n@keyframes zoom {\n  0% {\n    width: 10px;\n  }\n  100% {\n    width: 600px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVudS1wYWdlL0M6XFxVc2Vyc1xcQWxpYWtzYW5kcl9NaXJhbmtvdVxcRG9jdW1lbnRzXFxELk8uTy5ELklcXERPT0RJL3NyY1xcc3R5bGVzXFxjb25zdGFudHMuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWVudS1wYWdlL0M6XFxVc2Vyc1xcQWxpYWtzYW5kcl9NaXJhbmtvdVxcRG9jdW1lbnRzXFxELk8uTy5ELklcXERPT0RJL3NyY1xcYXBwXFxwYWdlc1xcbWVudS1wYWdlXFxtZW51LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL21lbnUtcGFnZS9tZW51LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsOEJBQUE7QUFVQSxpQ0FBQTtBQU1BLDZCQUFBO0FBSUEsNkJBQUE7QUNyQkE7RUFDRSw4Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNHRjtBRERFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLDZDQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxzQ0FBQTtVQUFBLDhCQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtBQ0dKO0FEREk7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLDJDQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0FDR047QURDRTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDSTtFQUNFLFlBQUE7QUNDTjtBRElBO0VBQ0U7SUFDRSxVQUFBO0VDREY7RURHQTtJQUNFLFVBQUE7SUFDQSxrQkFBQTtFQ0RGO0FBQ0Y7QUROQTtFQUNFO0lBQ0UsVUFBQTtFQ0RGO0VER0E7SUFDRSxVQUFBO0lBQ0Esa0JBQUE7RUNERjtBQUNGO0FESUE7RUFDRTtJQUNFLFdBQUE7RUNGRjtFRElBO0lBQ0UsWUFBQTtFQ0ZGO0FBQ0Y7QURKQTtFQUNFO0lBQ0UsV0FBQTtFQ0ZGO0VESUE7SUFDRSxZQUFBO0VDRkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21lbnUtcGFnZS9tZW51LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmFzZVdoaXRlOiAjZmZmZmZmO1xyXG4kYmFzZUJsYWNrOiAjMDAwMDAwO1xyXG5cclxuLyotLS0tLS0gYnV0dG9uIGNvbG9ycyAtLS0tLS0qL1xyXG4kYnV0dG9uQmFja2dyb3VuZEFjdGl2ZTogI2RjMzU0NTtcclxuJGJ1dHRvbkJvcmRlckFjdGl2ZTogI2RjMzU0NTtcclxuXHJcbiRidXR0b25CYWNrZ3JvdW5kQXZhaWxhYmxlOiAjMDA3YmZmO1xyXG4kYnV0dG9uQm9yZGVyQXZhaWxhYmxlOiAjMDM1ZGJkO1xyXG5cclxuJGJ1dHRvbkJhY2tncm91bmREaXNhYmxlZDogIzZjNzU3ZDtcclxuJGJ1dHRvbkJvcmRlckRpc2FibGVkOiAjNTU1NjU3O1xyXG5cclxuLyotLS0tLS0gaW5kaWNhdG9yIGNvbG9ycyAtLS0tLS0qL1xyXG4kaW5kaWNhdG9yQ3VycmVudEhlYWxodENvbG9yOiAjM2FjYzE1O1xyXG4kaW5kaWNhdG9yQWxsSGVhbGh0Q29sb3I6ICMyZTljMTI7XHJcbiRpbmRpY2F0b3JDdXJyZW50U3RhbWluYUNvbG9yOiAjMGM3ZmViO1xyXG4kaW5kaWNhdG9yQWxsU3RhbWluYUNvbG9yOiAjMDQ1NmEzO1xyXG5cclxuLyotLS0tLS0gYWxlcnQgY29sb3JzIC0tLS0tLSovXHJcbiR2YWxpZGF0aW9uRXJyb3JCb3JkZXI6IHJnYigyMDYsIDIwLCAyMCk7XHJcbiR2YWxpZGF0aW9uRXJyb3JCYWNrZ3JvdW5kOiByZ2IoMjI2LCAyNSwgMjUpO1xyXG5cclxuLyotLS0tLS0gcGVya3MgY29sb3JzIC0tLS0tLSovXHJcbiRiYXNlUGVya0NvbG9yOiByZ2IoMzMsIDE1OSwgMjMzKTtcclxuIiwiQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL2NvbnN0YW50cy5zY3NzJztcclxuXHJcbi5tZW51IHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZG9vZGlfYmFja2dyb3VuZC5wbmcnKSByZXBlYXQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgJl9fbG9nbyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvbG9nb19iYWNrZ3JvdW5kLnBuZycpIHJlcGVhdDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgYW5pbWF0aW9uOiBzZWNvbmRzIDJzIGZvcndhcmRzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAycztcclxuXHJcbiAgICAmLWltYWdlIHtcclxuICAgICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDQwJTtcclxuICAgICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Rvb2RpX2xvZ28ucG5nJykgbm8tcmVwZWF0O1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgYXV0bztcclxuICAgICAgYW5pbWF0aW9uOiAxcyBlYXNlIDBzIDEgem9vbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2J1dHRvbnMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuXHJcbiAgICAmIGRvZC1idXR0b24ge1xyXG4gICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNlY29uZHMge1xyXG4gIDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgem9vbSB7XHJcbiAgMCUge1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gIH1cclxufVxyXG4iLCIvKi0tLS0tLSBidXR0b24gY29sb3JzIC0tLS0tLSovXG4vKi0tLS0tLSBpbmRpY2F0b3IgY29sb3JzIC0tLS0tLSovXG4vKi0tLS0tLSBhbGVydCBjb2xvcnMgLS0tLS0tKi9cbi8qLS0tLS0tIHBlcmtzIGNvbG9ycyAtLS0tLS0qL1xuLm1lbnUge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Rvb2RpX2JhY2tncm91bmQucG5nXCIpIHJlcGVhdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLm1lbnVfX2xvZ28ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9sb2dvX2JhY2tncm91bmQucG5nXCIpIHJlcGVhdDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxMDtcbiAgYW5pbWF0aW9uOiBzZWNvbmRzIDJzIGZvcndhcmRzO1xuICBhbmltYXRpb24tZGVsYXk6IDJzO1xufVxuLm1lbnVfX2xvZ28taW1hZ2Uge1xuICB3aWR0aDogNjAwcHg7XG4gIGhlaWdodDogNDAlO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Rvb2RpX2xvZ28ucG5nXCIpIG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIGF1dG87XG4gIGFuaW1hdGlvbjogMXMgZWFzZSAwcyAxIHpvb207XG59XG4ubWVudV9fYnV0dG9ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG4ubWVudV9fYnV0dG9ucyBkb2QtYnV0dG9uIHtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG5Aa2V5ZnJhbWVzIHNlY29uZHMge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgfVxufVxuQGtleWZyYW1lcyB6b29tIHtcbiAgMCUge1xuICAgIHdpZHRoOiAxMHB4O1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiA2MDBweDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/menu-page/menu-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/menu-page/menu-page.component.ts ***!
  \********************************************************/
/*! exports provided: MenuPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageComponent", function() { return MenuPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components */ "./src/app/components/index.ts");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");







let MenuPageComponent = class MenuPageComponent {
    constructor(router, dialog, personService) {
        this.router = router;
        this.dialog = dialog;
        this.personService = personService;
        this.isLogged = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.isLoaderShown = false;
        this.isCharacterCreate = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
    }
    ngOnInit() {
        this.checkIsLogged();
        this.checkCharacterId();
    }
    checkIsLogged() {
        this.isLogged.next(Boolean(window.localStorage.getItem('token')));
    }
    checkCharacterId() {
        this.isCharacterCreate.next(Boolean(window.localStorage.getItem('character_id')));
    }
    playGame() {
        this.router.navigate(['/playground-map']);
    }
    signIn() {
        this.router.navigate(['/login']);
    }
    signUp() {
        this.router.navigate(['/registration']);
    }
    perk() {
        this.router.navigate(['/perks']);
    }
    createNewCharacter() {
        this.isLoaderShown = true;
        this.personService.createPerson().subscribe(data => {
            window.localStorage.setItem('character_id', data.id);
            this.isLoaderShown = false;
        });
    }
    exitGame() {
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('character_id');
        this.dialog.open(src_app_components__WEBPACK_IMPORTED_MODULE_5__["ModalComponent"], {
            height: '300px',
            width: '300px',
            data: {
                header: 'D.O.O.D.I',
                text: 'Вы вышли из игры'
            }
        });
        this.checkIsLogged();
    }
};
MenuPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_6__["PersonService"] }
];
MenuPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dod-menu-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu-page/menu-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu-page.component.scss */ "./src/app/pages/menu-page/menu-page.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
        src_app_services__WEBPACK_IMPORTED_MODULE_6__["PersonService"]])
], MenuPageComponent);



/***/ }),

/***/ "./src/app/pages/perks-page/perks-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/perks-page/perks-page.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*------ button colors ------*/\n/*------ indicator colors ------*/\n/*------ alert colors ------*/\n/*------ perks colors ------*/\n.perks-page {\n  background: url('doodi_background.png') repeat;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.perks-page__available-points {\n  font-family: Verdana;\n  font-size: 24px;\n  color: #ffffff;\n  margin-left: 100px;\n  margin-top: 30px;\n}\n.perks-page__level {\n  color: #ffffff;\n  font-family: Verdana;\n  font-size: 20px;\n}\n.perks-page__survivor, .perks-page__armor, .perks-page__pioneer, .perks-page__stamina {\n  position: absolute;\n  top: 190px;\n}\n.perks-page__survivor {\n  left: 120px;\n}\n.perks-page__armor {\n  left: 320px;\n}\n.perks-page__pioneer {\n  left: 520px;\n}\n.perks-page__stamina {\n  left: 720px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGVya3MtcGFnZS9DOlxcVXNlcnNcXEFsaWFrc2FuZHJfTWlyYW5rb3VcXERvY3VtZW50c1xcRC5PLk8uRC5JXFxET09ESS9zcmNcXHN0eWxlc1xcY29uc3RhbnRzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3BlcmtzLXBhZ2UvQzpcXFVzZXJzXFxBbGlha3NhbmRyX01pcmFua291XFxEb2N1bWVudHNcXEQuTy5PLkQuSVxcRE9PREkvc3JjXFxhcHBcXHBhZ2VzXFxwZXJrcy1wYWdlXFxwZXJrcy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wZXJrcy1wYWdlL3BlcmtzLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsOEJBQUE7QUFVQSxpQ0FBQTtBQU1BLDZCQUFBO0FBSUEsNkJBQUE7QUNyQkE7RUFDRSw4Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNHRjtBRERFO0VBQ0Usb0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0RYUTtFQ1lSLGtCQUFBO0VBQ0EsZ0JBQUE7QUNHSjtBREFFO0VBQ0UsY0RqQlE7RUNrQlIsb0JBQUE7RUFDQSxlQUFBO0FDRUo7QURDRTtFQUlFLGtCQUFBO0VBQ0EsVUFBQTtBQ0ZKO0FES0U7RUFDRSxXQUFBO0FDSEo7QURNRTtFQUNFLFdBQUE7QUNKSjtBRE9FO0VBQ0UsV0FBQTtBQ0xKO0FEUUU7RUFDRSxXQUFBO0FDTkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wZXJrcy1wYWdlL3BlcmtzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmFzZVdoaXRlOiAjZmZmZmZmO1xyXG4kYmFzZUJsYWNrOiAjMDAwMDAwO1xyXG5cclxuLyotLS0tLS0gYnV0dG9uIGNvbG9ycyAtLS0tLS0qL1xyXG4kYnV0dG9uQmFja2dyb3VuZEFjdGl2ZTogI2RjMzU0NTtcclxuJGJ1dHRvbkJvcmRlckFjdGl2ZTogI2RjMzU0NTtcclxuXHJcbiRidXR0b25CYWNrZ3JvdW5kQXZhaWxhYmxlOiAjMDA3YmZmO1xyXG4kYnV0dG9uQm9yZGVyQXZhaWxhYmxlOiAjMDM1ZGJkO1xyXG5cclxuJGJ1dHRvbkJhY2tncm91bmREaXNhYmxlZDogIzZjNzU3ZDtcclxuJGJ1dHRvbkJvcmRlckRpc2FibGVkOiAjNTU1NjU3O1xyXG5cclxuLyotLS0tLS0gaW5kaWNhdG9yIGNvbG9ycyAtLS0tLS0qL1xyXG4kaW5kaWNhdG9yQ3VycmVudEhlYWxodENvbG9yOiAjM2FjYzE1O1xyXG4kaW5kaWNhdG9yQWxsSGVhbGh0Q29sb3I6ICMyZTljMTI7XHJcbiRpbmRpY2F0b3JDdXJyZW50U3RhbWluYUNvbG9yOiAjMGM3ZmViO1xyXG4kaW5kaWNhdG9yQWxsU3RhbWluYUNvbG9yOiAjMDQ1NmEzO1xyXG5cclxuLyotLS0tLS0gYWxlcnQgY29sb3JzIC0tLS0tLSovXHJcbiR2YWxpZGF0aW9uRXJyb3JCb3JkZXI6IHJnYigyMDYsIDIwLCAyMCk7XHJcbiR2YWxpZGF0aW9uRXJyb3JCYWNrZ3JvdW5kOiByZ2IoMjI2LCAyNSwgMjUpO1xyXG5cclxuLyotLS0tLS0gcGVya3MgY29sb3JzIC0tLS0tLSovXHJcbiRiYXNlUGVya0NvbG9yOiByZ2IoMzMsIDE1OSwgMjMzKTtcclxuIiwiQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL2NvbnN0YW50cy5zY3NzJztcclxuXHJcbi5wZXJrcy1wYWdlIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZG9vZGlfYmFja2dyb3VuZC5wbmcnKSByZXBlYXQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuXHJcbiAgJl9fYXZhaWxhYmxlLXBvaW50cyB7XHJcbiAgICBmb250LWZhbWlseTogVmVyZGFuYTtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiAkYmFzZVdoaXRlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcblxyXG4gICZfX2xldmVsIHtcclxuICAgIGNvbG9yOiAkYmFzZVdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAmX19zdXJ2aXZvcixcclxuICAmX19hcm1vcixcclxuICAmX19waW9uZWVyLFxyXG4gICZfX3N0YW1pbmEge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxOTBweDtcclxuICB9XHJcblxyXG4gICZfX3N1cnZpdm9yIHtcclxuICAgIGxlZnQ6IDEyMHB4O1xyXG4gIH1cclxuXHJcbiAgJl9fYXJtb3Ige1xyXG4gICAgbGVmdDogMzIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gICZfX3Bpb25lZXIge1xyXG4gICAgbGVmdDogNTIwcHg7XHJcbiAgfVxyXG5cclxuICAmX19zdGFtaW5hIHtcclxuICAgIGxlZnQ6IDcyMHB4O1xyXG4gIH1cclxuXHJcbn1cclxuIiwiLyotLS0tLS0gYnV0dG9uIGNvbG9ycyAtLS0tLS0qL1xuLyotLS0tLS0gaW5kaWNhdG9yIGNvbG9ycyAtLS0tLS0qL1xuLyotLS0tLS0gYWxlcnQgY29sb3JzIC0tLS0tLSovXG4vKi0tLS0tLSBwZXJrcyBjb2xvcnMgLS0tLS0tKi9cbi5wZXJrcy1wYWdlIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9kb29kaV9iYWNrZ3JvdW5kLnBuZ1wiKSByZXBlYXQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5wZXJrcy1wYWdlX19hdmFpbGFibGUtcG9pbnRzIHtcbiAgZm9udC1mYW1pbHk6IFZlcmRhbmE7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIG1hcmdpbi1sZWZ0OiAxMDBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5wZXJrcy1wYWdlX19sZXZlbCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LWZhbWlseTogVmVyZGFuYTtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuLnBlcmtzLXBhZ2VfX3N1cnZpdm9yLCAucGVya3MtcGFnZV9fYXJtb3IsIC5wZXJrcy1wYWdlX19waW9uZWVyLCAucGVya3MtcGFnZV9fc3RhbWluYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOTBweDtcbn1cbi5wZXJrcy1wYWdlX19zdXJ2aXZvciB7XG4gIGxlZnQ6IDEyMHB4O1xufVxuLnBlcmtzLXBhZ2VfX2FybW9yIHtcbiAgbGVmdDogMzIwcHg7XG59XG4ucGVya3MtcGFnZV9fcGlvbmVlciB7XG4gIGxlZnQ6IDUyMHB4O1xufVxuLnBlcmtzLXBhZ2VfX3N0YW1pbmEge1xuICBsZWZ0OiA3MjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/perks-page/perks-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/perks-page/perks-page.component.ts ***!
  \**********************************************************/
/*! exports provided: PerksPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerksPageComponent", function() { return PerksPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../options */ "./src/app/options/index.ts");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");




let PerksPageComponent = class PerksPageComponent {
    constructor(personService) {
        this.personService = personService;
        this.perksOption = _options__WEBPACK_IMPORTED_MODULE_2__["perks"];
        this.perks = [];
        this.availablePoints = 0;
        this.isLoaderShown = false;
    }
    ngOnInit() {
        this.getPersonPerks();
    }
    getPersonPerks() {
        this.personService.getPersonInfo().subscribe(person => {
            this.perks = person.character_perks;
            this.availablePoints = person.character_exp;
        });
    }
    activePerks(perkName) {
        this.isLoaderShown = true;
        switch (perkName) {
            case 'armor':
                this.personService.armorPerkUp().subscribe(data => {
                    this.isLoaderShown = false;
                    this.getPersonPerks();
                });
                break;
            case 'pioneer':
                this.personService.luckyPerkUp().subscribe(data => {
                    this.isLoaderShown = false;
                    this.getPersonPerks();
                });
                break;
            case 'stamina':
                this.personService.staminaPerkUp().subscribe(data => {
                    this.isLoaderShown = false;
                    this.getPersonPerks();
                });
                break;
            case 'survivor':
                this.personService.healthPerkUp().subscribe(data => {
                    this.isLoaderShown = false;
                    this.getPersonPerks();
                });
                break;
        }
    }
};
PerksPageComponent.ctorParameters = () => [
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_3__["PersonService"] }
];
PerksPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dod-perks-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./perks-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perks-page/perks-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./perks-page.component.scss */ "./src/app/pages/perks-page/perks-page.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services__WEBPACK_IMPORTED_MODULE_3__["PersonService"]])
], PerksPageComponent);



/***/ }),

/***/ "./src/app/pages/registration-page/registration-page.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/pages/registration-page/registration-page.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*------ button colors ------*/\n/*------ indicator colors ------*/\n/*------ alert colors ------*/\n/*------ perks colors ------*/\n.registration-page {\n  background: url('doodi_background.png') repeat;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.registration-page__field {\n  margin: 20px 0;\n  text-align: center;\n}\n.registration-page__field-text {\n  color: #ffffff;\n  margin-bottom: 5px;\n}\n.registration-page__control {\n  height: 25px;\n  font-size: 16px;\n  padding: 5px;\n  border-radius: 10px;\n  border: none;\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVnaXN0cmF0aW9uLXBhZ2UvQzpcXFVzZXJzXFxBbGlha3NhbmRyX01pcmFua291XFxEb2N1bWVudHNcXEQuTy5PLkQuSVxcRE9PREkvc3JjXFxzdHlsZXNcXGNvbnN0YW50cy5zY3NzIiwic3JjL2FwcC9wYWdlcy9yZWdpc3RyYXRpb24tcGFnZS9DOlxcVXNlcnNcXEFsaWFrc2FuZHJfTWlyYW5rb3VcXERvY3VtZW50c1xcRC5PLk8uRC5JXFxET09ESS9zcmNcXGFwcFxccGFnZXNcXHJlZ2lzdHJhdGlvbi1wYWdlXFxyZWdpc3RyYXRpb24tcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmVnaXN0cmF0aW9uLXBhZ2UvcmVnaXN0cmF0aW9uLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsOEJBQUE7QUFVQSxpQ0FBQTtBQU1BLDZCQUFBO0FBSUEsNkJBQUE7QUNyQkE7RUFDRSw4Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0VGO0FEQUU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUNFSjtBREFJO0VBQ0UsY0RqQk07RUNrQk4sa0JBQUE7QUNFTjtBREVFO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVnaXN0cmF0aW9uLXBhZ2UvcmVnaXN0cmF0aW9uLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmFzZVdoaXRlOiAjZmZmZmZmO1xyXG4kYmFzZUJsYWNrOiAjMDAwMDAwO1xyXG5cclxuLyotLS0tLS0gYnV0dG9uIGNvbG9ycyAtLS0tLS0qL1xyXG4kYnV0dG9uQmFja2dyb3VuZEFjdGl2ZTogI2RjMzU0NTtcclxuJGJ1dHRvbkJvcmRlckFjdGl2ZTogI2RjMzU0NTtcclxuXHJcbiRidXR0b25CYWNrZ3JvdW5kQXZhaWxhYmxlOiAjMDA3YmZmO1xyXG4kYnV0dG9uQm9yZGVyQXZhaWxhYmxlOiAjMDM1ZGJkO1xyXG5cclxuJGJ1dHRvbkJhY2tncm91bmREaXNhYmxlZDogIzZjNzU3ZDtcclxuJGJ1dHRvbkJvcmRlckRpc2FibGVkOiAjNTU1NjU3O1xyXG5cclxuLyotLS0tLS0gaW5kaWNhdG9yIGNvbG9ycyAtLS0tLS0qL1xyXG4kaW5kaWNhdG9yQ3VycmVudEhlYWxodENvbG9yOiAjM2FjYzE1O1xyXG4kaW5kaWNhdG9yQWxsSGVhbGh0Q29sb3I6ICMyZTljMTI7XHJcbiRpbmRpY2F0b3JDdXJyZW50U3RhbWluYUNvbG9yOiAjMGM3ZmViO1xyXG4kaW5kaWNhdG9yQWxsU3RhbWluYUNvbG9yOiAjMDQ1NmEzO1xyXG5cclxuLyotLS0tLS0gYWxlcnQgY29sb3JzIC0tLS0tLSovXHJcbiR2YWxpZGF0aW9uRXJyb3JCb3JkZXI6IHJnYigyMDYsIDIwLCAyMCk7XHJcbiR2YWxpZGF0aW9uRXJyb3JCYWNrZ3JvdW5kOiByZ2IoMjI2LCAyNSwgMjUpO1xyXG5cclxuLyotLS0tLS0gcGVya3MgY29sb3JzIC0tLS0tLSovXHJcbiRiYXNlUGVya0NvbG9yOiByZ2IoMzMsIDE1OSwgMjMzKTtcclxuIiwiQGltcG9ydCAnLi4vLi4vLi4vc3R5bGVzL2NvbnN0YW50cy5zY3NzJztcclxuXHJcbi5yZWdpc3RyYXRpb24tcGFnZSB7XHJcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2Rvb2RpX2JhY2tncm91bmQucG5nJykgcmVwZWF0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgJl9fZmllbGQge1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgJi10ZXh0IHtcclxuICAgICAgY29sb3I6ICRiYXNlV2hpdGU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX2NvbnRyb2wge1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG5cclxufVxyXG4iLCIvKi0tLS0tLSBidXR0b24gY29sb3JzIC0tLS0tLSovXG4vKi0tLS0tLSBpbmRpY2F0b3IgY29sb3JzIC0tLS0tLSovXG4vKi0tLS0tLSBhbGVydCBjb2xvcnMgLS0tLS0tKi9cbi8qLS0tLS0tIHBlcmtzIGNvbG9ycyAtLS0tLS0qL1xuLnJlZ2lzdHJhdGlvbi1wYWdlIHtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9kb29kaV9iYWNrZ3JvdW5kLnBuZ1wiKSByZXBlYXQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucmVnaXN0cmF0aW9uLXBhZ2VfX2ZpZWxkIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5yZWdpc3RyYXRpb24tcGFnZV9fZmllbGQtdGV4dCB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ucmVnaXN0cmF0aW9uLXBhZ2VfX2NvbnRyb2wge1xuICBoZWlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgcGFkZGluZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/registration-page/registration-page.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/registration-page/registration-page.component.ts ***!
  \************************************************************************/
/*! exports provided: RegistrationPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageComponent", function() { return RegistrationPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");





let RegistrationPageComponent = class RegistrationPageComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.profileRegistration = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            nickname: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password_confirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
        });
        this.isLoaderShown = false;
    }
    registration() {
        this.isLoaderShown = true;
        this.authService.userRegistration(this.profileRegistration.value).subscribe(data => {
            this.isLoaderShown = false;
            this.router.navigate(['/login']);
        });
    }
};
RegistrationPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
RegistrationPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dod-registration-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./registration-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/registration-page/registration-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./registration-page.component.scss */ "./src/app/pages/registration-page/registration-page.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
], RegistrationPageComponent);



/***/ }),

/***/ "./src/app/pages/settings-page/settings-page.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/settings-page/settings-page.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*------ button colors ------*/\n/*------ indicator colors ------*/\n/*------ alert colors ------*/\n/*------ perks colors ------*/\n.settings {\n  background: url('doodi_background.png') repeat;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.settings__buttons {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: none;\n}\n.settings__buttons dod-button {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2V0dGluZ3MtcGFnZS9DOlxcVXNlcnNcXEFsaWFrc2FuZHJfTWlyYW5rb3VcXERvY3VtZW50c1xcRC5PLk8uRC5JXFxET09ESS9zcmNcXHN0eWxlc1xcY29uc3RhbnRzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3NldHRpbmdzLXBhZ2UvQzpcXFVzZXJzXFxBbGlha3NhbmRyX01pcmFua291XFxEb2N1bWVudHNcXEQuTy5PLkQuSVxcRE9PREkvc3JjXFxhcHBcXHBhZ2VzXFxzZXR0aW5ncy1wYWdlXFxzZXR0aW5ncy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9zZXR0aW5ncy1wYWdlL3NldHRpbmdzLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0EsOEJBQUE7QUFVQSxpQ0FBQTtBQU1BLDZCQUFBO0FBSUEsNkJBQUE7QUNyQkE7RUFDRSw4Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNHRjtBRERFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNHSjtBRERJO0VBQ0UsWUFBQTtBQ0dOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2V0dGluZ3MtcGFnZS9zZXR0aW5ncy1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJhc2VXaGl0ZTogI2ZmZmZmZjtcclxuJGJhc2VCbGFjazogIzAwMDAwMDtcclxuXHJcbi8qLS0tLS0tIGJ1dHRvbiBjb2xvcnMgLS0tLS0tKi9cclxuJGJ1dHRvbkJhY2tncm91bmRBY3RpdmU6ICNkYzM1NDU7XHJcbiRidXR0b25Cb3JkZXJBY3RpdmU6ICNkYzM1NDU7XHJcblxyXG4kYnV0dG9uQmFja2dyb3VuZEF2YWlsYWJsZTogIzAwN2JmZjtcclxuJGJ1dHRvbkJvcmRlckF2YWlsYWJsZTogIzAzNWRiZDtcclxuXHJcbiRidXR0b25CYWNrZ3JvdW5kRGlzYWJsZWQ6ICM2Yzc1N2Q7XHJcbiRidXR0b25Cb3JkZXJEaXNhYmxlZDogIzU1NTY1NztcclxuXHJcbi8qLS0tLS0tIGluZGljYXRvciBjb2xvcnMgLS0tLS0tKi9cclxuJGluZGljYXRvckN1cnJlbnRIZWFsaHRDb2xvcjogIzNhY2MxNTtcclxuJGluZGljYXRvckFsbEhlYWxodENvbG9yOiAjMmU5YzEyO1xyXG4kaW5kaWNhdG9yQ3VycmVudFN0YW1pbmFDb2xvcjogIzBjN2ZlYjtcclxuJGluZGljYXRvckFsbFN0YW1pbmFDb2xvcjogIzA0NTZhMztcclxuXHJcbi8qLS0tLS0tIGFsZXJ0IGNvbG9ycyAtLS0tLS0qL1xyXG4kdmFsaWRhdGlvbkVycm9yQm9yZGVyOiByZ2IoMjA2LCAyMCwgMjApO1xyXG4kdmFsaWRhdGlvbkVycm9yQmFja2dyb3VuZDogcmdiKDIyNiwgMjUsIDI1KTtcclxuXHJcbi8qLS0tLS0tIHBlcmtzIGNvbG9ycyAtLS0tLS0qL1xyXG4kYmFzZVBlcmtDb2xvcjogcmdiKDMzLCAxNTksIDIzMyk7XHJcbiIsIkBpbXBvcnQgJy4uLy4uLy4uL3N0eWxlcy9jb25zdGFudHMuc2Nzcyc7XHJcblxyXG4uc2V0dGluZ3Mge1xyXG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy9kb29kaV9iYWNrZ3JvdW5kLnBuZycpIHJlcGVhdDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAmX19idXR0b25zIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcblxyXG4gICAgJiBkb2QtYnV0dG9uIHtcclxuICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIiwiLyotLS0tLS0gYnV0dG9uIGNvbG9ycyAtLS0tLS0qL1xuLyotLS0tLS0gaW5kaWNhdG9yIGNvbG9ycyAtLS0tLS0qL1xuLyotLS0tLS0gYWxlcnQgY29sb3JzIC0tLS0tLSovXG4vKi0tLS0tLSBwZXJrcyBjb2xvcnMgLS0tLS0tKi9cbi5zZXR0aW5ncyB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvZG9vZGlfYmFja2dyb3VuZC5wbmdcIikgcmVwZWF0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4uc2V0dGluZ3NfX2J1dHRvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiBub25lO1xufVxuLnNldHRpbmdzX19idXR0b25zIGRvZC1idXR0b24ge1xuICBtYXJnaW46IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/settings-page/settings-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/settings-page/settings-page.component.ts ***!
  \****************************************************************/
/*! exports provided: SettingsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageComponent", function() { return SettingsPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");



let SettingsPageComponent = class SettingsPageComponent {
    constructor(soundtrackService) {
        this.soundtrackService = soundtrackService;
        this.isSongPlay = 'Вкл';
    }
    toggleSong() {
        if (this.isSongPlay === 'Вкл') {
            this.soundtrackService.muteSoundtrack();
            this.isSongPlay = 'Выкл';
        }
        else {
            this.soundtrackService.playSoundtrack();
            this.isSongPlay = 'Вкл';
        }
    }
};
SettingsPageComponent.ctorParameters = () => [
    { type: _services__WEBPACK_IMPORTED_MODULE_2__["SoundtrackService"] }
];
SettingsPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dod-settings-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/settings-page/settings-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings-page.component.scss */ "./src/app/pages/settings-page/settings-page.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["SoundtrackService"]])
], SettingsPageComponent);



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let AuthService = class AuthService {
    constructor(http) {
        this.http = http;
        this.baseApi = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseApi;
    }
    userRegistration(data) {
        return this.http.post(`${this.baseApi}/r/sign_up/`, data);
    }
    userLogin(data) {
        return this.http.post(`${this.baseApi}/r/sign_in/`, data);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AuthService);



/***/ }),

/***/ "./src/app/services/event.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/event.service.ts ***!
  \*******************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let EventService = class EventService {
    constructor(http) {
        this.http = http;
        this.baseApi = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseApi;
        this.characterId = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].character_id;
    }
    sendPersonChoice(path) {
        return this.http.post(`${this.baseApi}/${path}`, {
            character_id: window.localStorage.getItem('character_id')
        }, {
            headers: { Authorization: 'Token ' + localStorage.getItem('token')
            }
        });
    }
    changeHP(useValue) {
        return this.http.post(`${this.baseApi}/character_health_change/`, { character_id: window.localStorage.getItem('character_id'), value: useValue }, {
            headers: { Authorization: 'Token ' + localStorage.getItem('token')
            }
        });
    }
    changeStamina(useValue) {
        return this.http.post(`${this.baseApi}/character_stamina_change/`, { character_id: window.localStorage.getItem('character_id'), value: useValue }, {
            headers: { Authorization: 'Token ' + localStorage.getItem('token')
            }
        });
    }
    foundItem(useValue) {
        return this.http.post(`${this.baseApi}/character_get_item/`, { character_id: window.localStorage.getItem('character_id'), item: useValue }, {
            headers: { Authorization: 'Token ' + localStorage.getItem('token')
            }
        });
    }
};
EventService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EventService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], EventService);



/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: LocationService, SoundtrackService, PersonService, EventService, AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location.service */ "./src/app/services/location.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return _location_service__WEBPACK_IMPORTED_MODULE_1__["LocationService"]; });

/* harmony import */ var _soundtrack_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./soundtrack.service */ "./src/app/services/soundtrack.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SoundtrackService", function() { return _soundtrack_service__WEBPACK_IMPORTED_MODULE_2__["SoundtrackService"]; });

/* harmony import */ var _person_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./person.service */ "./src/app/services/person.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PersonService", function() { return _person_service__WEBPACK_IMPORTED_MODULE_3__["PersonService"]; });

/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event.service */ "./src/app/services/event.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return _event_service__WEBPACK_IMPORTED_MODULE_4__["EventService"]; });

/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]; });









/***/ }),

/***/ "./src/app/services/location.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/location.service.ts ***!
  \**********************************************/
/*! exports provided: LocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationService", function() { return LocationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




let LocationService = class LocationService {
    constructor(http) {
        this.http = http;
        this.baseApi = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].baseApi;
        this.characterId = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].character_id;
    }
    getLocations() {
        return this.http.post(`${this.baseApi}/get_part_location/`, { location_id: 1, character_id: window.localStorage.getItem('character_id') }, {
            headers: { Authorization: 'Token ' + localStorage.getItem('token')
            }
        });
    }
    getEvent() {
        return this.http.post(`${this.baseApi}/get_event/`, { location_id: 1 }, {
            headers: { Authorization: 'Token ' + localStorage.getItem('token')
            }
        });
    }
    getLocationEvent(locationName) {
        return this.http.post(`${this.baseApi}/search_on_place/`, { place_name: locationName, character_id: window.localStorage.getItem('character_id') }, {
            headers: { Authorization: 'Token ' + localStorage.getItem('token')
            }
        });
    }
    locationEngine(stepId, locations) {
        // tslint:disable-next-line: forin
        for (const key in locations) {
            if (stepId === '005' || stepId === '008') {
                if (locations[key].id_slot === '1') {
                    locations[key].disabled = false;
                }
            }
            else {
                if (locations[key].id_slot === '1') {
                    locations[key].disabled = true;
                }
            }
            if (stepId === '069' || stepId === '066') {
                if (locations[key].id_slot === '2') {
                    locations[key].disabled = false;
                }
            }
            else {
                if (locations[key].id_slot === '2') {
                    locations[key].disabled = true;
                }
            }
            if (stepId === '072' || stepId === '108') {
                if (locations[key].id_slot === '3') {
                    locations[key].disabled = false;
                }
            }
            else {
                if (locations[key].id_slot === '3') {
                    locations[key].disabled = true;
                }
            }
            if (stepId === '118') {
                if (locations[key].id_slot === '4') {
                    locations[key].disabled = false;
                }
            }
            else {
                if (locations[key].id_slot === '4') {
                    locations[key].disabled = true;
                }
            }
            if (stepId === '126' || stepId === '146') {
                if (locations[key].id_slot === '5') {
                    locations[key].disabled = false;
                }
            }
            else {
                if (locations[key].id_slot === '5') {
                    locations[key].disabled = true;
                }
            }
            if (stepId === '172' || stepId === '171' || stepId === '193') {
                if (locations[key].id_slot === '6') {
                    locations[key].disabled = false;
                }
            }
            else {
                if (locations[key].id_slot === '6') {
                    locations[key].disabled = true;
                }
            }
            if (stepId === '211' || stepId === '206') {
                if (locations[key].id_slot === '7') {
                    locations[key].disabled = false;
                }
            }
            else {
                if (locations[key].id_slot === '7') {
                    locations[key].disabled = true;
                }
            }
            if (stepId === '176') {
                if (locations[key].id_slot === '8') {
                    locations[key].disabled = false;
                }
            }
            else {
                if (locations[key].id_slot === '8') {
                    locations[key].disabled = true;
                }
            }
            if (stepId === '238') {
                if (locations[key].id_slot === '9') {
                    locations[key].disabled = false;
                }
            }
            else {
                if (locations[key].id_slot === '9') {
                    locations[key].disabled = true;
                }
            }
            if (stepId === '197' || stepId === '210') {
                if (locations[key].id_slot === '10') {
                    locations[key].disabled = false;
                }
            }
            else {
                if (locations[key].id_slot === '10') {
                    locations[key].disabled = true;
                }
            }
            if (stepId === '167' || stepId === '236') {
                if (locations[key].id_slot === '11') {
                    locations[key].disabled = false;
                }
            }
            else {
                if (locations[key].id_slot === '11') {
                    locations[key].disabled = true;
                }
            }
            if (stepId === '222' || stepId === '216') {
                if (locations[key].id_slot === '12') {
                    locations[key].disabled = false;
                }
            }
            else {
                if (locations[key].id_slot === '12') {
                    locations[key].disabled = true;
                }
            }
            if (stepId === '031' || stepId === '033') {
                if (locations[key].id_slot === '13') {
                    locations[key].disabled = false;
                }
            }
            else {
                if (locations[key].id_slot === '13') {
                    locations[key].disabled = true;
                }
            }
            if (stepId === '047' || stepId === '043') {
                if (locations[key].id_slot === '14') {
                    locations[key].disabled = false;
                }
            }
            else {
                if (locations[key].id_slot === '14') {
                    locations[key].disabled = true;
                }
            }
            if (stepId === '053') {
                if (locations[key].id_slot === '15') {
                    locations[key].disabled = false;
                }
            }
            else {
                if (locations[key].id_slot === '15') {
                    locations[key].disabled = true;
                }
            }
            if (stepId === '226' || stepId === '201') {
                if (locations[key].id_slot === '16') {
                    locations[key].disabled = false;
                }
            }
            else {
                if (locations[key].id_slot === '16') {
                    locations[key].disabled = true;
                }
            }
        }
    }
    transitionEngine(stepId, arrows) {
        // tslint:disable-next-line: forin
        for (const key in arrows) {
            if (stepId === '012') {
                if (arrows[key].id === 'a') {
                    arrows[key].disabled = false;
                }
            }
            else {
                if (arrows[key].id === 'a') {
                    arrows[key].disabled = true;
                }
            }
            if (stepId === '032') {
                if (arrows[key].id === 'b') {
                    arrows[key].disabled = false;
                }
            }
            else {
                if (arrows[key].id === 'b') {
                    arrows[key].disabled = true;
                }
            }
            if (stepId === '9204') {
                if (arrows[key].id === 'c') {
                    arrows[key].disabled = false;
                }
            }
            else {
                if (arrows[key].id === 'c') {
                    arrows[key].disabled = true;
                }
            }
            if (stepId === '169') {
                if (arrows[key].id === 'd') {
                    arrows[key].disabled = false;
                }
            }
            else {
                if (arrows[key].id === 'd') {
                    arrows[key].disabled = true;
                }
            }
            if (stepId === '244') {
                if (arrows[key].id === 'e') {
                    arrows[key].disabled = false;
                }
            }
            else {
                if (arrows[key].id === 'e') {
                    arrows[key].disabled = true;
                }
            }
            if (stepId === '249') {
                if (arrows[key].id === 'f') {
                    arrows[key].disabled = false;
                }
            }
            else {
                if (arrows[key].id === 'f') {
                    arrows[key].disabled = true;
                }
            }
            if (stepId === '125') {
                if (arrows[key].id === 'g') {
                    arrows[key].disabled = false;
                }
            }
            else {
                if (arrows[key].id === 'g') {
                    arrows[key].disabled = true;
                }
            }
            if (stepId === '117') {
                if (arrows[key].id === 'h') {
                    arrows[key].disabled = false;
                }
            }
            else {
                if (arrows[key].id === 'h') {
                    arrows[key].disabled = true;
                }
            }
            if (stepId === '060') {
                if (arrows[key].id === 'k') {
                    arrows[key].disabled = false;
                }
            }
            else {
                if (arrows[key].id === 'k') {
                    arrows[key].disabled = true;
                }
            }
        }
    }
};
LocationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LocationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], LocationService);



/***/ }),

/***/ "./src/app/services/person.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/person.service.ts ***!
  \********************************************/
/*! exports provided: PersonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonService", function() { return PersonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





let PersonService = class PersonService {
    constructor(http) {
        this.http = http;
        this.baseApi = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseApi;
        this.characterId = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].character_id;
        this.person = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({
            id: 1,
            character_inventory: [],
            character_name: '',
            character_stamina: 100,
            character_health: 100,
            character_max_health: 100,
            character_max_stamina: 100,
            character_perks: []
        });
    }
    createPerson() {
        return this.http.post(`${this.baseApi}/create_new_character/`, {
            character_name: 'Name'
        }, {
            headers: { Authorization: 'Token ' + localStorage.getItem('token')
            }
        });
    }
    getPersonInfo() {
        return this.http.post(`${this.baseApi}/get_character_stats/`, {
            character_id: window.localStorage.getItem('character_id')
        }, {
            headers: { Authorization: 'Token ' + localStorage.getItem('token')
            }
        });
    }
    getPersonState() {
        return this.person;
    }
    updatePersonStats(person) {
        this.person.next(person);
    }
    getPersonInventory() {
        return this.http.get(`${this.baseApi}/get_player_inventory`, {
            headers: { Authorization: 'Token ' + localStorage.getItem('token')
            }
        });
    }
    useItem(item) {
        return this.http.get(`${this.baseApi}/use_${item}`, {
            headers: { Authorization: 'Token ' + localStorage.getItem('token')
            }
        });
    }
    getPersonId() {
        return this.http.get(`${this.baseApi}/get_id/`, {
            headers: { Authorization: 'Token ' + localStorage.getItem('token')
            }
        });
    }
    changeStamina(id) {
        return this.http.post(`${this.baseApi}/change_stamina_by_move/`, {
            character_id: window.localStorage.getItem('character_id')
        }, {
            headers: { Authorization: 'Token ' + localStorage.getItem('token')
            }
        });
    }
    healthPerkUp() {
        return this.http.post(`${this.baseApi}/up_max_health/`, {
            character_id: window.localStorage.getItem('character_id')
        }, {
            headers: { Authorization: 'Token ' + localStorage.getItem('token')
            }
        });
    }
    staminaPerkUp() {
        return this.http.post(`${this.baseApi}/up_max_stamina/`, {
            character_id: window.localStorage.getItem('character_id')
        }, {
            headers: { Authorization: 'Token ' + localStorage.getItem('token')
            }
        });
    }
    armorPerkUp() {
        return this.http.post(`${this.baseApi}/up_armor/`, {
            character_id: window.localStorage.getItem('character_id')
        }, {
            headers: { Authorization: 'Token ' + localStorage.getItem('token')
            }
        });
    }
    luckyPerkUp() {
        return this.http.post(`${this.baseApi}/up_max_slot/`, {
            character_id: window.localStorage.getItem('character_id')
        }, {
            headers: { Authorization: 'Token ' + localStorage.getItem('token')
            }
        });
    }
    useItemFromInventory(index) {
        return this.http.post(`${this.baseApi}/character_use_item/`, { character_id: window.localStorage.getItem('character_id'), item_id: index }, {
            headers: { Authorization: 'Token ' + localStorage.getItem('token')
            }
        });
    }
};
PersonService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
PersonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], PersonService);



/***/ }),

/***/ "./src/app/services/soundtrack.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/soundtrack.service.ts ***!
  \************************************************/
/*! exports provided: SoundtrackService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundtrackService", function() { return SoundtrackService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! howler */ "./node_modules/howler/dist/howler.js");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_2__);



let SoundtrackService = class SoundtrackService {
    constructor() {
        this.soundrtackDefaultConfig = {
            songUrl: 'assets/soundtracks/main_soundtrack.mp3',
            loop: true,
            volume: 0.3
        };
    }
    playSoundtrack(config = this.soundrtackDefaultConfig) {
        this.sound = new howler__WEBPACK_IMPORTED_MODULE_2__["Howl"]({
            src: [config.songUrl],
            loop: config.loop,
        });
        this.sound.play();
        howler__WEBPACK_IMPORTED_MODULE_2__["Howler"].volume(config.volume);
    }
    muteSoundtrack() {
        this.sound.stop();
    }
};
SoundtrackService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SoundtrackService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const environment = {
    production: false,
    baseApi: 'https://doodi.herokuapp.com',
    token: {
        headers: { Authorization: 'Token ' + localStorage.getItem('token') }
    },
    character_id: window.localStorage.getItem('character_id'),
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Aliaksandr_Mirankou\Documents\D.O.O.D.I\DOODI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map