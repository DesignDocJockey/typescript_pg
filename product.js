"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    constructor(name, price, isbn) {
        this.name = name;
        this.price = price;
        this.isbn = isbn;
    }
    getName() { return this.name; }
    getPrice() { return this.price; }
    getDiscountedPrice(discount) {
        return this.price - (this.price * discount / 100);
    }
    getISBN() { return this.isbn; }
}
exports.Product = Product;
