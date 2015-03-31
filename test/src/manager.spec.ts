/// <reference path="../../typings/tsd.d.ts" />

import p = require('../../src/iperson');
import m = require('../../src/manager');

describe('The Manager class', () => {

    it('should accept first and last in the ctor', () => {
        var manager: p.IPerson;
        manager = new m.Manager('Jack', 'Ma');

        expect(manager.getFullName()).toBe('Jack, Ma');
    });

});
