interface simplInte {
	value: number;
}

class Value implements simplInte{
	value: number;
	Value() { };
}

function processData<T>(data: T){

}

var xNum: Value = new Value();
processData<simplInte>(xNum);

