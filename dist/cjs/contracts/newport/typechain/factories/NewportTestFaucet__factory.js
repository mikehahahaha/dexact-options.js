"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewportTestFaucet__factory = void 0;
var ethers_1 = require("ethers");
var _abi = [
    {
        inputs: [],
        name: "drip",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
var NewportTestFaucet__factory = /** @class */ (function () {
    function NewportTestFaucet__factory() {
    }
    NewportTestFaucet__factory.createInterface = function () {
        return new ethers_1.utils.Interface(_abi);
    };
    NewportTestFaucet__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    NewportTestFaucet__factory.abi = _abi;
    return NewportTestFaucet__factory;
}());
exports.NewportTestFaucet__factory = NewportTestFaucet__factory;
//# sourceMappingURL=NewportTestFaucet__factory.js.map