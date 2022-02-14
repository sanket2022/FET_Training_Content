function results(){
    let str = document.getElementById("string").value;

    let ch = document.getElementById("char").value;

    let pos = str.indexOf("ch");
    if(pos>0){
        document.write("Character "+ch+" is found at position : "+pos);
    }
    else{
        document.write("Not Found");
    }
    document.write("<br>");

    let abc = str.split(' ').slice(0, 2).join(' ');
    document.write("Cybage Software Pvt Ltd is Popularly known as "+abc);
    document.write("<br>");

    let lc = str.toLowerCase();
    document.write(lc);
    document.write("<br>");

    let uc = str.toUpperCase();
    document.write(uc);
}