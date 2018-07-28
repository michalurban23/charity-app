(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/main.module.ts":
/*!********************************!*\
  !*** ./src/app/main.module.ts ***!
  \********************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modules_survey_components_survey_survey_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/survey/components/survey/survey.component */ "./src/app/modules/survey/components/survey/survey.component.ts");
/* harmony import */ var _modules_menu_components_survey_choose_survey_choose_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/menu/components/survey-choose/survey-choose.component */ "./src/app/modules/menu/components/survey-choose/survey-choose.component.ts");
/* harmony import */ var _modules_menu_menu_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/menu/menu.module */ "./src/app/modules/menu/menu.module.ts");
/* harmony import */ var _modules_menu_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/menu/components/menu/menu.component */ "./src/app/modules/menu/components/menu/menu.component.ts");
/* harmony import */ var _modules_survey_survey_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/survey/survey.module */ "./src/app/modules/survey/survey.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _modules_statistics_statistics_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/statistics/statistics.module */ "./src/app/modules/statistics/statistics.module.ts");
/* harmony import */ var _modules_statistics_components_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/statistics/components/statistics/statistics.component */ "./src/app/modules/statistics/components/statistics/statistics.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    { path: 'survey', component: _modules_survey_components_survey_survey_component__WEBPACK_IMPORTED_MODULE_3__["SurveyComponent"] },
    { path: 'choose', component: _modules_menu_components_survey_choose_survey_choose_component__WEBPACK_IMPORTED_MODULE_4__["SurveyChooseComponent"] },
    { path: 'stats', component: _modules_statistics_components_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_11__["StatisticsComponent"] },
    { path: '', component: _modules_menu_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_6__["MenuComponent"] },
];
var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _modules_menu_menu_module__WEBPACK_IMPORTED_MODULE_5__["MenuModule"],
                _modules_survey_survey_module__WEBPACK_IMPORTED_MODULE_7__["SurveyModule"],
                _modules_statistics_statistics_module__WEBPACK_IMPORTED_MODULE_10__["StatisticsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes),
            ],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "./src/app/models/answer.ts":
/*!**********************************!*\
  !*** ./src/app/models/answer.ts ***!
  \**********************************/
/*! exports provided: Answer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Answer", function() { return Answer; });
var Answer = /** @class */ (function () {
    function Answer(responses, surveyId, contactId) {
        this.responses = responses;
        this.surveyId = surveyId;
        this.contactId = contactId;
    }
    return Answer;
}());



/***/ }),

/***/ "./src/app/models/contact.ts":
/*!***********************************!*\
  !*** ./src/app/models/contact.ts ***!
  \***********************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
var Contact = /** @class */ (function () {
    function Contact(id, name) {
        this.id = id;
        this.name = name;
    }
    return Contact;
}());



/***/ }),

/***/ "./src/app/models/question-answer.ts":
/*!*******************************************!*\
  !*** ./src/app/models/question-answer.ts ***!
  \*******************************************/
/*! exports provided: QuestionAnswer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionAnswer", function() { return QuestionAnswer; });
var QuestionAnswer = /** @class */ (function () {
    function QuestionAnswer(key, values) {
        this.key = key;
        this.values = values;
    }
    return QuestionAnswer;
}());



/***/ }),

/***/ "./src/app/models/question-type.enum.ts":
/*!**********************************************!*\
  !*** ./src/app/models/question-type.enum.ts ***!
  \**********************************************/
/*! exports provided: QuestionType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionType", function() { return QuestionType; });
var QuestionType;
(function (QuestionType) {
    QuestionType["input"] = "Text Input";
    QuestionType["textarea"] = "Textarea Input";
    QuestionType["radiobox"] = "Single choice";
    QuestionType["checkbox"] = "Multiple choice";
})(QuestionType || (QuestionType = {}));


/***/ }),

/***/ "./src/app/models/question.ts":
/*!************************************!*\
  !*** ./src/app/models/question.ts ***!
  \************************************/
/*! exports provided: Question */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
var Question = /** @class */ (function () {
    function Question() {
        this.label = '';
        this.type = undefined;
        this.model = undefined;
        this.values = [];
        this.placeholder = '';
        this.required = false;
        this.id = undefined;
        this.lineup = Question.nextId++;
    }
    Question.nextId = 0;
    return Question;
}());



/***/ }),

/***/ "./src/app/models/schema.ts":
/*!**********************************!*\
  !*** ./src/app/models/schema.ts ***!
  \**********************************/
/*! exports provided: Schema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Schema", function() { return Schema; });
var Schema = /** @class */ (function () {
    function Schema() {
        this.fields = [];
    }
    return Schema;
}());



/***/ }),

/***/ "./src/app/models/survey.ts":
/*!**********************************!*\
  !*** ./src/app/models/survey.ts ***!
  \**********************************/
/*! exports provided: Survey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Survey", function() { return Survey; });
var Survey = /** @class */ (function () {
    function Survey(id, name, schema) {
        this.id = id;
        this.name = name;
        this.schema = schema;
    }
    return Survey;
}());



/***/ }),

/***/ "./src/app/modules/menu/components/menu/menu.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/modules/menu/components/menu/menu.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/menu/components/menu/menu.component.html":
/*!******************************************************************!*\
  !*** ./src/app/modules/menu/components/menu/menu.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-button (click)=\"createSurvey()\">Create survey</button>\n<button mat-button (click)=\"fillSurvey()\">Fill survey</button>\n"

/***/ }),

/***/ "./src/app/modules/menu/components/menu/menu.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/menu/components/menu/menu.component.ts ***!
  \****************************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuComponent = /** @class */ (function () {
    function MenuComponent(router) {
        this.router = router;
    }
    MenuComponent.prototype.createSurvey = function () {
        this.router.navigateByUrl('/survey;new');
    };
    MenuComponent.prototype.fillSurvey = function () {
        this.router.navigateByUrl('/choose');
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/modules/menu/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/modules/menu/components/menu/menu.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/modules/menu/components/survey-choose/contact-create-dialog/contact-create-dialog.component.css":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/menu/components/survey-choose/contact-create-dialog/contact-create-dialog.component.css ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/menu/components/survey-choose/contact-create-dialog/contact-create-dialog.component.html":
/*!******************************************************************************************************************!*\
  !*** ./src/app/modules/menu/components/survey-choose/contact-create-dialog/contact-create-dialog.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\n  <mat-form-field>\n    <input matInput placeholder=\"Name\" [(ngModel)]=\"data.name\">\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button [mat-dialog-close]=\"data.name\" cdkFocusInitial>Save</button>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/menu/components/survey-choose/contact-create-dialog/contact-create-dialog.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/menu/components/survey-choose/contact-create-dialog/contact-create-dialog.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: ContactCreateDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactCreateDialogComponent", function() { return ContactCreateDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ContactCreateDialogComponent = /** @class */ (function () {
    function ContactCreateDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ContactCreateDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-create-dialog',
            template: __webpack_require__(/*! ./contact-create-dialog.component.html */ "./src/app/modules/menu/components/survey-choose/contact-create-dialog/contact-create-dialog.component.html"),
            styles: [__webpack_require__(/*! ./contact-create-dialog.component.css */ "./src/app/modules/menu/components/survey-choose/contact-create-dialog/contact-create-dialog.component.css")]
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object])
    ], ContactCreateDialogComponent);
    return ContactCreateDialogComponent;
}());



/***/ }),

