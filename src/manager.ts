import p = require('./iperson');

export class Manager implements p.IPerson {
    first: string;
    last: string;

    constructor(first: string, last: string) {
        this.first = first;
        this.last = last;
    }

    getFullName(): string {
        return this.first + ', ' +  this.last;
    }
}
