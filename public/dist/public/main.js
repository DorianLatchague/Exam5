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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _pet_pet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pet/pet.component */ "./src/app/pet/pet.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var routes = [
    { path: '', pathMatch: 'full', component: _main_main_component__WEBPACK_IMPORTED_MODULE_1__["MainComponent"] },
    { path: 'new', component: _new_new_component__WEBPACK_IMPORTED_MODULE_2__["NewComponent"] },
    { path: ':id/edit', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_3__["EditComponent"] },
    { path: ':id', component: _pet_pet_component__WEBPACK_IMPORTED_MODULE_4__["PetComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"text-align:center\">\n  <h1>{{title}}</h1>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(_httpService) {
        this._httpService = _httpService;
        this.title = "Pet Shelter";
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _new_new_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./new/new.component */ "./src/app/new/new.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _pet_pet_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pet/pet.component */ "./src/app/pet/pet.component.ts");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _new_new_component__WEBPACK_IMPORTED_MODULE_8__["NewComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_9__["EditComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"],
                _pet_pet_component__WEBPACK_IMPORTED_MODULE_11__["PetComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvZWRpdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Edit this pet:</h3>\n<form>\n  <p *ngIf=\"error && error.name\" style=\"color: red;\">{{error.name.message}}</p>\n  <div class=\"input-group mb-3\">\n    <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"basic-addon1\">Pet name:</span>\n    </div>\n    <input name=\"pet.name\" type=\"text\" class=\"form-control\" [(ngModel)]=\"pet.name\">\n  </div>\n  <p *ngIf=\"error && error.type\" style=\"color: red;\">{{error.type.message}}</p>\n  <div class=\"input-group mb-3\">\n    <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"basic-addon1\">Pet type:</span>\n    </div>\n    <input name=\"pet.type\" type=\"text\" class=\"form-control\" [(ngModel)]=\"pet.type\">\n  </div>\n  <p *ngIf=\"error && error.description\" style=\"color: red;\">{{error.description.message}}</p>\n  <div class=\"input-group mb-3\">\n    <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"basic-addon1\">Description:</span>\n    </div>\n    <input name=\"pet.description\" type=\"text\" class=\"form-control\" [(ngModel)]=\"pet.description\">\n  </div>\n  <div>\n    <h6>Skills:</h6>\n    <div class=\"input-group mb-3\">\n      <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\" id=\"basic-addon1\">Skill 1:</span>\n      </div>\n      <input name=\"pet.skill1\" type=\"text\" class=\"form-control\" [(ngModel)]=\"pet.skill1\">\n    </div>\n    <div class=\"input-group mb-3\">\n      <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\" id=\"basic-addon1\">Skill 2:</span>\n      </div>\n      <input name=\"pet.skill2\" type=\"text\" class=\"form-control\" [(ngModel)]=\"pet.skill2\">\n    </div>\n    <div class=\"input-group mb-3\">\n      <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\" id=\"basic-addon1\">Skill 3:</span>\n      </div>\n      <input name=\"pet.skill3\" type=\"text\" class=\"form-control\" [(ngModel)]=\"pet.skill3\">\n    </div>\n  </div>\n  <button class=\"btn btn-outline-success\" (click)=\"editPet()\">Edit pet</button>\n  <button class=\"btn btn-outline-danger\" (click)=\"goBack()\">Cancel</button>\n</form>"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var EditComponent = /** @class */ (function () {
    function EditComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        this.pet = { name: "", type: "", description: "", skill1: "", skill2: "", skill3: "" };
        this.getPetFromService();
    };
    EditComponent.prototype.getPetFromService = function () {
        var _this = this;
        var observable = this._httpService.getPet(this.id);
        observable.subscribe(function (data) {
            _this.pet = { name: data['name'],
                type: data['type'],
                description: data['description'],
                skill1: data['skills'][0],
                skill2: data['skills'][1],
                skill3: data['skills'][2],
            };
        });
    };
    EditComponent.prototype.goBack = function () {
        this._router.navigate(['/' + this.id]);
    };
    EditComponent.prototype.editPet = function () {
        var _this = this;
        var observable = this._httpService.editPet(this.id, this.pet);
        observable.subscribe(function (data) {
            console.log("oh oh", data);
            if (data['errors']) {
                _this.error = data['errors'];
            }
            else {
                _this.goBack();
            }
        });
    };
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.getPets = function () {
        return this._http.get('/pets');
    };
    HttpService.prototype.getPet = function (id) {
        return this._http.get('/pets/' + id);
    };
    HttpService.prototype.addPet = function (newtask) {
        return this._http.post('/pets/new', newtask);
    };
    HttpService.prototype.like = function (pet_id) {
        return this._http.get('/pets/like/' + pet_id);
    };
    HttpService.prototype.deletePet = function (id) {
        return this._http.delete('/pets/delete/' + id);
    };
    HttpService.prototype.editPet = function (id, edit) {
        return this._http.put('/pets/edit/' + id, edit);
    };
    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>These pets are looking for a home!</h3>\n<a [routerLink]=\"['/new']\">Add a pet to the shelter</a>\n<p>We have quotes by:</p>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Type</th>\n      <th>Actions</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let pet of pets\">\n      <td>{{pet.name}}</td>\n      <td>{{pet.type}}</td>\n      <td>\n        <button class=\"btn btn-outline-primary\" [routerLink]=\"[pet._id]\">Details</button>\n        <button class=\"btn btn-outline-success\" [routerLink]=\"[pet._id,'edit']\">Edit</button>\n      </td>\n    </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MainComponent = /** @class */ (function () {
    function MainComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    MainComponent.prototype.ngOnInit = function () {
        this.getAuthorsFromService();
    };
    MainComponent.prototype.getAuthorsFromService = function () {
        var _this = this;
        var observable = this._httpService.getPets();
        observable.subscribe(function (data) {
            _this.pets = data;
        });
    };
    MainComponent.prototype.deleteAuthor = function (id) {
        var _this = this;
        var observable = this._httpService.deletePet(id);
        observable.subscribe(function (data) {
            _this.getAuthorsFromService();
        });
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/main/main.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/new/new.component.css":
/*!***************************************!*\
  !*** ./src/app/new/new.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldy9uZXcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/new/new.component.html":
/*!****************************************!*\
  !*** ./src/app/new/new.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Know of a pet needing a home?</h3>\n<form>\n  <p *ngIf=\"error && error.name\" style=\"color: red;\">{{error.name.message}}</p>\n  <div class=\"input-group mb-3\">\n    <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"basic-addon1\">Pet name:</span>\n    </div>\n    <input name=\"newPet.name\" type=\"text\" class=\"form-control\" [(ngModel)]=\"newPet.name\">\n  </div>\n  <p *ngIf=\"error && error.type\" style=\"color: red;\">{{error.type.message}}</p>\n  <div class=\"input-group mb-3\">\n    <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"basic-addon1\">Pet type:</span>\n    </div>\n    <input name=\"newPet.type\" type=\"text\" class=\"form-control\" [(ngModel)]=\"newPet.type\">\n  </div>\n  <p *ngIf=\"error && error.description\" style=\"color: red;\">{{error.description.message}}</p>\n  <div class=\"input-group mb-3\">\n    <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"basic-addon1\">Description:</span>\n    </div>\n    <input name=\"newPet.description\" type=\"text\" class=\"form-control\" [(ngModel)]=\"newPet.description\">\n  </div>\n  <div>\n    <h6>Skills:</h6>\n    <div class=\"input-group mb-3\">\n      <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\" id=\"basic-addon1\">Skill 1:</span>\n      </div>\n      <input name=\"newPet.skill1\" type=\"text\" class=\"form-control\" [(ngModel)]=\"newPet.skill1\">\n    </div>\n    <div class=\"input-group mb-3\">\n      <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\" id=\"basic-addon1\">Skill 2:</span>\n      </div>\n      <input name=\"newPet.skill2\" type=\"text\" class=\"form-control\" [(ngModel)]=\"newPet.skill2\">\n    </div>\n    <div class=\"input-group mb-3\">\n      <div class=\"input-group-prepend\">\n          <span class=\"input-group-text\" id=\"basic-addon1\">Skill 3:</span>\n      </div>\n      <input name=\"newPet.skill3\" type=\"text\" class=\"form-control\" [(ngModel)]=\"newPet.skill3\">\n    </div>\n  </div>\n  <button class=\"btn btn-outline-success\" (click)=\"onSubmit()\">Add pet</button>\n  <button class=\"btn btn-outline-danger\" [routerLink]=\"['/']\">Cancel</button>\n</form>"

/***/ }),

/***/ "./src/app/new/new.component.ts":
/*!**************************************!*\
  !*** ./src/app/new/new.component.ts ***!
  \**************************************/
/*! exports provided: NewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComponent", function() { return NewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NewComponent = /** @class */ (function () {
    function NewComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
    }
    NewComponent.prototype.ngOnInit = function () {
        this.newPet = { name: "", type: "", description: "", skill1: "", skill2: "", skill3: "" };
    };
    NewComponent.prototype.goHome = function () {
        this._router.navigate(['/']);
    };
    NewComponent.prototype.onSubmit = function () {
        var _this = this;
        var observable = this._httpService.addPet(this.newPet);
        observable.subscribe(function (data) {
            if (data['errors']) {
                _this.error = data['errors'];
            }
            else {
                _this.goHome();
            }
        });
    };
    NewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new',
            template: __webpack_require__(/*! ./new.component.html */ "./src/app/new/new.component.html"),
            styles: [__webpack_require__(/*! ./new.component.css */ "./src/app/new/new.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NewComponent);
    return NewComponent;
}());



/***/ }),

/***/ "./src/app/pet/pet.component.css":
/*!***************************************!*\
  !*** ./src/app/pet/pet.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BldC9wZXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pet/pet.component.html":
/*!****************************************!*\
  !*** ./src/app/pet/pet.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Details about {{pet.name}}</h3>\n<a [routerLink]=\"['/']\">Home</a>\n<p style=\"font-weight: bold;\">Pet type:<span style=\"margin-left: 20px; font-weight: none;\">{{pet.type}}</span></p>\n<p style=\"font-weight: bold;\">Description:<span style=\"margin-left: 20px; font-weight: none;\">{{pet.description}}</span></p>\n<p style=\"font-weight: bold;\">Skills: </p><ul style=\"margin-left: 20px; font-weight: none;\" *ngFor=\"let skill of pet.skills\">\n  <li>{{skill}}</li>\n</ul>\n<p style=\"font-weight: bold;\">Likes:<span style=\"margin-left: 20px; font-weight: none;\">{{pet.likes}}</span></p>\n<button *ngIf=\"!isLiked\" class=\"btn btn-outline-primary\" (click)=\"like()\">Like this pet</button>\n<button class=\"btn btn-outline-success\" (click)=\"onDelete()\">Adopt this pet!</button>"

/***/ }),