/***/ "./src/app/modules/menu/components/survey-choose/survey-choose.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/menu/components/survey-choose/survey-choose.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/menu/components/survey-choose/survey-choose.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/modules/menu/components/survey-choose/survey-choose.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-vertical-stepper #stepper>\n  <mat-step>\n    <form  *ngIf=\"surveys.length\">\n      <ng-template matStepLabel>Wybierz ankiete</ng-template>\n      <mat-form-field>\n        <mat-select [(value)]=\"chosenSurvey\" required>\n          <mat-option *ngFor=\"let survey of surveys\" [value]=\"survey\">{{survey.name}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </form>\n    <p *ngIf=\"!surveys.length\">Nie ma jeszcze ankiet!</p>\n  </mat-step>\n  <mat-step>\n    <form>\n      <ng-template matStepLabel>Wybierz kontakt</ng-template>\n      <mat-form-field *ngIf=\"contacts.length\">\n        <mat-select [(value)]=\"chosenContact\" required>\n          <mat-option *ngFor=\"let contact of contacts\" [value]=\"contact\">{{contact.name}}</mat-option>\n        </mat-select>\n      </mat-form-field>\n    </form>\n    <button (click)=\"createContact()\">create new one</button>\n  </mat-step>\n  <mat-step>\n    <form>\n      <ng-template matStepLabel>Wypełnij!</ng-template>\n        <div>\n          <button mat-button [disabled]=\"!chosenSurvey || !chosenContact\" (click)=\"fill()\"><span>Wypełnij </span><mat-icon>send</mat-icon></button>\n        </div>\n    </form>\n\n  </mat-step>\n</mat-vertical-stepper>\n"

/***/ }),

/***/ "./src/app/modules/menu/components/survey-choose/survey-choose.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/menu/components/survey-choose/survey-choose.component.ts ***!
  \**********************************************************************************/
/*! exports provided: SurveyChooseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyChooseComponent", function() { return SurveyChooseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _contact_create_dialog_contact_create_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact-create-dialog/contact-create-dialog.component */ "./src/app/modules/menu/components/survey-choose/contact-create-dialog/contact-create-dialog.component.ts");
/* harmony import */ var _models_contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../models/contact */ "./src/app/models/contact.ts");
/* harmony import */ var _services_survey_service_survey_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/survey-service/survey.service */ "./src/app/services/survey-service/survey.service.ts");
/* harmony import */ var _services_contact_service_contact_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/contact-service/contact.service */ "./src/app/services/contact-service/contact.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SurveyChooseComponent = /** @class */ (function () {
    function SurveyChooseComponent(surveyService, contactService, router, dialog) {
        var _this = this;
        this.surveyService = surveyService;
        this.contactService = contactService;
        this.router = router;
        this.dialog = dialog;
        this.surveyService.getAll().subscribe(function (surveys) {
            _this.surveys = surveys;
        });
        this.loadContacts();
    }
    SurveyChooseComponent.prototype.loadContacts = function () {
        var _this = this;
        this.contactService.getAll().subscribe(function (contacts) {
            _this.contacts = contacts;
        });
    };
    SurveyChooseComponent.prototype.fill = function () {
        console.log(this.chosenSurvey);
        this.router.navigateByUrl('/survey;id=' + this.chosenSurvey.id + ';contactId=' + this.chosenContact.id);
    };
    SurveyChooseComponent.prototype.createContact = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_contact_create_dialog_contact_create_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ContactCreateDialogComponent"], {
            width: '250px',
            data: {
                name: ''
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            var contact = new _models_contact__WEBPACK_IMPORTED_MODULE_3__["Contact"](undefined, result);
            _this.contactService.persist(contact).subscribe(function () {
                _this.loadContacts();
            });
        });
    };
    SurveyChooseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-survey-choose',
            template: __webpack_require__(/*! ./survey-choose.component.html */ "./src/app/modules/menu/components/survey-choose/survey-choose.component.html"),
            styles: [__webpack_require__(/*! ./survey-choose.component.css */ "./src/app/modules/menu/components/survey-choose/survey-choose.component.css")]
        }),
        __metadata("design:paramtypes", [_services_survey_service_survey_service__WEBPACK_IMPORTED_MODULE_4__["SurveyService"], _services_contact_service_contact_service__WEBPACK_IMPORTED_MODULE_5__["ContactService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], SurveyChooseComponent);
    return SurveyChooseComponent;
}());



/***/ }),

/***/ "./src/app/modules/menu/menu.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/menu/menu.module.ts ***!
  \*********************************************/
/*! exports provided: MenuModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuModule", function() { return MenuModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/modules/menu/components/menu/menu.component.ts");
/* harmony import */ var _components_survey_choose_survey_choose_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/survey-choose/survey-choose.component */ "./src/app/modules/menu/components/survey-choose/survey-choose.component.ts");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _components_survey_choose_contact_create_dialog_contact_create_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/survey-choose/contact-create-dialog/contact-create-dialog.component */ "./src/app/modules/menu/components/survey-choose/contact-create-dialog/contact-create-dialog.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var MenuModule = /** @class */ (function () {
    function MenuModule() {
    }
    MenuModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStepperModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
            ],
            declarations: [_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["MenuComponent"], _components_survey_choose_survey_choose_component__WEBPACK_IMPORTED_MODULE_3__["SurveyChooseComponent"], _components_survey_choose_contact_create_dialog_contact_create_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ContactCreateDialogComponent"]],
            entryComponents: [_components_survey_choose_contact_create_dialog_contact_create_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ContactCreateDialogComponent"]]
        })
    ], MenuModule);
    return MenuModule;
}());



/***/ }),

/***/ "./src/app/modules/statistics/components/statistics/statistics.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/modules/statistics/components/statistics/statistics.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n    <mat-select placeholder=\"Ankieta\" (selectionChange)=\"selectSurvey($event.value)\">\n        <mat-option *ngFor=\"let survey of surveys\" [value]=\"survey.id\">\n            {{survey.name}}\n        </mat-option>\n    </mat-select>\n</mat-form-field>\n<div *ngIf=\"answers\">\n    <survey-answer *ngFor=\"let answer of answers\"\n                   [answer]=\"answer\">\n    </survey-answer>\n</div>"

/***/ }),

/***/ "./src/app/modules/statistics/components/statistics/statistics.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/statistics/components/statistics/statistics.component.ts ***!
  \**********************************************************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_survey_service_survey_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/survey-service/survey.service */ "./src/app/services/survey-service/survey.service.ts");
/* harmony import */ var _services_answer_service_answer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/answer-service/answer.service */ "./src/app/services/answer-service/answer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StatisticsComponent = /** @class */ (function () {
    function StatisticsComponent(surveyService, answerService) {
        var _this = this;
        this.surveyService = surveyService;
        this.answerService = answerService;
        this.surveyService.getAll().subscribe(function (surveys) {
            _this.surveys = surveys;
        });
    }
    StatisticsComponent.prototype.selectSurvey = function (surveyId) {
        var _this = this;
        console.log('dupa');
        this.answerService.getBySurvey(surveyId).subscribe(function (answers) {
            _this.answers = answers;
            console.log(_this.answers);
        });
    };
    StatisticsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-statistics',
            template: __webpack_require__(/*! ./statistics.component.html */ "./src/app/modules/statistics/components/statistics/statistics.component.html"),
        }),
        __metadata("design:paramtypes", [_services_survey_service_survey_service__WEBPACK_IMPORTED_MODULE_1__["SurveyService"], _services_answer_service_answer_service__WEBPACK_IMPORTED_MODULE_2__["AnswerService"]])
    ], StatisticsComponent);
    return StatisticsComponent;
}());



