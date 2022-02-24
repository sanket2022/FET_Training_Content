var Calculation = /** @class */ (function () {
    function Calculation(amt, per) {
        this.amt = amt;
        this.per = per;
    }
    Calculation.prototype.tax = function () {
        return (this.amt * this.per) / 100;
    };
    Calculation.prototype.tds = function () {
        return (this.amt + this.per) / 100;
    };
    return Calculation;
}());
var obj = new Calculation(5000, 5);
console.log("Tax " + obj.tax());
console.log("TDS " + obj.tds());
