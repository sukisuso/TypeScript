module Templates{


	export interface simplInte {
		value: number;
	}

	export class Value implements simplInte {
		value: number;
		Value() { };
	}

	export function processData<T>(data: T) {

	}
}





var xNum: Templates.Value = new Templates.Value();
Templates.processData<Templates.simplInte>(xNum);