/***/ }),

/***/ "./src/app/modules/statistics/components/survey-answer/survey-answer.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/statistics/components/survey-answer/survey-answer.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>Kontant: {{contact.name}}</p>\n<div *ngFor=\"let question of survey.schema.fields\">\n  <p>{{question.label}}: {{answer.responses[question.model]}}</p>\n</div>"

/***/ }),

/***/ "./src/app/modules/statistics/components/survey-answer/survey-answer.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/statistics/components/survey-answer/survey-answer.component.ts ***!
  \****************************************************************************************/
/*! exports provided: SurveyAnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyAnswerComponent", function() { return SurveyAnswerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_answer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/answer */ "./src/app/models/answer.ts");
/* harmony import */ var _services_survey_service_survey_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/survey-service/survey.service */ "./src/app/services/survey-service/survey.service.ts");
/* harmony import */ var _services_contact_service_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/contact-service/contact.service */ "./src/app/services/contact-service/contact.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SurveyAnswerComponent = /** @class */ (function () {
    function SurveyAnswerComponent(surveyService, contactService) {
        this.surveyService = surveyService;
        this.contactService = contactService;
    }
    SurveyAnswerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.surveyService.get(this.answer.surveyId).subscribe(function (survey) {
            _this.survey = survey;
        });
        this.contactService.get(this.answer.contactId).subscribe(function (contact) {
            _this.contact = contact;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_answer__WEBPACK_IMPORTED_MODULE_1__["Answer"])
    ], SurveyAnswerComponent.prototype, "answer", void 0);
    SurveyAnswerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'survey-answer',
            template: __webpack_require__(/*! ./survey-answer.component.html */ "./src/app/modules/statistics/components/survey-answer/survey-answer.component.html"),
        }),
        __metadata("design:paramtypes", [_services_survey_service_survey_service__WEBPACK_IMPORTED_MODULE_2__["SurveyService"], _services_contact_service_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"]])
    ], SurveyAnswerComponent);
    return SurveyAnswerComponent;
}());



/***/ }),

/***/ "./src/app/modules/statistics/statistics.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/statistics/statistics.module.ts ***!
  \*********************************************************/
/*! exports provided: StatisticsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsModule", function() { return StatisticsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/statistics/statistics.component */ "./src/app/modules/statistics/components/statistics/statistics.component.ts");
/* harmony import */ var _components_survey_answer_survey_answer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/survey-answer/survey-answer.component */ "./src/app/modules/statistics/components/survey-answer/survey-answer.component.ts");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var StatisticsModule = /** @class */ (function () {
    function StatisticsModule() {
    }
    StatisticsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            ],
            declarations: [_components_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_2__["StatisticsComponent"], _components_survey_answer_survey_answer_component__WEBPACK_IMPORTED_MODULE_3__["SurveyAnswerComponent"]]
        })
    ], StatisticsModule);
    return StatisticsModule;
}());



/***/ }),

/***/ "./src/app/modules/survey/components/panel/generators/components/abstract/multiple-generator.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/survey/components/panel/generators/components/abstract/multiple-generator.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: MultipleGeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultipleGeneratorComponent", function() { return MultipleGeneratorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../models/question */ "./src/app/models/question.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MultipleGeneratorComponent = /** @class */ (function () {
    function MultipleGeneratorComponent() {
    }
    MultipleGeneratorComponent.prototype.add = function () {
        this.questionSchema.values.push('');
        console.log(this.questionSchema);
    };
    MultipleGeneratorComponent.prototype.trackByFn = function (index, item) {
        return index;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_question__WEBPACK_IMPORTED_MODULE_1__["Question"])
    ], MultipleGeneratorComponent.prototype, "questionSchema", void 0);
    return MultipleGeneratorComponent;
}());



/***/ }),

/***/ "./src/app/modules/survey/components/panel/generators/components/abstract/simple-generator.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/survey/components/panel/generators/components/abstract/simple-generator.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: SimpleGeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleGeneratorComponent", function() { return SimpleGeneratorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../models/question */ "./src/app/models/question.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SimpleGeneratorComponent = /** @class */ (function () {
    function SimpleGeneratorComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_question__WEBPACK_IMPORTED_MODULE_1__["Question"])
    ], SimpleGeneratorComponent.prototype, "questionSchema", void 0);
    return SimpleGeneratorComponent;
}());



/***/ }),

/***/ "./src/app/modules/survey/components/panel/generators/components/checkbox-generator.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/survey/components/panel/generators/components/checkbox-generator.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: CheckboxGeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxGeneratorComponent", function() { return CheckboxGeneratorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_multiple_generator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract/multiple-generator.component */ "./src/app/modules/survey/components/panel/generators/components/abstract/multiple-generator.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CheckboxGeneratorComponent = /** @class */ (function (_super) {
    __extends(CheckboxGeneratorComponent, _super);
    function CheckboxGeneratorComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckboxGeneratorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'checkbox-generator',
            template: __webpack_require__(/*! ../templates/checkbox-generator.component.html */ "./src/app/modules/survey/components/panel/generators/templates/checkbox-generator.component.html"),
        })
    ], CheckboxGeneratorComponent);
    return CheckboxGeneratorComponent;
}(_abstract_multiple_generator_component__WEBPACK_IMPORTED_MODULE_1__["MultipleGeneratorComponent"]));



/***/ }),

/***/ "./src/app/modules/survey/components/panel/generators/components/input-text-generator.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/survey/components/panel/generators/components/input-text-generator.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: InputTextGeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextGeneratorComponent", function() { return InputTextGeneratorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_simple_generator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract/simple-generator.component */ "./src/app/modules/survey/components/panel/generators/components/abstract/simple-generator.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var InputTextGeneratorComponent = /** @class */ (function (_super) {
    __extends(InputTextGeneratorComponent, _super);
    function InputTextGeneratorComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTextGeneratorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'input-text-generator',
            template: __webpack_require__(/*! ../templates/input-text-generator.component.html */ "./src/app/modules/survey/components/panel/generators/templates/input-text-generator.component.html"),
        })
    ], InputTextGeneratorComponent);
    return InputTextGeneratorComponent;
}(_abstract_simple_generator_component__WEBPACK_IMPORTED_MODULE_1__["SimpleGeneratorComponent"]));



/***/ }),

/***/ "./src/app/modules/survey/components/panel/generators/components/radiobox-generator.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/survey/components/panel/generators/components/radiobox-generator.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: RadioboxGeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioboxGeneratorComponent", function() { return RadioboxGeneratorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_multiple_generator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract/multiple-generator.component */ "./src/app/modules/survey/components/panel/generators/components/abstract/multiple-generator.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RadioboxGeneratorComponent = /** @class */ (function (_super) {
    __extends(RadioboxGeneratorComponent, _super);
    function RadioboxGeneratorComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RadioboxGeneratorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'radiobox-generator',
            template: __webpack_require__(/*! ../templates/radiobox-generator.component.html */ "./src/app/modules/survey/components/panel/generators/templates/radiobox-generator.component.html")
        })
    ], RadioboxGeneratorComponent);
    return RadioboxGeneratorComponent;
}(_abstract_multiple_generator_component__WEBPACK_IMPORTED_MODULE_1__["MultipleGeneratorComponent"]));



