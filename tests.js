//mocha test

const chai = window.chai;
const expect = chai.expect;

describe('getCelcius',() => {
    it('should convert fahrenheit to celcius for all values in an array Checked, Everthing is fine', () => {
        expect(getCelcius([23,140,212,41])).to.deep.equal([-5,60,100,5]);
        expect(getCelcius([-58,-22,-4,14])).to.deep.equal([-50,-30,-20,-10]);
    })
})