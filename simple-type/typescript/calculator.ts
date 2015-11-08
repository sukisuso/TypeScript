function add(x: number, y: number):number {
    return x + y;
}

function mult(x: number, y:number): number{
	return x * y;
}

console.log(add(2, mult(8,2)));



function equal<T>(lhs: T, rhs: T): boolean {
	return lhs === rhs;
}
type int = number;
var values: int | int[];

 
var x = [1, 'world']; // x: Array<string|number>
x[0] = 25;
x[1] = "";


const enum Gender { Male, Female};

var mygender = Gender.Male;

var tam: number = 5;



//funcion lambda
//var $ = (id) => { document.getElementById(id) };    


function optionalParam(x: number, y = 0): number{
	return x + y;
}

optionalParam(1);

var planting = new PlantInfo();