/***/ }),

/***/ "./src/app/modules/survey/components/panel/generators/components/textarea-generator.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/survey/components/panel/generators/components/textarea-generator.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: TextareaGeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaGeneratorComponent", function() { return TextareaGeneratorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_simple_generator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract/simple-generator.component */ "./src/app/modules/survey/components/panel/generators/components/abstract/simple-generator.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TextareaGeneratorComponent = /** @class */ (function (_super) {
    __extends(TextareaGeneratorComponent, _super);
    function TextareaGeneratorComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextareaGeneratorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'textarea-generator',
            template: __webpack_require__(/*! ../templates/textarea-generator.component.html */ "./src/app/modules/survey/components/panel/generators/templates/textarea-generator.component.html"),
        })
    ], TextareaGeneratorComponent);
    return TextareaGeneratorComponent;
}(_abstract_simple_generator_component__WEBPACK_IMPORTED_MODULE_1__["SimpleGeneratorComponent"]));



/***/ }),

/***/ "./src/app/modules/survey/components/panel/generators/generator.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/survey/components/panel/generators/generator.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"questionSchema.type\" >\n  <input-text-generator *ngSwitchCase=\"'input'\" [questionSchema]=\"questionSchema\" layout=\"column\"></input-text-generator>\n  <textarea-generator *ngSwitchCase=\"'textarea'\" [questionSchema]=\"questionSchema\" layout=\"column\"></textarea-generator>\n  <radiobox-generator *ngSwitchCase=\"'radiobox'\"  [questionSchema]=\"questionSchema\" layout=\"column\"></radiobox-generator>\n  <checkbox-generator *ngSwitchCase=\"'checkbox'\" [questionSchema]=\"questionSchema\" layout=\"column\">></checkbox-generator>\n  <div *ngSwitchDefault>Choose question type!</div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/survey/components/panel/generators/generator.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/survey/components/panel/generators/generator.component.ts ***!
  \***********************************************************************************/
/*! exports provided: GeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneratorComponent", function() { return GeneratorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../models/question */ "./src/app/models/question.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GeneratorComponent = /** @class */ (function () {
    function GeneratorComponent() {
        this.saveQuestion = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], GeneratorComponent.prototype, "saveQuestion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_question__WEBPACK_IMPORTED_MODULE_1__["Question"])
    ], GeneratorComponent.prototype, "questionSchema", void 0);
    GeneratorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-generator',
            template: __webpack_require__(/*! ./generator.component.html */ "./src/app/modules/survey/components/panel/generators/generator.component.html"),
        })
    ], GeneratorComponent);
    return GeneratorComponent;
}());



/***/ }),

/***/ "./src/app/modules/survey/components/panel/generators/templates/checkbox-generator.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/survey/components/panel/generators/templates/checkbox-generator.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vertical\">\n  <mat-form-field>\n    <input matInput placeholder=\"Label\" [(ngModel)]=\"questionSchema.label\"  [required]=\"true\">\n  </mat-form-field>\n  <mat-divider></mat-divider>\n  <div *ngFor=\"let response of questionSchema.values; let i = index; trackBy:trackByFn\">\n    <mat-form-field>\n      <input matInput placeholder=\"Option\" [(ngModel)]=\"questionSchema.values[i]\">\n    </mat-form-field>\n  </div>\n  <button mat-raised-button (click)=\"add()\">Add</button>\n  <mat-checkbox [(ngModel)]=\"questionSchema.required\">Required</mat-checkbox>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/survey/components/panel/generators/templates/input-text-generator.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/survey/components/panel/generators/templates/input-text-generator.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vertical\">\n  <mat-form-field>\n    <input matInput placeholder=\"Label\" [(ngModel)]=\"questionSchema.label\" [required]=\"true\">\n  </mat-form-field>\n  <mat-checkbox [(ngModel)]=\"questionSchema.required\">Required</mat-checkbox>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/survey/components/panel/generators/templates/radiobox-generator.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/survey/components/panel/generators/templates/radiobox-generator.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vertical\">\n  <mat-form-field>\n    <input matInput placeholder=\"Label\" [(ngModel)]=\"questionSchema.label\"  [required]=\"true\">\n  </mat-form-field>\n  <mat-divider></mat-divider>\n  <div *ngFor=\"let response of questionSchema.values; let i = index; trackBy:trackByFn\">\n    <mat-form-field>\n      <input matInput placeholder=\"Option\" [(ngModel)]=\"questionSchema.values[i]\">\n    </mat-form-field>\n  </div>\n  <button mat-raised-button (click)=\"add()\">Add</button>\n  <mat-checkbox [(ngModel)]=\"questionSchema.required\">Required</mat-checkbox>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/survey/components/panel/generators/templates/textarea-generator.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/survey/components/panel/generators/templates/textarea-generator.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vertical\">\n  <mat-form-field>\n    <input matInput placeholder=\"Label\" [(ngModel)]=\"questionSchema.label\" [required]=\"true\">\n  </mat-form-field>\n  <mat-checkbox [(ngModel)]=\"questionSchema.required\">Required</mat-checkbox>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/survey/components/panel/panel.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/modules/survey/components/panel/panel.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"panel\" class=\"sidebar\">\n  <mat-card-title>Create element</mat-card-title>\n  <div *ngIf=\"!isPanelActive\">\n    <button mat-fab color=\"primary\" (click)=\"onCreate()\"><mat-icon>add</mat-icon></button>\n  </div>\n  <div *ngIf=\"isPanelActive\">\n    <mat-form-field>\n      <mat-select name=\"questionTypeSelect\" [(ngModel)]=\"questionSchema.type\" placeholder=\"Question type\" required=\"required\">\n        <mat-option *ngFor=\"let key of questionTypesKeys()\" [value]=\"key\">{{questionTypesValue(key)}}</mat-option>\n      </mat-select>\n    </mat-form-field>\n    <app-generator [questionSchema]=\"questionSchema\">\n    </app-generator>\n    <br>\n    <button mat-raised-button color=\"primary\" [disabled]=\"!isValid()\" *ngIf=\"!isCreated\" (click)=\"save(questionSchema)\"><mat-icon>done</mat-icon></button>\n    <button mat-raised-button color=\"accent\" *ngIf=\"!isCreated\" (click)=\"discard()\"><mat-icon>clear</mat-icon></button>\n  </div>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/modules/survey/components/panel/panel.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/survey/components/panel/panel.component.ts ***!
  \********************************************************************/
/*! exports provided: PanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return PanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../models/question */ "./src/app/models/question.ts");
/* harmony import */ var _models_question_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/question-type.enum */ "./src/app/models/question-type.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PanelComponent = /** @class */ (function () {
    function PanelComponent() {
        this.saveQuestion = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.togglePanel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.generatorIsValid = false;
    }
    PanelComponent.prototype.toggleCreator = function () {
        this.isPanelActive = !this.isPanelActive;
        this.togglePanel.emit(this.isPanelActive);
    };
    PanelComponent.prototype.questionTypesKeys = function () {
        return Object.keys(_models_question_type_enum__WEBPACK_IMPORTED_MODULE_2__["QuestionType"]);
    };
    PanelComponent.prototype.questionTypesValue = function (key) {
        return _models_question_type_enum__WEBPACK_IMPORTED_MODULE_2__["QuestionType"][key];
    };
    PanelComponent.prototype.onCreate = function () {
        this.questionSchema = new _models_question__WEBPACK_IMPORTED_MODULE_1__["Question"]();
        this.toggleCreator();
    };
    PanelComponent.prototype.save = function (question) {
        this.saveQuestion.emit(question);
        this.toggleCreator();
    };
    PanelComponent.prototype.discard = function () {
        this.toggleCreator();
    };
    PanelComponent.prototype.isValid = function () {
        return this.questionSchema.type;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PanelComponent.prototype, "saveQuestion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PanelComponent.prototype, "togglePanel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_question__WEBPACK_IMPORTED_MODULE_1__["Question"])
    ], PanelComponent.prototype, "questionSchema", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PanelComponent.prototype, "isPanelActive", void 0);
    PanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-panel',
            template: __webpack_require__(/*! ./panel.component.html */ "./src/app/modules/survey/components/panel/panel.component.html"),
        })
    ], PanelComponent);
    return PanelComponent;
}());



