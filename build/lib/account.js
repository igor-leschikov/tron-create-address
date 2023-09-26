"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAccount = void 0;
const crypto_1 = require("./crypto");
/**
 * Generate a new account
 */
const generateAccount = () => {
    const { publicKey, privateKey } = (0, crypto_1.genPrKey)();
    const addressBytes = (0, crypto_1.computeAddress)(publicKey);
    const address = (0, crypto_1.getBase58CheckAddress)(addressBytes);
    return { address, publicKey, addressBytes, privateKey };
};
exports.generateAccount = generateAccount;
