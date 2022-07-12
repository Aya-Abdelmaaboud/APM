"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var SelectedProductComponent = (function () {
    function SelectedProductComponent() {
        this.savedProduct = new core_1.EventEmitter();
    }
    SelectedProductComponent.prototype.onSaveProduct = function (prdtName) {
        this.editProduct.productName = prdtName;
        this.savedProduct.emit(this.editProduct);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SelectedProductComponent.prototype, "editProduct", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SelectedProductComponent.prototype, "savedProduct", void 0);
    SelectedProductComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "pm-selected-product",
            templateUrl: "./selected-product.component.html",
        }), 
        __metadata('design:paramtypes', [])
    ], SelectedProductComponent);
    return SelectedProductComponent;
}());
exports.SelectedProductComponent = SelectedProductComponent;
//# sourceMappingURL=selected-product.component.js.map