/***/ }),

/***/ "./src/app/modules/survey/components/preview/change-name-dialog/change-name-dialog.component.html":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/survey/components/preview/change-name-dialog/change-name-dialog.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\n  <mat-form-field>\n    <input matInput placeholder=\"Name\" [(ngModel)]=\"data.name\">\n  </mat-form-field>\n</div>\n<div mat-dialog-actions>\n  <button mat-button [mat-dialog-close]=\"data.name\" cdkFocusInitial>Save</button>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/survey/components/preview/change-name-dialog/change-name-dialog.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/survey/components/preview/change-name-dialog/change-name-dialog.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ChangeNameDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeNameDialogComponent", function() { return ChangeNameDialogComponent; });
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ChangeNameDialogComponent = /** @class */ (function () {
    function ChangeNameDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ChangeNameDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-name-dialog',
            template: __webpack_require__(/*! ./change-name-dialog.component.html */ "./src/app/modules/survey/components/preview/change-name-dialog/change-name-dialog.component.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_0__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatDialogRef"], Object])
    ], ChangeNameDialogComponent);
    return ChangeNameDialogComponent;
}());



/***/ }),

/***/ "./src/app/modules/survey/components/preview/preview.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/modules/survey/components/preview/preview.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/survey/components/preview/preview.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/survey/components/preview/preview.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"growing\">\n  <mat-card-title *ngIf=\"!isEditable\">\n    {{survey.name}}\n  </mat-card-title>\n  <mat-form-field *ngIf=\"isEditable\">\n    <input matInput [(ngModel)]=\"survey.name\" name=\"name\" [required]=\"isEditable\" [placeholder]=\"'Nazwa ankiety'\">\n  </mat-form-field>\n  <form #surveyForm>\n    <div *ngFor=\"let question of survey.schema.fields; let i = index\" class=\"horizontal\">\n      <app-question [questionSchema]=\"question\"\n                    (responseChange)=\"onResponseChange($event)\"></app-question>\n      <div class=\"editButtons\" *ngIf=\"isEditable\">\n        <button mat-button (click)=\"edit(question)\"><mat-icon>edit</mat-icon></button>\n        <button mat-button (click)=\"remove(question)\"><mat-icon>delete</mat-icon></button>\n      </div>\n      <hr *ngIf=\"i < survey.schema.length - 1\">\n    </div>\n  </form>\n  <br>\n  <button mat-raised-button color=\"primary\"\n          *ngIf=\"!isEditable\"\n          [disabled]=\"!surveyForm.checkValidity()\"\n          (click)=\"send()\"><mat-icon>send</mat-icon></button>\n  <button mat-raised-button color=\"primary\"\n          *ngIf=\"isEditable\"\n          [disabled]=\"!survey.name\"\n          (click)=\"save()\"><mat-icon>save</mat-icon></button>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/modules/survey/components/preview/preview.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/survey/components/preview/preview.component.ts ***!
  \************************************************************************/
/*! exports provided: PreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewComponent", function() { return PreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _change_name_dialog_change_name_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change-name-dialog/change-name-dialog.component */ "./src/app/modules/survey/components/preview/change-name-dialog/change-name-dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_survey__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../models/survey */ "./src/app/models/survey.ts");
/* harmony import */ var _models_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../models/contact */ "./src/app/models/contact.ts");
/* harmony import */ var _services_answer_service_answer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/answer-service/answer.service */ "./src/app/services/answer-service/answer.service.ts");
/* harmony import */ var _services_survey_service_survey_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/survey-service/survey.service */ "./src/app/services/survey-service/survey.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var PreviewComponent = /** @class */ (function () {
    function PreviewComponent(router, answerService, surveyService, dialog, snackBar) {
        this.router = router;
        this.answerService = answerService;
        this.surveyService = surveyService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.editQuestion = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeQuestion = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.answers = {};
        console.log("survey in preview component");
        console.log(this.survey);
    }
    PreviewComponent.prototype.edit = function (question) {
        this.editQuestion.emit(question);
    };
    PreviewComponent.prototype.remove = function (question) {
        this.removeQuestion.emit(question);
    };
    PreviewComponent.prototype.onResponseChange = function (response) {
        this.answers[response.key] = response.values;
        console.log(this.answers);
    };
    PreviewComponent.prototype.send = function () {
        var _this = this;
        this.answerService.persist(this.answers, Number(this.survey.id), Number(this.contact.id)).subscribe(function (response) {
            console.log(response);
            _this.snackBar.open("Ankieta wypelniona", "OK");
            _this.snackBar._openedSnackBarRef.afterDismissed().subscribe(function () {
                _this.router.navigateByUrl("/");
            });
        });
    };
    PreviewComponent.prototype.save = function () {
        var _this = this;
        this.surveyService.persist(this.survey).subscribe(function (response) {
            console.log(response);
            _this.snackBar.open("Ankieta zapisana", "OK");
            _this.snackBar._openedSnackBarRef.afterDismissed().subscribe(function () {
                _this.router.navigateByUrl("/");
            });
        });
    };
    PreviewComponent.prototype.editName = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_change_name_dialog_change_name_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ChangeNameDialogComponent"], {
            width: '250px',
            data: {
                name: this.survey.name
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.survey.name = result;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PreviewComponent.prototype, "editQuestion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PreviewComponent.prototype, "removeQuestion", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_survey__WEBPACK_IMPORTED_MODULE_4__["Survey"])
    ], PreviewComponent.prototype, "survey", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_contact__WEBPACK_IMPORTED_MODULE_5__["Contact"])
    ], PreviewComponent.prototype, "contact", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], PreviewComponent.prototype, "isEditable", void 0);
    PreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-preview',
            template: __webpack_require__(/*! ./preview.component.html */ "./src/app/modules/survey/components/preview/preview.component.html"),
            styles: [__webpack_require__(/*! ./preview.component.css */ "./src/app/modules/survey/components/preview/preview.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_answer_service_answer_service__WEBPACK_IMPORTED_MODULE_6__["AnswerService"], _services_survey_service_survey_service__WEBPACK_IMPORTED_MODULE_7__["SurveyService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]])
    ], PreviewComponent);
    return PreviewComponent;
}());



/***/ }),