/***/ "./src/app/pet/pet.component.ts":
/*!**************************************!*\
  !*** ./src/app/pet/pet.component.ts ***!
  \**************************************/
/*! exports provided: PetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetComponent", function() { return PetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../http.service */ "./src/app/http.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var PetComponent = /** @class */ (function () {
    function PetComponent(_httpService, _route, _router) {
        this._httpService = _httpService;
        this._route = _route;
        this._router = _router;
        this.isLiked = false;
    }
    PetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (params) {
            _this.id = params.id;
            _this.pet = { name: "",
                type: "",
                description: "",
                skills: ["", "", ""]
            };
            _this.getPetFromService();
        });
    };
    PetComponent.prototype.getPetFromService = function () {
        var _this = this;
        var observable = this._httpService.getPet(this.id);
        observable.subscribe(function (data) {
            _this.pet = data;
        });
    };
    PetComponent.prototype.like = function () {
        var _this = this;
        this.isLiked = true;
        var observable = this._httpService.like(this.id);
        observable.subscribe(function (data) {
            _this.getPetFromService();
        });
    };
    PetComponent.prototype.onDelete = function () {
        var _this = this;
        var observable = this._httpService.deletePet(this.id);
        observable.subscribe(function (data) {
            _this.goHome();
        });
    };
    PetComponent.prototype.goHome = function () {
        this._router.navigate(['/']);
    };
    PetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pet',
            template: __webpack_require__(/*! ./pet.component.html */ "./src/app/pet/pet.component.html"),
            styles: [__webpack_require__(/*! ./pet.component.css */ "./src/app/pet/pet.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PetComponent);
    return PetComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dorianlatchague/Documents/mean_stack/JS_Angular/Exam3/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map