import { assert, fibonacci, ContextFib } from './test.js';
mocha.setup('bdd');

describe('fibonacci', function () {
    it(`Error. Length isn't number!  => fibonacci(new ContextFib({ length: 'e' }))`, function () {
        assert.deepEqual(fibonacci(new ContextFib({ length: 'e' })), {status: "failed", reason: ["incorrect format length"]});
    });
    it(`Error. Length is negative value!  => fibonacci(new ContextFib({ length: -10 }))`, function () {
        assert.deepEqual(fibonacci(new ContextFib({ length: -10 })), {status: "failed", reason: ["length cannot be negative value"]});
    });
    it('Empty array! => new ContextFib({ length: 0 }))', function () {
        assert.empty(fibonacci(new ContextFib({ length: 0 })));
    });
    it("Success. First value => fibonacci(new ContextFib({ length: 1 })));", function () {
        assert.equal(fibonacci(new ContextFib({ length: 1 })), 0);
    });
    it("Success. Two value => fibonacci(new ContextFib({ length: 2 })));", function () {
        assert.deepEqual(fibonacci(new ContextFib({ length: 2 })), [ 0, 1 ]);
    });
    it("Success. Three value => fibonacci(new ContextFib({ length: 3 })));", function () {
        assert.deepEqual(fibonacci(new ContextFib({ length: 3 })), [ 0, 1, 1 ]);
    });
    it("Success. Ten value => fibonacci(new ContextFib({ length: 10 })));", function () {
        assert.deepEqual(fibonacci(new ContextFib({ length: 10 })), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
    });
    it("Error. Max value <= 100 => fibonacci(new ContextFib({ length: 100 })));", function () {
        assert.deepEqual(fibonacci(new ContextFib({ length: 101 })), {status: "failed", reason: ["Max length cannot be more 100"]});
    });
    it("Error. Max value for range <= 70 => fibonacci(new ContextFib({ min: 0, max: 80 }));", function () {
        assert.deepEqual(fibonacci(new ContextFib({ min: 0, max: 80 })), {status: "failed", reason: ["Max value for range should be less 70"]});
    });
    it("Error. Max value for range <= 70 => fibonacci(new ContextFib({ min: 0, max: 70 }));", function () {
        assert.deepEqual(fibonacci(new ContextFib({ min: 0, max: 70 })), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, 514229, 832040, 1346269, 2178309, 3524578, 5702887, 9227465, 14930352, 24157817, 39088169, 63245986, 102334155, 165580141, 267914296, 433494437, 701408733, 1134903170, 1836311903, 2971215073, 4807526976, 7778742049, 12586269025, 20365011074, 32951280099, 53316291173, 86267571272, 139583862445, 225851433717, 365435296162, 591286729879, 956722026041, 1548008755920, 2504730781961, 4052739537881, 6557470319842, 10610209857723, 17167680177565, 27777890035288, 44945570212853, 72723460248141, 117669030460994]);
    });
    it("Error. Max value === min value => fibonacci(new ContextFib({ min: 11, max: 11 }));", function () {
        assert.deepEqual(fibonacci(new ContextFib({ min: 11, max: 11 })), {status: "failed", reason: ["value max need to be more that min"]});
    });
    it("Error. Incorrect value min, max => fibonacci(new ContextFib({ min: 10, max: 'e' }));", function () {
        assert.deepEqual(fibonacci(new ContextFib({ min: 10, max: 'e' })), {status: "failed", reason: ["incorrect format for fields: min or max"]});
    });
    it("Error. Empty arguments! => fibonacci();", function () {
        assert.deepEqual(fibonacci(), {status: "failed", reason: ["Argument shouldn't to be empty!"]});
    });
    it("Success. 12 value => fibonacci(new ContextFib({ min: 11, max: 12 })));", function () {
        assert.deepEqual(fibonacci(new ContextFib({ min: 11, max: 12 })), [89]);
    });
    it("Success. from 0 to 13 => fibonacci(new ContextFib({ min: 0, max: 13 })));", function () {
        assert.deepEqual(fibonacci(new ContextFib({ min: 0, max: 13 })), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144]);
    });
    it("Success. First value for range => fibonacci(new ContextFib({ min: 0, max: 1 })));", function () {
        assert.deepEqual(fibonacci(new ContextFib({ min: 0, max: 1 })), [0]);
    });
});