/***/ "./src/app/modules/survey/components/preview/questions/components/abstract/mutliple-preview.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/survey/components/preview/questions/components/abstract/mutliple-preview.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: MutliplePreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutliplePreviewComponent", function() { return MutliplePreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../models/question */ "./src/app/models/question.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MutliplePreviewComponent = /** @class */ (function () {
    function MutliplePreviewComponent() {
        this.valuesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.values = {};
    }
    MutliplePreviewComponent.prototype.onChange = function () {
        this.valuesChange.emit(this.valuesToArray());
    };
    MutliplePreviewComponent.prototype.valuesToArray = function () {
        var result = [];
        for (var key in this.values) {
            if (this.values[key]) {
                result.push(key);
            }
        }
        return result;
    };
    MutliplePreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.questionSchema.values.forEach(function (value) {
            _this.values[value] = false;
        });
    };
    MutliplePreviewComponent.prototype.atLeastOne = function () {
        return Object.values(this.values).some(function (value) { return value; });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_question__WEBPACK_IMPORTED_MODULE_1__["Question"])
    ], MutliplePreviewComponent.prototype, "questionSchema", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], MutliplePreviewComponent.prototype, "valuesChange", void 0);
    return MutliplePreviewComponent;
}());



/***/ }),

/***/ "./src/app/modules/survey/components/preview/questions/components/abstract/single-preview.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/survey/components/preview/questions/components/abstract/single-preview.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: SinglePreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SinglePreviewComponent", function() { return SinglePreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../../models/question */ "./src/app/models/question.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SinglePreviewComponent = /** @class */ (function () {
    function SinglePreviewComponent() {
        this.valuesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SinglePreviewComponent.prototype.onChange = function () {
        this.valuesChange.emit([this.value]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_question__WEBPACK_IMPORTED_MODULE_1__["Question"])
    ], SinglePreviewComponent.prototype, "questionSchema", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SinglePreviewComponent.prototype, "valuesChange", void 0);
    return SinglePreviewComponent;
}());



/***/ }),

/***/ "./src/app/modules/survey/components/preview/questions/components/checkbox-preview.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/survey/components/preview/questions/components/checkbox-preview.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: CheckboxPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxPreviewComponent", function() { return CheckboxPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_mutliple_preview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract/mutliple-preview.component */ "./src/app/modules/survey/components/preview/questions/components/abstract/mutliple-preview.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var CheckboxPreviewComponent = /** @class */ (function (_super) {
    __extends(CheckboxPreviewComponent, _super);
    function CheckboxPreviewComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CheckboxPreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'checkbox-preview',
            template: __webpack_require__(/*! ../templates/checkbox-preview.component.html */ "./src/app/modules/survey/components/preview/questions/templates/checkbox-preview.component.html"),
        })
    ], CheckboxPreviewComponent);
    return CheckboxPreviewComponent;
}(_abstract_mutliple_preview_component__WEBPACK_IMPORTED_MODULE_1__["MutliplePreviewComponent"]));



/***/ }),

/***/ "./src/app/modules/survey/components/preview/questions/components/input-text-preview.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/survey/components/preview/questions/components/input-text-preview.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: InputTextPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputTextPreviewComponent", function() { return InputTextPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_single_preview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract/single-preview.component */ "./src/app/modules/survey/components/preview/questions/components/abstract/single-preview.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var InputTextPreviewComponent = /** @class */ (function (_super) {
    __extends(InputTextPreviewComponent, _super);
    function InputTextPreviewComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InputTextPreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'input-text-preview',
            template: __webpack_require__(/*! ../templates/input-text-preview.component.html */ "./src/app/modules/survey/components/preview/questions/templates/input-text-preview.component.html"),
        })
    ], InputTextPreviewComponent);
    return InputTextPreviewComponent;
}(_abstract_single_preview_component__WEBPACK_IMPORTED_MODULE_1__["SinglePreviewComponent"]));



/***/ }),

/***/ "./src/app/modules/survey/components/preview/questions/components/radiobox-preview.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/survey/components/preview/questions/components/radiobox-preview.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: RadioboxPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioboxPreviewComponent", function() { return RadioboxPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_single_preview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract/single-preview.component */ "./src/app/modules/survey/components/preview/questions/components/abstract/single-preview.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RadioboxPreviewComponent = /** @class */ (function (_super) {
    __extends(RadioboxPreviewComponent, _super);
    function RadioboxPreviewComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RadioboxPreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'radiobox-preview',
            template: __webpack_require__(/*! ../templates/radiobox-preview.component.html */ "./src/app/modules/survey/components/preview/questions/templates/radiobox-preview.component.html"),
        })
    ], RadioboxPreviewComponent);
    return RadioboxPreviewComponent;
}(_abstract_single_preview_component__WEBPACK_IMPORTED_MODULE_1__["SinglePreviewComponent"]));



/***/ }),

/***/ "./src/app/modules/survey/components/preview/questions/components/textarea-preview.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/survey/components/preview/questions/components/textarea-preview.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: TextareaPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextareaPreviewComponent", function() { return TextareaPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_single_preview_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./abstract/single-preview.component */ "./src/app/modules/survey/components/preview/questions/components/abstract/single-preview.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TextareaPreviewComponent = /** @class */ (function (_super) {
    __extends(TextareaPreviewComponent, _super);
    function TextareaPreviewComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextareaPreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'textarea-preview',
            template: __webpack_require__(/*! ../templates/textarea-preview.component.html */ "./src/app/modules/survey/components/preview/questions/templates/textarea-preview.component.html"),
        })
    ], TextareaPreviewComponent);
    return TextareaPreviewComponent;
}(_abstract_single_preview_component__WEBPACK_IMPORTED_MODULE_1__["SinglePreviewComponent"]));



/***/ }),

/***/ "./src/app/modules/survey/components/preview/questions/question.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/modules/survey/components/preview/questions/question.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/survey/components/preview/questions/question.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/survey/components/preview/questions/question.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"questionSchema.type\">\n  <input-text-preview *ngSwitchCase=\"'input'\"\n                          [questionSchema]=\"questionSchema\"\n                          (valuesChange)=\"onValuesChange($event)\">\n  </input-text-preview>\n  <textarea-preview *ngSwitchCase=\"'textarea'\"\n                        [questionSchema]=\"questionSchema\"\n                        (valuesChange)=\"onValuesChange($event)\">\n  </textarea-preview>\n  <radiobox-preview *ngSwitchCase=\"'radiobox'\"\n                          [questionSchema]=\"questionSchema\"\n                          (valuesChange)=\"onValuesChange($event)\">\n  </radiobox-preview>\n  <checkbox-preview *ngSwitchCase=\"'checkbox'\"\n                        [questionSchema]=\"questionSchema\"\n                        (valuesChange)=\"onValuesChange($event)\">\n  </checkbox-preview>\n  <div *ngSwitchDefault>Choose question type!</div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/survey/components/preview/questions/question.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/survey/components/preview/questions/question.component.ts ***!
  \***********************************************************************************/
/*! exports provided: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComponent", function() { return QuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_question__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../models/question */ "./src/app/models/question.ts");
/* harmony import */ var _models_question_answer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../models/question-answer */ "./src/app/models/question-answer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuestionComponent = /** @class */ (function () {
    function QuestionComponent() {
        this.responseChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.values = [];
        console.log("question schema in question component");
        console.log(this.questionSchema);
    }
    QuestionComponent.prototype.onValuesChange = function (values) {
        console.log(values);
        this.values = values;
        var key = this.questionSchema.model ? this.questionSchema.model : this.questionSchema.label;
        var response = new _models_question_answer__WEBPACK_IMPORTED_MODULE_2__["QuestionAnswer"](key, this.values);
        console.log(response);
        this.responseChange.emit(response);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_question__WEBPACK_IMPORTED_MODULE_1__["Question"])
    ], QuestionComponent.prototype, "questionSchema", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], QuestionComponent.prototype, "responseChange", void 0);
    QuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question',
            template: __webpack_require__(/*! ./question.component.html */ "./src/app/modules/survey/components/preview/questions/question.component.html"),
            styles: [__webpack_require__(/*! ./question.component.css */ "./src/app/modules/survey/components/preview/questions/question.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuestionComponent);
    return QuestionComponent;
}());



