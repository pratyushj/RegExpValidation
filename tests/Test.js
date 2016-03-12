"use strict";
let mocha = require('mocha');
let chai = require('chai');

let validators = require('../dist/index');



describe('Strings', ()=> {

    /**
     * isSizeSmallerThan
     */
    describe(`isSizeSmallerThan for non-empty String`, ()=> {
        let str = 'abcd';
        it(`${str} size is samller than 5 : true`, ()=> {
            chai.expect(validators.isSizeSmallerThanN(str, 5)).to.equal(true)
        });
        it(`${str} size is samller than 3 : false`, ()=> {
            chai.expect(validators.isSizeSmallerThanN(str, 3)).to.equal(false)
        });
        it(`${str} size is samller than 4 : false`, ()=> {
            chai.expect(validators.isSizeSmallerThanN(str, 4)).to.equal(false)
        })
    });
    describe('Test isSizeSmallerThan for empty String', ()=> {
        let str = '';
        it(`${str} size is samller than 1 : true`, ()=> {
            chai.expect(validators.isSizeSmallerThanN(str, 1)).to.equal(true)
        });
        it(`${str} size is samller than -1 : false`, ()=> {
            chai.expect(validators.isSizeSmallerThanN('', -1)).to.equal(false)
        })
    });

    /**
     * isSizeGreaterThanN
     */

    describe(`isSizeGreaterThanN for non-empty String`, ()=> {
        let str = 'abcd';
        it(`${str} size is samller than 5 : false`, ()=> {
            chai.expect(validators.isSizeGreaterThanN(str, 5)).to.equal(false)
        });
        it(`${str} size is samller than 3 : true`, ()=> {
            chai.expect(validators.isSizeGreaterThanN(str, 3)).to.equal(true)
        });
        it(`${str} size is samller than 4 : false`, ()=> {
            chai.expect(validators.isSizeGreaterThanN(str, 4)).to.equal(false)
        })
    });
    describe('Test isSizeGreaterThanN for empty String', ()=> {
        let str = '';
        it(`${str} size is samller than 1 : true`, ()=> {
            chai.expect(validators.isSizeGreaterThanN(str, 1)).to.equal(false)
        });
        it(`${str} size is samller than -1 : false`, ()=> {
            chai.expect(validators.isSizeGreaterThanN('', -1)).to.equal(true)
        })
    });

    /**
     * isValidEmail
     */
    describe(`isValidEmail`, ()=> {
        it(`abcd should not valid email`, ()=> {
            chai.expect(validators.isValidEmail('abcd')).to.equal(false)
        });
        it(`a@a.com should be a valid email`, ()=> {
            chai.expect(validators.isValidEmail('a@a.com')).to.equal(true)
        });
        it(`a@a should not valid email`, ()=> {
            chai.expect(validators.isValidEmail('a@a')).to.equal(false)
        });
        it(`empty String should not valid email`, ()=> {
            chai.expect(validators.isValidEmail('')).to.equal(false)
        });
        it(`empty String should not valid email`, ()=> {
            chai.expect(validators.isValidEmail(' ')).to.equal(false)
        })
    });

    /**
     * containsOnlyLetters
     */

    describe(`containsOnlyLetters`, ()=> {
        it(`abcd should be true`, ()=> {
            chai.expect(validators.containsOnlyLetters('abcd')).to.equal(true)
        });
        it(`a@a.com should be false`, ()=> {
            chai.expect(validators.containsOnlyLetters('a@a.com')).to.equal(false)
        });
        it(`a123 should be false`, ()=> {
            chai.expect(validators.containsOnlyLetters('a123')).to.equal(false)
        });
        it(`empty String should be false`, ()=> {
            chai.expect(validators.containsOnlyLetters('')).to.equal(false)
        });
        it(`_$%#@ String should be false`, ()=> {
            chai.expect(validators.containsOnlyLetters('_$%#@')).to.equal(false)
        })
    });



    /**
     * containsOnlySmallCaseLetters
     */

    describe(`containsOnlySmallCaseLetters`, ()=> {
        it(`abcd should be true`, ()=> {
            chai.expect(validators.containsOnlySmallCaseLetters('abcd')).to.equal(true)
        });
        it(`a@a.com should be false`, ()=> {
            chai.expect(validators.containsOnlySmallCaseLetters('a@a.com')).to.equal(false)
        });
        it(`a123 should be false`, ()=> {
            chai.expect(validators.containsOnlySmallCaseLetters('a123')).to.equal(false)
        });
        it(`empty String should be false`, ()=> {
            chai.expect(validators.containsOnlySmallCaseLetters('')).to.equal(false)
        });
        it(`_$%#@ String should be false`, ()=> {
            chai.expect(validators.containsOnlySmallCaseLetters('_$%#@')).to.equal(false)
        })
    });


    /**
     * containsOnlyCapsLetters
     */

    describe(`containsOnlyCapsLetters`, ()=> {
        it(`ABCD should be true`, ()=> {
            chai.expect(validators.containsOnlyCapsLetters('ABCD')).to.equal(true)
        });
        it(`abcd should be false`, ()=> {
            chai.expect(validators.containsOnlyCapsLetters('abcd')).to.equal(false)
        });
        it(`a@a.com should be false`, ()=> {
            chai.expect(validators.containsOnlyCapsLetters('a@a.com')).to.equal(false)
        });
        it(`A@A.COM should be false`, ()=> {
            chai.expect(validators.containsOnlyCapsLetters('A@A.COM')).to.equal(false)
        });
        it(`a123 should be false`, ()=> {
            chai.expect(validators.containsOnlyCapsLetters('a123')).to.equal(false)
        });
        it(`empty String should be false`, ()=> {
            chai.expect(validators.containsOnlyCapsLetters('')).to.equal(false)
        });
        it(`_$%#@ String should be false`, ()=> {
            chai.expect(validators.containsOnlyCapsLetters('_$%#@')).to.equal(false)
        })
    });

});


