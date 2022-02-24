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
class fruit{
    constructor(private color:string){

    }

    eat(){
        console.log("Eat "+this.Color+" fruit");
    }

    get Color(){
        return this.color;
    }

    set Color(color:string){
        this.color = color;
    }
}
let f = new fruit("red");
f.Color = "Green";
f.eat();