/***/ }),

/***/ "./src/app/modules/survey/components/preview/questions/templates/checkbox-preview.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/survey/components/preview/questions/templates/checkbox-preview.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vertical\">\n  <p>{{questionSchema.label}}<span *ngIf=\"questionSchema.required\">*</span></p>\n  <mat-checkbox *ngFor=\"let response of questionSchema.values\"\n                [(ngModel)]=\"values[response]\"\n                (change)=\"onChange()\"\n                [required]=\"questionSchema.required && !atLeastOne()\">\n    {{response}}<br>\n  </mat-checkbox>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/survey/components/preview/questions/templates/input-text-preview.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/survey/components/preview/questions/templates/input-text-preview.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <input matInput [(ngModel)]=\"value\"\n         (input)=\"onChange()\"\n         [placeholder]=\"questionSchema.label\"\n         [required]=\"questionSchema.required\">\n</mat-form-field>\n"

/***/ }),

/***/ "./src/app/modules/survey/components/preview/questions/templates/radiobox-preview.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/survey/components/preview/questions/templates/radiobox-preview.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-radio-group class=\"vertical\"\n                 [(ngModel)]=\"value\"\n                 (change)=\"onChange()\">\n  <p>{{questionSchema.label}}<span *ngIf=\"questionSchema.required\">*</span></p>\n  <mat-radio-button *ngFor=\"let response of questionSchema.values\" [value]=\"response\">{{response}}<br>\n  </mat-radio-button>\n</mat-radio-group>\n"

/***/ }),

/***/ "./src/app/modules/survey/components/preview/questions/templates/textarea-preview.component.html":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/survey/components/preview/questions/templates/textarea-preview.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field>\n  <textarea matInput [(ngModel)]=\"value\"\n         (input)=\"onChange()\"\n         [placeholder]=\"questionSchema.label\"\n         [required]=\"questionSchema.required\">\n  </textarea>\n</mat-form-field>\n"

/***/ }),

/***/ "./src/app/modules/survey/components/survey/survey.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/modules/survey/components/survey/survey.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/survey/components/survey/survey.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/survey/components/survey/survey.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div *ngIf=\"survey\" class=\"vertical\">\n  <app-panel [questionSchema]=\"questionSchema\"\n             (saveQuestion)=\"onSave($event)\"\n             [isPanelActive]=\"isPanelActive\"\n             (togglePanel)=\"onPanelToggle($event)\"\n             *ngIf=\"isEditable\">\n  </app-panel><br>\n  <app-preview\n          [survey]=\"survey\"\n               [contact]=\"contact\"\n               (editQuestion)=\"onEdit($event)\"\n               (removeQuestion)=\"onRemove($event)\"\n               [isEditable]=\"isEditable\">\n  </app-preview>\n</div>\n<div *ngIf=\"!survey\"><p>No such survey!</p></div>\n"

/***/ }),

/***/ "./src/app/modules/survey/components/survey/survey.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/survey/components/survey/survey.component.ts ***!
  \**********************************************************************/
/*! exports provided: SurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyComponent", function() { return SurveyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_survey__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../models/survey */ "./src/app/models/survey.ts");
/* harmony import */ var _services_survey_service_survey_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/survey-service/survey.service */ "./src/app/services/survey-service/survey.service.ts");
/* harmony import */ var _services_contact_service_contact_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/contact-service/contact.service */ "./src/app/services/contact-service/contact.service.ts");
/* harmony import */ var _models_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../models/schema */ "./src/app/models/schema.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SurveyComponent = /** @class */ (function () {
    function SurveyComponent(activatedRoute, surveyService, contactService) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.surveyService = surveyService;
        this.contactService = contactService;
        this.lastId = undefined;
        this.isPanelActive = false;
        this.isEditable = true;
        this.activatedRoute.params.subscribe(function (params) {
            _this.isEditable = params.hasOwnProperty('edit');
            var id = params['id'];
            var contactId = params['contactId'];
            if (id && contactId) {
                surveyService.get(params['id']).subscribe(function (survey) {
                    _this.survey = survey;
                    _this.survey.id = id;
                });
                contactService.get(contactId).subscribe(function (contact) {
                    _this.contact = contact;
                });
            }
            if (params.hasOwnProperty('new')) {
                console.log("create survey");
                _this.survey = new _models_survey__WEBPACK_IMPORTED_MODULE_2__["Survey"](undefined, '', new _models_schema__WEBPACK_IMPORTED_MODULE_5__["Schema"]());
                console.log("created:");
                console.log(_this.survey);
                _this.isEditable = true;
            }
        });
    }
    SurveyComponent.prototype.onSave = function (question) {
        if (this.lastId === undefined || this.lastId < question.id) {
            this.survey.schema.fields.push(question);
            this.lastId = question.id;
        }
        console.log(question);
        console.log(this.survey.schema);
        console.log(this.lastId);
    };
    SurveyComponent.prototype.onEdit = function (question) {
        console.log('reveived to edit in main');
        this.questionSchema = question;
        this.isPanelActive = true;
    };
    SurveyComponent.prototype.onRemove = function (question) {
        console.log('removing ' + JSON.stringify(question));
        var index = this.survey.schema.fields.indexOf(question);
        this.survey.schema.fields.splice(index, 1);
        console.log(this.survey.schema);
    };
    SurveyComponent.prototype.onPanelToggle = function (isPanelActive) {
        this.isPanelActive = isPanelActive;
    };
    SurveyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'survey',
            template: __webpack_require__(/*! ./survey.component.html */ "./src/app/modules/survey/components/survey/survey.component.html"),
            styles: [__webpack_require__(/*! ./survey.component.css */ "./src/app/modules/survey/components/survey/survey.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_survey_service_survey_service__WEBPACK_IMPORTED_MODULE_3__["SurveyService"], _services_contact_service_contact_service__WEBPACK_IMPORTED_MODULE_4__["ContactService"]])
    ], SurveyComponent);
    return SurveyComponent;
}());



/***/ }),

/***/ "./src/app/modules/survey/survey.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/survey/survey.module.ts ***!
  \*************************************************/