describe('Numbers', ()=> {

    /**
     * isPositive
     */
    describe(`isPositive `, ()=> {
        it(`45 : true`, ()=> {
            chai.expect(validators.isPositive(45)).to.equal(true)
        });
        it(`-39 : false`, ()=> {
            chai.expect(validators.isPositive(-39)).to.equal(false)
        });
        it(`0 : false`, ()=> {
            chai.expect(validators.isPositive(0)).to.equal(false)
        })
    });
    /**
     * isNegative
     */
    describe(`isNegative `, ()=> {
        it(`45 : true`, ()=> {
            chai.expect(validators.isNegative(45)).to.equal(false)
        });
        it(`-39 : false`, ()=> {
            chai.expect(validators.isNegative(-39)).to.equal(true)
        });
        it(`0 : false`, ()=> {
            chai.expect(validators.isNegative(0)).to.equal(false)
        })
    });

    /**
     * isNumber
     */
    describe(`isNumber `, ()=> {
        it(`45 : true`, ()=> {
            chai.expect(validators.isNumber(45)).to.equal(true)
        });
        it(`-39asdads : false`, ()=> {
            chai.expect(validators.isNumber('-39asdads')).to.equal(false)
        });
        it(`-39 : true`, ()=> {
            chai.expect(validators.isNumber(-39)).to.equal(true)
        });
        it(`-0 : true`, ()=> {
            chai.expect(validators.isNumber(-0)).to.equal(true)
        })
    });

    /**
     * isDecimalNumber
     */
    describe(`isDecimalNumber `, ()=> {
        it(`45 : false`, ()=> {
            chai.expect(validators.isDecimalNumber(45)).to.equal(false)
        });
        it(`-39asdads : false`, ()=> {
            chai.expect(validators.isDecimalNumber('-39asdads')).to.equal(false)
        });
        it(`-39 : false`, ()=> {
            chai.expect(validators.isDecimalNumber('-39')).to.equal(false)
        });
        it(`-0 : false`, ()=> {
            chai.expect(validators.isDecimalNumber('-0')).to.equal(false)
        });
        it(`-0.00 : true`, ()=> {
            chai.expect(validators.isDecimalNumber('-0.00')).to.equal(true)
        });
        it(`-8.90870 : true`, ()=> {
            chai.expect(validators.isDecimalNumber('-8.90870')).to.equal(true)
        });
        it(`160.645209 : true`, ()=> {
            chai.expect(validators.isDecimalNumber('160.645209')).to.equal(true)
        });
        it(`170.00asd : false`, ()=> {
            chai.expect(validators.isDecimalNumber('170.00asd')).to.equal(false)
        })
    });
    /**
     * hasNDecimalPlaces
     */
    describe(`hasNDecimalPlaces `, ()=> {
        it(`45 : true`, ()=> {
            chai.expect(validators.hasNDecimalPlaces(45,0)).to.equal(true)
        });
        it(`-39asdads : false`, ()=> {
            chai.expect(validators.hasNDecimalPlaces('-39asdads',0)).to.equal(false)
        });
        it(`-39.00 : false`, ()=> {
            chai.expect(validators.hasNDecimalPlaces('-39.00',2)).to.equal(true)
        });
        it(`-0 : false`, ()=> {
            chai.expect(validators.hasNDecimalPlaces('-0',0)).to.equal(false)
        });
        it(`-0.00 : true`, ()=> {
            chai.expect(validators.hasNDecimalPlaces('-0.00',2)).to.equal(true)
        });
        it(`-8.9876 : true`, ()=> {
            chai.expect(validators.hasNDecimalPlaces('-8.9876',4)).to.equal(true)
        });
        it(`160.645209 : true`, ()=> {
            chai.expect(validators.hasNDecimalPlaces('160.645209',6)).to.equal(true)
        });
        it(`170.00asd : false`, ()=> {
            chai.expect(validators.hasNDecimalPlaces('170.00asd',2)).to.equal(false)
        })
    });
});


