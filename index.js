
let length = 5;
let height = 10;
let area = length + height;
function calculateArea(length, height){
    return length * height;
}
class Rectangle{
    constructor(length,height){
        this.length= length;
        this.height= height;
    }
    calculateArea(){
       return this.area 
    }
}

//should encapsulate the variables and functions within a Rectangle
//should pass the variables into the Rectangle as constructor arguments
//should have a calculateArea method that takes no arguments


