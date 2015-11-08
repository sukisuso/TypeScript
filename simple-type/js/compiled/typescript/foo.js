var Foo = (function () {
    function Foo(value, mess) {
        this._balance = 0;
        this._mesage = "";
        this._balance = value;
        this._mesage = mess;
    }
    /*get balance(){
        return this._balance;
    }
    
    set balance (val: number){
        this._balance = val;
    }*/
    Foo.prototype.getDeclaration = function () {
        return this._mesage + " " + this._balance;
    };
    Foo.prototype.reply = function (element) {
        element.innerHTML = this._mesage;
    };
    return Foo;
})();
var foo = new Foo(20, "Balance: ");
//foo.balance = 25;
console.log(foo.getDeclaration());