describe('Filters', ()=> {
    /**
     * filterCharacters
     */
    describe(`filterCharacters `, ()=> {
        it(`abcd`, ()=> {
            chai.expect(validators.filterCharacters('abcd')).to.equal('abcd')
        });
        it(`-39 `, ()=> {
            chai.expect(validators.filterCharacters(-39)).to.equal('')
        });
        it(`0`, ()=> {
            chai.expect(validators.filterCharacters(0)).to.equal('')
        });
        it(`adasda24320iidssdfsf&*3632632dsdas`, ()=> {
            chai.expect(validators.filterCharacters('adasda24320iidssdfsf&*3632632dsdas')).to.equal('adasdaiidssdfsfdsdas')
        });
        it(`&*237436463***$#^#@32!@493!~`, ()=> {
            chai.expect(validators.filterCharacters('&*237436463***$#^#@32!@493!~')).to.equal('')
        });
        it(`_____`, ()=> {
            chai.expect(validators.filterCharacters('_____')).to.equal('')
        });
        it(`      `, ()=> {
            chai.expect(validators.filterCharacters('     ')).to.equal('')
        })
    });


    /**
     * filterNumbers
     */
    describe(`filterNumbers `, ()=> {
        it(`abcd`, ()=> {
            chai.expect(validators.filterNumbers('abcd')).to.equal('')
        });
        it(`-39`, ()=> {
            chai.expect(validators.filterNumbers(-39)).to.equal('39')
        });
        it(`0`, ()=> {
            chai.expect(validators.filterNumbers(0)).to.equal('0')
        });
        it(`adasda24320iidssdfsf&*3632632dsdas`, ()=> {
            chai.expect(validators.filterNumbers('adasda24320iidssdfsf&*3632632dsdas')).to.equal('243203632632')
        });
        it(`&*237436463***$#^#@32!@493!~`, ()=> {
            chai.expect(validators.filterNumbers('&*237436463***$#^#@32!@493!~')).to.equal('23743646332493')
        });
        it(`_____`, ()=> {
            chai.expect(validators.filterNumbers('_____')).to.equal('')
        });
        it(`      `, ()=> {
            chai.expect(validators.filterNumbers('     ')).to.equal('')
        })
    });

});


describe('Common',() => {
    /**
     * isEmpty
     */
    describe(`isEmpty `, ()=> {
        it(`undefined`, ()=> {
            chai.expect(validators.isEmpty()).to.equal(true);
        });
        it(`null`, ()=> {
            chai.expect(validators.isEmpty(null)).to.equal(true);
        });
        let wm = new WeakMap();
        wm.set({},3);
        it(`weakMap`, ()=> {
            chai.expect(validators.isEmpty(wm)).to.equal(true);
        });
    });
});