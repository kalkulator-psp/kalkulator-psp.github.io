(self["webpackChunkpolish_ff_salary_calculator"] = self["webpackChunkpolish_ff_salary_calculator"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

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
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _salary_form_salary_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./salary-form/salary-form.component */ 76784);


class AppComponent {
    constructor() {
        this.title = 'polish-ff-salary-calculator';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Kalkulator pensji stra\u017Caka PSP");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-salary-form");
    } }, directives: [_salary_form_salary_form_component__WEBPACK_IMPORTED_MODULE_0__.SalaryFormComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _salary_form_salary_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./salary-form/salary-form.component */ 76784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);





class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
        _salary_form_salary_form_component__WEBPACK_IMPORTED_MODULE_1__.SalaryFormComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule] }); })();


/***/ }),

/***/ 76784:
/*!******************************************************!*\
  !*** ./src/app/salary-form/salary-form.component.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SalaryFormComponent": function() { return /* binding */ SalaryFormComponent; }
/* harmony export */ });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 2281);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _salary_form_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./salary-form.config */ 16000);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 54364);





function SalaryFormComponent_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hub_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", hub_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](hub_r23);
} }
function SalaryFormComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Musisz wybra\u0107 miejsce pracy. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SalaryFormComponent_div_12_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const occupation_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", occupation_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](occupation_r28);
} }
function SalaryFormComponent_div_12_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Jesli nie wiesz, jakie masz stanowisko, to zapytaj swojego dow\u00F3dc\u0119 jednostki, ale od razu wymy\u015Bl sobie kar\u0119. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SalaryFormComponent_div_12_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Musisz wybra\u0107 stanowisko. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SalaryFormComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Stanowisko");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "select", 42, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SalaryFormComponent_div_12_Template_select_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r29.formData.occupation = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, SalaryFormComponent_div_12_option_6_Template, 2, 2, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SalaryFormComponent_div_12_Template_img_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r31.onInfotipClick("occupation"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, SalaryFormComponent_div_12_div_8_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, SalaryFormComponent_div_12_div_9_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r4.formData.occupation);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r4.getOccupations());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r4.displayedInfo === "occupation");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_r24.pristine && !_r24.valid);
} }
function SalaryFormComponent_option_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const rank_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", rank_r32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](rank_r32);
} }
function SalaryFormComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Je\u015Bli nie wiesz jaki masz stopie\u0144 s\u0142u\u017Cbowy, to najwyra\u017Aniej jeszcze nie pracujesz i zastanawiasz si\u0119, czy w og\u00F3le warto. Je\u015Bli przyjmiesz si\u0119 bezpo\u015Brednio \"z ulicy\", zostaniesz stra\u017Cakiem. Je\u015Bli sko\u0144czysz szko\u0142\u0119 aspiranck\u0105 - m\u0142odszym aspirantem, a po SGSP zostaniesz m\u0142odszym kapitanem. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SalaryFormComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Musisz wybra\u0107 stopie\u0144 s\u0142u\u017Cbowy. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SalaryFormComponent_div_23_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Tw\u00F3j dodatek s\u0142u\u017Cbowy jest okre\u015Blany przez prze\u0142o\u017Conego uprawnionego do mianowania lub powo\u0142ania. Mo\u017Ce wynie\u015B\u0107 do 50% otrzymywanego uposa\u017Cenia zasadniczego i dodatku za stopie\u0144. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SalaryFormComponent_div_23_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Musisz poda\u0107 miejsce pracy, stanowisko i stopie\u0144, \u017Ceby mo\u017Cna by\u0142o obliczy\u0107 maksymalny mo\u017Cliwy dodatek s\u0142u\u017Cbowy. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SalaryFormComponent_div_23_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Max: ", ctx_r37.calculateMaxAllowance(), "");
} }
function SalaryFormComponent_div_23_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Musisz poda\u0107 dodatek s\u0142u\u017Cbowy mniejszy ni\u017C dopuszczalny na Twoim miejscu pracy max. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SalaryFormComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Dodatek s\u0142u\u017Cbowy");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 46, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SalaryFormComponent_div_23_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r39.formData.serviceAllowance = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SalaryFormComponent_div_23_Template_img_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r40); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r41.onInfotipClick("serviceAllowance"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, SalaryFormComponent_div_23_div_7_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, SalaryFormComponent_div_23_div_9_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, SalaryFormComponent_div_23_ng_template_10_Template, 2, 1, "ng-template", null, 50, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SalaryFormComponent_div_23_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r40); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r42.toggleAllowances(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Zmie\u0144 na dodatek funkcyjny");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, SalaryFormComponent_div_23_div_14_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11);
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("max", ctx_r9.calculateMaxAllowance())("disabled", !ctx_r9.formData.rank || !ctx_r9.formData.hub || !ctx_r9.formData.occupation)("ngModel", ctx_r9.formData.serviceAllowance);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r9.displayedInfo === "serviceAllowance");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r9.formData.rank || !ctx_r9.formData.hub || !ctx_r9.formData.occupation)("ngIfElse", _r36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_r33.pristine && !_r33.valid);
} }
function SalaryFormComponent_ng_template_24_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Dodatek funkcyjny (kt\u00F3rego przyznanie wyklucza przyznawanie dodatku s\u0142u\u017Cbowego) jest mo\u017Cliwy do przyznania na okre\u015Blonych stanowiskach (wymienionych w rozporz\u0105dzeniu). Jego maksymalna warto\u015B\u0107 jest wy\u017Csza ni\u017C dodatku s\u0142u\u017Cbowego, jednak stra\u017Cacy pobieraj\u0105cy go trac\u0105 prawo do rozliczania nadgodzin. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SalaryFormComponent_ng_template_24_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Musisz poda\u0107 miejsce pracy, stanowisko i stopie\u0144, \u017Ceby mo\u017Cna by\u0142o obliczy\u0107 maksymalny mo\u017Cliwy dodatek funkcyjny. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SalaryFormComponent_ng_template_24_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Max: ", ctx_r47.calculateMaxAllowance(true), "");
} }
function SalaryFormComponent_ng_template_24_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Musisz poda\u0107 dodatek s\u0142u\u017Cbowy mniejszy ni\u017C dopuszczalny na Twoim miejscu pracy max. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SalaryFormComponent_ng_template_24_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Dodatek funkcyjny");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "input", 54, 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SalaryFormComponent_ng_template_24_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r49.formData.functionalAllowance = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SalaryFormComponent_ng_template_24_Template_img_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r50); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r51.onInfotipClick("functionalAllowance"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, SalaryFormComponent_ng_template_24_div_7_Template, 2, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, SalaryFormComponent_ng_template_24_div_9_Template, 2, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, SalaryFormComponent_ng_template_24_ng_template_10_Template, 2, 1, "ng-template", null, 50, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SalaryFormComponent_ng_template_24_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r50); const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r52.toggleAllowances(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Zmie\u0144 na dodatek s\u0142u\u017Cbowy");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, SalaryFormComponent_ng_template_24_div_14_Template, 2, 0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](5);
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](11);
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("max", ctx_r11.calculateMaxAllowance(true))("disabled", !ctx_r11.formData.rank || !ctx_r11.formData.hub || !ctx_r11.formData.occupation)("ngModel", ctx_r11.formData.functionalAllowance);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r11.displayedInfo === "functionalAllowance");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r11.formData.rank || !ctx_r11.formData.hub || !ctx_r11.formData.occupation)("ngIfElse", _r46);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_r43.pristine && !_r43.valid);
} }
function SalaryFormComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Podaj dzie\u0144, od kt\u00F3rego liczony jest Tw\u00F3j sta\u017C s\u0142u\u017Cby. Pami\u0119taj, \u017Ce zaliczaj\u0105 si\u0119 do niego r\u00F3wnie\u017C lata s\u0142u\u017Cby w innych s\u0142u\u017Cbach i okresy pracy wykonywanej przed s\u0142u\u017Cb\u0105 zgodnie z Art.88 $4 Ustawy o PSP. Dopytaj w kadrach, jesli nie jeste\u015B pewien. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SalaryFormComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Musisz poda\u0107 dzie\u0144 liczony jako pocz\u0105tek sta\u017Cu s\u0142u\u017Cby. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SalaryFormComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Wpisz tutaj sum\u0119 sk\u0142adek, kt\u00F3re p\u0142acisz na dobrowolne ubezpieczenia (zdrowotne, medyczne, OC), kas\u0119 zapomogowo-po\u017Cyczkow\u0105 i wszystkie tego typu rzeczy. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SalaryFormComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Zaznacz zwi\u0105zki zawodowe, do kt\u00F3rych nale\u017Cysz. Przepisy prawa nie zabraniaj\u0105 przynale\u017Cno\u015Bci do wielu zwi\u0105zk\u00F3w zawodowych. Zdarza si\u0119 natomiast, \u017Ce zakazane jest to w statutach niet\u00F3rych zwi\u0105zk\u00F3w. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SalaryFormComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Zaznacz, je\u015Bli jeste\u015B zwolniony z podatku dochodowego (np. masz mniej ni\u017C 26 lat). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function SalaryFormComponent_div_71_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Za cz\u0142onkostwo w ZZS Florian zap\u0142acisz ", ctx_r53.florianCutPercentage, "% kwoty brutto, czyli ", ctx_r53.florianCut, " pln.");
} }
function SalaryFormComponent_div_71_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Za cz\u0142onkostwo w NSZZ Solidarno\u015B\u0107 zap\u0142acisz ", ctx_r54.nszzCutPercentage, "% kwoty brutto, czyli ", ctx_r54.nszzCut, " pln.");
} }
function SalaryFormComponent_div_71_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Komenda zap\u0142aci za Ciebie 0.17% kwoty brutto jako zaliczk\u0119 podatku dochodowego, czyli ", ctx_r55.tax, ".");
} }
function SalaryFormComponent_div_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, SalaryFormComponent_div_71_p_9_Template, 2, 2, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, SalaryFormComponent_div_71_p_10_Template, 2, 2, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, SalaryFormComponent_div_71_p_11_Template, 2, 1, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate4"]("Jeste\u015B na grupie ", ctx_r22.occupation.group, ". Jej mno\u017Cnik ", ctx_r22.occupation.quantifier, " pomno\u017Cony przez obecn\u0105 kwot\u0119 bazow\u0105 (", ctx_r22.baseSalary, ") i zaokr\u0105glony do pe\u0142nych dziesi\u0105tek daje: ", ctx_r22.base, " pln.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Za wys\u0142ug\u0119 lat przys\u0142uguje Ci zwi\u0119kszenie uposa\u017Cenia zasadniczego o ", ctx_r22.dutyYearsPercentageBonus, "%, czyli o ", ctx_r22.dutyYearsBonus, " pln.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Za stopie\u0144 przys\u0142uguje Ci ", ctx_r22.rankMoney, " pln.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Sumuj\u0105c to z dodatkiem ", ctx_r22.chosenServiceAllowance ? "s\u0142u\u017Cbowym" : "funkcyjnym", " otrzymamy kwot\u0119 brutto: ", ctx_r22.brutto, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r22.florianCut);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r22.nszzCut);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r22.tax);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Na Twoje konto wp\u0142ynie ", ctx_r22.salary, " pln.");
} }
const _c0 = function () { return { standalone: true }; };
const formatNumber = (num) => Math.round((num + Number.EPSILON) * 100) / 100;
class SalaryFormComponent {
    constructor() {
        this.FORM_DATA_LS_KEY = 'PFSC-FORMDATA';
        this.formData = {
            hub: null,
            occupation: null,
            rank: null,
            serviceAllowance: 0,
            functionalAllowance: 0,
            dutyStart: null,
            additions: 0,
            nszz: false,
            florian: false,
            taxFree: false,
        };
        this.hubs = _salary_form_config__WEBPACK_IMPORTED_MODULE_1__.occupationsMap.map(data => data.hub);
        this.ranks = _salary_form_config__WEBPACK_IMPORTED_MODULE_1__.rankMap.map(data => data.name);
        this.salary = 0;
        this.chosenServiceAllowance = true;
        this.baseSalary = _salary_form_config__WEBPACK_IMPORTED_MODULE_1__.baseSalary;
        this.nszzCutPercentage = _salary_form_config__WEBPACK_IMPORTED_MODULE_1__.nszzCutPercentage;
        this.florianCutPercentage = _salary_form_config__WEBPACK_IMPORTED_MODULE_1__.florianCutPercentage;
    }
    ngOnInit() {
        this.loadFormData();
    }
    onSubmit() {
        const hub = _salary_form_config__WEBPACK_IMPORTED_MODULE_1__.occupationsMap.find(hubData => hubData.hub === this.formData.hub);
        const occupation = hub.map.find(occupationData => occupationData.name === this.formData.occupation);
        this.occupation = occupation;
        this.base = Math.round(occupation.quantifier * _salary_form_config__WEBPACK_IMPORTED_MODULE_1__.baseSalary / 10) * 10; // round to 10pln
        const startDate = moment__WEBPACK_IMPORTED_MODULE_0__(this.formData.dutyStart);
        const endDate = moment__WEBPACK_IMPORTED_MODULE_0__(Date.now());
        const dutyYears = endDate.diff(startDate, 'years');
        this.dutyYearsPercentageBonus = this.countDutyYearsBonusPercentage(dutyYears);
        this.dutyYearsBonus = formatNumber(this.dutyYearsPercentageBonus / 100 * this.base);
        const rank = _salary_form_config__WEBPACK_IMPORTED_MODULE_1__.rankMap.find(rankData => rankData.name === this.formData.rank);
        this.rankMoney = rank.value;
        this.brutto = this.base + this.dutyYearsBonus + this.rankMoney + this.formData.serviceAllowance + this.formData.functionalAllowance;
        this.nszzCut = this.formData.nszz
            ? formatNumber(_salary_form_config__WEBPACK_IMPORTED_MODULE_1__.nszzCutPercentage * this.brutto / 100)
            : 0;
        this.florianCut = this.formData.florian
            ? formatNumber(_salary_form_config__WEBPACK_IMPORTED_MODULE_1__.florianCutPercentage * this.brutto / 100)
            : 0;
        this.tax = this.formData.taxFree ? 0 : formatNumber(0.17 * this.brutto);
        this.salary = formatNumber(this.brutto - this.tax - this.florianCut - this.nszzCut - this.formData.additions);
        this.saveFormData();
    }
    getOccupations() {
        if (!this.formData.hub) {
            return [];
        }
        const currentMap = _salary_form_config__WEBPACK_IMPORTED_MODULE_1__.occupationsMap.find(map => map.hub === this.formData.hub);
        return currentMap.map.map(data => data.name);
    }
    countDutyYearsBonusPercentage(years) {
        if (years >= 35) {
            return 35;
        }
        if (years >= 32) {
            return 32;
        }
        if (years < 2) {
            return 0;
        }
        const yearsOverTwenty = years - 20;
        return yearsOverTwenty <= 0
            ? years
            : 20 + Math.floor(yearsOverTwenty / 2) * 2;
    }
    onInfotipClick(type) {
        this.displayedInfo = type;
    }
    calculateMaxAllowance(functional = false) {
        if (!this.formData.hub || !this.formData.occupation || !this.formData.rank) {
            return 0;
        }
        const hub = _salary_form_config__WEBPACK_IMPORTED_MODULE_1__.occupationsMap.find(hubData => hubData.hub === this.formData.hub);
        const occupation = hub.map.find(occupationData => occupationData.name === this.formData.occupation);
        const base = Math.round(occupation.quantifier * _salary_form_config__WEBPACK_IMPORTED_MODULE_1__.baseSalary / 10) * 10; // round to 10pln
        const rank = _salary_form_config__WEBPACK_IMPORTED_MODULE_1__.rankMap.find(rankData => rankData.name === this.formData.rank);
        const rankMoney = rank.value;
        const multiplier = functional ? 7 / 10 : 1 / 2;
        return formatNumber((base + rankMoney) * multiplier);
    }
    resetOccupation() {
        this.formData.occupation = null;
    }
    toggleAllowances() {
        this.chosenServiceAllowance = !this.chosenServiceAllowance;
        this.formData.functionalAllowance = 0;
        this.formData.serviceAllowance = 0;
    }
    saveFormData() {
        const stringified = JSON.stringify(this.formData);
        localStorage.setItem(this.FORM_DATA_LS_KEY, stringified);
    }
    loadFormData() {
        const data = localStorage.getItem(this.FORM_DATA_LS_KEY);
        if (!data) {
            return;
        }
        let parsed;
        try {
            parsed = JSON.parse(data);
        }
        catch (e) {
            return;
        }
        this.formData = parsed;
    }
}
SalaryFormComponent.ɵfac = function SalaryFormComponent_Factory(t) { return new (t || SalaryFormComponent)(); };
SalaryFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: SalaryFormComponent, selectors: [["app-salary-form"]], decls: 72, vars: 28, consts: [[1, "container"], [1, "form", 3, "ngSubmit"], ["salaryForm", "ngForm"], [1, "form-group"], ["for", "hub"], [1, "input-and-info"], ["id", "hub", "required", "", "name", "hub", 1, "form-control", 3, "ngModel", "ngModelChange", "click"], ["hub", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "space-taker"], ["class", "alert alert-danger", 4, "ngIf"], ["class", "form-group", 4, "ngIf"], ["for", "rank"], ["id", "rank", "required", "", "name", "rank", 1, "form-control", 3, "ngModel", "ngModelChange"], ["rank", "ngModel"], ["src", "assets/info.svg", 3, "click"], ["class", "form-info", 4, "ngIf"], ["class", "form-group", 4, "ngIf", "ngIfElse"], ["functionalAllowance", ""], ["for", "dutyStart"], ["type", "date", "id", "dutyStart", "required", "", "name", "dutyStart", 1, "form-control", 3, "ngModel", "ngModelChange"], ["dutyStart", "ngModel"], ["for", "additions"], ["type", "number", "min", "0", "id", "additions", "name", "additions", 1, "form-control", 3, "ngModel", "ngModelChange"], ["additions", "ngModel"], ["for", "unions"], [1, "input-and-info", "unions"], ["type", "checkbox", "name", "florian", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["florian", "ngModel"], ["for", "florian"], ["type", "checkbox", "name", "nszz", 1, "second-union", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["nszz", "ngModel"], ["for", "nszz"], [1, "flexer"], ["for", "taxFree"], ["type", "checkbox", "name", "taxFree", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["taxFree", "ngModel"], ["type", "submit", 1, "button", 3, "disabled"], [4, "ngIf"], [3, "value"], [1, "alert", "alert-danger"], ["for", "occupation"], ["id", "occupation", "required", "", "name", "occupation", 1, "form-control", 3, "ngModel", "ngModelChange"], ["occupation", "ngModel"], [1, "form-info"], ["for", "serviceAllowance"], ["type", "number", "min", "0", "id", "serviceAllowance", "required", "", "name", "serviceAllowance", 1, "form-control", 3, "max", "disabled", "ngModel", "ngModelChange"], ["serviceAllowance", "ngModel"], [1, "allowance-info-and-button-wrapper"], [4, "ngIf", "ngIfElse"], ["maxServiceAllowance", ""], [3, "click"], [1, "max-allowance-info"], ["for", "functionalAllowance"], ["type", "number", "min", "0", "id", "functionalAllowance", "required", "", "name", "functionalAllowance", 1, "form-control", 3, "max", "disabled", "ngModel", "ngModelChange"], ["functionalAllowance", "ngModel"], [1, "salary"]], template: function SalaryFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function SalaryFormComponent_Template_form_ngSubmit_1_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Miejsce pracy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "select", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SalaryFormComponent_Template_select_ngModelChange_7_listener($event) { return ctx.formData.hub = $event; })("click", function SalaryFormComponent_Template_select_click_7_listener() { return ctx.resetOccupation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, SalaryFormComponent_option_9_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, SalaryFormComponent_div_11_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, SalaryFormComponent_div_12_Template, 10, 4, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Stopie\u0144 s\u0142u\u017Cbowy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "select", 13, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SalaryFormComponent_Template_select_ngModelChange_17_listener($event) { return ctx.formData.rank = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, SalaryFormComponent_option_19_Template, 2, 2, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SalaryFormComponent_Template_img_click_20_listener() { return ctx.onInfotipClick("rank"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, SalaryFormComponent_div_21_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](22, SalaryFormComponent_div_22_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, SalaryFormComponent_div_23_Template, 15, 7, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, SalaryFormComponent_ng_template_24_Template, 15, 7, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Dzie\u0144 liczony jako rozpocz\u0119cie sta\u017Cu s\u0142u\u017Cby");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "input", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SalaryFormComponent_Template_input_ngModelChange_30_listener($event) { return ctx.formData.dutyStart = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SalaryFormComponent_Template_img_click_32_listener() { return ctx.onInfotipClick("dutyStart"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, SalaryFormComponent_div_33_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, SalaryFormComponent_div_34_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Ubezpieczenia, Pracownicze Kasy Zapomogowo-Po\u017Cyczkowe itp.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "input", 23, 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SalaryFormComponent_Template_input_ngModelChange_39_listener($event) { return ctx.formData.additions = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SalaryFormComponent_Template_img_click_41_listener() { return ctx.onInfotipClick("additions"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](42, SalaryFormComponent_div_42_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "label", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45, "Zwi\u0105zki zawodowe");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "input", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SalaryFormComponent_Template_input_ngModelChange_47_listener($event) { return ctx.formData.florian = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Florian");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "input", 30, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SalaryFormComponent_Template_input_ngModelChange_51_listener($event) { return ctx.formData.nszz = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "label", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "NSZZ Solidarno\u015B\u0107");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](55, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SalaryFormComponent_Template_img_click_56_listener() { return ctx.onInfotipClick("unions"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](57, SalaryFormComponent_div_57_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "Zwolnienie z PIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "input", 35, 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function SalaryFormComponent_Template_input_ngModelChange_62_listener($event) { return ctx.formData.taxFree = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "label", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Jestem zwolniony z podatku dochodowego");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](66, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](67, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function SalaryFormComponent_Template_img_click_67_listener() { return ctx.onInfotipClick("taxFree"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](68, SalaryFormComponent_div_68_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "button", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "Przelicz");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](71, SalaryFormComponent_div_71_Template, 14, 13, "div", 38);
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](8);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](18);
        const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](25);
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.formData.hub);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.hubs);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_r1.pristine && !_r1.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.formData.hub);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.formData.rank);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.ranks);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.displayedInfo === "rank");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_r5.pristine && !_r5.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.chosenServiceAllowance)("ngIfElse", _r10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.formData.dutyStart);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.displayedInfo === "dutyStart");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !_r12.pristine && !_r12.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.formData.additions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.displayedInfo === "additions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.formData.florian)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](25, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.formData.nszz)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](26, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.displayedInfo === "unions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.formData.taxFree)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](27, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.displayedInfo === "taxFree");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !_r0.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.salary);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.MaxValidator], styles: [".container[_ngcontent-%COMP%] {\n  width: 700px;\n  display: flex;\n  justify-content: center;\n}\n\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 20px;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.input-and-info[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  position: relative;\n}\n\n.input-and-info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  cursor: pointer;\n}\n\n.form-info[_ngcontent-%COMP%] {\n  position: absolute;\n  max-width: 300px;\n  right: -320px;\n  border: 1px solid black;\n  border-radius: 5px;\n  padding: 3px;\n}\n\n.button[_ngcontent-%COMP%] {\n  margin-right: 34px;\n}\n\n.space-taker[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 24px;\n}\n\n.max-allowance-info[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.flexer[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n}\n\n.second-union[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.unions[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.salary[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhbGFyeS1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFDRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsT0FBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0FBQUYiLCJmaWxlIjoic2FsYXJ5LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICB3aWR0aDogNzAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmlucHV0LWFuZC1pbmZvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgaW1nIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0taW5mbyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIG1heC13aWR0aDogMzAwcHg7XHJcbiAgcmlnaHQ6IC0zMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgcGFkZGluZzogM3B4O1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBtYXJnaW4tcmlnaHQ6IDM0cHg7IC8vIHRvIGNlbnRlciBpdCB1bmRlciBpbnB1dHNcclxufVxyXG5cclxuLnNwYWNlLXRha2VyIHtcclxuICB3aWR0aDogMzRweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbi5tYXgtYWxsb3dhbmNlLWluZm8ge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuLmZsZXhlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4uc2Vjb25kLXVuaW9uIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLnVuaW9ucyB7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4uc2FsYXJ5IHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59Il19 */"] });


