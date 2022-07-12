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
var products_service_1 = require("../services/products.service");
var ProductComponent = (function () {
    function ProductComponent(productsService) {
        this.productsService = productsService;
        this.filterKey = "";
    }
    ProductComponent.prototype.printProduct = function (product) {
        this.selectedProduct = product.productName;
    };
    ProductComponent.prototype.deleteProduct = function (product) {
        var index = this.products.indexOf(product);
        this.products.splice(index, 1);
    };
    ProductComponent.prototype.onKeyUp = function (key) {
        this.filterKey = key;
    };
    ProductComponent.prototype.editProduct = function (product) {
        this.editableProduct = product;
        console.log(this.editableProduct);
    };
    ProductComponent.prototype.editProductsAfterSave = function (e) {
        console.log(e);
    };
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productsService
            .getAllProducts()
            .subscribe(function (data) { return (_this.products = data); });
    };
    ProductComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "pm-products",
            templateUrl: "./products.component.html",
        }), 
        __metadata('design:paramtypes', [products_service_1.ProductsService])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=products.component.js.map