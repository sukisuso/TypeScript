class Foo{

	private _balance: number =0;
	private _mesage: string = "";

	constructor(value:number, mess: string){
		this._balance = value;
		this._mesage = mess;
	}

	/*get balance(){
		return this._balance;
	}
	
	set balance (val: number){
		this._balance = val;
	}*/

	getDeclaration():string{
		return this._mesage + " " + this._balance;
	}

	private reply(element: HTMLElement){
		element.innerHTML = this._mesage;
	}
}

var foo = new Foo(20, "Balance: ");
//foo.balance = 25;
console.log(foo.getDeclaration());