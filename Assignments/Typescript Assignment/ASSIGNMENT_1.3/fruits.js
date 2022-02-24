// class  fruit{
//     constructor(public color:string){
//     }
// }
// class apple extends fruit{
//     constructor(private price:number, color:string){
//         super(color);
//     }
//     log(){
//         console.log("Eat "+this.color+" fruit for the price of "+this.price);
//     }
// }
// let a = new apple(100,"Black");
// a.log();
//****************************************************** */
// class fruit{
//     constructor(private color:string){
//     }
//     eat(){
//         console.log("Eat "+this.getColor()+" fruit");
//     }
//     getColor(){
//         return this.color;
//     }
//     setColor(color:string){
//         this.color = color;
//     }
// }
// let f = new fruit("red");
// f.setColor("white");
// f.eat();
// below code will give an error of ECMSScript
var fruit = /** @class */ (function () {
    function fruit(color) {
        this.color = color;
    }
    fruit.prototype.eat = function () {
        console.log("Eat " + this.Color + " fruit");
    };
    Object.defineProperty(fruit.prototype, "Color", {
        get: function () {
            return this.color;
        },
        set: function (color) {
            this.color = color;
        },
        enumerable: false,
        configurable: true
    });
    return fruit;
}());
var f = new fruit("red");
f.Color = "Green";
f.eat();
