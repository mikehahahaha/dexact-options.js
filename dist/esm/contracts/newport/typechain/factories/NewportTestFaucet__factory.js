/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Contract, utils } from "ethers";
const _abi = [
    {
        inputs: [],
        name: "drip",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
export class NewportTestFaucet__factory {
    static createInterface() {
        return new utils.Interface(_abi);
    }
    static connect(address, signerOrProvider) {
        return new Contract(address, _abi, signerOrProvider);
    }
}
NewportTestFaucet__factory.abi = _abi;
//# sourceMappingURL=NewportTestFaucet__factory.js.map