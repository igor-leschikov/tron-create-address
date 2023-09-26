"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const account_1 = require("../lib/account");
const base58_1 = require("../lib/base58");
const crypto_1 = require("../lib/crypto");
describe('Create address & private key', () => {
    let address;
    beforeEach(() => ({ address } = (0, account_1.generateAccount)()));
    it('Should get an address from a public key correctry', () => {
        // const prKey = '46a3665750540cb4ff9b3ecb62b6aba3f30af7a136d383abd9428499e82fb8ef'
        const pubKey = '042f5329b55e25601a5ab7cefa6fd75437a013d8174559cb2cf45ee71e3f1fa3238b671b2e95343f38368f1f4eedc5d1474ccb61726a610b07584a149cf3725cc6';
        const expectedAddress = 'TD7J8GZpBCe5GdoA3QCVDhpfS2myvRvHD9';
        const address = (0, crypto_1.getBase58CheckAddress)((0, crypto_1.computeAddress)(pubKey));
        (0, chai_1.expect)(address).to.equal(expectedAddress);
    });
    it('The length of address is correct', () => {
        (0, chai_1.expect)(address.length).to.equal(34);
    });
    it('Address starts with `T`', () => {
        (0, chai_1.expect)(address.substring(0, 1)).to.equal('T');
    });
    it('Checksum check', () => {
        const decodedAddr = (0, base58_1.decode58)(address).toString('hex');
        const checkSum = decodedAddr.substring(decodedAddr.length - 8);
        const pure = decodedAddr.substring(0, decodedAddr.length - 8);
        const hash = (0, crypto_1.sha256)((0, crypto_1.sha256)(pure));
        (0, chai_1.expect)(hash.substring(0, 8)).to.equal(checkSum);
    });
});
