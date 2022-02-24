interface tax{

    amt:number;
    per:number;
    tax():number;

}

interface tds{

    amt:number;
    per:number;
    tds():number;

}

class Calculation implements tax, tds{

    amt:number;
    per:number;

    constructor(amt:number,per:number){

        this.amt = amt;
        this.per = per;
    }

    tax(){
        return (this.amt*this.per)/100;
    }

    tds(){
        return (this.amt+this.per)/100;
    }

}

let obj = new Calculation(5000,5);

console.log("Tax "+obj.tax());
console.log("TDS "+obj.tds());