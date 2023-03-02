"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchase = exports.products = exports.users = void 0;
exports.users = [
    {
        id: "001",
        email: "arthur@email.com",
        password: "1234"
    },
    {
        id: "002",
        email: "carol@email.com",
        password: "1234567890"
    }
];
exports.products = [
    {
        id: "001",
        name: "maçã",
        price: 10,
        category: "fruta"
    },
    {
        id: "002",
        name: "banana",
        price: 5,
        category: "fruta"
    }
];
exports.purchase = [
    {
        userId: exports.users[0].id,
        productId: exports.products[0].id,
        quantity: 2,
        totalPrice: exports.products[0].price
    },
    {
        userId: exports.users[1].id,
        productId: exports.products[1].id,
        quantity: 6,
        totalPrice: exports.products[1].price
    }
];
//# sourceMappingURL=database.js.map