/***/ }),

/***/ 16000:
/*!***************************************************!*\
  !*** ./src/app/salary-form/salary-form.config.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "baseSalary": function() { return /* binding */ baseSalary; },
/* harmony export */   "nszzCutPercentage": function() { return /* binding */ nszzCutPercentage; },
/* harmony export */   "florianCutPercentage": function() { return /* binding */ florianCutPercentage; },
/* harmony export */   "occupationsMap": function() { return /* binding */ occupationsMap; },
/* harmony export */   "rankMap": function() { return /* binding */ rankMap; }
/* harmony export */ });
const baseSalary = 1614.69;
const nszzCutPercentage = 0.82;
const florianCutPercentage = 0.5;
const groupToQuantifirerMap = {
    20: 5.588,
    19: 4.897,
    18: 3.587,
    17: 3.192,
    16: 2.811,
    15: 2.509,
    14: 2.311,
    13: 2.198,
    12: 2.144,
    11: 2.074,
    10: 2.020,
    9: 1.961,
    8: 1.950,
    7: 1.926,
    6: 1.906,
    5: 1.896,
    4: 1.876,
    3: 1.813,
    2: 1.749,
    1: 1.577,
};
const occupationsToGroupMap = [
    {
        hub: 'Komenda Główna',
        map: [
            { name: 'Komendant Główny PSP', group: 20 },
            { name: 'Zastępca Komendanta Głównego PSP', group: 19 },
            { name: 'Dyrektor biura', group: 17 },
            { name: 'Doradca Komendanta', group: 16 },
            { name: 'Główny księgowy', group: 16 },
            { name: 'Zastępca dyrektora biura', group: 16 },
            { name: 'Główny specjalista', group: 15 },
            { name: 'Naczelnik wydziału', group: 15 },
            { name: 'Specjalista dziedzinowy', group: 15 },
            { name: 'Radca prawny ', group: 15 },
            { name: 'Kapelan krajowy', group: 14 },
            { name: 'Dyżurny operacyjny kraju', group: 13 },
            { name: 'Kierownik sekcji', group: 13 },
            { name: 'Zastępca naczelnika wydziału', group: 13 },
            { name: 'Starszy specjalista', group: 12 },
            { name: 'Zastępca dyżurnego operacyjnego kraju', group: 12 },
            { name: 'Pomocnik dyżurnego operacyjnego kraju', group: 10 },
            { name: 'Specjalista', group: 10 },
            { name: 'Starszy inspektor sztabowy', group: 9 },
            { name: 'Starszy inspektor', group: 8 },
            { name: 'Inspektor', group: 7 },
            { name: 'Starszy operator sprzętu', group: 7 },
            { name: 'Starszy technik sztabowy', group: 7 },
            { name: 'Starszy ratownik-kierowca', group: 5 },
            { name: 'Starszy technik', group: 5 },
            { name: 'Ratownik-kierowca', group: 4 },
            { name: 'Technik', group: 4 },
            { name: 'Młodszy ratownik-kierowca', group: 2 },
            { name: 'Młodszy technik', group: 2 },
            { name: 'Stażysta', group: 1 },
        ],
    },
    {
        hub: 'Komendy Wojewódzkie PSP z wyłączeniem Ośrodków Szkolenia',
        map: [
            { name: 'Komendant wojewódzki PSP', group: 18 },
            { name: 'Zastępca komendanta wojewódzkiego PSP', group: 17 },
            { name: 'Główny księgowy', group: 14 },
            { name: 'Naczelnik wydziału ', group: 14 },
            { name: 'Główny specjalista ', group: 13 },
            { name: 'Specjalista dziedzinowy', group: 13 },
            { name: 'Radca prawny', group: 13 },
            { name: 'Zastępca naczelnika wydziału (w KW I kat.)', group: 13 },
            { name: 'Kierownik sekcji', group: 12 },
            { name: 'Zastępca naczelnika wydziału (w KW II kat.)', group: 12 },
            { name: 'Dyżurny operacyjny (w KW I kat.)', group: 11 },
            { name: 'Oficer operacyjny', group: 11 },
            { name: 'Starszy specjalista', group: 11 },
            { name: 'Dyżurny operacyjny (w KW II kat.)', group: 10 },
            { name: 'Kapelan wojewódzki', group: 10 },
            { name: 'Specjalista ', group: 9 },
            { name: 'Starszy inspektor sztabowy', group: 9 },
            { name: 'Zastępca dyżurnego operacyjnego', group: 9 },
            { name: 'Młodszy specjalista', group: 8 },
            { name: 'Pomocnik dyżurnego operacyjnego', group: 7 },
            { name: 'Starszy inspektor', group: 7 },
            { name: 'Starszy technik sztabowy', group: 7 },
            { name: 'Inspektor', group: 6 },
            { name: 'Starszy ratownik-kierowca', group: 4 },
            { name: 'Starszy technik', group: 4 },
            { name: 'Ratownik-kierowca', group: 3 },
            { name: 'Technik', group: 3 },
            { name: 'Młodszy ratownik-kierowca', group: 2 },
            { name: 'Młodszy technik', group: 2 },
            { name: 'Stażysta', group: 1 },
        ],
    },
    {
        hub: 'Komendy Powiatowe i Miejskie PSP',
        map: [
            { name: 'Komendant powiatowy (miejski) PSP (w KP I kat.)', group: 17 },
            { name: 'Komendant powiatowy (miejski) PSP (w KP II kat.)', group: 16 },
            { name: 'Zastępca komendanta powiatowego (miejskiego) PSP (w KP I kat.)', group: 16 },
            { name: 'Komendant powiatowy (miejski) PSP (w KP III, IV i V kat.)', group: 15 },
            { name: 'Zastępca komendanta powiatowego (miejskiego) PSP (w KP II kat.)', group: 15 },
            { name: 'Zastępca komendanta powiatowego (miejskiego) PSP (w KP III, IV i V kat.)', group: 14 },
            { name: 'Dowódca jednostki ratowniczo-gaśniczej', group: 13 },
            { name: 'Główny księgowy (w KP I kat.)', group: 13 },
            { name: 'Naczelnik wydziału (w KP I kat.)', group: 13 },
            { name: 'Naczelnik wydziału właściwy do spraw operacyjnych (w KP II kat.)', group: 13 },
            { name: 'Główny księgowy (w KP II kat.)', group: 12 },
            { name: 'Naczelnik wydziału (w KP II kat.)', group: 12 },
            { name: 'Naczelnik wydziału właściwy do spraw operacyjnych (w KP III, IV i V kat.)', group: 12 },
            { name: 'Zastępca dowódcy jednostki ratowniczo-gaśniczej', group: 12 },
            { name: 'Zastępca naczelnika wydziału (w KP I kat.)', group: 12 },
            { name: 'Starszy specjalista właściwy ds. ochrony danych (w KP I kat.)', group: 12 },
            { name: 'Główny księgowy (w KP III, IV i V kat.)', group: 11 },
            { name: 'Naczelnik wydziału (w KP III, IV i V kat.)', group: 11 },
            { name: 'Zastępca naczelnika wydziału (w KP II kat.)', group: 11 },
            { name: 'Kierownik sekcji (w KP I i II kat.)', group: 11 },
            { name: 'Dowódca zmiany', group: 10 },
            { name: 'Dyżurny operacyjny (w KP I i II kat.)', group: 10 },
            { name: 'Kierownik sekcji (w KP III, IV i V kat.) ', group: 10 },
            { name: 'Oficer operacyjny (w KP I i II kat.)', group: 10 },
            { name: 'Starszy specjalista', group: 10 },
            { name: 'Zastępca naczelnika wydziału (w KP III, IV i V kat.)', group: 10 },
            { name: 'Dyżurny operacyjny (w KP III, IV i V kat.)', group: 9 },
            { name: 'Specjalista', group: 9 },
            { name: 'Starszy dyżurny stanowiska kierowania', group: 9 },
            { name: 'Starszy inspektor sztabowy', group: 9 },
            { name: 'Starszy ratownik specjalista', group: 9 },
            { name: 'Zastępca dowódcy zmiany', group: 9 },
            { name: 'Zastępca dyżurnego operacyjnego (w KP I i II kat.)', group: 9 },
            { name: 'Dowódca sekcji', group: 8 },
            { name: 'Młodszy specjalista', group: 8 },
            { name: 'Absolwent-oficer', group: 7 },
            { name: 'Dowódca zastępu', group: 7 },
            { name: 'Ratownik specjalista', group: 7 },
            { name: 'Starszy inspektor', group: 7 },
            { name: 'Starszy operator sprzętu', group: 7 },
            { name: 'Starszy technik sztabowy', group: 7 },
            { name: 'Dyżurny stanowiska kierowania', group: 6 },
            { name: 'Inspektor', group: 6 },
            { name: 'Operator sprzętu', group: 6 },
            { name: 'Specjalista dziedzinowy', group: 6 },
            { name: 'Młodszy inspektor', group: 5 },
            { name: 'Młodszy operator sprzętu', group: 5 },
            { name: 'Młodszy ratownik specjalista', group: 5 },
            { name: 'Absolwent-aspirant', group: 4 },
            { name: 'Starszy ratownik', group: 4 },
            { name: 'Starszy ratownik-kierowca', group: 4 },
            { name: 'Starszy technik', group: 4 },
            { name: 'Starszy ratownik medyczny służby', group: 4 },
            { name: 'Ratownik', group: 3 },
            { name: 'Ratownik-kierowca', group: 3 },
            { name: 'Ratownik medyczny służby', group: 3 },
            { name: 'Technik', group: 3 },
            { name: 'Młodszy ratownik', group: 2 },
            { name: 'Młodszy ratownik-kierowca', group: 2 },
            { name: 'Młodszy technik', group: 2 },
            { name: 'Stażysta', group: 1 },
        ],
    },
    {
        hub: 'Szkoła Główna Służby Pożarniczej',
        map: [
            { name: 'Komendant', group: 19 },
            { name: 'Zastępca Komendanta', group: 18 },
            { name: 'Kanclerz', group: 17 },
            { name: 'Profesor', group: 16 },
            { name: 'Dyrektor', group: 15 },
            { name: 'Profesor uczelni', group: 15 },
            { name: 'Dowódca pododdziałów szkolnych', group: 14 },
            { name: 'Kierownik działu', group: 14 },
            { name: 'Adiunkt', group: 13 },
            { name: 'Dowódca jednostki ratowniczo-gaśniczej', group: 13 },
            { name: 'Główny specjalista', group: 13 },
            { name: 'Dowódca kompanii szkolnej', group: 12 },
            { name: 'Oficer dyżurny', group: 12 },
            { name: 'Starszy wykładowca', group: 12 },
            { name: 'Zastępca dowódcy jednostki ratowniczo-gaśniczej', group: 12 },
            { name: 'Specjalista dziedzinowy', group: 12 },
            { name: 'Wykładowca', group: 11 },
            { name: 'Zastępca dowódcy kompanii szkolnej', group: 11 },
            { name: 'Asystent', group: 10 },
            { name: 'Dowódca zmiany', group: 10 },
            { name: 'Kierownik referatu', group: 10 },
            { name: 'Starszy ratownik specjalista', group: 10 },
            { name: 'Starszy specjalista', group: 10 },
            { name: 'Lektor', group: 9 },
            { name: 'Specjalista', group: 9 },
            { name: 'Starszy instruktor', group: 9 },
            { name: 'Zastępca dowódcy zmiany', group: 9 },
            { name: 'Dowódca sekcji', group: 8 },
            { name: 'Instruktor', group: 8 },
            { name: 'Młodszy specjalista', group: 8 },
            { name: 'Starszy inspektor sztabowy', group: 8 },
            { name: 'Absolwent-oficer', group: 7 },
            { name: 'Dowódca zastępu', group: 7 },
            { name: 'Ratownik specjalista', group: 7 },
            { name: 'Starszy dyżurny szkolnego stanowiska kierowania', group: 7 },
            { name: 'Starszy inspektor', group: 7 },
            { name: 'Starszy operator sprzętu', group: 7 },
            { name: 'Inspektor', group: 6 },
            { name: 'Operator sprzętu', group: 6 },
            { name: 'Młodszy inspektor', group: 5 },
            { name: 'Młodszy instruktor', group: 5 },
            { name: 'Młodszy operator sprzętu', group: 5 },
            { name: 'Młodszy ratownik specjalista', group: 5 },
            { name: 'Absolwent-aspirant', group: 4 },
            { name: 'Dyżurny szkolnego stanowiska kierowania', group: 4 },
            { name: 'Starszy ratownik', group: 4 },
            { name: 'Starszy ratownik medyczny służby', group: 4 },
            { name: 'Starszy ratownik-kierowca', group: 4 },
            { name: 'Starszy technik', group: 4 },
            { name: 'Ratownik', group: 3 },
            { name: 'Ratownik medyczny służby', group: 3 },
            { name: 'Ratownik-kierowca', group: 3 },
            { name: 'Technik', group: 3 },
            { name: 'Młodszy ratownik', group: 2 },
            { name: 'Młodszy ratownik-kierowca', group: 2 },
            { name: 'Młodszy technik', group: 2 },
            { name: 'Stażysta', group: 1 },
        ],
    },
    {
        hub: 'Pozostałe Szkoły, Ośrodki Szkolenia KW, Instytuty Badawcze oraz Centralne Muzeum Pożarnictwa',
        map: [
            { name: 'Dyrektor (w Instytucie Badawczym)', group: 18 },
            { name: 'Dyrektor (w Centralnym Muzeum Pożarnictwa)', group: 16 },
            { name: 'Komendant', group: 17 },
            { name: 'Zastępca dyrektora', group: 16 },
            { name: 'Zastępca komendanta', group: 16 },
            { name: 'Kierownik zakładu', group: 14 },
            { name: 'Naczelnik wydziału właściwy do spraw kształcenia', group: 14 },
            { name: 'Naczelnik ośrodka szkolenia', group: 14 },
            { name: 'Główny księgowy', group: 13 },
            { name: 'Główny specjalista', group: 13 },
            { name: 'Naczelnik wydziału', group: 13 },
            { name: 'Dowódca jednostki ratowniczo-gaśniczej', group: 13 },
            { name: 'Adiunkt', group: 12 },
            { name: 'Dowódca kompanii szkolnej', group: 12 },
            { name: 'Kierownik laboratorium', group: 12 },
            { name: 'Kierownik sekcji', group: 12 },
            { name: 'Kierownik zespołu przedmiotowego', group: 12 },
            { name: 'Oficer dyżurny', group: 12 },
            { name: 'Starszy wykładowca', group: 12 },
            { name: 'Specjalista dziedzinowy', group: 12 },
            { name: 'Zastępca dowódcy jednostki ratowniczo-gaśniczej', group: 12 },
            { name: 'Zastępca naczelnika ośrodka szkolenia', group: 12 },
            { name: 'Zastępca naczelnika wydziału', group: 12 },
            { name: 'Wykładowca', group: 11 },
            { name: 'Zastępca dowódcy kompanii szkolnej', group: 11 },
            { name: 'Dowódca zmiany', group: 10 },
            { name: 'Starszy specjalista', group: 10 },
            { name: 'Specjalista', group: 9 },
            { name: 'Starszy instruktor', group: 9 },
            { name: 'Starszy ratownik specjalista', group: 9 },
            { name: 'Zastępca dowódcy zmiany', group: 9 },
            { name: 'Dowódca sekcji', group: 8 },
            { name: 'Instruktor', group: 8 },
            { name: 'Młodszy specjalista', group: 8 },
            { name: 'Młodszy wykładowca', group: 8 },
            { name: 'Starszy inspektor sztabowy', group: 8 },
            { name: 'Absolwent-oficer', group: 7 },
            { name: 'Dowódca zastępu', group: 7 },
            { name: 'Ratownik specjalista', group: 7 },
            { name: 'Starszy dyżurny szkolnego stanowiska kierowania', group: 7 },
            { name: 'Starszy inspektor', group: 7 },
            { name: 'Starszy operator sprzętu', group: 7 },
            { name: 'Starszy technik sztabowy', group: 7 },
            { name: 'Inspektor', group: 6 },
            { name: 'Operator sprzętu', group: 6 },
            { name: 'Młodszy inspektor', group: 5 },
            { name: 'Młodszy instruktor', group: 5 },
            { name: 'Młodszy ratownik specjalista', group: 5 },
            { name: 'Absolwent-aspirant', group: 4 },
            { name: 'Dyżurny szkolnego stanowiska kierowania', group: 4 },
            { name: 'Starszy ratownik', group: 4 },
            { name: 'Starszy ratownik-kierowca', group: 4 },
            { name: 'Starszy ratownik medyczny służby', group: 4 },
            { name: 'Starszy technik', group: 4 },
            { name: 'Ratownik', group: 3 },
            { name: 'Ratownik-kierowca', group: 3 },
            { name: 'Ratownik medyczny służby', group: 3 },
            { name: 'Technik', group: 3 },
            { name: 'Młodszy ratownik', group: 2 },
            { name: 'Młodszy ratownik-kierowca', group: 2 },
            { name: 'Młodszy technik', group: 2 },
            { name: 'Stażysta', group: 1 },
        ],
    },
    {
        hub: 'Inspektorat Wojskowej Straży Pożarnej',
        map: [
            { name: 'Główny specjalista', group: 15 },
            { name: 'Starszy specjalista', group: 13 },
            { name: 'Specjalista', group: 11 },
            { name: 'Młodszy specjalista', group: 9 },
        ],
    },
    {
        hub: 'Delegatura Wojskowej Straży Pożarnej',
        map: [
            { name: 'Główny specjalista', group: 13 },
            { name: 'Starszy specjalista', group: 11 },
            { name: 'Specjalista', group: 10 },
            { name: 'Młodszy specjalista', group: 8 },
        ],
    },
    {
        hub: 'Wojskowe Straże Pożarne',
        map: [
            { name: 'Dowódca wojskowej straży pożarnej', group: 10 },
            { name: 'Dowódca zastępu', group: 7 },
            { name: 'Starszy ratownik-kierowca', group: 4 },
            { name: 'Ratownik', group: 3 },
            { name: 'Ratownik-kierowca', group: 3 },
            { name: 'Technik', group: 3 },
            { name: 'Młodszy ratownik', group: 2 },
            { name: 'Młodszy ratownik-kierowca', group: 2 },
        ],
    },
];
const occupationsMap = occupationsToGroupMap.map(hubData => ({
    hub: hubData.hub,
    map: hubData.map.map(occupation => (Object.assign(Object.assign({}, occupation), { quantifier: groupToQuantifirerMap[occupation.group] })))
}));
const rankMap = [
    { name: 'Generał brygadier', value: 1772 },
    { name: 'Nadbrygadier', value: 1622 },
    { name: 'Starszy brygadier', value: 1472 },
    { name: 'Brygadier', value: 1452 },
    { name: 'Młodszy brygadier', value: 1432 },
    { name: 'Starszy kapitan', value: 1412 },
    { name: 'Kapitan', value: 1392 },
    { name: 'Młodszy kapitan', value: 1372 },
    { name: 'Aspirant sztabowy', value: 1317 },
    { name: 'Starszy aspirant', value: 1297 },
    { name: 'Aspirant', value: 1277 },
    { name: 'Młodszy aspirant', value: 1257 },
    { name: 'Starszy ogniomistrz', value: 1202 },
    { name: 'Ogniomistrz', value: 1182 },
    { name: 'Młodszy ogniomistrz', value: 1162 },
    { name: 'Starszy sekcyjny', value: 1142 },
    { name: 'Sekcyjny', value: 1122 },
    { name: 'Starszy strażak', value: 1082 },
    { name: 'Strażak', value: 1072 },
];


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./af": 62275,
	"./af.js": 62275,
	"./ar": 90857,
	"./ar-dz": 11218,
	"./ar-dz.js": 11218,
	"./ar-kw": 14754,
	"./ar-kw.js": 14754,
	"./ar-ly": 66680,
	"./ar-ly.js": 66680,
	"./ar-ma": 92178,
	"./ar-ma.js": 92178,
	"./ar-sa": 56522,
	"./ar-sa.js": 56522,
	"./ar-tn": 95682,
	"./ar-tn.js": 95682,
	"./ar.js": 90857,
	"./az": 70164,
	"./az.js": 70164,
	"./be": 79774,
	"./be.js": 79774,
	"./bg": 60947,
	"./bg.js": 60947,
	"./bm": 21832,
	"./bm.js": 21832,
	"./bn": 89650,
	"./bn.js": 89650,
	"./bo": 66005,
	"./bo.js": 66005,
	"./br": 98492,
	"./br.js": 98492,
	"./bs": 70534,
	"./bs.js": 70534,
	"./ca": 52061,
	"./ca.js": 52061,
	"./cs": 84737,
	"./cs.js": 84737,
	"./cv": 61167,
	"./cv.js": 61167,
	"./cy": 77996,
	"./cy.js": 77996,
	"./da": 9528,
	"./da.js": 9528,
	"./de": 14540,
	"./de-at": 49430,
	"./de-at.js": 49430,
	"./de-ch": 67978,
	"./de-ch.js": 67978,
	"./de.js": 14540,
	"./dv": 83426,
	"./dv.js": 83426,
	"./el": 6616,
	"./el.js": 6616,
	"./en-au": 63816,
	"./en-au.js": 63816,
	"./en-ca": 32162,
	"./en-ca.js": 32162,
	"./en-gb": 83305,
	"./en-gb.js": 83305,
	"./en-ie": 61954,
	"./en-ie.js": 61954,
	"./en-il": 43060,
	"./en-il.js": 43060,
	"./en-in": 59923,
	"./en-in.js": 59923,
	"./en-nz": 13540,
	"./en-nz.js": 13540,
	"./en-sg": 16505,
	"./en-sg.js": 16505,
	"./eo": 41907,
	"./eo.js": 41907,
	"./es": 86640,
	"./es-do": 41246,
	"./es-do.js": 41246,
	"./es-us": 36430,
	"./es-us.js": 36430,
	"./es.js": 86640,
	"./et": 62551,
	"./et.js": 62551,
	"./eu": 32711,
	"./eu.js": 32711,
	"./fa": 54572,
	"./fa.js": 54572,
	"./fi": 33390,
	"./fi.js": 33390,
	"./fil": 87860,
	"./fil.js": 87860,
	"./fo": 48216,
	"./fo.js": 48216,
	"./fr": 99291,
	"./fr-ca": 98527,
	"./fr-ca.js": 98527,
	"./fr-ch": 58407,
	"./fr-ch.js": 58407,
	"./fr.js": 99291,
	"./fy": 47054,
	"./fy.js": 47054,
	"./ga": 49540,
	"./ga.js": 49540,
	"./gd": 73917,
	"./gd.js": 73917,
	"./gl": 51486,
	"./gl.js": 51486,
	"./gom-deva": 56245,
	"./gom-deva.js": 56245,
	"./gom-latn": 48868,
	"./gom-latn.js": 48868,
	"./gu": 59652,
	"./gu.js": 59652,
	"./he": 89019,
	"./he.js": 89019,
	"./hi": 42040,
	"./hi.js": 42040,
	"./hr": 63402,
	"./hr.js": 63402,
	"./hu": 79322,
	"./hu.js": 79322,
	"./hy-am": 27609,
	"./hy-am.js": 27609,
	"./id": 57942,
	"./id.js": 57942,
	"./is": 98275,
	"./is.js": 98275,
	"./it": 73053,
	"./it-ch": 4378,
	"./it-ch.js": 4378,
	"./it.js": 73053,
	"./ja": 46176,
	"./ja.js": 46176,
	"./jv": 679,
	"./jv.js": 679,
	"./ka": 92726,
	"./ka.js": 92726,
	"./kk": 72953,
	"./kk.js": 72953,
	"./km": 86957,
	"./km.js": 86957,
	"./kn": 59181,
	"./kn.js": 59181,
	"./ko": 47148,
	"./ko.js": 47148,
	"./ku": 27752,
	"./ku.js": 27752,
	"./ky": 65675,
	"./ky.js": 65675,
	"./lb": 41263,
	"./lb.js": 41263,
	"./lo": 65746,
	"./lo.js": 65746,
	"./lt": 11143,
	"./lt.js": 11143,
	"./lv": 38753,
	"./lv.js": 38753,
	"./me": 44054,
	"./me.js": 44054,
	"./mi": 31573,
	"./mi.js": 31573,
	"./mk": 30202,
	"./mk.js": 30202,
	"./ml": 68523,
	"./ml.js": 68523,
	"./mn": 79794,
	"./mn.js": 79794,
	"./mr": 56681,
	"./mr.js": 56681,
	"./ms": 56975,
	"./ms-my": 39859,
	"./ms-my.js": 39859,
	"./ms.js": 56975,
	"./mt": 3691,
	"./mt.js": 3691,
	"./my": 5152,
	"./my.js": 5152,
	"./nb": 7607,
	"./nb.js": 7607,
	"./ne": 21526,
	"./ne.js": 21526,
	"./nl": 86368,
	"./nl-be": 40076,
	"./nl-be.js": 40076,
	"./nl.js": 86368,
	"./nn": 68420,
	"./nn.js": 68420,
	"./oc-lnc": 51906,
	"./oc-lnc.js": 51906,
	"./pa-in": 94504,
	"./pa-in.js": 94504,
	"./pl": 54721,
	"./pl.js": 54721,
	"./pt": 74645,
	"./pt-br": 54548,
	"./pt-br.js": 54548,
	"./pt.js": 74645,
	"./ro": 71977,
	"./ro.js": 71977,
	"./ru": 26042,
	"./ru.js": 26042,
	"./sd": 78849,
	"./sd.js": 78849,
	"./se": 27739,
	"./se.js": 27739,
	"./si": 50084,
	"./si.js": 50084,
	"./sk": 92449,
	"./sk.js": 92449,
	"./sl": 23086,
	"./sl.js": 23086,
	"./sq": 33139,
	"./sq.js": 33139,
	"./sr": 30607,
	"./sr-cyrl": 30063,
	"./sr-cyrl.js": 30063,
	"./sr.js": 30607,
	"./ss": 40131,
	"./ss.js": 40131,
	"./sv": 21665,
	"./sv.js": 21665,
	"./sw": 5642,
	"./sw.js": 5642,
	"./ta": 33622,
	"./ta.js": 33622,
	"./te": 74825,
	"./te.js": 74825,
	"./tet": 48336,
	"./tet.js": 48336,
	"./tg": 39238,
	"./tg.js": 39238,
	"./th": 99463,
	"./th.js": 99463,
	"./tk": 39986,
	"./tk.js": 39986,
	"./tl-ph": 29672,
	"./tl-ph.js": 29672,
	"./tlh": 40043,
	"./tlh.js": 40043,
	"./tr": 51212,
	"./tr.js": 51212,
	"./tzl": 50110,
	"./tzl.js": 50110,
	"./tzm": 80482,
	"./tzm-latn": 38309,
	"./tzm-latn.js": 38309,
	"./tzm.js": 80482,
	"./ug-cn": 42495,
	"./ug-cn.js": 42495,
	"./uk": 54157,
	"./uk.js": 54157,
	"./ur": 80984,
	"./ur.js": 80984,
	"./uz": 64141,
	"./uz-latn": 43662,
	"./uz-latn.js": 43662,
	"./uz.js": 64141,
	"./vi": 12607,
	"./vi.js": 12607,
	"./x-pseudo": 66460,
	"./x-pseudo.js": 66460,
	"./yo": 92948,
	"./yo.js": 92948,
	"./zh-cn": 62658,
	"./zh-cn.js": 62658,
	"./zh-hk": 39352,
	"./zh-hk.js": 39352,
	"./zh-mo": 38274,
	"./zh-mo.js": 38274,
	"./zh-tw": 98451,
	"./zh-tw.js": 98451
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map