/*! exports provided: SurveyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyModule", function() { return SurveyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _components_survey_survey_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/survey/survey.component */ "./src/app/modules/survey/components/survey/survey.component.ts");
/* harmony import */ var _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/panel/panel.component */ "./src/app/modules/survey/components/panel/panel.component.ts");
/* harmony import */ var _components_preview_preview_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/preview/preview.component */ "./src/app/modules/survey/components/preview/preview.component.ts");
/* harmony import */ var _components_panel_generators_components_input_text_generator_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/panel/generators/components/input-text-generator.component */ "./src/app/modules/survey/components/panel/generators/components/input-text-generator.component.ts");
/* harmony import */ var _components_panel_generators_generator_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/panel/generators/generator.component */ "./src/app/modules/survey/components/panel/generators/generator.component.ts");
/* harmony import */ var _components_panel_generators_components_textarea_generator_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/panel/generators/components/textarea-generator.component */ "./src/app/modules/survey/components/panel/generators/components/textarea-generator.component.ts");
/* harmony import */ var _components_panel_generators_components_radiobox_generator_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/panel/generators/components/radiobox-generator.component */ "./src/app/modules/survey/components/panel/generators/components/radiobox-generator.component.ts");
/* harmony import */ var _components_panel_generators_components_checkbox_generator_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/panel/generators/components/checkbox-generator.component */ "./src/app/modules/survey/components/panel/generators/components/checkbox-generator.component.ts");
/* harmony import */ var _components_preview_questions_components_input_text_preview_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/preview/questions/components/input-text-preview.component */ "./src/app/modules/survey/components/preview/questions/components/input-text-preview.component.ts");
/* harmony import */ var _components_preview_change_name_dialog_change_name_dialog_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/preview/change-name-dialog/change-name-dialog.component */ "./src/app/modules/survey/components/preview/change-name-dialog/change-name-dialog.component.ts");
/* harmony import */ var _components_preview_questions_question_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/preview/questions/question.component */ "./src/app/modules/survey/components/preview/questions/question.component.ts");
/* harmony import */ var _components_preview_questions_components_textarea_preview_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/preview/questions/components/textarea-preview.component */ "./src/app/modules/survey/components/preview/questions/components/textarea-preview.component.ts");
/* harmony import */ var _components_preview_questions_components_checkbox_preview_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/preview/questions/components/checkbox-preview.component */ "./src/app/modules/survey/components/preview/questions/components/checkbox-preview.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_preview_questions_components_radiobox_preview_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/preview/questions/components/radiobox-preview.component */ "./src/app/modules/survey/components/preview/questions/components/radiobox-preview.component.ts");
/* harmony import */ var _services_survey_service_survey_service__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../services/survey-service/survey.service */ "./src/app/services/survey-service/survey.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























var SurveyModule = /** @class */ (function () {
    function SurveyModule() {
    }
    SurveyModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_survey_survey_component__WEBPACK_IMPORTED_MODULE_13__["SurveyComponent"],
                _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_14__["PanelComponent"],
                _components_preview_preview_component__WEBPACK_IMPORTED_MODULE_15__["PreviewComponent"],
                _components_panel_generators_components_input_text_generator_component__WEBPACK_IMPORTED_MODULE_16__["InputTextGeneratorComponent"],
                _components_panel_generators_generator_component__WEBPACK_IMPORTED_MODULE_17__["GeneratorComponent"],
                _components_panel_generators_components_textarea_generator_component__WEBPACK_IMPORTED_MODULE_18__["TextareaGeneratorComponent"],
                _components_panel_generators_components_radiobox_generator_component__WEBPACK_IMPORTED_MODULE_19__["RadioboxGeneratorComponent"],
                _components_panel_generators_components_checkbox_generator_component__WEBPACK_IMPORTED_MODULE_20__["CheckboxGeneratorComponent"],
                _components_preview_questions_components_input_text_preview_component__WEBPACK_IMPORTED_MODULE_21__["InputTextPreviewComponent"],
                _components_preview_questions_question_component__WEBPACK_IMPORTED_MODULE_23__["QuestionComponent"],
                _components_preview_change_name_dialog_change_name_dialog_component__WEBPACK_IMPORTED_MODULE_22__["ChangeNameDialogComponent"],
                _components_preview_questions_components_textarea_preview_component__WEBPACK_IMPORTED_MODULE_24__["TextareaPreviewComponent"],
                _components_preview_questions_components_checkbox_preview_component__WEBPACK_IMPORTED_MODULE_25__["CheckboxPreviewComponent"],
                _components_preview_questions_components_radiobox_preview_component__WEBPACK_IMPORTED_MODULE_27__["RadioboxPreviewComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_26__["MatSnackBarModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_4__["MatDividerModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
            ],
            providers: [_services_survey_service_survey_service__WEBPACK_IMPORTED_MODULE_28__["SurveyService"]],
            bootstrap: [_components_survey_survey_component__WEBPACK_IMPORTED_MODULE_13__["SurveyComponent"]],
            entryComponents: [_components_preview_change_name_dialog_change_name_dialog_component__WEBPACK_IMPORTED_MODULE_22__["ChangeNameDialogComponent"]]
        })
    ], SurveyModule);
    return SurveyModule;
}());



/***/ }),

/***/ "./src/app/services/answer-service/answer.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/answer-service/answer.service.ts ***!
  \***********************************************************/
/*! exports provided: AnswerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerService", function() { return AnswerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_answer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/answer */ "./src/app/models/answer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AnswerService = /** @class */ (function () {
    function AnswerService(http) {
        this.http = http;
    }
    AnswerService_1 = AnswerService;
    AnswerService.prototype.persist = function (answers, surveyId, contactId) {
        return this.http.post(AnswerService_1.ENDPOINT_URL, new _models_answer__WEBPACK_IMPORTED_MODULE_2__["Answer"](answers, surveyId, contactId));
    };
    AnswerService.prototype.getBySurvey = function (id) {
        return this.http.get(AnswerService_1.ENDPOINT_URL + "survey/" + id);
    };
    AnswerService.ENDPOINT_URL = 'http://localhost:8080/answers/';
    AnswerService = AnswerService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AnswerService);
    return AnswerService;
    var AnswerService_1;
}());



/***/ }),

/***/ "./src/app/services/contact-service/contact.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/contact-service/contact.service.ts ***!
  \*************************************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactService = /** @class */ (function () {
    function ContactService(http) {
        this.http = http;
    }
    ContactService_1 = ContactService;
    ContactService.prototype.persist = function (contact) {
        console.log(contact);
        return this.http.post(ContactService_1.ENDPOINT_URL, contact);
    };
    ContactService.prototype.get = function (id) {
        return this.http.get(ContactService_1.ENDPOINT_URL + id);
    };
    ContactService.prototype.getAll = function () {
        return this.http.get(ContactService_1.ENDPOINT_URL);
    };
    ContactService.ENDPOINT_URL = 'http://localhost:8080/contacts/';
    ContactService = ContactService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ContactService);
    return ContactService;
    var ContactService_1;
}());



/***/ }),

/***/ "./src/app/services/survey-service/survey.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/survey-service/survey.service.ts ***!
  \***********************************************************/
/*! exports provided: SurveyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyService", function() { return SurveyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SurveyService = /** @class */ (function () {
    function SurveyService(http) {
        this.http = http;
    }
    SurveyService_1 = SurveyService;
    SurveyService.prototype.persist = function (survey) {
        console.log(JSON.stringify(survey));
        return this.http.post(SurveyService_1.ENDPOINT_URL, survey);
    };
    SurveyService.prototype.get = function (id) {
        return this.http.get(SurveyService_1.ENDPOINT_URL + id);
    };
    SurveyService.prototype.getAll = function () {
        console.log("geting all surveys");
        return this.http.get(SurveyService_1.ENDPOINT_URL);
    };
    SurveyService.ENDPOINT_URL = 'http://localhost:8080/surveys/';
    SurveyService = SurveyService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SurveyService);
    return SurveyService;
    var SurveyService_1;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_main_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/main.module */ "./src/app/main.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_main_module__WEBPACK_IMPORTED_MODULE_2__["MainModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/mihau/Codecool/Charity/charity-app/src/main/angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map